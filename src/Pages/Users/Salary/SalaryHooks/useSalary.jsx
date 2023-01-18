import { useState } from "react";
import Swal from "sweetalert2";

const useSalary = () => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);

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

  const handelSalaryOnSubmit = async () => {
    const handelSalary = salaryState;
    const salaryData = [];

    /*
     "salary": {
                "month": 2,
                "price": 24000
            },
            "payment": {
                "month": 2,
                "price": 12000
            },
            "comment": "15 din moj maari ladke ne."

    */

    for (let index = 0; index < handelSalary.length; index++) {
      const element = handelSalary[index];

      salaryData.push({
        salary: {
          month: parseInt(element.salary_monthYear),
          price: parseInt(element.salary_price),
        },
        payment: {
          month: parseInt(element.payment_date),
          price: parseInt(element.payment_price),
        },
        comments: element.reason,
      });
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://insorty-api.onrender.com/shop/addEmployeeSalaryData",
        {
          method: "POST",
          body: JSON.stringify({ salaryData }),
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await response.json();
      if (data.success === true) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });
        console.log(data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    salaryState,
    isLoading,
    setSalaryState,
    addOneSalary,
    addFiveSalary,
    handelSelaryOnChange,
    handelSalaryOnSubmit,
  };
};

export default useSalary;
