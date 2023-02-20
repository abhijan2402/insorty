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
import useLiquors from "../useLiquors";

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
  const { intoAccountState, liquerState, paidDues } = useContext(
    DataContextApi
  );
  const liquerData = liquerState?.data;
  const rmlFieldsData = JSON.parse(localStorage.getItem("rml"));
  const beerTotal = JSON.parse(localStorage.getItem("totalFirstBack"));
  const purchaseOutside = JSON.parse(localStorage.getItem("purchases"));
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  const paymentRecieved = JSON.parse(localStorage.getItem("paymentRecieved"));
  const borrow = JSON.parse(localStorage.getItem("bhejan"));
  const send = JSON.parse(localStorage.getItem("borrow"));

  const { GetLiqId } = useLiquors();

  const {
    salesMan,

    drDate,
  } = useContext(DataContextApi);

  // use cashReciveState to send data to API ======================
  const borrowCashReturnData = [];

  for (
    let index = 0;
    paymentRecieved ? index < paymentRecieved.length : 0;
    index++
  ) {
    const element = paymentRecieved[index];

    borrowCashReturnData.push({
      comment: element.comment,
      from: element.id,
      cash: element.amount,
      type: element.type,
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

  for (
    let index = 0;
    rmlFieldsData ? index < rmlFieldsData.length : 0;
    index++
  ) {
    const element = rmlFieldsData[index];
    addRmlData.push({
      liquor: GetLiqId(element.liquorID, Number(element.ml), "RML"), //to be updated
      brandName: element.brandName,
      openingStock: element.openingStock,
      purchaseShop: element.incomingPurchase,
      purchaseShopRate: element.buyRate,
      purchaseOutSide: element.incomePurchase,
      quantityInML: element.ml,
      purchaseOutSideRate: element.purchaseRate,
      credits: element.inflowCredit,
      send: element.sending,
      remaining: element.closingStock,
      closingStock: element.closingStock,
      sales: element.sales,
      amount: element.cost,
    });
  }
  // add Rml ======================

  // purchesOutSideState ======================

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
      comments: element.reason,
    });
  }

  const entriesExpances = [];

  for (let index = 0; expenses ? index < expenses.length : 0; index++) {
    const element = expenses[index];
    entriesExpances.push({
      amount: element.amount,
      comment: element.desc,
      type: element.type,
    });
  }

  const entriesBorrow = [];

  for (let index = 0; index < craditDabitState.length; index++) {
    const element = craditDabitState[index];

    entriesBorrow.push({
      type: element.partyType,
      from: element.partyId,
      amount: element.amount,
      comment: element.note,
    });
  }

  //

  const firstformData = JSON.parse(localStorage.getItem("firstFrontTotal"));
  const secondFront = JSON.parse(localStorage.getItem("mlFormTotal"));
  const thirdFront = JSON.parse(localStorage.getItem("beerFormTotal"));
  const fourthFront = JSON.parse(localStorage.getItem("rmlTotal"));
  const fifthFront = JSON.parse(localStorage.getItem("totalPaymentsRecieved"));
  const sixthFront = JSON.parse(localStorage.getItem("udhaariTotal"));
  const seventhFront = JSON.parse(localStorage.getItem("commisionTotal"));
  const pichlaBakaya = 0;

  const english = firstformData + secondFront;
  const beer = beerTotal;
  const rmlData = fourthFront;
  const totalSell = fourthFront + beerTotal + firstformData + secondFront;
  const borrowedCashReturn = fifthFront;
  const intoAccount = intoAccountState;
  const borrowed = sixthFront;
  const commission = seventhFront;
  const previousDues = pichlaBakaya;
  const todaysPayment = paidDues;
  const restAmount =
    fourthFront +
    beerTotal +
    firstformData +
    secondFront +
    fifthFront -
    Number(intoAccountState) -
    sixthFront -
    seventhFront +
    pichlaBakaya -
    paidDues;

  const addSendingData = [];
  for (let index = 0; send ? index < send.length : 0; index++) {
    const element = send[index];
    addSendingData.push({
      liquor: GetLiqId(element.liquorId, Number(element.quantity), null),
      party: element.partyId,
      number: element.theNumber,
      total: element.total,
      comment: element.reason,
    });
  }

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

  const handleSubmit = () => {
    setIsLoading(true);
    try {
      const api1 = fetch(
        "https://insorty-api.onrender.com/shop/addBackPageRMLData",
        {
          method: "POST",
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: addRmlData,
          }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const api2 = fetch(
        "https://insorty-api.onrender.com/shop/addTotalExpensesData",
        {
          method: "POST",
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: entriesExpances,
          }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api3 = fetch(
        "https://insorty-api.onrender.com/shop/addBorrowedData",
        {
          method: "POST",
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: entriesBorrow,
          }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api4 = fetch(
        "https://insorty-api.onrender.com/shop/addFinalReportData",
        {
          method: "POST",
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
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
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: purchaseOutSideData,
          }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api6 = fetch(
        "https://insorty-api.onrender.com/shop/addBorrowedCashReturnData",
        {
          method: "POST",
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: borrowCashReturnData,
          }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api7 = fetch("https://insorty-api.onrender.com/shop/addSendData", {
        method: "POST",
        body: JSON.stringify({
          date: drDate,
          salesmen: salesMan,
          entries: addSendingData,
        }),
        headers: { "Content-Type": "application/json", cookie_token: token },
      });

      const api8 = fetch(
        "https://insorty-api.onrender.com/shop/addPurchaseBorrowData",
        {
          method: "POST",
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: addPurchesBorrowData,
          }),
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
    console.log(send);
    console.log(addSendingData);
  };

  return {
    handleSubmit,
    isLoadingSubmit,
  };
};

export default useHandelSubmitBackAPI;
