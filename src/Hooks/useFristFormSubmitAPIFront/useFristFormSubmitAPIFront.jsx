import { useContext, useState } from "react";
import useFormulasFristFormFront from "../useFormulas/useFormulasFristFormFront";
// import useSecondFormFront from "../useSecondFormFront";
import Swal from "sweetalert2";
import { DataContextApi } from "../../Context/DataContext";

const useFristFormSubmitAPIFront = () => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const { addOneFristFormState } = useFormulasFristFormFront();
  // const { addOneSecondFormState } = useSecondFormFront();
  const { liquors } = useContext(DataContextApi);

  // const brandWise = [];
  // for (let index = 0; index < addOneFristFormState.length; index++) {
  //   const element = addOneFristFormState[index];
  //   brandWise.push({
  //     brandName: element.brandName,

  //     initialStock: {
  //       initialStock750: element.initialStock750,
  //       initialStock330: element.initialStock330,
  //       initialStock180: element.initialStock180,
  //     },

  //     purchaseShop: {
  //       purchaseShop750: element.purchaseShop750,
  //       purchaseShop330: element.purchaseShop330,
  //       purchaseShop180: element.purchaseShop180,
  //       purchaseShopRate750: element.purchaseShopRate750,
  //       purchaseShopRate330: element.purchaseShopRate330,
  //       purchaseShopRate180: element.purchaseShopRate180,
  //     },
  //     purchaseOutSide: {
  //       purchaseOutSide750: element.purchaseOutSide750,
  //       purchaseOutSide330: element.purchaseOutSide330,
  //       purchaseOutSide180: element.purchaseOutSide180,
  //       purchaseOutSideRate750: element.purchaseOutSideRate750,
  //       purchaseOutSideRate330: element.purchaseOutSideRate330,
  //       purchaseOutSideRate180: element.purchaseOutSideRate180,
  //     },
  //     purchaseAVG: {
  //       purchaseAVG750: element.purchaseAVG750,
  //       purchaseAVG330: element.purchaseAVG330,
  //       purchaseAVG180: element.purchaseAVG180,
  //     },
  //     purchaseBorrow: {
  //       purchaseBorrow750: element.purchaseBorrow750,
  //       purchaseBorrow330: element.purchaseBorrow330,
  //       purchaseBorrow180: element.purchaseBorrow180,
  //     },
  //     sendingBhejan: {
  //       sendingBhejan750: element.sendingBhejan750,
  //       sendingBhejan330: element.sendingBhejan330,
  //       sendingBhejan180: element.sendingBhejan180,
  //     },
  //     AddRemainder: {
  //       AddRemainder750: element.AddRemainder750,
  //       AddRemainder330: element.AddRemainder330,
  //       AddRemainder180: element.AddRemainder180,
  //     },
  //     lastStock: {
  //       lastStock750: element.lastStock750,
  //       lastStock330: element.lastStock330,
  //       lastStock180: element.lastStock180,
  //     },
  //     sold: {
  //       sold750: element.sold750,
  //       sold330: element.sold330,
  //       sold180: element.sold180,
  //     },
  //     soldRate: {
  //       soldRate750: element.soldRate750,
  //       soldRate330: element.soldRate330,
  //       soldRate180: element.soldRate180,
  //     },
  //     finalTotal: {
  //       finalTotal750: element.finalTotal750,
  //       finalTotal330: element.finalTotal330,
  //       finalTotal180: element.finalTotal180,
  //     },
  //     finalSum: element.finalSum,
  //   });
  // }

  // const mlWise = [];
  // for (let index = 0; index < addOneSecondFormState.length; index++) {
  //   const element = addOneSecondFormState[index];
  //   mlWise.push({
  //     ml: element.ml,
  //     initialStock: element.initialStock,
  //     purchaseShop: {
  //       purchaseShopNum: element.purchaseShopNum,
  //       purchaseShopRate: element.purchaseShopRate,
  //     },
  //     purchaseOutSide: {
  //       purchaseOutSideNum: element.purchaseOutSideNum,
  //       purchaseOutSideRate: element.purchaseOutSideRate,
  //     },
  //     purchaseAVG: element.purchaseAVG,
  //     purchaseBorrow: element.purchaseBorrow,
  //     sendingBhejan: element.sendingBhejan,
  //     AddRemainder: element.AddRemainder,
  //     lastStock: element.lastStock,
  //     sold: element.sold,
  //     soldRate: element.soldRate,
  //     finalTotal: element.finalTotal,
  //     finalSum: element.finalSum,
  //   });
  // }

  // for (let index = 0; index < addOneSecondFormState.length; index++) {}

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

      Promise.all([api1, api2, api3])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          console.log(data);

          if (data.success === true) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Added successfully",
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

  // const submitFristFormHandler = async (e) => {
  //   try {
  //     setIsLoadingSubmit(true);
  //     const api1 = fetch(
  //       "https://insorty-api.onrender.com/shop/addFrontPageData",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ brandWise }),
  //         headers: { "Content-Type": "application/json", cookie_token: token },
  //       }
  //     );

  //     const api2 = fetch(
  //       "https://insorty-api.onrender.com/shop/borrowCashReturnData",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ mlWise }),
  //         headers: { "Content-Type": "application/json", cookie_token: token },
  //       }
  //     );

  //     Promise.all([api1, api2])
  //       .then((responses) => Promise.all(responses.map((res) => res.json())))
  //       .then((data) => {
  //         console.log(data);
  //         if (data[0].success === true && data[1].success === true) {
  //           Swal.fire({
  //             icon: "success",
  //             title: "Success",
  //             text: "Data Saved Successfully",
  //           });
  //         } else {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: "Something went wrong!",
  //           });
  //         }
  //       });
  //   } catch (error) {
  //     const errorMessage = error.message;
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: errorMessage,
  //     });
  //   } finally {
  //     setIsLoadingSubmit(false);
  //   }
  // };

  return {
    isLoadingSubmit,
    submitFristFormHandler,
  };
};

export default useFristFormSubmitAPIFront;
