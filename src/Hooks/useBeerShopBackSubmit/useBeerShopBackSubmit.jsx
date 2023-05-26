import { useContext, useState } from "react";
import { DataContextApi } from "../../Context/DataContext";
import useLiquors from "../useLiquors";
import Swal from "sweetalert2";

const useBeerShopBackSubmit = (shoType) => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);
  const { salesMan, drDate } = useContext(DataContextApi);
  const { paidDues, setPaidDues } = useContext(DataContextApi);
  const { intoAccountState, setintoAccountState } = useContext(DataContextApi);
  const udhaariTotal = localStorage.getItem("udhaariTotal")
  ? JSON.parse(localStorage.getItem("udhaariTotal"))
  : null;
const commisionTotal = JSON.parse(localStorage.getItem("commisionTotal"));
const pichla = JSON.parse(localStorage.getItem("pichlaBakaya"));



  const purchases = JSON.parse(localStorage.getItem("purchases")); //1st
  const bhejan = JSON.parse(localStorage.getItem("bhejan")); //2nd
  const expenses = JSON.parse(localStorage.getItem("expenses")); //3rd
  const credit = JSON.parse(localStorage.getItem("credit")); //4th
  const paymentRecieved = JSON.parse(localStorage.getItem("paymentRecieved")); //5th
  const vegitableAndOther = JSON.parse(
    localStorage.getItem("vegitableAndOther")
  ); //6th
  const barCommission = JSON.parse(localStorage.getItem("barCommission")); //7th


  const beerSecond = JSON.parse(localStorage.getItem("beerFormTotal"));
  const pegTotal = JSON.parse(localStorage.getItem("pegFormTotal"))
  const smallPegTotal = JSON.parse(localStorage.getItem("smallPegFormTotal"))
  const barSuplementsTotal = JSON.parse(localStorage.getItem("barSuplementsTotal"))
  const vegitableAndOtherTotal = JSON.parse(localStorage.getItem("vegitableAndOtherTotal"))
  const beerFirst = JSON.parse(localStorage.getItem("totalFirstBack"))

  const purchasesData = [];
  for (let index = 0; purchases ? index < purchases.length : 0; index++) {
    const element = purchases[index];
    purchasesData.push({
      liquor:
        element.size &&
        element.size.sizes.find((elem) => elem.quantityInML === element.quantity)?._id,
      party: element.partyId,
      number: element.theNumber,
      ml: element.quantity,
      rate: element.rate,
      total: element.total,
      comment: element.reason ? element.reason : "",
    });
  }

  const bhejanData = [];
  for (let index = 0; bhejan ? index < bhejan.length : 0; index++) {
    const element = bhejan[index];
    bhejanData.push({
      liquor:
        element.size &&
        element.size.sizes.find((elem) => elem.quantityInML === 650)?._id,
      party: element.partyId,
      number: element.theNumber,
      comment: element.comment ? element.comment : "",
    });
  }
  const expensesData = [];
  for (let index = 0; expenses ? index < expenses.length : 0; index++) {
    const element = expenses[index];
    expensesData.push({
      amount: element.amount,
      description: element.desc,
      type: element.type,
    });
  }

  const creditData = [];
  for (let index = 0; credit ? index < credit.length : 0; index++) {
    const element = credit[index];
    creditData.push({
      type: element.partyType,
      from: element.partyId,
      amount: element.amount,
      comment: element.note,
    });
  }

  const paymentRecievedData = [];
  for (let index = 0; paymentRecieved ? index < paymentRecieved.length : 0; index++) {
    const element = paymentRecieved[index];
    paymentRecievedData.push({
      cash: element.amount,
      type: element.type,
      from: element.id,
    });
  }

  const vegitableAndOtherData = [];
  for (let index = 0; vegitableAndOther ? index < vegitableAndOther.length : 0; index++) {
    const element = vegitableAndOther[index];
    vegitableAndOtherData.push({
      date: drDate,
      price: element.price,
      description: element.details,
    });
  }

  const barCommissionData = [];
  for (let index = 0; barCommission ? index < barCommission.length : 0; index++) {
    const element = barCommission[index];
    barCommissionData.push({
      liquor:
        element.size &&
        element.size.sizes.find((elem) => elem.quantityInML === element.ml)?._id,
      quantity: element.quantity,
      amount: element.amount,
      comment: element.comment,
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (salesMan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter Salesman",
      });
    } else {
      setIsLoading(true);
      try {
        const api1 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addPurchaseOutsideData",
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
              entries: [...purchasesData],
            }),
          }
        );

        const api2 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addPurchaseBorrowData",
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
              entries: [...bhejanData],
            }),
          }
        );

        const api3 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addTotalExpensesData",
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
              entries: [...expensesData],
            }),
          }
        );

        const api4 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addBorrowedData",
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
              entries: [...creditData],
            }),
          }
        );

        const api5 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addBorrowedCashReturnData",
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
              entries: [...paymentRecievedData],
            }),
          }
        );

        const api6 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addFoodVegetableData",
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
              entries: [...vegitableAndOtherData],
            }),
          }
        );

        const api7 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addBarCommissionData",
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
              entries: [...barCommissionData],
            }),
          }
        );

        const api8 = fetch(
          "https://insorty-backend-clone.vercel.app/shop/addFinalReportData",
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
                englishBar: Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0),
                beerBar: Number(beerFirst ? beerFirst: 0) +
                Number(beerSecond ? beerSecond : 0),
                barSupplements: Number(barSuplementsTotal?barSuplementsTotal:0),
                extraThings: Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0),
                
                totalSell: Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                Number(beerFirst ? beerFirst: 0) +
                Number(beerSecond ? beerSecond : 0) +
                Number(barSuplementsTotal?barSuplementsTotal:0) -
                Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0),

                borrowedCashReturn: Number(localStorage.getItem("totalPaymentsRecieved")),
                intoAccount: Number(intoAccountState),
                borrowed: Number(udhaariTotal ? udhaariTotal : 0),
                commission: Number(commisionTotal ? commisionTotal : 0),
                previousDues: Number(pichla),

                todaysPayment: Number(paidDues),

                restAmount: Number(pegTotal? pegTotal : 0) + Number(smallPegTotal ? smallPegTotal : 0) +
                Number(beerFirst ? beerFirst: 0) +
                Number(beerSecond ? beerSecond : 0) +
                Number(barSuplementsTotal?barSuplementsTotal:0) -
                Number(vegitableAndOtherTotal ? vegitableAndOtherTotal : 0) +
                Number(localStorage.getItem("totalPaymentsRecieved")) -
                Number(intoAccountState) -
                Number(udhaariTotal ? udhaariTotal : 0) -
                Number(commisionTotal ? commisionTotal : 0) +
                pichla -
                Number(paidDues)
              
            }),
          }
        );


        Promise.all([api1, api2, api3, api4, api5, api6, api7, api8])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            console.log(data);

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
              let BackPage = {
                salesmen: salesMan,
                date: drDate,
                totalExpense: data[2].data._id,
                borrowed: data[3].data._id,
                purchaseOutSide: data[0].data._id, //
                borrowedCashReturn: data[4].data._id, //
                purchaseBorrow: data[1].data._id, //
                foodVegetable: data[5].data._id, //
                barCommission: data[6].data._id,
                finalReport : data[7].data._id
              };

              fetch(
                "https://insorty-backend-clone.vercel.app/shop/addBackPageData",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    cookie_token: token,
                  },
                  body: JSON.stringify({ BackPage }),
                }
              )
                .then((res) => res.json())
                .then((data1) => {
                  console.log(data1, "++++++++++++++++++++++++");
                  if (data1.success === true) {
                    Swal.fire({
                      icon: "success",
                      title: "Success",
                      text: "Data Saved Successfully",
                    });
                    localStorage.removeItem("firstFront");
                    localStorage.removeItem("firstBack");
                    localStorage.removeItem("purchases");
                    localStorage.removeItem("mlForm");
                    localStorage.removeItem("credit");
                    localStorage.removeItem("expenses");
                    localStorage.removeItem("paymentRecieved");
                    localStorage.removeItem("borrow");
                    localStorage.removeItem("rml");
                    localStorage.removeItem("BeerForm");
                    localStorage.removeItem("bhejan");
                    localStorage.removeItem("drDate");
                    localStorage.removeItem("creditTotal");
                    localStorage.removeItem("salesMan");
                    localStorage.removeItem("totalExpenses");
                    localStorage.removeItem("totalFirstBack");
                    localStorage.removeItem("totalPaymentsRecieved");
                    localStorage.removeItem("rmlTotal");
                    localStorage.removeItem("purchasesTotal");
                    localStorage.removeItem("beerTotal");
                    localStorage.removeItem("pichlaBakaya");
                    localStorage.removeItem("commisionTotal");
                    localStorage.removeItem("totalBorrow");
                    localStorage.removeItem("beerFormTotal");
                    localStorage.removeItem("udhaariTotal");
                    localStorage.removeItem("mlFormTotal");
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Something went wrong!",
                    });
                  }
                });
              console.log(BackPage);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      } catch (error) {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    handleSubmit,
    isLoadingSubmit,
  };
};

export default useBeerShopBackSubmit;
