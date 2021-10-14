import { add } from "date-fns";
import React from "react";
import { UserSubscription } from "../../../../api/types";
import { BuyButtonProps } from "../../../../subscribe/react/utils/utils";

type Props = {
  subscription: UserSubscription;
  closeModal: () => void;
};

import PurchaseModal from "../../../../../PurchaseModal";
import Summary from "./Summary";
import RenewButton from "./RenewButton";

const RenewalModal = ({ subscription, closeModal }: Props) => {
  const termsLabel = (
    <>
      I agree to the{" "}
      <a
        href="/legal/ubuntu-advantage-service-terms"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ubuntu Advantage service terms
      </a>
    </>
  );

  const RenewalSummary = () => {
    return (
      <Summary
        productName={subscription.product_name}
        quantity={subscription.number_of_machines}
        startDate={add(new Date(subscription.start_date), { years: 1 })}
        endDate={add(new Date(subscription.start_date), { years: 2 })}
        total={subscription.price}
      />
    );
  };

  const BuyButton = ({
    areTermsChecked,
    setTermsChecked,
    setError,
    setStep,
    isUsingFreeTrial,
  }: BuyButtonProps) => {
    return (
      <RenewButton
        renewalID={subscription.renewal_id}
        areTermsChecked={areTermsChecked}
        setTermsChecked={setTermsChecked}
        setError={setError}
        setStep={setStep}
        isUsingFreeTrial={isUsingFreeTrial}
      />
    );
  };

  return (
    <div
      className="p-modal p-modal--ua-payment is-details-mode"
      id="purchase-modal"
    >
      <div
        id="react-root"
        className="p-modal__dialog"
        role="dialog"
        aria-labelledby="modal-title"
      >
        <PurchaseModal
          accountId={subscription.account_id}
          termsLabel={termsLabel}
          quantity={subscription.number_of_machines}
          closeModal={closeModal}
          Summary={RenewalSummary}
          BuyButton={BuyButton}
          modalTitle={`Renew ${subscription.product_name}`}
        />
      </div>
    </div>
  );
};

export default RenewalModal;
