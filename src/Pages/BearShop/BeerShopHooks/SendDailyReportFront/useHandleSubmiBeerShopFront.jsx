import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { DataContextApi } from "../../../../Context/DataContext";

const useHandleSubmiBeerShopFront = () => {
  const token = localStorage.getItem("token");
  const backFirst = JSON.parse(localStorage.getItem("firstBack"));
  const newBeer = JSON.parse(localStorage.getItem("BeerForm"));
  const pegForm = JSON.parse(localStorage.getItem("pegForm")); //1st
  const smallPegForm = JSON.parse(localStorage.getItem("smallPegForm")); //2nd
  const barSuplements = JSON.parse(localStorage.getItem("barSuplements")); // 4th

  const [isLoadingSubmit, setIsLoading] = useState(false);
  const { salesMan, drDate } = useContext(DataContextApi);

  const dataDetails650 = [];
  for (let index = 0; backFirst ? index < backFirst.length : 0; index++) {
    const element = backFirst[index];
    dataDetails650.push({
      liquor:
        element.size &&
        element.size.sizes.find((elem) => elem.quantityInML === 650)?._id,
      brandName: element.brandName,
      averageRate: element.averageRate650,
      quantityInML: 650,
      openingStock: element.startingStock650,
      purchaseShop: element.incomingPurchase650,
      purchaseShopRate: element.buyRate650,
      purchaseOutSide: element.incomePurchase650,
      purchaseOutSideRate: element.purchaseRate650,
      credits: element.inflowCredit650,
      send: element.sending650,
      remaining: element.sumRemainder650,
      closingStock: element.closingStock650,
      sales: element.sales650,
      sellingRate: element.mainRate650,
      amount: element.total650,
    });
  }

  const dataDetails550 = [];
  for (let index = 0; backFirst ? index < backFirst.length : 0; index++) {
    const element = backFirst[index];
    dataDetails550.push({
      liquor: element.size.sizes.find((elem) => elem.quantityInML === 500)?._id,
      brandName: element.brandName,
      averageRate: element.averageRate550,
      quantityInML: 500,
      openingStock: element.startingStock550,
      purchaseShop: element.incomingPurchase550,
      purchaseShopRate: element.buyRate550,
      purchaseOutSide: element.incomePurchase550,
      purchaseOutSideRate: element.purchaseRate550,
      credits: element.inflowCredit550,
      send: element.sending550,
      remaining: element.sumRemainder550,
      closingStock: element.closingStock550,
      sales: element.sales550,
      sellingRate: element.mainRate550,
      amount: element.total550,
    });
  }

  const dataDetails330 = [];
  for (let index = 0; backFirst ? index < backFirst.length : 0; index++) {
    const element = backFirst[index];
    dataDetails330.push({
      liquor: element.size.sizes.find((elem) => elem.quantityInML === 330)?._id,
      brandName: element.brandName,
      averageRate: element.averageRate330,
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
      sales: element.sales330,
      sellingRate: element.mainRate330,
      amount: element.total330,
    });
  }

  const beerForm = [];
  for (let index = 0; newBeer ? index < newBeer.length : 0; index++) {
    const element = newBeer[index];
    beerForm.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === element.selectStockVarient
      )?._id,
      brandName: element.brandName,
      averageRate: element.averageRate,
      quantityInML: element.selectStockVarient,
      openingStock: element.startingStock,
      purchaseShop: element.incomingPurchase,
      purchaseShopRate: element.buyRate,
      purchaseOutSide: element.incomePurchase,
      purchaseOutSideRate: element.purchaseRate,
      credits: element.inflowCredit,
      send: element.sending,
      remaining: element.sumRemainder,
      closingStock: element.closingStock,
      sales: element.sales,
      sellingRate: element.mainRate,
      amount: element.total,
    });
  }

  const pageFormData750 = [];
  for (let index = 0; pegForm ?  index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData750.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === 750
      )?._id,
      brandName: element.brandName,
      averageRate: element.averageRate750,
      buyRateOut: element.buyRateOut750,
      buyRateShop: element.buyRateShop750,
      closingStock: element.closingStock750,
      inflowCredit: element.inflowCredit750,
      inflowOut: element.inflowOut750,
      inflowShop: element.inflowShop750,
      initial: element.initial750,
      openingStock: element.openingStock750,
      rate: element.rate750,
      sales: element.sales750,
      send: element.send750,
    });
  }

  const pageFormData375 = [];
  for (let index = 0; pegForm ? index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData375.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === 375
      )?._id,
      brandName: element.brandName,
      averageRate: element.averageRate375,
      buyRateOut: element.buyRateOut375,
      buyRateShop: element.buyRateShop375,
      closingStock: element.closingStock375,
      inflowCredit: element.inflowCredit375,
      inflowOut: element.inflowOut375,
      inflowShop: element.inflowShop375,
      initial: element.initial375,
      openingStock: element.openingStock375,
      rate: element.rate375,
      sales: element.sales375,
      send: element.send375,
    });
  }

  const pageFormData180 = [];
  for (let index = 0; pegForm ? index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData180.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === 180
      )?._id,
      brandName: element.brandName,
      averageRate: element.averageRate180,
      buyRateOut: element.buyRateOut180,
      buyRateShop: element.buyRateShop180,
      closingStock: element.closingStock180,
      inflowCredit: element.inflowCredit180,
      inflowOut: element.inflowOut180,
      inflowShop: element.inflowShop180,
      initial: element.initial180,
      openingStock: element.openingStock180,
      rate: element.rate180,
      sales: element.sales180,
      send: element.send180,
    });
  }

  const pageFormData30 = [];
  for (let index = 0; pegForm ? index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData30.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === 30
      )?._id,
      brandName: element.brandName,
      averageRate: element.averageRate30,
      buyRateOut: element.buyRateOut30,
      buyRateShop: element.buyRateShop30,
      closingStock: element.closingStock30,
      inflowCredit: element.inflowCredit30,
      inflowOut: element.inflowOut30,
      inflowShop: element.inflowShop30,
      initial: element.initial30,
      openingStock: element.openingStock30,
      rate: element.rate30,
      sales: element.sales30,
      send: element.send30,
    });
  }

  const smallPegFormData = [];
  for (let index = 0; smallPegForm ? index < smallPegForm.length : 0; index++) {
    const element = smallPegForm[index];
    smallPegFormData.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === element.ml
      )?._id,
      averageRateOtherMl: element.averageRateOtherMl,
      brandName: element.brandName,
      buyRateShopBar30: element.buyRateShopBar30,
      buyRateShopBarOtherMl: element.buyRateShopBarOtherMl,
      buyRateShopOut30: element.buyRateShopOut30,
      buyRateShopOutOtherMl: element.buyRateShopOutOtherMl,
      closingStock30: element.closingStock30,
      inflowCredit30: element.inflowCredit30,
      inflowCreditOtherMl: element.inflowCreditOtherMl,
      inflowPurchase30: element.inflowPurchase30,
      inflowPurchaseFromOutside30: element.inflowPurchaseFromOutside30,
      inflowPurchaseFromOutsideOtherMl:
        element.inflowPurchaseFromOutsideOtherMl,
      inflowPurchaseOtherMl: element.inflowPurchaseOtherMl,
      initial: element.initial,
      ml: element.ml,
      openingStockOtherMl: element.openingStockOtherMl,
      rate30: element.rate30,
      sale30: element.sale30,
      send30: element.send30,
      sumRemaining30: element.sumRemaining30,
      sumRemainingOtherML: element.sumRemainingOtherML,
      total: element.total,
    });
  }

  const barSuplementsData = [];
  for (let index = 0; barSuplements ? index < barSuplements.length : 0; index++) {
    const element = barSuplements[index];
    barSuplementsData.push({
     
      buyingPrice: element.buyingPrice,
      closingStock: element.closingStock,
      description: element.description,
      infllow: element.infllow,
      openingStock: element.openingStock,
      rates: element.rates,
      sales: element.sales,
      sum: element.sum,
      sumreminder: element.sumreminder,
    });
  }


  const handelSubmit = () => {
    // if (salesMan === "") {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Enter Salesman",
    //   });
    // } else {
    //   setIsLoading(true);
    //   try {
    //     const api1 = fetch(
    //       "https://insorty-api.onrender.com/shop/addBackPageReportData",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           cookie_token: token,
    //         },
    //         body: JSON.stringify({
    //           date: drDate,
    //           salesmen: salesMan,
    //           entries: [
    //             ...dataDetails650,
    //             ...dataDetails550,
    //             ...dataDetails330,
    //             ...beerForm,
    //           ],
    //         }),
    //       }
    //     );

    //     const api2 = fetch(
    //       "https://insorty-api.onrender.com/shop/addFrontPageData",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           cookie_token: token,
    //         },
    //         body: JSON.stringify({
    //           date: drDate,
    //           salesmen: salesMan,
    //           shopType:"BAR",
    //           entries: [
    //             ...pageFormData750,
    //             ...pageFormData375,
    //             ...pageFormData180,
    //             ...pageFormData30,
    //             ...smallPegFormData,
    //           ],
    //         }),
    //       }
    //     );

    //     const api3 = fetch(
    //       "https://insorty-api.onrender.com/shop/addBarSupplementsData",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           cookie_token: token,
    //         },
    //         body: JSON.stringify({
    //           date: drDate,
    //           salesmen: salesMan,
    //           entries: [barSuplementsData],
    //         }),
    //       }
    //     );

    //     Promise.all([api1, api2, api3])
    //       .then((responses) => Promise.all(responses.map((res) => res.json())))
    //       .then((data) => {

    //         if (
    //           data[0].success === true &&
    //           data[1].success === true &&
    //           data[2].success === true
    //         ) {
    //           Swal.fire({
    //             icon: "success",
    //             title: "Success",
    //             text: "Data Saved Successfully",
    //           });
    //           localStorage.removeItem("backFirst");
    //           localStorage.removeItem("newBeer");
    //           localStorage.removeItem("pegForm");
    //           localStorage.removeItem("smallPegForm");
    //           localStorage.removeItem("barSuplements");
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
    //     setIsLoading(false);
    //   }
    // }
    console.log(pageFormData750)
    console.log( pageFormData375)
    console.log( pageFormData180)
    console.log( pageFormData30)
    console.log( smallPegFormData)
  };

  return {
    handelSubmit,
    isLoadingSubmit,
  };
};

export default useHandleSubmiBeerShopFront;
