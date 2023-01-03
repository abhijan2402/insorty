import { useState } from "react";

const useFristFormAdd = () => {
  // ======================== add five in frist form ========================
  const fristFormObj = {
    brandName: "",
    averageRate: {
      650: 0,
      550: 0,
      330: 0,
    },
    startingStock: {
      650: 0,
      550: 0,
      330: 0,
    },
    incomingPurchase: {
      650: 0,
      550: 0,
      330: 0,
    },
    buyRate: {
      a: 0,
      550: 0,
      330: 0,
    },
    incomePurchase: {
      650: 0,
      550: 0,
      330: 0,
    },
    purchaseRate: {
      a: 0,
      550: 0,
      330: 0,
    },

    inflowCredit: {
      650: 0,
      550: 0,
      330: 0,
    },
    sending: {
      650: 0,
      550: 0,
      330: 0,
    },
    sumRemainder: {
      650: 0,
      550: 0,
      330: 0,
    },
    closingStock: {
      650: 0,
      550: 0,
      330: 0,
    },
    sales: {
      650: 0,
      550: 0,
      330: 0,
    },
    mainRate: {
      650: 0,
      550: 0,
      330: 0,
    },
    total: {
      650: 0,
      550: 0,
      330: 0,
    },
    grandTotal: "",
  };

  const [fristFormState, setFristFormState] = useState([fristFormObj]);

  const addFiveInFristFormHandler = () => {
    setFristFormState([
      ...fristFormState,
      fristFormObj,
      fristFormObj,
      fristFormObj,
      fristFormObj,
      fristFormObj,
    ]);
  };

  // ======================== add five in frist form ========================

  // ======================== add One in frist form ========================

  const addOneInFristFormHandler = () => {
    setFristFormState([...fristFormState, fristFormObj]);
  };

  // ======================== add One in frist form ========================

  return {
    addFiveInFristFormHandler,
    addOneInFristFormHandler,
    fristFormState,
  };
};

export default useFristFormAdd;
