import { useState } from "react";

const useCashReciveAdd = () => {
  const addFiveCashReciveForm = {
    reson: "",
    amount: "",
  };
  const addOneCashReciveForm = {
    reson: "",
    amount: "",
  };

  const [addFiveCashReciveState, setAddFiveCashReciveState] = useState([
    addFiveCashReciveForm,
  ]);

  const [addOneCashReciveState, setAddOneCashReciveState] = useState([
    addOneCashReciveForm,
  ]);

  const handelAddFiveCashRecive = () => {
    setAddFiveCashReciveState([
      ...addFiveCashReciveState,
      addFiveCashReciveForm,
    ]);
  };

  const handelAddOneCashRecive = () => {
    setAddOneCashReciveState([...addOneCashReciveState, addOneCashReciveForm]);
  };

  return {
    addFiveCashReciveState,
    addOneCashReciveState,
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
  };
};

export default useCashReciveAdd;
