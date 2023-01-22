import { useContext, useState } from "react";
import useCashReciveAdd from "../useCashReciveAdd";
// import useFristFormAdd from "../useFristFormAdd";
import useRmlAdd from "../useRmlAdd";
import Swal from "sweetalert2";
import usePurchesOutSideAdd from "../usePurchesOutSideAdd";
import useCommissonAdd from "../useCommissonAdd";
import useCarditDabit from "../useCarditDabit";
import { DataContextApi } from "../../Context/DataContext";

const useHandelSubmitBackAPI = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);
  const { cashReciveState } = useCashReciveAdd();
  const { addRmlState } = useRmlAdd();
  const { purchesOutSideState } = usePurchesOutSideAdd();
  const { commissonState } = useCommissonAdd();
  const { craditDabitState } = useCarditDabit();
  const { intoAccountState } = useContext(DataContextApi);

  // use cashReciveState to send data to API ======================
  const borrowCashReturnData = [];

  for (let index = 0; index < cashReciveState.length; index++) {
    const element = cashReciveState[index];

    borrowCashReturnData.push({
      cash: element.amount,
      comments: element.reson,
    });
  }
  // use cashReciveState to send data to API ======================

  // add Rml ======================
  const dataDetails = [];
  for (let index = 0; index < addRmlState.length; index++) {
    const element = addRmlState[index];
    dataDetails.push({
      brandName: element.brandName,
      initialStock: element.openingStock,
      purchaseShop: {
        purchaseShopNum: element.incomingPurchase,
        purchaseShopRate: element.buyRate,
      },
      purchaseOutSide: {
        purchaseOutSideNum: element.incomePurchase,
        purchaseOutSideRate: element.purchaseRate,
      },
      purchaseBorrow: element.inflowCredit,
      sendingBhejan: element.sending,
      lastStock: element.closingStock,
      soldRate: element.rate,
    });
  }
  // add Rml ======================

  // purchesOutSideState ======================

  const purchaseOutSideData = [];

  for (let index = 0; index < purchesOutSideState.length; index++) {
    const element = purchesOutSideState[index];
    purchaseOutSideData.push({
      brandName: element.brandName,
      partyName: element.partyName,
      number: element.theNumber,
      ml: element.quantity,
      rate: element.rate,
      total: element.total,
      comments: element.reason,
    });
  }
  // purchesOutSideState ======================

  // CommissonFrom -> totalExpensesData ==============
  const entriesExpances = [];

  for (let index = 0; index < commissonState.length; index++) {
    const element = commissonState[index];
    entriesExpances.push({
      cash: element.amount,
      description: element.reason,
    });
  }
  // CommissonFrom -> totalExpensesData ==============

  // craditDabitState -> borrowedData ================

  const entriesBorrow = [];

  for (let index = 0; index < craditDabitState.length; index++) {
    const element = craditDabitState[index];
    entriesBorrow.push({
      partyName: element.partyName,
      type: element.partyType,
      amount: element.amount,
      comment: element.note,
    });
  }

  // craditDabitState -> borrowedData ================

  // {{url}}/shop/addFinalReportData =================

  const firstformData = JSON.parse(localStorage.getItem("firstFrontTotal"));
  const secondFront = JSON.parse(localStorage.getItem("mlFormTotal"));
  const thirdFront = JSON.parse(localStorage.getItem("beerFormTotal"));
  const fourthFront = JSON.parse(localStorage.getItem("rmlTotal"));
  const fifthFront = JSON.parse(localStorage.getItem("cashTotal"));
  const sixthFront = JSON.parse(localStorage.getItem("udhaariTotal"));
  const seventhFront = JSON.parse(localStorage.getItem("commisionTotal"));

  const english = firstformData + secondFront;
  const beer = 0;
  const rmlData = fourthFront;
  const totalSell = fourthFront + thirdFront + firstformData + secondFront;
  const borrowedCashReturn = fifthFront;
  const intoAccount = intoAccountState;
  const borrowed = sixthFront;
  const commission = seventhFront;
  const previousDues = 0;
  const todaysPayment = 0;
  const restAmount = 0;

  // {{url}}/shop/addFinalReportData =================

  const handleSubmit = () => {
    setIsLoading(true);

    try {
      const api1 = fetch(
        "https://insorty-api.onrender.com/shop/addTotalExpensesData",
        {
          method: "POST",
          body: JSON.stringify({ entries: entriesExpances }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api2 = fetch(
        "https://insorty-api.onrender.com/shop/addBorrowedData",
        {
          method: "POST",
          body: JSON.stringify({ entries: entriesBorrow }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api3 = fetch(
        "https://insorty-api.onrender.com/shop/addFinalReportData",
        {
          method: "POST",
          body: JSON.stringify({
            english: english,
            beer: beer,
            RML: rmlData,
            totalSell: totalSell,
            borrowedCashReturn: borrowedCashReturn,
            intoAccount: intoAccount,
            borrowed: borrowed,
            commission: commission,
            previousDues: previousDues,
            todaysPayment: todaysPayment,
            restAmount: restAmount,
          }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      Promise.all([api1, api2, api3])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          console.log(data);

          if (data[0].success === true && data[1].success === true) {
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
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSubmit = async () => {
  //   setIsLoading(true);
  //   try {
  //     const [
  //       // handelSubmitRml,
  //       handelSubmitCashRecive,
  //       handelSubmitPurchesOutSide,
  //     ] = await Promise.all([
  //       // fetch("https://insorty-api.onrender.com/shop/backPageRmlData", {
  //       //   method: "POST",
  //       //   body: JSON.stringify({ dataDetails }),
  //       //   headers: { "Content-Type": "application/json", cookie_token: token },
  //       // }),

  //       fetch("https://insorty-api.onrender.com/shop/borrowCashReturnData", {
  //         method: "POST",
  //         body: JSON.stringify({ borrowCashReturnData }),
  //         headers: { "Content-Type": "application/json", cookie_token: token },
  //       }),

  //       fetch("https://insorty-api.onrender.com/shop/purchaseOutSideData", {
  //         method: "POST",
  //         body: JSON.stringify({ dataDetailsPurchesOutSide }),
  //         headers: { "Content-Type": "application/json", cookie_token: token },
  //       }),
  //     ]);
  //     // const Rmldata = await handelSubmitRml.json();
  //     const CashReciveData = await handelSubmitCashRecive.json();
  //     const purchesOutSideData = await handelSubmitPurchesOutSide.json();
  //     const totalResponse = CashReciveData + purchesOutSideData;

  //     // console.log(Rmldata);
  //     console.log(CashReciveData);
  //     console.log(purchesOutSideData);
  //     console.log(totalResponse);

  //     if (totalResponse.success === true) {
  //       Swal.fire({
  //         title: "Success",
  //         text: "Data has been saved",
  //         icon: "success",
  //         confirmButtonText: "OK",
  //       });
  //     } else {
  //       Swal.fire({
  //         title: "Error",
  //         text: "Something went wrong",
  //         icon: "error",
  //         confirmButtonText: "OK",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     const errors = error.response.data;
  //     Swal.fire({
  //       title: "Error",
  //       text: errors,
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return {
    handleSubmit,
    isLoadingSubmit,
  };
};

export default useHandelSubmitBackAPI;
