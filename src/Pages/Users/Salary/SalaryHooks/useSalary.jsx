import { useState } from "react";

const useSalary = () => {
  const salaryFormValue = {
    salary_monthYear: "",
    salary_price: "",
    payment_date: "",
    payment_price: 0,
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
    const salaryHandel = salaryState.map((Salary, i) => {
      if (index === i) {
        return Object.assign(Salary, { [e.target.name]: e.target.value });
      } else {
        return Salary;
      }
    });
    setSalaryState(salaryHandel);
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
