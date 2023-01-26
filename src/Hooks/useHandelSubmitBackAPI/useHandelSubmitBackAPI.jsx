import { useContext, useState } from "react";
import useCashReciveAdd from "../useCashReciveAdd";
import useRmlAdd from "../useRmlAdd";
import Swal from "sweetalert2";
import usePurchesOutSideAdd from "../usePurchesOutSideAdd";
import useCommissonAdd from "../useCommissonAdd";
import useCarditDabit from "../useCarditDabit";
import { DataContextApi } from "../../Context/DataContext";
import useInfolwBorrowingRml from "../useInfolwBorrowingRml";
import useShippingAdd from "../useShippingAdd";

const useHandelSubmitBackAPI = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);
  const { cashReciveState } = useCashReciveAdd();
  const { addRmlState } = useRmlAdd();
  const { purchesOutSideState } = usePurchesOutSideAdd();
  const { commissonState } = useCommissonAdd();
  const { craditDabitState } = useCarditDabit();
  const { infolwBorrwingFormState } = useInfolwBorrowingRml();
  const { addShippingState } = useShippingAdd();
  const { intoAccountState, liquerState } = useContext(DataContextApi);
  const liquerData = liquerState?.data;

  // use cashReciveState to send data to API ======================
  const borrowCashReturnData = [];

  for (let index = 0; index < cashReciveState.length; index++) {
    const element = cashReciveState[index];

    borrowCashReturnData.push({
      cash: element.amount,
      description: element.reson,
    });
  }

  // use cashReciveState to send data to API ======================

  // add Rml ======================
  const addRmlData = [];
  const currentStock = (liquerData ?? [])[0]?.currentStock;
  const typeData = (liquerData ?? [])[0]?.type;
  const quantityInMLData = (liquerData ?? [])[0]?.quantityInML;
  const rateData = (liquerData ?? [])[0]?.rate;
  const liquerId = (liquerData ?? [])[0]?._id;

  for (let index = 0; index < addRmlState.length; index++) {
    const element = addRmlState[index];
    addRmlData.push({
      liquor: {
        brandName: element.brandName,
        currentStock: currentStock,
        type: typeData,
        quantityInML: quantityInMLData,
        rate: rateData,
      },
      openingStock: element.openingStock,
      purchaseShop: element.incomingPurchase,
      purchaseShopRate: element.buyRate,
      purchaseOutSide: element.incomePurchase,
      purchaseOutSideRate: element.purchaseRate,
      credits: element.inflowCredit,
      send: element.sending,
      remaining: element.closingStock,
      closingStock: element.closingStock,
      sales: element.sales,
      amount: element.amount,
    });
  }
  // add Rml ======================

  // purchesOutSideState ======================

  const purchaseOutSideData = [];
  for (let index = 0; index < purchesOutSideState.length; index++) {
    const element = purchesOutSideState[index];
    purchaseOutSideData.push({
      liquor: liquerId,
      brandName: element.brandName,
      partyName: element.partyName,
      number: element.theNumber,
      ml: element.quantity,
      rate: element.rate,
      total: element.total,
      comments: element.reason,
    });
  }

  const entriesExpances = [];

  for (let index = 0; index < commissonState.length; index++) {
    const element = commissonState[index];
    entriesExpances.push({
      cash: element.amount,
      description: element.reason,
    });
  }

  const entriesBorrow = [];

  for (let index = 0; index < craditDabitState.length; index++) {
    const element = craditDabitState[index];
    entriesBorrow.push({
      type: element.partyType,
      partyName: element.partyName,
      amount: element.amount,
      comment: element.note,
    });
  }

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

  const addSendingData = [];
  for (let index = 0; index < addShippingState.length; index++) {
    const element = addShippingState[index];
    addSendingData.push({
      liquor: liquerId,
      partyName: element.partyName,
      brandName: element.brandName,
      number: element.theNumber,
      total: element.total,
      comment: element.comment,
    });
  }

  const addPurchesBorrowData = [];
  for (let index = 0; index < infolwBorrwingFormState.length; index++) {
    const element = infolwBorrwingFormState[index];
    addPurchesBorrowData.push({
      liquor: liquerId,
      partyName: element.partyName,
      brandName: element.brandName,
      number: element.theNumber,
      comment: element.comment,
      total: element.total,
      quantity: element.quantity,
      rate: element.rate,
    });
  }

  // partyName: string;
  // brandName: string;
  // theNumber: string;
  // quantity: number;
  // rate: number;
  // total: number;
  // reason: string;

  const handleSubmit = () => {
    setIsLoading(true);
    try {
      const api1 = fetch(
        "https://insorty-api.onrender.com/shop/getBackPageRMLData",
        {
          method: "POST",
          body: JSON.stringify({ entries: addRmlData }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const api2 = fetch(
        "https://insorty-api.onrender.com/shop/addTotalExpensesData",
        {
          method: "POST",
          body: JSON.stringify({ entries: entriesExpances }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api3 = fetch(
        "https://insorty-api.onrender.com/shop/addBorrowedData",
        {
          method: "POST",
          body: JSON.stringify({
            salesmen: "Deepak",
            entries: [
              {
                type: "PARTNER",
                name: "abcd",
                balance: 234,
                amount: 23,
                comment: "no",
              },
            ],
          }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api4 = fetch(
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

      const api5 = fetch(
        "https://insorty-api.onrender.com/shop/addPurchaseOutsideData",
        {
          method: "POST",
          body: JSON.stringify({ entries: purchaseOutSideData }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api6 = fetch(
        "https://insorty-api.onrender.com/shop/addBorrowedCashReturnData",
        {
          method: "POST",
          body: JSON.stringify({ entries: borrowCashReturnData }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api7 = fetch("https://insorty-api.onrender.com/shop/addSendData", {
        method: "POST",
        body: JSON.stringify({ entries: addSendingData }),
        headers: { "Content-Type": "application/json", cookie_token: token },
      });

      const api8 = fetch(
        "https://insorty-api.onrender.com/shop/addPurchaseBorrowData",
        {
          method: "POST",
          body: JSON.stringify({ entries: addPurchesBorrowData }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      Promise.all([api1, api2, api3, api4, api5, api6, api7, api8])
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

  return {
    handleSubmit,
    isLoadingSubmit,
  };
};

export default useHandelSubmitBackAPI;
