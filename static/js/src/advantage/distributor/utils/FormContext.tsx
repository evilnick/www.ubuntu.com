import React, { createContext, useEffect, useState } from "react";
import {
  ChannelProduct,
  DistributorProductTypes as ProductTypes,
  Support,
  SLA,
  Durations,
  SubscriptionItem,
  Currencies,
  getProductId,
  ValidProductID,
  getPreSelectedItem,
  getPreCurrency,
  getPreDuration,
  TechincalUserContact,
} from "./utils";
import { Offer } from "advantage/offers/types";

interface FormContext {
  productType: ProductTypes;
  setProductType: React.Dispatch<React.SetStateAction<ProductTypes>>;
  subscriptionList: SubscriptionItem[];
  setSubscriptionList: React.Dispatch<React.SetStateAction<SubscriptionItem[]>>;
  duration: Durations;
  setDuration: React.Dispatch<React.SetStateAction<Durations>>;
  currency: Currencies;
  setCurrency: React.Dispatch<React.SetStateAction<Currencies>>;
  techincalUserContact: TechincalUserContact;
  setTechnicalUserContact: React.Dispatch<
    React.SetStateAction<TechincalUserContact>
  >;
  products: ChannelProduct[] | null;
  offer: Offer | null;
  setOffer: React.Dispatch<React.SetStateAction<Offer | null>>;
}

export const defaultValues: FormContext = {
  productType: ProductTypes.physical,
  setProductType: () => {},
  subscriptionList: [],
  setSubscriptionList: () => {},
  duration: Durations.one,
  setDuration: () => {},
  currency: Currencies.usd,
  setCurrency: () => {},
  products: null,
  offer: null,
  techincalUserContact: {
    name: "",
    email: "",
  },
  setTechnicalUserContact: () => {},
  setOffer: () => {},
};

export const FormContext = createContext<FormContext>(defaultValues);

interface FormProviderProps {
  initialSubscriptionList?: SubscriptionItem[];
  initialType?: ProductTypes;
  initialDuration?: Durations;
  initialCurrency?: Currencies;
  initialOffer?: Offer;
  initialTechnicalUserContact?: TechincalUserContact;
  children: React.ReactNode;
}

export const FormProvider = ({
  initialSubscriptionList = defaultValues.subscriptionList,
  initialType = defaultValues.productType,
  initialDuration = defaultValues.duration,
  initialCurrency = defaultValues.currency,
  initialTechnicalUserContact = defaultValues.techincalUserContact,
  children,
}: FormProviderProps) => {
  const localSubscriptionList = localStorage.getItem(
    "distributor-selector-subscriptionList"
  );
  const localProductType = localStorage.getItem(
    "distributor-selector-productType"
  );
  const localDuration = localStorage.getItem("distributor-selector-duration");
  const localCurrency = localStorage.getItem("distributor-selector-currency");
  const localTechnicalUserContact = localStorage.getItem(
    "distributor-selector-techincalUserContact"
  );
  const localOffer = localStorage.getItem("channel-offer-data");

  const [subscriptionList, setSubscriptionList] = useState<SubscriptionItem[]>(
    localSubscriptionList
      ? JSON.parse(localSubscriptionList)
      : initialSubscriptionList
  );
  const [productType, setProductType] = useState<ProductTypes>(
    localProductType ? JSON.parse(localProductType) : initialType
  );
  const [duration, setDuration] = useState<Durations>(
    localDuration ? JSON.parse(localDuration) : initialDuration
  );
  const [
    techincalUserContact,
    setTechnicalUserContact,
  ] = useState<TechincalUserContact>(
    localTechnicalUserContact
      ? JSON.parse(localTechnicalUserContact)
      : initialTechnicalUserContact
  );
  const [currency, setCurrency] = useState<Currencies>(
    localCurrency ? JSON.parse(localCurrency) : initialCurrency
  );
  const [products, setProducts] = useState<ChannelProduct[] | null>(null);
  const [offer, setOffer] = useState<Offer | null>(
    localOffer ? JSON.parse(localOffer) : null
  );

  useEffect(() => {
    const productIds: ValidProductID[] = subscriptionList.map((subscription) =>
      getProductId(
        subscription.type as ProductTypes,
        subscription.support as Support,
        subscription.sla as SLA
      )
    );
    const validproducts: string[] = productIds.map(
      (productId: ValidProductID) => {
        return `${productId}-${duration}y-channel-${currency}`;
      }
    );
    setProducts(
      validproducts?.map((validproduct) => {
        return window.channelProductList[validproduct];
      })
    );
  }, [duration, currency, subscriptionList]);

  useEffect(() => {
    const items = offer?.items ?? [];
    if (subscriptionList?.length === 0 && items.length > 0) {
      const preSetItem = getPreSelectedItem(items);
      preSetItem?.length > 0 &&
        setSubscriptionList(preSetItem as SubscriptionItem[]);
      localStorage.setItem(
        "distributor-selector-subscriptionList",
        JSON.stringify(preSetItem as SubscriptionItem[])
      );

      const preSetCurrency = getPreCurrency(items);
      preSetCurrency?.length > 0 && setCurrency(preSetCurrency as Currencies);
      localStorage.setItem(
        "distributor-selector-currency",
        JSON.stringify(preSetCurrency as Currencies)
      );

      const preSetDration = getPreDuration(items);
      preSetDration && setDuration(preSetDration as Durations);
      localStorage.setItem(
        "distributor-selector-duration",
        JSON.stringify(preSetDration as Durations)
      );
    }
  }, [offer]);

  useEffect(() => {
    if (!localTechnicalUserContact) {
      setTechnicalUserContact({
        name: offer?.technical_contact_name,
        email: offer?.technical_contact_email,
      } as TechincalUserContact);
    }
  }, [offer]);

  return (
    <FormContext.Provider
      value={{
        subscriptionList,
        setSubscriptionList,
        productType,
        setProductType,
        duration,
        setDuration,
        currency,
        setCurrency,
        products,
        offer,
        setOffer,
        techincalUserContact,
        setTechnicalUserContact,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
