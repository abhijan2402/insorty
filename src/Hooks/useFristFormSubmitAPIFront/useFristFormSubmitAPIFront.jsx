import { useContext, useState } from "react";
import useFormulasFristFormFront from "../useFormulas/useFormulasFristFormFront";
import useSecondFormFront from "../useSecondFormFront";
import Swal from "sweetalert2";
import { DataContextApi } from "../../Context/DataContext";
import useLiquors from "../useLiquors";

const useFristFormSubmitAPIFront = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const { addOneFristFormState } = useFormulasFristFormFront();
  const { addOneSecondFormState } = useSecondFormFront();
  const firstFront = JSON.parse(localStorage.getItem("firstFront"));
  const mlForm = JSON.parse(localStorage.getItem("mlForm"));

  const { liquors } = useContext(DataContextApi);
  const { GetLiqId } = useLiquors();

  const {
    salesMan,
    drDate,
  } = useContext(DataContextApi);

  const submitFristFormHandler = async (e) => {
    // setIsLoadingSubmit(true);

    const dataDetails650 = [];
    for (let index = 0; firstFront ? index < firstFront.length : 0; index++) {
      const element = firstFront[index];
      dataDetails650.push({
        liquor: GetLiqId(element.liquorID, 750, "WINE"),
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
        sales: element.sales750,
        amount: Number(element.mainRate750) * Number(element.sales750),
      });
    }

    const dataDetails550 = [];
    for (let index = 0; firstFront ? index < firstFront.length : 0; index++) {
      const element = firstFront[index];
      dataDetails550.push({
        liquor: GetLiqId(element.liquorID, 180, "WINE"),
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
        sales: element.sales180,
        amount: Number(element.mainRate180) * Number(element.sales180),
      });
    }

    const dataDetails375 = [];
    for (let index = 0; firstFront ? index < firstFront.length : 0; index++) {
      const element = firstFront[index];
      dataDetails375.push({
        liquor: GetLiqId(element.liquorID, 375, "WINE"),
        brandName: element.brandName,
        quantityInML: 375,
        openingStock: element.startingStock330,
        purchaseShop: element.incomingPurchase330,
        purchaseShopRate: element.buyRate330,
        purchaseOutSide: element.incomePurchase330,
        purchaseOutSideRate: element.purchaseRate330,
        credits: element.inflowCredit330,
        send: element.sending330,
        remaining: element.sumRemainder330,
        closingStock: element.closingStock330,
        sales: element.sales330,
        amount: Number(element.mainRate330) * Number(element.sales330),
      });
    }

    const addSecondFormData = [];
    for (let index = 0; mlForm ? index < mlForm.length : 0; index++) {
      const element = mlForm[index];
      addSecondFormData.push({
        liquor: GetLiqId(
          element.liquorID,
          Number(element.selectStockVarient),
          "WINE"
        ),
        brandName: element.brandName,
        quantityInML: element.selectStockVarient,
        openingStock: element.startingStock,
        purchaseShop: element.incomePurchase,
        purchaseShopRate: element.buyRate,
        purchaseOutSide: element.incomingPurchase,
        purchaseOutSideRate: element.purchaseRate,
        credits: element.inflowCredit,
        send: element.sending,
        remaining: element.sumRemainder,
        closingStock: element.closingStock,
        sales: element.sales,
        amount: element.total,
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
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: [
              ...dataDetails650,
              ...dataDetails550,
              ...dataDetails375,
              ...addSecondFormData,
            ],
          }),
        }
      );

      // const api2 = await fetch(
      //   "https://insorty-api.onrender.com/shop/addFrontPageData",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       cookie_token: token,
      //     },
      //     body: JSON.stringify({
      //       date: drDate,
      //       salesmen: salesMan,
      //       entries: dataDetails550,
      //     }),
      //   }
      // );
      // const api3 = await fetch(
      //   "https://insorty-api.onrender.com/shop/addFrontPageData",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       cookie_token: token,
      //     },
      //     body: JSON.stringify({
      //       date: drDate,
      //       salesmen: salesMan,
      //       entries: dataDetails375,
      //     }),
      //   }
      // );

      // const api4 = await fetch(
      //   "https://insorty-api.onrender.com/shop/addFrontPageData",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       cookie_token: token,
      //     },
      //     body: JSON.stringify({
      //       date: drDate,
      //       salesmen: salesMan,
      //       entries: addSecondFormData,
      //     }),
      //   }
      // );

      Promise.all([api1])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          console.log(data);
          if (data[0].success) {
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
    console.log(mlForm);
    console.log(addSecondFormData);
    console.log([
      ...dataDetails650,
      ...dataDetails550,
      ...dataDetails375,
      ...addSecondFormData,
    ], "++++++++++++++++++++");
  };

  return {
    isLoadingSubmit,
    submitFristFormHandler,
  };
};

export default useFristFormSubmitAPIFront;
