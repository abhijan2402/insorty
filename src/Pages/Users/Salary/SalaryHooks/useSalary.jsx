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
  //

  // const handelSalaryOnSubmit = async (e) => {
  //   const handelSalary = salaryState;
  //   const salary_monthYear = handelSalary.map(
  //     (salary) => salary.salary_monthYear
  //   );
  //   const salary_price = handelSalary.map((salary) => salary.salary_price);
  //   const payment_date = handelSalary.map((salary) => salary.payment_date);
  //   const payment_price = handelSalary.map((salary) => salary.payment_price);
  //   const reason = handelSalary.map((salary) => salary.reason);

  //   const salaryData = [
  //     {
  //       salary: {
  //         month: parseInt(salary_monthYear?.[0]),
  //         price: parseInt(salary_price?.[0]),
  //       },
  //       payment: {
  //         date: parseInt(payment_date?.[0]),
  //         price: parseInt(payment_price?.[0]),
  //       },
  //       comments: reason?.[0],
  //     },
  //   ];
  //   try {
  //     const fetchResponse = await fetch(
  //       "https://insorty-api.onrender.com/shop/empSalaryData",
  //       {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //           cookie_token: token,
  //         },
  //         body: JSON.stringify(salaryData),
  //       }
  //     );
  //     const data = await fetchResponse.json();
  //     console.log(data);
  //     return data;
  //   } catch (e) {
  //     return e;
  //   }

  //   // post data in the database with cookies and jwt token with axios

  //   // fetch("https://insorty-api.onrender.com/shop/empSalaryData", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     cookie_token: token,
  //   //   },
  //   //   body: JSON.stringify(salaryData),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     const message = data.message;
  //   //     if (data.success === true) {
  //   //       Swal.fire({
  //   //         icon: "success",
  //   //         title: "Success",
  //   //         text: "Salary added successfully",
  //   //       });
  //   //     } else {
  //   //       Swal.fire({
  //   //         icon: "error",
  //   //         title: "Oops...",
  //   //         text: message,
  //   //       });
  //   //     }
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //     const message = err.response.data.message;
  //   //     Swal.fire({
  //   //       icon: "error",
  //   //       title: "Oops...",
  //   //       text: message,
  //   //     });
  //   //   });
  // };

  const handelSalaryOnSubmit = async () => {
    const handelSalary = salaryState;
    const salaryData = [];

    for (let index = 0; index < handelSalary.length; index++) {
      const element = handelSalary[index];
      salaryData.push({
        salary: {
          month: parseInt(element.salary_monthYear),
          price: parseInt(element.salary_price),
        },
        payment: {
          date: parseInt(element.payment_date),
          price: parseInt(element.payment_price),
        },
        comments: element.reason,
      });
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://insorty-api.onrender.com/shop/empSalaryData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ salaryData }),
        }
      );
      const data = await response.json();
      if (data.success === true) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Salary added successfully",
        });
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
