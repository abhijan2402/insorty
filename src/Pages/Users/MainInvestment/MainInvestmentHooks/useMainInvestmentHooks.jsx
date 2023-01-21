import { useState } from "react";

const useMainInvestmentHooks = () => {
  const toDate = new Date();

  const mainInvestmentForm = {
    brandName: "",
    theDate: toDate,
    price: 0,
  };

  const [mainInvestmentState, setMainInvestmentState] = useState([
    mainInvestmentForm,
  ]);
  const addOneMainInvestment = () => {
    setMainInvestmentState([
      ...mainInvestmentState,
      {
        brandName: "",
        theDate: toDate,
        price: 0,
      },
    ]);
  };

  const handelOnChangeMainInvestment = (e, index) => {
    const handelOnChange = mainInvestmentState.map((mainInvastment, i) => {
      if (index === i) {
        return Object.assign(mainInvastment, {
          [e.target.name]: e.target.value,
        });
      } else {
        return mainInvastment;
      }
    });
    setMainInvestmentState(handelOnChange);
  };

  const handelOnSubmitMainInvestment = (e) => {
    const handelMainInvestment = mainInvestmentState;
    console.log(handelMainInvestment);
  };

  return {
    addOneMainInvestment,
    mainInvestmentState,
    handelOnChangeMainInvestment,
    handelOnSubmitMainInvestment,
    setMainInvestmentState,
  };
};

export default useMainInvestmentHooks;
