import { useState } from "react";

const useCashReciveAdd = () => {
  const cashReciveForm = {
    reson: "",
    amount: 0,
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

  const onChangeCashRecive = (e, index) => {
    const cashReciveHandel = cashReciveState.map((returned, i) => {
      if (index === i) {
        return Object.assign(returned, { [e.target.name]: e.target.value });
      } else {
        return returned;
      }
    });
    setCashReciveState(cashReciveHandel);
  };

  const handelSubmitCashRecive = (e) => {
    const handelCashRecive = Object.assign({}, cashReciveState);
    console.log(handelCashRecive);
  };

  return {
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
    onChangeCashRecive,
    cashReciveState,
    handelSubmitCashRecive,
  };
};

export default useCashReciveAdd;
