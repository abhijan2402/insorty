import { useState } from "react";
// borrowCashReturnData

const useCashReciveAdd = () => {
  // const token = localStorage.getItem("token");

  const cashReciveForm = {
    reson: "", //comment
    amount: 0, //cash
  };

  const [cashReciveState, setCashReciveState] = useState([cashReciveForm]);

  const handelAddFiveCashRecive = () => {
    let data = cashReciveState;

    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          reson: "",
          amount: 0,
        },
      ];
    }
    setCashReciveState(data);
  };

  const handelAddOneCashRecive = () => {
    setCashReciveState([
      ...cashReciveState,
      {
        reson: "",
        amount: 0,
      },
    ]);
  };

  //

  const onChangeCashRecive = (e, index) => {
    const cashReciveHandel = cashReciveState.map((returned, i) => {
      if (index === i) {
        return Object.assign(returned, { [e.target.name]: e.target.value });
      } else {
        return returned;
      }
    });
    setCashReciveState(cashReciveHandel);

    localStorage.setItem('paymentRecieved',JSON.stringify(cashReciveState))
    localStorage.setItem('totalPaymentsRecieved', JSON.stringify(cashReciveState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.amount)),
      0
    )))
  };

  // const handelSubmitCashRecive = (e) => {
  //   const handelCashRecive = Object.assign({}, cashReciveState);

  //   const comment = handelCashRecive.map((cashRecive) => {
  //     return cashRecive.reson;
  //   });
  //   const cash = handelCashRecive.map((cashRecive) => {
  //     return cashRecive.amount;
  //   });

  //   const borrowCashReturnData = {
  //     cash: cash,
  //     comment: comment,
  //   };

  //   fetch("https://insorty-api.onrender.com/shop/borrowCashReturnData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       cookie_token: token,
  //     },
  //     body: JSON.stringify(borrowCashReturnData),
  //   });
  // };

  return {
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
    onChangeCashRecive,
    cashReciveState,
    // handelSubmitCashRecive,
  };
};

export default useCashReciveAdd;
