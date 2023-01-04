import { useState } from "react";

const useFristFormAdd = () => {
  // ======================== add five in frist form ========================
  const fristFormObj = {
    brandName: "",

    averageRate650: 0,
    averageRate550: 0,
    averageRate330: 0,

    startingStock650: 0,
    startingStock550: 0,
    startingStock330: 0,

    incomingPurchase650: 0,
    incomingPurchase550: 0,
    incomingPurchase330: 0,

    buyRate650: 0,
    buyRate550: 0,
    buyRate330: 0,

    incomePurchase650: 0,
    incomePurchase550: 0,
    incomePurchase330: 0,

    purchaseRate650: 0,
    purchaseRate550: 0,
    purchaseRate330: 0,

    inflowCredit650: 0,
    inflowCredit550: 0,
    inflowCredit330: 0,

    sending650: 0,
    sending550: 0,
    sending330: 0,

    sumRemainder650: 0,
    sumRemainder550: 0,
    sumRemainder330: 0,

    closingStock650: 0,
    closingStock550: 0,
    closingStock330: 0,

    sales650: 0,
    sales550: 0,
    sales330: 0,

    mainRate650: 0,
    mainRate550: 0,
    mainRate330: 0,

    total: 0,

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

  // ======================== onChange  ========================

  const onChangeFristBackFormHandler = (e, index) => {
    const firstFormHandel = fristFormState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setFristFormState(firstFormHandel);
  };

  const handelSubmitFristFormBack = (e) => {
    const addFristForm = Object.assign({}, fristFormState);
    console.log(addFristForm);
  };

  

  // ======================== onChange  ========================

  return {
    addFiveInFristFormHandler,
    addOneInFristFormHandler,
    fristFormState,
    handelSubmitFristFormBack,
    onChangeFristBackFormHandler,
  };
};

export default useFristFormAdd;
