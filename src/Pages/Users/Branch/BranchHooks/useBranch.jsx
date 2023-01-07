import { useState } from "react";

const useBranch = () => {
  const branchFormData = {
    date: "",
    debit_price: 0,
    debit_cash: 0,

    deposit_price: 0,
    deposit_cash: 0,

    current_debit: 0,
    current_deposit: 0,
  };
  const [branchState, setBranchState] = useState([branchFormData]);

  const addOneBranch = () => {
    setBranchState([...branchState, branchFormData]);
  };

  const addFiveBranch = () => {
    setBranchState([
      ...branchState,
      branchFormData,
      branchFormData,
      branchFormData,
      branchFormData,
      branchFormData,
    ]);
  };

  const handelBranchOnChange = (e, index) => {
    const dabitCarditHandel = branchState.map((craditDabit, i) => {
      if (index === i) {
        return Object.assign(craditDabit, { [e.target.name]: e.target.value });
      } else {
        return craditDabit;
      }
    });
    setBranchState(dabitCarditHandel);
  };

  const handelBranchSubmit = (e) => {
    const handelSalary = Object.assign({}, branchState);
    console.log(handelSalary);
  };

  return {
    branchState,
    addOneBranch,
    addFiveBranch,
    handelBranchOnChange,
    handelBranchSubmit,
  };
};

export default useBranch;
