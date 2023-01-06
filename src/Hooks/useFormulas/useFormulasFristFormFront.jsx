import { useState } from "react";

const useFormulasFristFormFront = () => {
  const addOneFristForm = {
    brandName: "",

    startingStock750: 0,
    startingStock330: 0,
    startingStock180: 0,

    incomingPurchase750: 0,
    incomingPurchase330: 0,
    incomingPurchase180: 0,

    buyRate750: 0,
    buyRate330: 0,
    buyRate180: 0,

    incomePurchase750: 0,
    incomePurchase330: 0,
    incomePurchase180: 0,

    purchaseRate750: 0,
    purchaseRate330: 0,
    purchaseRate180: 0,

    inflowCredit750: 0,
    inflowCredit330: 0,
    inflowCredit180: 0,

    sending750: 0,
    sending330: 0,
    sending180: 0,

    sumRemainder750: 0,
    sumRemainder330: 0,
    sumRemainder180: 0,

    closingStock750: 0,
    closingStock330: 0,
    closingStock180: 0,

    sales750: 0,
    sales330: 0,
    sales180: 0,

    mainRate750: 0,
    mainRate330: 0,
    mainRate180: 0,

    total750: 0,
    total330: 0,
    total180: 0,

    grandTotal: 0,

    averageRate750: 0,
    averageRate330: 0,
    averageRate180: 0,
  };

  const [addOneFristFormState, setAddOneFristFormState] = useState([
    addOneFristForm,
  ]);

  const handelFristFormOnChange = (e, index) => {
    //************* Formula **************** */
    const firstFormHandel = addOneFristFormState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setAddOneFristFormState(firstFormHandel);
    
    //************* Formula **************** */

    const handelavg750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate750" ||
          e.target.name === "buyRate750"
        ) {
          console.log(obj.averageRate750);
          obj.averageRate750 =
            (Number(obj.purchaseRate750) + Number(obj.buyRate750)) / 2;
          console.log(obj.averageRate750);
        }
        return obj;
      } else return returned;
    });
    setAddOneFristFormState(handelavg750);

    const handelavg330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate330" ||
          e.target.name === "buyRate330"
        ) {
          obj.averageRate330 =
            (Number(obj.purchaseRate330) + Number(obj.buyRate330)) / 2;
        }
        return obj;
      } else return returned;
    });
    setAddOneFristFormState(handelavg330);

    const handelavg180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate180" ||
          e.target.name === "buyRate180"
        ) {
          obj.averageRate180 =
            (Number(obj.purchaseRate180) + Number(obj.buyRate180)) / 2;
        }
        return obj;
      } else return returned;
    });
    setAddOneFristFormState(handelavg180);

    const yog750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock750" ||
          e.target.name === "incomingPurchase750" ||
          e.target.name === "inflowCredit750" ||
          e.target.name === "incomePurchase750" ||
          e.target.name === "sending750"
        ) {
          obj.sumRemainder750 =
            Number(obj.startingStock750) +
            Number(obj.incomingPurchase750) +
            Number(obj.inflowCredit750) +
            Number(obj.incomePurchase750) -
            Number(obj.sending750);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(yog750);

    const yog330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock330" ||
          e.target.name === "incomingPurchase330" ||
          e.target.name === "inflowCredit330" ||
          e.target.name === "incomePurchase330" ||
          e.target.name === "sending330"
        ) {
          obj.sumRemainder330 =
            Number(obj.startingStock330) +
            Number(obj.incomingPurchase330) +
            Number(obj.inflowCredit330) +
            Number(obj.incomePurchase330) -
            Number(obj.sending330);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(yog330);

    const yog180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock180" ||
          e.target.name === "incomingPurchase180" ||
          e.target.name === "inflowCredit180" ||
          e.target.name === "incomePurchase180" ||
          e.target.name === "sending180"
        ) {
          obj.sumRemainder180 =
            Number(obj.startingStock180) +
            Number(obj.incomingPurchase180) +
            Number(obj.inflowCredit180) +
            Number(obj.incomePurchase180) -
            Number(obj.sending180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(yog180);

    const sale750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumremainder750" ||
          e.target.name === "closingStock750"
        ) {
          obj.sales750 =
            Number(obj.sumRemainder750) - Number(obj.closingStock750);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(sale750);

    const sale330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumremainder330" ||
          e.target.name === "closingStock330"
        ) {
          obj.sales330 =
            Number(obj.sumRemainder180) - Number(obj.closingStock180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(sale330);

    const sale180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumremainder180" ||
          e.target.name === "closingStock180"
        ) {
          obj.sales180 =
            Number(obj.sumRemainder180) - Number(obj.closingStock180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(sale180);

    const saleTotal750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales750" || e.target.name === "mainRate750") {
          obj.total750 = Number(obj.sales750) * Number(obj.mainRate750);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(saleTotal750);

    const saleTotal330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales330" || e.target.name === "mainrate330") {
          obj.total330 = Number(obj.sales330) * Number(obj.mainRate330);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(saleTotal330);

    const saleTotal180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales180" || e.target.name === "mainrate180") {
          obj.total750 = Number(obj.sales180) * Number(obj.mainRate180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(saleTotal180);

    const grandT = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "total&50" ||
          e.target.name === "total330" ||
          e.target.name === "total180"
        ) {
          obj.grandTotal =
            Number(obj.total750) + Number(obj.total180) + Number(obj.total180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(grandT);

    const startingStock750Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.startingStock750),
      0
    );

    const startingStock330Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.startingStock330),
      0
    );

    const startingStock180Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.startingStock180),
      0
    );

    const incomingPurchase750Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomingPurchase750),
      0
    );

    const incomingPurchase330Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomingPurchase330),
      0
    );

    const incomingPurchase180Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomingPurchase180),
      0
    );

    const incomePurchase750Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomePurchase750),
      0
    );

    const incomePurchase330Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomePurchase330),
      0
    );

    const incomePurchase180Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomePurchase180),
      0
    );
  };

  const addFive = () => {
    setAddOneFristFormState([
      ...addOneFristFormState,
      addOneFristForm,
      addOneFristForm,
      addOneFristForm,
      addOneFristForm,
      addOneFristForm,
    ]);
  };

  const addOneFristFormHandler = () => {
    setAddOneFristFormState([...addOneFristFormState, addOneFristForm]);
  };

  return {
    addOneFristFormState,
    setAddOneFristFormState,
    handelFristFormOnChange,
    addOneFristFormHandler,
    addFive,
  };
};

export default useFormulasFristFormFront;
