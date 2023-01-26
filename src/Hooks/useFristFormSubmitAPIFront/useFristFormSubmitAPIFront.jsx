import { useContext, useState } from "react";
import useFormulasFristFormFront from "../useFormulas/useFormulasFristFormFront";
import useSecondFormFront from "../useSecondFormFront";
import Swal from "sweetalert2";
import { DataContextApi } from "../../Context/DataContext";

const useFristFormSubmitAPIFront = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const { addOneFristFormState } = useFormulasFristFormFront();
  const { addOneSecondFormState } = useSecondFormFront();
  const { liquors } = useContext(DataContextApi);

  const submitFristFormHandler = async (e) => {
    setIsLoadingSubmit(true);

    const dataDetails650 = [];

    for (let index = 0; index < addOneFristFormState.length; index++) {
      const element = addOneFristFormState[index];
      dataDetails650.push({
        liquor: liquors?.[0]?._id,
        brandName: element.brandName,
        quantityInML: 750,
        openingStock: element.startingStock750,
        purchaseShop: element.incomingPurchase750,
        purchaseShopRate: element.buyRate750,
        purchaseOutSide: element.incomePurchase750,
        purchaseOutSideRate: element.purchaseRate750,
        credits: element.inflowCredit750,
        send: element.sending750,
        remaining: element.sumRemainder750,
        closingStock: element.closingStock750,
        sales: element.mainRate750,
        amount: element.grandTotal,
      });
    }

    const dataDetails550 = [];
    for (let index = 0; index < addOneFristFormState.length; index++) {
      const element = addOneFristFormState[index];
      dataDetails550.push({
        liquor: liquors?.[0]?._id,
        brandName: element.brandName,
        quantityInML: 180,
        openingStock: element.startingStock180,
        purchaseShop: element.incomingPurchase180,
        purchaseShopRate: element.buyRate180,
        purchaseOutSide: element.incomePurchase180,
        purchaseOutSideRate: element.purchaseRate180,
        credits: element.inflowCredit180,
        send: element.sending180,
        remaining: element.sumRemainder180,
        closingStock: element.closingStock180,
        sales: element.mainRate180,
        amount: element.grandTotal,
      });
    }

    const dataDetails330 = [];
    for (let index = 0; index < addOneFristFormState.length; index++) {
      const element = addOneFristFormState[index];
      dataDetails330.push({
        liquor: liquors?.[0]?._id,
        brandName: element.brandName,
        quantityInML: 330,
        openingStock: element.startingStock330,
        purchaseShop: element.incomingPurchase330,
        purchaseShopRate: element.buyRate330,
        purchaseOutSide: element.incomePurchase330,
        purchaseOutSideRate: element.purchaseRate330,
        credits: element.inflowCredit330,
        send: element.sending330,
        remaining: element.sumRemainder330,
        closingStock: element.closingStock330,
        sales: element.mainRate330,
        amount: element.grandTotal,
      });
    }

    const addSecondFormData = [];
    for (let index = 0; index < addOneSecondFormState.length; index++) {
      const element = addOneSecondFormState[index];
      addSecondFormData.push({
        liquor: liquors?.[0]?._id,
        quantityInML: element.ml,
        openingStock: element.initialStock,
        purchaseShop: element.purchaseShopNum,
        purchaseShopRate: element.purchaseShopRate,
        purchaseOutSide: element.purchaseOutSideNum,
        purchaseOutSideRate: element.purchaseOutSideRate,
        credits: element.purchaseBorrow,
        send: element.sendingBhejan,
        remaining: element.AddRemainder,
        closingStock: element.lastStock,
        sales: element.sold,
        amount: element.finalSum,
      });
    }

    try {
      const api1 = await fetch(
        "https://insorty-api.onrender.com/shop/addFrontPageData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ entries: dataDetails650 }),
        }
      );

      const api2 = await fetch(
        "https://insorty-api.onrender.com/shop/addFrontPageData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ entries: dataDetails550 }),
        }
      );
      const api3 = await fetch(
        "https://insorty-api.onrender.com/shop/addFrontPageData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ entries: dataDetails330 }),
        }
      );

      const api4 = await fetch(
        "https://insorty-api.onrender.com/shop/addFrontPageData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ entries: addSecondFormData }),
        }
      );

      Promise.all([api1, api2, api3, api4])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          console.log(data);
          if (
            data[0].success &&
            data[1].success &&
            data[2].success &&
            data[3].success
          ) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data Added Successfully",
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
      setIsLoadingSubmit(false);
    }
  };

  return {
    isLoadingSubmit,
    submitFristFormHandler,
  };
};

export default useFristFormSubmitAPIFront;
