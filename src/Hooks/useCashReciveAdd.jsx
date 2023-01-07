import { useState } from "react";

const useCashReciveAdd = () => {
  const cashReciveForm = {
    reson: "",
    amount: 0,
  };

  const [cashReciveState, setCashReciveState] = useState([cashReciveForm]);

  const handelAddFiveCashRecive = () => {
    let data = cashReciveState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        reson: "",
        amount: 0,
      }]

    }
    setCashReciveState(data)
  };

  const handelAddOneCashRecive = () => {
    setCashReciveState([...cashReciveState,{
      reson: "",
      amount: 0,
    }]);
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
