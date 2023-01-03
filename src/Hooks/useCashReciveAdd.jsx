import { useState } from "react";

const useCashReciveAdd = () => {
  const cashReciveForm = {
    reson: "",
    amount: "",
  };

  const [cashReciveState, setCashReciveState] = useState([cashReciveForm]);

  const handelAddFiveCashRecive = () => {
    setCashReciveState([
      ...cashReciveState,
      cashReciveForm,
      cashReciveForm,
      cashReciveForm,
      cashReciveForm,
      cashReciveForm,
    ]);
  };

  const handelAddOneCashRecive = () => {
    setCashReciveState([...cashReciveState, cashReciveForm]);
  };

  return {
    cashReciveState,
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
  };
};

export default useCashReciveAdd;
