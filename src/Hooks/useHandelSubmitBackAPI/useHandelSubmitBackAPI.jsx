import { useState } from "react";
import useCashReciveAdd from "../useCashReciveAdd";
// import useFristFormAdd from "../useFristFormAdd";
import useRmlAdd from "../useRmlAdd";
import Swal from "sweetalert2";

const useHandelSubmitBackAPI = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);

  const { cashReciveState } = useCashReciveAdd();
  // const { fristFormState } = useFristFormAdd();
  const { addRmlState } = useRmlAdd();

  // use cashReciveState to send data to API
  const borrowCashReturnData = {};
  for (let index = 0; index < cashReciveState.length; index++) {
    borrowCashReturnData[`comment${index}`] = cashReciveState[index].reson;
    borrowCashReturnData[`cash${index}`] = cashReciveState[index].amount;
  }
  // use cashReciveState to send data to API

  // fristFormState  State api

  // fristFormState  State api

  // add Rml

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

  // const dataDetails = [
  //   //   {
  //   //     brandName: brandName,
  //   //     initialStock: initialStock,
  //   //     purchaseShop: {
  //   //       purchaseShopNum: purchaseShopNum,
  //   //       purchaseShopRate: purchaseShopRate,
  //   //     },
  //   //     purchaseOutSide: {
  //   //       purchaseOutSideNum: purchaseOutSideNum,
  //   //       purchaseOutSideRate: purchaseOutSideRate,
  //   //     },
  //   //     purchaseBorrow: purchaseBorrow,
  //   //     sendingBhejan: sendingBhejan,
  //   //     lastStock: lastStock,
  //   //     soldRate: soldRate,
  //   //   },
  //   // ];

  // for (let index = 0; index < addRmlState.length; index++) {
  //   const element = addRmlState[index];
  //   dataDetails.push({
  //     brandName: addRmlState[index].brandName,
  //     initialStock: addRmlState[index].openingStock,
  //     purchaseShop: {
  //       purchaseShopNum: addRmlState[index].incomingPurchase,
  //       purchaseShopRate: addRmlState[index].buyRate,
  //     },
  //     purchaseOutSide: {
  //       purchaseOutSideNum: addRmlState[index].incomePurchase,
  //       purchaseOutSideRate: addRmlState[index].purchaseRate,
  //     },
  //     purchaseBorrow: addRmlState[index].inflowCredit,
  //     sendingBhejan: addRmlState[index].sending,
  //     lastStock: addRmlState[index].closingStock,
  //     soldRate: addRmlState[index].rate,
  //   });
  // }

  // add Rml

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const [handelSubmitCashRecive, handelSubmitRml] = await Promise.all([
        fetch("https://insorty-api.onrender.com/shop/backPageRmlData", {
          method: "POST",
          body: JSON.stringify({ dataDetails }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }),
        fetch("https://insorty-api.onrender.com/shop/borrowCashReturnData", {
          method: "POST",
          body: JSON.stringify({ borrowCashReturnData }),
          headers: { "Content-Type": "application/json", cookie_token: token },
        }),
      ]);
      const Rmldata = await handelSubmitRml.json();
      const CashReciveData = await handelSubmitCashRecive.json();
      const totalResponse = CashReciveData + Rmldata;

      console.log(Rmldata);
      console.log(CashReciveData);
      console.log(totalResponse);

      if (totalResponse) {
        Swal.fire({
          title: "Success",
          text: "Data has been saved",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);
      const errors = error.response.data;
      Swal.fire({
        title: "Error",
        text: errors,
        icon: "error",
        confirmButtonText: "OK",
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
