import { useState, useEffect } from "react";
import useLiquors from "./useLiquors";

const useSecondFormFront = () => {
  const { liquors, brandsLoaded } = useLiquors();

  const addOneSecondForm = {
    liquor: "",
    brandName: "",
    averageRate: 0,
    startingStock: 0,
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
  };

  const [addOneSecondFormState, setAddOneSecondFormState] = useState([
    addOneSecondForm,
  ]);

  const prevdata = JSON.parse(localStorage.getItem("mlForm"));

  useEffect(() => {
    if (prevdata) {
      setAddOneSecondFormState(prevdata);
    }

    let firstFormData = addOneSecondFormState;

    if (!brandsLoaded && liquors.length > 0) {
      console.log("started");
      const liq = liquors.filter((item) => {
        if (item.type === "WINE") {
          return item;
        }
      });
      
      liq.map((parent) => {
        parent.sizes.map((item) => {
          if (
            item.quantityInML !== 750 &&
            item.quantityInML !== 330 &&
            item.quantityInML !== 180
            ) {
              console.log(parent)
            const newFormData = { ...addOneSecondForm };

            newFormData.brandName = parent.brandName
          newFormData.liquorID = parent._id
        newFormData.selectStockVarient = item.quantityInML
        newFormData.startingStock = item.currentStock
        firstFormData = [newFormData, ...firstFormData]
          setAddOneSecondFormState(firstFormData)          }
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandsLoaded]);

  
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

    localStorage.setItem("mlForm", JSON.stringify(addOneSecondFormState));
    localStorage.setItem(
      "mlFormTotal",
      JSON.stringify(
        addOneSecondFormState.reduce(
          (totals, currentItem) =>
            (totals = totals + Number(currentItem.total)),
          0
        )
      )
    );
  };

  return {
    addOneSecondFormState,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
  };
};

export default useSecondFormFront;
