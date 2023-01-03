import { useState } from "react";

const useRmlAdd = () => {
  const addRmlForm = {
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

  const [addRmlState, setAddRmlState] = useState([addRmlForm]);

  const handelAddFiveInRml = () => {
    setAddRmlState([
      ...addRmlState,
      addRmlForm,
      addRmlForm,
      addRmlForm,
      addRmlForm,
      addRmlForm,
    ]);
  };

  const handelAddOneInRml = () => {
    setAddRmlState([...addRmlState, addRmlForm]);
  };

  return {
    addRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
  };
};

export default useRmlAdd;
