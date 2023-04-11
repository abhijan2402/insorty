import { useState } from "react";

const useSalary = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [salaryState, setSalaryState] = useState({
    salary_monthYear: "",
    salary_price: 0,
    payment_date: "",
    payment_price: 0,
    reason: "",
  });

  const handelSelaryOnChange = (event) => {
    setSalaryState({
      ...salaryState,
      [event.target.name]: event.target.value,
    });
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
