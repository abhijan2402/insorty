import { useState } from "react";
import jwtDecode from "jwt-decode";

const useSalary = () => {
  const token = localStorage.getItem("cookie_token");
  const salaryFormValue = {
    salary_monthYear: "",
    salary_price: "",
    payment_date: "",
    payment_price: 0,
    reason: "",
  };
  const [salaryState, setSalaryState] = useState([salaryFormValue]);

  const addOneSalary = () => {
    setSalaryState([
      ...salaryState,
      {
        salary_monthYear: "",
        salary_price: "",
        payment_date: "",
        payment_price: 0,
        reason: "",
      },
    ]);
  };

  const addFiveSalary = () => {
    let data = salaryState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          salary_monthYear: "",
          salary_price: "",
          payment_date: "",
          payment_price: 0,
          reason: "",
        },
      ];
    }
    setSalaryState(data);
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
    const salary_monthYear = handelSalary.salary_monthYear;
    const salary_price = handelSalary.salary_price;
    const payment_date = handelSalary.payment_date;
    const payment_price = handelSalary.payment_price;
    const reason = handelSalary.reason;
    // post the data in the database

    const salaryData = [
      {
        salary: {
          month: salary_monthYear,
          price: salary_price,
        },
        payment: {
          date: payment_date,
          price: payment_price,
        },
        comments: reason,
      },
    ];

    fetch("https://insorty-api.onrender.com/shop/empSalaryData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(salaryData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
