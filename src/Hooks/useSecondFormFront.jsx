import { useState,useEffect } from "react";

const useSecondFormFront = () => {
  const addOneSecondForm = {
    averageRate: 0,
    startingStock: 0, //initialStock
    incomingPurchase: 0, //purchaseShop.purchaseShopNum
    buyRate: 0, //purchaseShop.purchaseShopRate
    incomePurchase: 0, //purchaseOutSide.purchaseOutSideNum
    purchaseRate: 0, //purchaseOutSide.purchaseOutSideRate
    inflowCredit: 0, //purchaseBorrow
    sending: 0, //sendingBhejan
    sumRemainder: 0,
    closingStock: 0, //lastStock
    sales: 0,
    mainRate: 0, //soldRate
    total: 0,
    grandTotal: 0,
    selectStockVarient: 90, //ml
  };

  const [addOneSecondFormState, setAddOneSecondFormState] = useState([
    addOneSecondForm,
  ]);


  const prevdata = JSON.parse(localStorage.getItem('mlForm'))

  useEffect(() => {
    if (prevdata) {
      setAddOneSecondFormState(prevdata)
    }
  }, []);

  const addOneSecondFormHandler = () => {
    setAddOneSecondFormState([
      ...addOneSecondFormState,
      {
        averageRate: 0,
        startingStock: 0, // openingStock
        incomingPurchase: 0,
        buyRate: 0,
        incomePurchase: 0,
        purchaseRate: 0,
        inflowCredit: 0,
        sending: 0,
        sumRemainder: 0,
        closingStock: 0,
        sales: 0,
        mainRate: 0,
        total: 0,
        grandTotal: 0,
        selectStockVarient: 90,
      },
    ]);
  };

  const handelSeconFormOnChange = (e, index) => {
    const secondFormHandel = addOneSecondFormState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setAddOneSecondFormState(secondFormHandel);
    // **********************formula******************

    /* 
       
         const saleTotal = addRmlState.map((returned, i) => {
          if (index === i) {
            let obj = Object.assign(returned, { [e.target.name]: e.target.value });
            if (e.target.name === "sales" || e.target.name === "rate") {
              obj.cost = Number(obj.sales) * Number(obj.rate);
            }
            return obj;
          } else return returned;
        });
    
        */

    const handelavg = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (e.target.name === "purchaseRate" || e.target.name === "buyRate") {
          obj.averageRate =
            (Number(obj.purchaseRate) + Number(obj.buyRate)) / 2;
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(handelavg);

    const yog = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock" ||
          e.target.name === "incomingPurchase" ||
          e.target.name === "inflowCredit" ||
          e.target.name === "incomePurchase" ||
          e.target.name === "sending"
        ) {
          obj.sumRemainder =
            Number(obj.startingStock) +
            Number(obj.incomingPurchase) +
            Number(obj.inflowCredit) +
            Number(obj.incomePurchase) -
            Number(obj.sending);
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(yog);

    const sales = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder" ||
          e.target.name === "closingStock"
        ) {
          obj.sales = Number(obj.sumRemainder) - Number(obj.closingStock);
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(sales);

    const totals = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales" || e.target.name === "mainRate") {
          obj.total = Number(obj.sales) * Number(obj.mainRate);
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(totals);

    localStorage.setItem("mlForm",JSON.stringify(addOneSecondFormState))
    localStorage.setItem("mlFormTotal", JSON.stringify(addOneSecondFormState.reduce(
      (totals, currentItem) =>
        (totals = totals + Number(currentItem.total)),
      0
    )))
  };


  
  return {
    addOneSecondFormState,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
  };
};

export default useSecondFormFront;
