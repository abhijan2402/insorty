import { useState } from "react";

const useRmlAdd = () => {

  const addFiveFormInRml = {
    brandName: "",
    averageRate: "",
    openingStock: "",
    incomingPurchase: "",
    incomePurchase: "",
    inflowCredit: "",
    sending: "",
    sumRemainder: "",
    sales: "",
    rate: "",
    cost: "",
  };

  const addOneFormInRml = {
    brandName: "",
    averageRate: "",
    openingStock: "",
    incomingPurchase: "",
    incomePurchase: "",
    inflowCredit: "",
    sending: "",
    sumRemainder: "",
    sales: "",
    rate: "",
    cost: "",
  };
  

  const [addFiveInRmlState, setAddFiveInRmlState] = useState([
    addFiveFormInRml,
  ]);
  const [addOneInRmlState, setAddOneInRmlState] = useState([addOneFormInRml]);

  const handelAddFiveInRml = () => {
    setAddFiveInRmlState([...addFiveInRmlState, addFiveFormInRml]);
  };

  const handelAddOneInRml = () => {
    setAddOneInRmlState([...addOneInRmlState, addOneFormInRml]);
  };

  return {
    addFiveInRmlState,
    addOneInRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
  };
};

export default useRmlAdd;
