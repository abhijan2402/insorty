import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { DataContextApi } from "../../../../Context/DataContext";
import { error } from "daisyui/src/colors";
import moment from "moment";
import swal from "sweetalert";

const useHandleSubmiBeerShopFront = () => {
  const token = localStorage.getItem("token");
  const backFirst = JSON.parse(localStorage.getItem("firstBack"));
  const newBeer = JSON.parse(localStorage.getItem("BeerForm"));
  const pegForm = JSON.parse(localStorage.getItem("pegForm")); //1st
  const smallPegForm = JSON.parse(localStorage.getItem("smallPegForm")); //2nd
  const barSuplements = JSON.parse(localStorage.getItem("barSuplements")); // 4th
  const BasedURL = process.env.REACT_APP_API_URL;


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
  for (let index = 0; pegForm ? index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData750.push({
      liquor: element.size.sizes.find((elem) => elem.quantityInML === 750)?._id,
      brandName: element.brandName,
      averageRate: element.averageRate750,
      openingStock: element.openingStock750,
      purchaseShop: element.inflowShop750,
      purchaseShopRate: element.buyRateShop750,
      purchaseOutSide: element.inflowOut750,
      purchaseOutSideRate: element.buyRateOut750,
      credits: element.inflowCredit750,
      send: element.send750,
      remaining: element.sumRemaining750,
      closingStock: element.closingStock30,
      sales: 0,
      sellingRate: element.rate30,
      total: element.total750,
    });
  }

  const pageFormData375 = [];
  for (let index = 0; pegForm ? index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData375.push({
      liquor: element.size.sizes.find((elem) => elem.quantityInML === 375)?._id,
      brandName: element.brandName,
      averageRate: element.averageRate375,
      openingStock: element.openingStock375,
      purchaseShop: element.inflowShop375,
      purchaseShopRate: element.buyRateShop375,
      purchaseOutSide: element.inflowOut375,
      purchaseOutSideRate: element.buyRateOut375,
      credits: element.inflowCredit375,
      send: element.send375,
      remaining: element.sumRemaining375,
      closingStock: element.closingStock30,
      sales: 0,
      sellingRate: element.rate30,
      total: element.total375,
    });
  }

  const pageFormData180 = [];
  for (let index = 0; pegForm ? index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData180.push({
      liquor: element.size.sizes.find((elem) => elem.quantityInML === 180)?._id,
      brandName: element.brandName,
      averageRate: element.averageRate180,
      openingStock: element.openingStock180,
      purchaseShop: element.inflowShop180,
      purchaseShopRate: element.buyRateShop180,
      purchaseOutSide: element.inflowOut180,
      purchaseOutSideRate: element.buyRateOut180,
      credits: element.inflowCredit180,
      send: element.send180,
      remaining: element.sumRemaining180,
      closingStock: element.closingStock30,
      sales: 0,
      sellingRate: element.rate30,
      total: element.total180,
    });
  }

  const pageFormData30 = [];
  for (let index = 0; pegForm ? index < pegForm.length : 0; index++) {
    const element = pegForm[index];
    pageFormData30.push({
      liquor: element.size.sizes.find((elem) => elem.quantityInML === 30)?._id,
      brandName: element.brandName,
      averageRate: element.averageRate30,
      openingStock: element.openingStock30,
      purchaseShop: element.inflowShop30,
      purchaseShopRate: element.buyRateShop30,
      purchaseOutSide: element.inflowOut30,
      purchaseOutSideRate: element.buyRateOut30,
      credits: element.inflowCredit30,
      send: element.send30,
      remaining: element.sumRemaining30,
      closingStock: element.closingStock30,
      sales: element.sales30,
      sellingRate: element.rate30,
      total: element.total30,
    });
  }

  const otherMl = [];

  for (let index = 0; smallPegForm ? index < smallPegForm.length : 0; index++) {
    const element = smallPegForm[index];
    otherMl.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === Number(element.ml)
      )?._id,
      openingStock: element.openingStockOtherMl,
      averageRate: element.averageRateOtherMl,
      purchaseShop: element.inflowPurchaseOtherMl,
      purchaseShopRate: element.buyRateShopBarOtherMl,
      purchaseOutSide: element.inflowPurchaseFromOutsideOtherMl,
      purchaseOutSideRate: element.buyRateShopOutOtherMl,
      credits: element.inflowCreditOtherMl,
      send: element.sendOtherMl,
      remaining: element.sumRemainingOtherML,
      closingStock: element.closingStock30,
      sales: 0,
      sellingRate: element.rate30,
      total: 0,
    });
  }

  const Ml30Data = [];

  for (let index = 0; smallPegForm ? index < smallPegForm.length : 0; index++) {
    const element = smallPegForm[index];
    Ml30Data.push({
      liquor: element.size.sizes.find((elem) => elem.quantityInML === 30)?._id,
      openingStock: element.openingStock30,
      averageRate: element.averageRate30,
      purchaseShop: element.inflowPurchase30,
      purchaseShopRate: element.buyRateShopBar30,
      purchaseOutSide: element.inflowPurchaseFromOutside30,
      purchaseOutSideRate: element.buyRateShopOut30,
      credits: element.inflowCredit30,
      send: element.send30,
      remaining: element.sumRemaining30,
      closingStock: element.closingStock30,
      sales: element.sale30,
      sellingRate: element.rate30,
      total: 0,
    });
  }

  const barSuplementsData = [];
  for (
    let index = 0;
    barSuplements ? index < barSuplements.length : 0;
    index++
  ) {
    const element = barSuplements[index];
    barSuplementsData.push({
      purchaseRate: element.buyingPrice,
      closingStock: element.closingStock,
      description: element.description,
      purchase: element.infllow,
      openingStock: element.openingStock,
      rates: element.rates,
      sales: element.sales,
      totalQuantity: element.sum,
      total: element.sumreminder,
      sellingRate: element.rates
    });
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    if (salesMan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter Salesman",
      });
    } else {

      fetch(`${BasedURL}/shop/getBarFrontPageData?from=${moment(drDate).format('DD MMMM YYYY')}&to=${moment(drDate).add(1,'days').format('DD MMMM YYYY')}&page=0&pagesize=200`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie_token: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if(data.success===true){
            
            swal({
              title: "Are you sure?",
              text: `Data already present for same date`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                setIsLoading(true);
      try {
        const api1 = fetch(
          "https://insorty-api.onrender.com/shop/addBackPageReportData",
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
                ...dataDetails330,
                ...beerForm,
              ],
            }),
          }
        );

        const api2 = fetch(
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

              shopType: "BAR",
              entries: [
                ...pageFormData750,
                ...pageFormData375,
                ...pageFormData180,
                ...pageFormData30,
                ...otherMl,
                ...Ml30Data,
              ],
            }),
          }
        );

        const api3 = fetch(
          "https://insorty-api.onrender.com/shop/addBarSupplementsData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: barSuplementsData,
            }),
          }
        );

        Promise.all([api1, api2, api3])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            console.log(data)
            if (
              data[0].success === true &&
              data[1].success === true &&
              data[2].success === true
            ) {
              let FrontPageBear = {
                date: drDate,
                salesmen: salesMan,
                wineReport: data[1].data._id,
                beerReport: data[0].data._id,
                barSupplements: data[2].data._id,
              };

              fetch(
                "https://insorty-api.onrender.com/shop/addBarFrontPageData",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    cookie_token: token,
                  },
                  body: JSON.stringify(FrontPageBear),
                }
              )
                .then((res) => res.json())
                .then((data1) => {
                  if (data1.success === true) {
                    Swal.fire({
                      icon: "success",
                      title: "Success",
                      text: "Data Saved Successfully",
                    });
                    localStorage.removeItem("backFirst");
                    localStorage.removeItem("newBeer");
                    localStorage.removeItem("pegForm");
                    localStorage.removeItem("smallPegForm");
                    localStorage.removeItem("barSuplements");
                    
                  }
                });
            } else {
              let error = []
              data.map((err)=>{
                if(err.success===false){

                  error.push(err.message)
                  

                }
                return null
              })
              
              if (error.length > 0) {
                Swal.fire({
                  title: "Error",
                  html: error.map((err,index)=>{return `<p><b>${index+1}. </b> ${err} </p>`}),
                  icon: "error",
                });
            }
          
              
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
              } else {
                swal("not submitted");
              }
            });
          }
          else{
            setIsLoading(true);
      try {
        const api1 = fetch(
          "https://insorty-api.onrender.com/shop/addBackPageReportData",
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
                ...dataDetails330,
                ...beerForm,
              ],
            }),
          }
        );

        const api2 = fetch(
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

              shopType: "BAR",
              entries: [
                ...pageFormData750,
                ...pageFormData375,
                ...pageFormData180,
                ...pageFormData30,
                ...otherMl,
                ...Ml30Data,
              ],
            }),
          }
        );

        const api3 = fetch(
          "https://insorty-api.onrender.com/shop/addBarSupplementsData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: barSuplementsData,
            }),
          }
        );

        Promise.all([api1, api2, api3])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            console.log(data)
            if (
              data[0].success === true &&
              data[1].success === true &&
              data[2].success === true
            ) {
              let FrontPageBear = {
                date: drDate,
                salesmen: salesMan,
                wineReport: data[1].data._id,
                beerReport: data[0].data._id,
                barSupplements: data[2].data._id,
              };

              fetch(
                "https://insorty-api.onrender.com/shop/addBarFrontPageData",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    cookie_token: token,
                  },
                  body: JSON.stringify(FrontPageBear),
                }
              )
                .then((res) => res.json())
                .then((data1) => {
                  if (data1.success === true) {
                    Swal.fire({
                      icon: "success",
                      title: "Success",
                      text: "Data Saved Successfully",
                    });
                    localStorage.removeItem("backFirst");
                    localStorage.removeItem("newBeer");
                    localStorage.removeItem("pegForm");
                    localStorage.removeItem("smallPegForm");
                    localStorage.removeItem("barSuplements");
                    
                  }
                });
            } else {
              let error = []
              data.map((err)=>{
                if(err.success===false){

                  error.push(err.message)
                  

                }
                return null
              })
              
              if (error.length > 0) {
                Swal.fire({
                  title: "Error",
                  html: error.map((err,index)=>{return `<p><b>${index+1}. </b> ${err} </p>`}),
                  icon: "error",
                });
            }
          
              
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
        });
    }
   
  };

  return {
    handelSubmit,
    isLoadingSubmit,
  };
};

export default useHandleSubmiBeerShopFront;

