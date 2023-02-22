import { useState, useEffect } from "react";

const useCashReciveAdd = () => {
  const cashReciveForm = {
    name: '',
    id: '',
    amount: 0,
    type: "PARTY",
    comment:""
  };

  const [cashReciveState, setCashReciveState] = useState([cashReciveForm]);

  const prevdata = JSON.parse(localStorage.getItem("paymentRecieved"));

  useEffect(() => {
    if (prevdata) {
      setCashReciveState(prevdata);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelAddFiveCashRecive = () => {
    let data = cashReciveState;

    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          name:'',
          id:'',
          amount: 0,
          type:"PARTY",
          comment:""
        },
      ];
    }
    setCashReciveState(data);
  };

  const handelAddOneCashRecive = () => {
    setCashReciveState([
      ...cashReciveState,
      {
        name: '',
        id: '',
        amount: 0,
        type: "PARTY",
        comment:""
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

    localStorage.setItem("paymentRecieved", JSON.stringify(cashReciveState));
    localStorage.setItem(
      "totalPaymentsRecieved",
      JSON.stringify(
        cashReciveState.reduce(
          (total, currentItem) => (total = total + Number(currentItem.amount)),
          0
        )
      )
    );
  };

  const handleRemoveFieldsCashBack = index => {
    const values = [...cashReciveState];
    values.splice(index, 1);
    console.log(index)
    setCashReciveState(values);
  };

  return {
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
    onChangeCashRecive,
    cashReciveState,
    handleRemoveFieldsCashBack
  };
};

export default useCashReciveAdd;
