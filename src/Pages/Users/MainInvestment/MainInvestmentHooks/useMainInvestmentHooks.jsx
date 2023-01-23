import { useState } from "react";

const useMainInvestmentHooks = () => {
  const toDate = new Date();

  // const mainInvestmentForm = {
  const mainInvevstmentData = {
    brandName: "",
    theDate: toDate,
    price: 0,
  };

  const [mainInvestmentState, setMainInvestmentState] = useState([
  //   mainInvestmentForm,
  // ]);
    mainInvevstmentData,
  ]);
  const [refundDetailsState, setRefundDetailsState] = useState([]);
  const [resurvedDataState, setResurvedDataState] = useState([]);

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

  const handelOnChangeRefundDetails = (e, index) => {
    setRefundDetailsState({
      ...refundDetailsState,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmitRefundDetails = (e) => {
    const handelRefundDetails = refundDetailsState;
    console.log(handelRefundDetails);
  };

  const handelOnChangeResurved = (e, index) => {
    setResurvedDataState({
      ...resurvedDataState,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmitResurved = (e) => {
    const handelResurved = resurvedDataState;
    console.log(handelResurved);
  };

  return {
    addOneMainInvestment,
    mainInvestmentState,
    handelOnChangeMainInvestment,
    handelOnSubmitMainInvestment,
    setMainInvestmentState,
    refundDetailsState,
    handelOnChangeRefundDetails,
    handelSubmitRefundDetails,
    handelSubmitResurved,
    handelOnChangeResurved,
    resurvedDataState,
  };
};

export default useMainInvestmentHooks;
