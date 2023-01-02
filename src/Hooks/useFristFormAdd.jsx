import { useState } from "react";

const useFristFormAdd = () => {
  // ======================== add five in frist form ========================
  const addFiveInFristFormObj = {
    brandName: "",
    averageRate: "",
    startingStock: "",
    incomingPurchase: "",
    buyRate: "",
    incomePurchase: "",
    purchaseRate: "",
    inflowCredit: "",
    sending: "",
    sumRemainder: "",
    closingStock: "",
    sales: "",
    mainRate: "",
    total: "",
    grandTotal: "",
  };

  const [addFiveInFristForm, setAddFiveInFristForm] = useState([
    addFiveInFristFormObj,
  ]);

  const addFiveInFristFormHandler = () => {
    setAddFiveInFristForm([...addFiveInFristForm, addFiveInFristFormObj]);
  };
  // ======================== add five in frist form ========================

  // ======================== add One in frist form ========================
  const addOneInFristFormObj = {
    brandName: "",
    averageRate: "",
    startingStock: "",
    incomingPurchase: "",
    buyRate: "",
    incomePurchase: "",
    purchaseRate: "",
    inflowCredit: "",
    sending: "",
    sumRemainder: "",
    closingStock: "",
    sales: "",
    mainRate: "",
    total: "",
    grandTotal: "",
  };

  const [addOneInFristForm, setAddOneInFristForm] = useState([
    addOneInFristFormObj,
  ]);

  const addOneInFristFormHandler = () => {
    setAddOneInFristForm([...addOneInFristForm, addOneInFristFormObj]);
  };

  // ======================== add One in frist form ========================

  return {
    addFiveInFristForm,
    addFiveInFristFormHandler,
    addOneInFristForm,
    addOneInFristFormHandler,
  };
};

export default useFristFormAdd;
