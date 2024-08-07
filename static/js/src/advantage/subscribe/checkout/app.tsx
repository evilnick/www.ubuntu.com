import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { UserSubscriptionMarketplace } from "advantage/api/enum";
import Checkout from "./components/Checkout";
import { Action, Coupon, CheckoutProducts, LoginSession } from "./utils/types";

const oneHour = 1000 * 60 * 60;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: oneHour,
      retryOnMount: false,
    },
  },
});

Sentry.init({
  dsn: "https://0293bb7fc3104e56bafd2422e155790c@sentry.is.canonical.com//13",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["ubuntu.com"],
    }),
  ],
  allowUrls: ["ubuntu.com"],
  tracesSampleRate: 1.0,
});

declare global {
  interface Window {
    accountId?: string;
    stripePublishableKey?: string;
    loginSession?: LoginSession;
    marketplace: UserSubscriptionMarketplace;
    canTrial?: boolean;
    currentPaymentId: string;
    invoiceId: string;
    captcha: string | null;
    previousPurchaseIds?: { monthly: string; yearly: string };
    GAFriendlyProduct?: {
      id: string;
      name: string;
      price: number;
      quantity: number;
    };
  }
}

const checkoutData = localStorage.getItem("shop-checkout-data") || "";
const parsedCheckoutData = JSON.parse(checkoutData);
const stripePromise = loadStripe(window.stripePublishableKey || "");
const parsedCheckoutProducts: CheckoutProducts[] = parsedCheckoutData?.products;

const products = parsedCheckoutProducts.map((product) => {
  return {
    product: product?.product,
    quantity: product?.quantity,
  };
});

const action: Action = parsedCheckoutData?.action;
const coupon: Coupon = parsedCheckoutData?.coupon || undefined;
const marketplace = products[0].product.marketplace;

window.marketplace = marketplace;
window.canTrial = undefined;
window.currentPaymentId = "";
window.accountId = "";
window.captcha = null;

if (
  marketplace !== UserSubscriptionMarketplace.CanonicalProChannel &&
  products?.length === 1
) {
  window.previousPurchaseIds = {
    monthly: "",
    yearly: "",
  };

  const product = products[0].product;
  const quantity = products[0].quantity;

  window.GAFriendlyProduct = {
    id: product?.id,
    name: product?.name,
    price: (product?.price?.value ?? 0) / 100,
    quantity: quantity,
  };
}

const App = () => {
  return (
    <Sentry.ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Elements stripe={stripePromise}>
          <Checkout products={products} action={action} coupon={coupon} />
        </Elements>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById("shop-checkout-app"));
