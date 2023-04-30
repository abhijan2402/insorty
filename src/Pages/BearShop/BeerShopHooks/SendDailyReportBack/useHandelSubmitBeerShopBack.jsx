import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { DataContextApi } from "../../../../Context/DataContext";

const useHandelSubmitBeerShopBack = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);
  const { salesMan, drDate } = useContext(DataContextApi);

  const purchases = JSON.parse(localStorage.getItem("purchases")); //1st
  const bhejan = JSON.parse(localStorage.getItem("bhejan")); //2nd
  const expenses = JSON.parse(localStorage.getItem("expenses")); //3rd
  const credit = JSON.parse(localStorage.getItem("credit")); //4th
  const paymentRecieved = JSON.parse(localStorage.getItem("paymentRecieved")); //5th
  const vegitableAndOther = JSON.parse(
    localStorage.getItem("vegitableAndOther")
  ); //6th
  const barCommission = JSON.parse(localStorage.getItem("barCommission")); //7th

  const purchasesData = [];
  for (let index = 0; index < purchases.length; index++) {
    const element = purchases[index];
    purchasesData.push({
      liquor:
        element.size &&
        element.size.sizes.find((elem) => elem.quantityInML === 650)?._id,
      party: element.partyId,
      number: element.theNumber,
      ml: element.quantity,
      rate: element.rate,
      total: element.total,
      comment: element.reason ? element.reason : "",
    });
  }

  const bhejanData = [];
  for (let index = 0; index < bhejan.length; index++) {
    const element = bhejan[index];
    bhejanData.push({
      liquor:
        element.size &&
        element.size.sizes.find((elem) => elem.quantityInML === 650)?._id,
      party: element.partyId,
      number: element.theNumber,
      comment: element.reason ? element.reason : "",
    });
  }
  const expensesData = [];
  for (let index = 0; index < expenses.length; index++) {
    const element = expenses[index];
    expensesData.push({
      amount: element.amount,
      description: element.desc,
      type: element.type,
    });
  }

  const creditData = [];
  for (let index = 0; index < credit.length; index++) {
    const element = credit[index];
    creditData.push({
      type: element.partyType,
      from: element.partyName,
      amount: element.amount,
      comment: element.note,
    });
  }

  const paymentRecievedData = [];
  for (let index = 0; index < paymentRecieved.length; index++) {
    const element = paymentRecieved[index];
    paymentRecievedData.push({
      cash: element.amount,
      type: element.type,
      from: element.name,
    });
  }

  const vegitableAndOtherData = [];
  for (let index = 0; index < vegitableAndOther.length; index++) {
    const element = vegitableAndOther[index];
    vegitableAndOtherData.push({
      date: element.theDate,
      price: element.price,
      description: element.details,
    });
  }

  const barCommissionData = [];
  for (let index = 0; index < barCommission.length; index++) {
    const element = barCommission[index];
    barCommissionData.push({
      liquor:
        element.size &&
        element.size.sizes.find((elem) => elem.quantityInML === 650)?._id,
      quantity: element.quantity,
      amount: element.amount,
      comment: element.comment,
    });
  }

  const handelSubmit = () => {
    setIsLoading(true);
    if (salesMan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter Salesman",
      });
    } else {
      try {
        const api1 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseOutsideData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: [...purchasesData],
            }),
          }
        );

        const api2 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseBorrowData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: [...bhejanData],
            }),
          }
        );

        const api3 = fetch(
          "https://insorty-api.onrender.com/shop/addTotalExpensesData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: [...expensesData],
            }),
          }
        );

        const api4 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: [...creditData],
            }),
          }
        );

        const api5 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedCashReturnData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: [...paymentRecievedData],
            }),
          }
        );

        const api6 = fetch(
          "https://insorty-api.onrender.com/shop/addFoodVegetableData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: [...vegitableAndOtherData],
            }),
          }
        );

        const api7 = fetch(
          "https://insorty-api.onrender.com/shop/addBarCommissionData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: [...barCommissionData],
            }),
          }
        );

        const api8 = fetch(
          "https://insorty-api.onrender.com/shop/addFinalReportData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "BAR",

              englishBar: 500,
              beerBar: 500,
              barSupplements: 500,
              extraThings: 500,

              english: 500,
              beer: 500,
              RML: 500,
              totalSell: 500,
              borrowedCashReturn: 500,
              intoAccount: 500,
              borrowed: 500,
              commission: 500,
              previousDues: 500,
              todaysPayment: 500,
              restAmount: 500,
            }),
          }
        );

        Promise.all([api1, api2, api3, api4, api5, api6, api7, api8])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            if (
              data[0].success === true &&
              data[1].success === true &&
              data[2].success === true &&
              data[3].success === true &&
              data[4].success === true &&
              data[5].success === true &&
              data[6].success === true &&
              data[7].success === true
            ) {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Data Saved Successfully",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    handelSubmit,
    isLoadingSubmit,
  };
};

export default useHandelSubmitBeerShopBack;
