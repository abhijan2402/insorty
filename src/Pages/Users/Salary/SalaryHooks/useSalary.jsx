import { useState } from "react";

const useSalary = () => {
  const [isLoading, setIsLoading] = useState(false);

  const salaryFormValue = {
    salary_monthYear: "",
    salary_price: 0,
    payment_date: "",
    payment_price: 0,
    reason: "",
  };
  const [salaryState, setSalaryState] = useState([salaryFormValue]);

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

  return {
    salaryState,
    isLoading,
    setSalaryState,
    handelSelaryOnChange,
    setIsLoading,
  };
};

export default useSalary;
