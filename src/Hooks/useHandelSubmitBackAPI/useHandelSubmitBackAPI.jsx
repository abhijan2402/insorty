import { useState } from "react";
import useCashReciveAdd from "../useCashReciveAdd";
// import useFristFormAdd from "../useFristFormAdd";
import useRmlAdd from "../useRmlAdd";
import Swal from "sweetalert2";
import usePurchesOutSideAdd from "../usePurchesOutSideAdd";

const useHandelSubmitBackAPI = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);
  const { cashReciveState } = useCashReciveAdd();
  // const { fristFormState } = useFristFormAdd();
  const { addRmlState } = useRmlAdd();
  const { purchesOutSideState } = usePurchesOutSideAdd();

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
  // {
  //     "brandName": "rjx",
  //     "partyName": "hgv",
  //     "number": 23,
  //     "ml": 12,
  //     "rate": 2230,
  //     "total": 24225,
  //     "comments": "no",
  //     "_id": "63c2db6c6d60ea379368edd8"
  // },

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

  const handleSubmit = () => {
    setIsLoading(true);

    try {
      const api1 = fetch(
        "https://insorty-api.onrender.com/shop/purchaseOutSideData",
        {
          method: "POST",
          body: JSON.stringify(purchaseOutSideData),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      const api2 = fetch(
        "https://insorty-api.onrender.com/shop/borrowCashReturnData",
        {
          method: "POST",
          body: JSON.stringify({ borrowCashReturnData }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );

      Promise.all([api1, api2])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          console.log(data);
          if (data[0].success === true && data[1].success === true) {
            
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data Saved Successfully",
            });

            localStorage.removeItem('firstBack')
            localStorage.removeItem('totalFirstBack')
            localStorage.removeItem('rml')
            localStorage.removeItem('rmlTotal')
            localStorage.removeItem('purchases')
            localStorage.removeItem('purchasesTotal')
            localStorage.removeItem('expenses')
            localStorage.removeItem('totalExpenses')
            localStorage.removeItem('paymentRecieved')
            localStorage.removeItem('totalPaymentsRecieved')
            localStorage.removeItem('bhejan')
            localStorage.removeItem('borrow')
            localStorage.removeItem('totalBorrow')
            localStorage.removeItem('credit')
            localStorage.removeItem('creditTotal')
            localStorage.removeItem('firstFront')
            localStorage.removeItem('firstFrontTotal')
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
