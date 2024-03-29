import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { DataContextApi } from "../../Context/DataContext";
import moment from "moment";
import swal from "sweetalert";

const useHandelSubmitBackAPI = (shopType) => {
  const token = localStorage.getItem("token");
  const [isLoadingSubmit, setIsLoading] = useState(false);
  const { intoAccountState, paidDues } = useContext(DataContextApi);
  const rmlFieldsData = JSON.parse(localStorage.getItem("rml"));
  const beerTotal = JSON.parse(localStorage.getItem("totalFirstBack"));
  const purchaseOutside = JSON.parse(localStorage.getItem("purchases"));
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  const paymentRecieved = JSON.parse(localStorage.getItem("paymentRecieved"));
  const borrow = JSON.parse(localStorage.getItem("bhejan"));
  const send = JSON.parse(localStorage.getItem("borrow"));
  const backFirst = JSON.parse(localStorage.getItem("firstBack"));
  const newBeer = JSON.parse(localStorage.getItem("BeerForm"));
  const credit = JSON.parse(localStorage.getItem("credit"));
  const [errors,setErrors] = useState([])
  const BasedURL = process.env.REACT_APP_API_URL;



  const { salesMan, drDate } = useContext(DataContextApi);

  const borrowCashReturnData = [];
  for (
    let index = 0;
    paymentRecieved ? index < paymentRecieved.length : 0;
    index++
  ) {
    const element = paymentRecieved[index];

    if (element.type === "OTHER") {
      borrowCashReturnData.push({
        comment: element.comment,
        cash: element.amount,
        type: element.type,
      });
    } else {
      borrowCashReturnData.push({
        comment: element.comment,
        from: element.id,
        cash: element.amount,
        type: element.type,
      });
    }
  }

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
        (elem) => elem.quantityInML === Number(element.selectStockVarient)
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

  const addRmlData = [];

  for (
    let index = 0;
    rmlFieldsData ? index < rmlFieldsData.length : 0;
    index++
  ) {
    const element = rmlFieldsData[index];
    addRmlData.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === Number(element.ml)
      )?._id, 
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

  const purchaseOutSideData = [];
  for (
    let index = 0;
    purchaseOutside ? index < purchaseOutside.length : 0;
    index++
  ) {
    const element = purchaseOutside[index];
    purchaseOutSideData.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === element.quantity
      )?._id,
      party: element.partyId,
      number: element.theNumber,
      ml: element.quantity,
      rate: element.rate,
      total: element.total,
      comment: element.reason,
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

  for (let index = 0; credit ? index < credit.length : 0; index++) {
    const element = credit[index];

    entriesBorrow.push({
      type: element.partyType,
      from: element.partyId,
      amount: element.amount,
      comment: element.note,
    });
  }

  const firstformData = JSON.parse(localStorage.getItem("firstFrontTotal"));
  const secondFront = JSON.parse(localStorage.getItem("mlFormTotal"));
  const fourthFront = localStorage.getItem("rmlTotal")
    ? JSON.parse(localStorage.getItem("rmlTotal"))
    : null;
  const fifthFront = localStorage.getItem("totalPaymentsRecieved")
    ? JSON.parse(localStorage.getItem("totalPaymentsRecieved"))
    : null;
  const sixthFront = localStorage.getItem("udhaariTotal")
    ? JSON.parse(localStorage.getItem("udhaariTotal"))
    : null;
  const seventhFront = JSON.parse(localStorage.getItem("commisionTotal"));
  const beerFormTotal = JSON.parse(localStorage.getItem("beerFormTotal"));
  const pichlaBakaya = 0;

  const english = (Number(firstformData) || 0) + (Number(secondFront) || 0);
  const beer = (Number(beerTotal) || 0) + (Number(beerFormTotal) || 0);
  const rmlData = fourthFront ? fourthFront : 0;
  const totalSell =
    (Number(fourthFront) || 0) +
    (Number(beerTotal) || 0) +
    (Number(firstformData) || 0) +
    (Number(secondFront) || 0) +
    (Number(beerFormTotal) || 0);
  const borrowedCashReturn = fifthFront ? fifthFront : 0;
  const intoAccount = intoAccountState ? intoAccountState : 0;
  const borrowed = sixthFront ? sixthFront : 0;
  const commission = seventhFront ? seventhFront : 0;
  const previousDues = pichlaBakaya ? pichlaBakaya : 0;
  const todaysPayment = paidDues ? paidDues : 0;
  const restAmount =
    Number(fourthFront) ||
    0 + Number(beerTotal) ||
    0 + Number(firstformData) ||
    0 + Number(beerFormTotal) ||
    0 + Number(secondFront) ||
    0 + Number(fifthFront) ||
    0 - Number(intoAccountState) ||
    0 - Number(sixthFront) ||
    0 - Number(seventhFront) ||
    0 + Number(pichlaBakaya) ||
    0 - Number(paidDues) ||
    0;

  const addSendingData = [];
  for (let index = 0; send ? index < send.length : 0; index++) {
    const element = send[index];
    addSendingData.push({
      liquor: element.size.sizes.find(
        (elem) => elem.quantityInML === element.quantity
      )?._id,
      party: element.partyId,
      number: element.theNumber,

      comment: element.reason,
    });
  }

  const addPurchesBorrowData = [];
  for (let index = 0; borrow ? index < borrow.length : 0; index++) {
    const element = borrow[index];
    addPurchesBorrowData.push({
      liquor:element.size.sizes.find(
        (elem) => elem.quantityInML === element.quantity
      )?._id,
      party: element.partyId,
      number: element.theNumber,
      comment: element.comment,
    });
  }

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (salesMan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter Salesman",
      });
    } 
      else {

        fetch(`${BasedURL}/shop/getBackPageData?from=${moment(drDate).format('DD MMMM YYYY')}&to=${moment(drDate).add(1,'days').format('DD MMMM YYYY')}&page=0&pagesize=200`, {
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
        const api2 = fetch(
          "https://insorty-api.onrender.com/shop/addBackPageRMLData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: addRmlData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );
        const api4 = fetch(
          "https://insorty-api.onrender.com/shop/addTotalExpensesData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "SHOP",
              entries: entriesExpances,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api8 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "SHOP",
              entries: entriesBorrow,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api9 = fetch(
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
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api3 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseOutsideData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              shopType: "SHOP",
              salesmen: salesMan,
              entries: purchaseOutSideData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api5 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedCashReturnData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "SHOP",
              entries: borrowCashReturnData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api7 = fetch(
          "https://insorty-api.onrender.com/shop/addSendData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: addSendingData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api6 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseBorrowData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: addPurchesBorrowData,
              shopType: "SHOP",
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

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

        Promise.all([api1, api2, api3, api4, api5, api6, api7, api8, api9])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            console.log(data);

            if (
              data[0].success === true &&
              data[1].success === true &&
              data[2].success === true &&
              data[3].success === true &&
              data[4].success === true &&
              data[5].success === true &&
              data[6].success === true &&
              data[7].success === true &&
              data[8].success === true
            ) {
              let BackPage = {
                dailyReport: data[0]?.data?._id,
                RML: data[1]?.data?._id,
                purchaseOutSide: data[2].data._id,
                totalExpense: data[3].data._id,
                borrowedCashReturn: data[4].data._id,
                purchaseBorrow: data[5].data._id,
                send: data[6].data._id,
                borrowed: data[7].data._id,
                finalReport: data[8].data._id,
              };
             



              fetch("https://insorty-api.onrender.com/shop/addBackPageData", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  cookie_token: token,
                },
                body: JSON.stringify(BackPage),
              })
                .then((res) => res.json())
                .then((data1) => {
                  if (data1.success === true) {
                    Swal.fire({
                      icon: "success",
                      title: "Success",
                      text: "Data Saved Successfully",
                    });
                    localStorage.removeItem("firstFront");
                    localStorage.removeItem("firstBack");
                    localStorage.removeItem("purchases");
                    localStorage.removeItem("mlForm");
                    localStorage.removeItem("credit");
                    localStorage.removeItem("expenses");
                    localStorage.removeItem("paymentRecieved");
                    localStorage.removeItem("borrow");
                    localStorage.removeItem("rml");
                    localStorage.removeItem("BeerForm");
                    localStorage.removeItem("bhejan");
                    localStorage.removeItem("drDate");
                    localStorage.removeItem("creditTotal");
                    localStorage.removeItem("salesMan");
                    localStorage.removeItem("totalExpenses");
                    localStorage.removeItem("totalFirstBack");
                    localStorage.removeItem("totalPaymentsRecieved");
                    localStorage.removeItem("rmlTotal");
                    localStorage.removeItem("purchasesTotal");
                    localStorage.removeItem("beerTotal");
                    localStorage.removeItem("pichlaBakaya");
                    localStorage.removeItem("commisionTotal");
                    localStorage.removeItem("totalBorrow");
                    localStorage.removeItem("beerFormTotal");
                    localStorage.removeItem("udhaariTotal");
                    localStorage.removeItem("mlFormTotal");
                    localStorage.removeItem("firstFrontTotal");
                  } 
                })
                .catch((err)=>{
                  const errorMessage = err.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
                });
            } 
            else{
              let error = [...errors]
              data.map((err)=>{
                if(err.success===false){

                  error.push(err.error.message)
                  

                }
                return null
              })
              
              setErrors(error)
              if (error.length > 0) {
                Swal.fire({
                  title: "Error",
                  html: error.map((err,index)=>{return `<p><b>${index+1}. </b> ${err} </p>`}),
                  icon: "error",
                });

                let BackPage = {
                  dailyReport:data[0].success===true ? data[0]?.data?._id : "",
                  RML:data[0].success===true ?  data[1]?.data?._id : "",
                  purchaseOutSide: data[0].success===true ? data[2].data._id : "",
                  totalExpense: data[0].success===true ? data[3].data._id : "",
                  borrowedCashReturn: data[0].success===true ? data[4].data._id : "",
                  purchaseBorrow: data[0].success===true ? data[5].data._id : "",
                  send: data[0].success===true ? data[6].data._id : "",
                  borrowed: data[0].success===true ? data[7].data._id : "",
                  finalReport: data[0].success===true ?  data[8].data._id : "",
                };
               
  
  
  
                fetch("https://insorty-api.onrender.com/shop/addBackPageData", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    cookie_token: token,
                  },
                  body: JSON.stringify(BackPage),
                })
                  .then((res) => res.json())
                  .then((data1) => {
                    if (data1.success === true) {
                      console.log(data1.success)
                      
                    } 
                  })
                  .catch((err)=>{
                    const errorMessage = err.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
          });
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
                  setIsLoading(false)
                  swal("not submitted");
                }
              });
            }
            else{
              setIsLoading(true);
      try {
        const api2 = fetch(
          "https://insorty-api.onrender.com/shop/addBackPageRMLData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: addRmlData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );
        const api4 = fetch(
          "https://insorty-api.onrender.com/shop/addTotalExpensesData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "SHOP",
              entries: entriesExpances,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api8 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "SHOP",
              entries: entriesBorrow,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api9 = fetch(
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
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api3 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseOutsideData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              shopType: "SHOP",
              salesmen: salesMan,
              entries: purchaseOutSideData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api5 = fetch(
          "https://insorty-api.onrender.com/shop/addBorrowedCashReturnData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              shopType: "SHOP",
              entries: borrowCashReturnData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api7 = fetch(
          "https://insorty-api.onrender.com/shop/addSendData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: addSendingData,
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

        const api6 = fetch(
          "https://insorty-api.onrender.com/shop/addPurchaseBorrowData",
          {
            method: "POST",
            body: JSON.stringify({
              date: drDate,
              salesmen: salesMan,
              entries: addPurchesBorrowData,
              shopType: "SHOP",
            }),
            headers: {
              "Content-Type": "application/json",
              cookie_token: token,
            },
          }
        );

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

        Promise.all([api1, api2, api3, api4, api5, api6, api7, api8, api9])
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            console.log(data);

            if (
              data[0].success === true &&
              data[1].success === true &&
              data[2].success === true &&
              data[3].success === true &&
              data[4].success === true &&
              data[5].success === true &&
              data[6].success === true &&
              data[7].success === true &&
              data[8].success === true
            ) {
              let BackPage = {
                date: drDate,
                dailyReport: data[0]?.data?._id,
                RML: data[1]?.data?._id,
                purchaseOutSide: data[2].data._id,
                totalExpense: data[3].data._id,
                borrowedCashReturn: data[4].data._id,
                purchaseBorrow: data[5].data._id,
                send: data[6].data._id,
                borrowed: data[7].data._id,
                finalReport: data[8].data._id,
              };
             



              fetch("https://insorty-api.onrender.com/shop/addBackPageData", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  cookie_token: token,
                },
                body: JSON.stringify(BackPage),
              })
                .then((res) => res.json())
                .then((data1) => {
                  if (data1.success === true) {
                    console.log(data1)
                    Swal.fire({
                      icon: "success",
                      title: "Success",
                      text: "Data Saved Successfully",
                    });
                   localStorage.clear()
                   localStorage.setItem('token', token)
                  } 
                })
                .catch((err)=>{
                  const errorMessage = err.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
                });
            } 
            else{
              let error = [...errors]
              data.map((err)=>{
                if(err.success===false){

                  error.push(err.error.message)
                  

                }
                return null
              })
              
              setErrors(error)
              if (error.length > 0) {
                Swal.fire({
                  title: "Error",
                  html: error.map((err,index)=>{return `<p><b>${index+1}. </b> ${err} </p>`}),
                  icon: "error",
                });

                let BackPage = {
                  date: drDate,
                  dailyReport:data[0].success===true ? data[0]?.data?._id : "",
                  RML:data[0].success===true ?  data[1]?.data?._id : "",
                  purchaseOutSide: data[0].success===true ? data[2].data._id : "",
                  totalExpense: data[0].success===true ? data[3].data._id : "",
                  borrowedCashReturn: data[0].success===true ? data[4].data._id : "",
                  purchaseBorrow: data[0].success===true ? data[5].data._id : "",
                  send: data[0].success===true ? data[6].data._id : "",
                  borrowed: data[0].success===true ? data[7].data._id : "",
                  finalReport: data[0].success===true ?  data[8].data._id : "",
                };
               
  
  
  
                fetch("https://insorty-api.onrender.com/shop/addBackPageData", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    cookie_token: token,
                  },
                  body: JSON.stringify(BackPage),
                })
                  .then((res) => res.json())
                  .then((data1) => {
                    if (data1.success === true) {
                      console.log(data1.success)
                      
                    } 
                  })
                  .catch((err)=>{
                    const errorMessage = err.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
          });
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
    handleSubmit,
    isLoadingSubmit,
  };
};

export default useHandelSubmitBackAPI;

// setIsLoading(true);
//       try {
//         const api2 = fetch(
//           "https://insorty-api.onrender.com/shop/addBackPageRMLData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               entries: addRmlData,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );
//         const api4 = fetch(
//           "https://insorty-api.onrender.com/shop/addTotalExpensesData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               shopType: "SHOP",
//               entries: entriesExpances,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );

//         const api8 = fetch(
//           "https://insorty-api.onrender.com/shop/addBorrowedData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               shopType: "SHOP",
//               entries: entriesBorrow,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );

//         const api9 = fetch(
//           "https://insorty-api.onrender.com/shop/addFinalReportData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               english: english,
//               beer: beer,
//               RML: rmlData,
//               totalSell: totalSell,
//               borrowedCashReturn: borrowedCashReturn,
//               intoAccount: intoAccount,
//               borrowed: borrowed,
//               commission: commission,
//               previousDues: previousDues,
//               todaysPayment: todaysPayment,
//               restAmount: restAmount,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );

//         const api3 = fetch(
//           "https://insorty-api.onrender.com/shop/addPurchaseOutsideData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               shopType: "SHOP",
//               salesmen: salesMan,
//               entries: purchaseOutSideData,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );

//         const api5 = fetch(
//           "https://insorty-api.onrender.com/shop/addBorrowedCashReturnData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               shopType: "SHOP",
//               entries: borrowCashReturnData,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );

//         const api7 = fetch(
//           "https://insorty-api.onrender.com/shop/addSendData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               entries: addSendingData,
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );

//         const api6 = fetch(
//           "https://insorty-api.onrender.com/shop/addPurchaseBorrowData",
//           {
//             method: "POST",
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               entries: addPurchesBorrowData,
//               shopType: "SHOP",
//             }),
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//           }
//         );

//         const api1 = fetch(
//           "https://insorty-api.onrender.com/shop/addBackPageReportData",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               cookie_token: token,
//             },
//             body: JSON.stringify({
//               date: drDate,
//               salesmen: salesMan,
//               entries: [
//                 ...dataDetails650,
//                 ...dataDetails550,
//                 ...dataDetails330,
//                 ...beerForm,
//               ],
//             }),
//           }
//         );

//         Promise.all([api1, api2, api3, api4, api5, api6, api7, api8, api9])
//           .then((responses) => Promise.all(responses.map((res) => res.json())))
//           .then((data) => {
//             console.log(data);

//             if (
//               data[0].success === true &&
//               data[1].success === true &&
//               data[2].success === true &&
//               data[3].success === true &&
//               data[4].success === true &&
//               data[5].success === true &&
//               data[6].success === true &&
//               data[7].success === true &&
//               data[8].success === true
//             ) {
//               let BackPage = {
//                 dailyReport: data[0]?.data?._id,
//                 RML: data[1]?.data?._id,
//                 purchaseOutSide: data[2].data._id,
//                 totalExpense: data[3].data._id,
//                 borrowedCashReturn: data[4].data._id,
//                 purchaseBorrow: data[5].data._id,
//                 send: data[6].data._id,
//                 borrowed: data[7].data._id,
//                 finalReport: data[8].data._id,
//               };
             



//               fetch("https://insorty-api.onrender.com/shop/addBackPageData", {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                   cookie_token: token,
//                 },
//                 body: JSON.stringify(BackPage),
//               })
//                 .then((res) => res.json())
//                 .then((data1) => {
//                   if (data1.success === true) {
//                     Swal.fire({
//                       icon: "success",
//                       title: "Success",
//                       text: "Data Saved Successfully",
//                     });
//                     localStorage.removeItem("firstFront");
//                     localStorage.removeItem("firstBack");
//                     localStorage.removeItem("purchases");
//                     localStorage.removeItem("mlForm");
//                     localStorage.removeItem("credit");
//                     localStorage.removeItem("expenses");
//                     localStorage.removeItem("paymentRecieved");
//                     localStorage.removeItem("borrow");
//                     localStorage.removeItem("rml");
//                     localStorage.removeItem("BeerForm");
//                     localStorage.removeItem("bhejan");
//                     localStorage.removeItem("drDate");
//                     localStorage.removeItem("creditTotal");
//                     localStorage.removeItem("salesMan");
//                     localStorage.removeItem("totalExpenses");
//                     localStorage.removeItem("totalFirstBack");
//                     localStorage.removeItem("totalPaymentsRecieved");
//                     localStorage.removeItem("rmlTotal");
//                     localStorage.removeItem("purchasesTotal");
//                     localStorage.removeItem("beerTotal");
//                     localStorage.removeItem("pichlaBakaya");
//                     localStorage.removeItem("commisionTotal");
//                     localStorage.removeItem("totalBorrow");
//                     localStorage.removeItem("beerFormTotal");
//                     localStorage.removeItem("udhaariTotal");
//                     localStorage.removeItem("mlFormTotal");
//                     localStorage.removeItem("firstFrontTotal");
//                   } 
//                 })
//                 .catch((err)=>{
//                   const errorMessage = err.message;
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: errorMessage,
//         });
//                 });
//             } 
//             else{
//               let error = [...errors]
//               data.map((err)=>{
//                 if(err.success===false){

//                   error.push(err.error.message)
                  

//                 }
//                 return null
//               })
              
//               setErrors(error)
//               if (error.length > 0) {
//                 Swal.fire({
//                   title: "Error",
//                   html: error.map((err,index)=>{return `<p><b>${index+1}. </b> ${err} </p>`}),
//                   icon: "error",
//                 });

//                 let BackPage = {
//                   dailyReport:data[0].success===true ? data[0]?.data?._id : "",
//                   RML:data[0].success===true ?  data[1]?.data?._id : "",
//                   purchaseOutSide: data[0].success===true ? data[2].data._id : "",
//                   totalExpense: data[0].success===true ? data[3].data._id : "",
//                   borrowedCashReturn: data[0].success===true ? data[4].data._id : "",
//                   purchaseBorrow: data[0].success===true ? data[5].data._id : "",
//                   send: data[0].success===true ? data[6].data._id : "",
//                   borrowed: data[0].success===true ? data[7].data._id : "",
//                   finalReport: data[0].success===true ?  data[8].data._id : "",
//                 };
               
  
  
  
//                 fetch("https://insorty-api.onrender.com/shop/addBackPageData", {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                     cookie_token: token,
//                   },
//                   body: JSON.stringify(BackPage),
//                 })
//                   .then((res) => res.json())
//                   .then((data1) => {
//                     if (data1.success === true) {
//                       console.log(data1.success)
                      
//                     } 
//                   })
//                   .catch((err)=>{
//                     const errorMessage = err.message;
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: errorMessage,
//           });
//                   });
//               }
//             }
           
//           });
//       } catch (error) {
//         const errorMessage = error.message;
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: errorMessage,
//         });
//       } finally {
        
//         setIsLoading(false);
//       }