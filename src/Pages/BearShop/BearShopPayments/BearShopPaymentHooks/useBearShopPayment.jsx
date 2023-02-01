import { useState } from "react";

const usePayment = () => {
  const paymentData = {
    debit_amount: 0,
    debit_month: "",

    deposit_amount: 0,
    deposit_date: "",

    current_balance_debit: 0,
    description: "",
  };
  const [paymentState, setPaymentState] = useState([paymentData]);

  const addFivePayment = () => {
    let data = paymentState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          debit_amount: 0,
          credit_month: "",

          deposit_amount: 0,
          deposit_date: "",

          current_balance_debit: 0,
          description: "",
        },
      ];
    }
    setPaymentState(data);
  };

  const addOnePayment = () => {
    setPaymentState([
      ...paymentState,
      {
        debit_amount: 0,
        credit_month: "",

        deposit_amount: 0,
        deposit_date: "",

        current_balance_debit: 0,
        description: "",
      },
    ]);
  };

  const handelOnChangePayment = (e, index) => {
    const paymentHandel = paymentState.map((payment, i) => {
      if (index === i) {
        return Object.assign(payment, { [e.target.name]: e.target.value });
      } else {
        return payment;
      }
    });
    setPaymentState(paymentHandel);
  };

  const handelOnSubmitPayment = (e) => {
    const handelPayment = Object.assign({}, paymentState);
    console.log(handelPayment);
  };

  return {
    paymentState,
    addFivePayment,
    addOnePayment,
    handelOnChangePayment,
    handelOnSubmitPayment,
  };
};

export default usePayment;
