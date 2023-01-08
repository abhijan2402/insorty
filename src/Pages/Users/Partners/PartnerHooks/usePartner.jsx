import { useState } from "react";

const usePartner = () => {
  const partnerFormData = {
    partnerName: "",
    debit: 0,
    deposit: "",
    remaining_debit: 0,
    remaining: 0,
  };
  const [partnerState, setPartnerState] = useState([partnerFormData]);

  const addOnePartner = () => {
    setPartnerState([
      ...partnerState,
      {
        partnerName: "",
        debit: 0,
        deposit: "",
        remaining_debit: 0,
        remaining: 0,
      },
    ]);
  };

  const addFivePartner = () => {
    let data = partnerState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          partnerName: "",
          debit: 0,
          deposit: "",
          remaining_debit: 0,
          remaining: 0,
        },
      ];
    }
    setPartnerState(data);
  };

  const handelOnChangePartner = (e, index) => {
    const partnerHandel = partnerState.map((Partner, i) => {
      if (index === i) {
        return Object.assign(Partner, { [e.target.name]: e.target.value });
      } else {
        return Partner;
      }
    });
    setPartnerState(partnerHandel);
  };

  const handelOnSubmitPartner = (e) => {
    const handelPartner = Object.assign({}, partnerState);
    console.log(handelPartner);
  };

  return {
    partnerState,
    addOnePartner,
    addFivePartner,
    handelOnChangePartner,
    handelOnSubmitPartner,
  };
};

export default usePartner;
