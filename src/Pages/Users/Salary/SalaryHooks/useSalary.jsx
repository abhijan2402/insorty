import { useState } from "react";

const useSalary = () => {
  const salaryFormValue = {
    salary_monthYear: "",
    salary_price: "",
    payment_date: "",
    payment_price: "",
    reason: "",
  };
  const [salaryState, setSalaryState] = useState([salaryFormValue]);

  const addOneSalary = () => {
    setSalaryState([...salaryState, salaryFormValue]);
  };

  const addFiveSalary = () => {
    setSalaryState([
      ...salaryState,
      salaryFormValue,
      salaryFormValue,
      salaryFormValue,
      salaryFormValue,
      salaryFormValue,
    ]);
  };

  const handelSelaryOnChange = (e, index) => {
    const dabitCarditHandel = salaryState.map((craditDabit, i) => {
      if (index === i) {
        return Object.assign(craditDabit, { [e.target.name]: e.target.value });
      } else {
        return craditDabit;
      }
    });
    setSalaryState(dabitCarditHandel);
  };

  const handelSalaryOnSubmit = (e) => {
    const handelSalary = Object.assign({}, salaryState);
    console.log(handelSalary);
  };

  return {
    salaryState,
    setSalaryState,
    addOneSalary,
    addFiveSalary,
    handelSelaryOnChange,
    handelSalaryOnSubmit,
  };
};

export default useSalary;
