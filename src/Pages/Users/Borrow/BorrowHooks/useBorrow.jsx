import { useState } from "react";

const useBorrow = () => {
  const borrowFromData = {
    party_name: "",
    debit_amount: 0,

    deposit_amount: 0,
    debit: 0,
    remaining: 0,
  };

  const [borrowState, setBorrowState] = useState([borrowFromData]);
  const addOneBorrow = () => {
    setBorrowState([...borrowState, borrowFromData]);
  };
  const addFiveBorrow = () => {
    setBorrowState([
      ...borrowState,
      borrowFromData,
      borrowFromData,
      borrowFromData,
      borrowFromData,
      borrowFromData,
    ]);
  };

  const handelBorrowOnChange = (e, index) => {
    const dabitCarditHandel = borrowState.map((craditDabit, i) => {
      if (index === i) {
        return Object.assign(craditDabit, { [e.target.name]: e.target.value });
      } else {
        return craditDabit;
      }
    });
    setBorrowState(dabitCarditHandel);
  };

  const handelBorrowOnSubmit = (e) => {
    const handelSalary = Object.assign({}, borrowState);
    console.log(handelSalary);
  };

  return {
    borrowState,
    addOneBorrow,
    addFiveBorrow,
    handelBorrowOnChange,
    handelBorrowOnSubmit,
  };
};

export default useBorrow;
