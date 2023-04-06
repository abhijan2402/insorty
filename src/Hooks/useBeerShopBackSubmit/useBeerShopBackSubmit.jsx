import { useContext, useState } from "react";
import { DataContextApi } from "../../Context/DataContext";
import useLiquors from "../useLiquors";
import Swal from "sweetalert2";

const useBeerShopBackSubmit = (shoType) => {
  const { GetLiqId } = useLiquors();
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);

  const { salesMan, drDate } = useContext(DataContextApi);

  // purchesOutSideState ======================
  const purchaseOutside = JSON.parse(localStorage.getItem("purchases"));
  const borrow = JSON.parse(localStorage.getItem("bhejan"));
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  const credit = JSON.parse(localStorage.getItem("credit"));
  const paymentRecieved = JSON.parse(localStorage.getItem("paymentRecieved"));
  const vegitableAndOther = JSON.parse(
    localStorage.getItem("vegitableAndOther")
  );

  const purchaseOutSideData = [];
  for (
    let index = 0;
    purchaseOutside ? index < purchaseOutside.length : 0;
    index++
  ) {
    const element = purchaseOutside[index];
    purchaseOutSideData.push({
      liquor: GetLiqId(element.liquorID, Number(element.quantity), null), //to be updated
      party: element.partyId,
      number: element.theNumber,
      ml: element.quantity,
      rate: element.rate,
      total: element.total,
      comment: element.reason,
    });
  }

  //   shipping

  const addPurchesBorrowData = [];
  for (let index = 0; borrow ? index < borrow.length : 0; index++) {
    const element = borrow[index];
    addPurchesBorrowData.push({
      liquor: GetLiqId(element.liquorID, Number(element.quantity), null),
      party: element.partyId,
      number: element.theNumber,
      comment: element.comment,
    });
  }

  // vagitable

  const addExtrathig = [];
  for (
    let index = 0;
    vegitableAndOther ? index < vegitableAndOther.length : 0;
    index++
  ) {
    const element = vegitableAndOther[index];
    addExtrathig.push({
      date: element.theDate,
      cash: element.price,
      comments: element.details,
    });
  }

  // commison

  const entriesExpances = [];

  for (let index = 0; expenses ? index < expenses.length : 0; index++) {
    const element = expenses[index];
    entriesExpances.push({
      amount: element.amount,
      comment: element.desc,
      type: element.type,
    });
  }

  // cradit dabit

  const entriesBorrow = [];
  for (let index = 0; credit ? index < credit.length : 0; index++) {
    const element = credit[index];

    entriesBorrow.push({
      type: element.partyType,
      from: element.partyId,
      amount: element.amount,
      comment: element.note,
    });
  }

  // use cashReciveState to send data to API ======================
  const borrowCashReturnData = [];
  for (
    let index = 0;
    paymentRecieved ? index < paymentRecieved.length : 0;
    index++
  ) {
    const element = paymentRecieved[index];

    if (element.type === "OTHER") {
      borrowCashReturnData.push({
        comment: element.comment,
        cash: element.amount,
        type: element.type,
      });
    } else {
      borrowCashReturnData.push({
        comment: element.comment,
        from: element.id,
        cash: element.amount,
        type: element.type,
      });
    }
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
          "https://insorty-api.onrender.com/shop/addTotalExpensesData", //1
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "BAR",
              entries: entriesExpances,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api2 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedData", //2
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "BAR",
              entries: entriesBorrow,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        //4
        const api3 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseOutsideData", // 4
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              shopType: "BAR",
              salesmen: salesMan,
              entries: purchaseOutSideData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api4 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedCashReturnData", //5
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "BAR",
              entries: borrowCashReturnData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api5 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseBorrowData", //7
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "BAR",
              entries: addPurchesBorrowData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api6 = fetch(
          "https://insorty-api.onrender.com/shop/addExtraThings", //7
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "BAR",
              entries: addExtrathig,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        // api3, api4, api5, api6, api8
        Promise.all([api1, api2, api3, api4, api5, api6])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            console.log(data);

            if (
              data[0].success === true &&
              data[1].success === true &&
              data[2].success === true &&
              data[3].success === true &&
              data[4].success === true &&
              data[5].success === true
            ) {
              let BackPage = {
                totalExpense: data[0].data._id,
                borrowed: data[1].data._id,
                purchaseOutSide: data[2].data._id, //
                borrowedCashReturn: data[3].data._id, //
                purchaseBorrow: data[4].data._id, //
                extraThings: data[5].data._id, //
              };

              fetch("https://insorty-api.onrender.com/shop/addBackPageData", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  cookie_token: token,
                },
                body: JSON.stringify({ BackPage }),
              })
                .then((res) => res.json())
                .then((data1) => {
                  console.log(data1);
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
