import { useState } from "react";

const useFristFormAdd = () => {
  // ======================== add five in frist form ========================
  const fristFormObj = {
    brandName: "",

    averageRate650: 0,
    averageRate550: 0,
    averageRate330: 0,

    startingStock650: 0,
    startingStock550: 0,
    startingStock330: 0,

    incomingPurchase650: 0,
    incomingPurchase550: 0,
    incomingPurchase330: 0,

    buyRate650: 0,
    buyRate550: 0,
    buyRate330: 0,

    incomePurchase650: 0,
    incomePurchase550: 0,
    incomePurchase330: 0,

    purchaseRate650: 0,
    purchaseRate550: 0,
    purchaseRate330: 0,

    inflowCredit650: 0,
    inflowCredit550: 0,
    inflowCredit330: 0,

    sending650: 0,
    sending550: 0,
    sending330: 0,

    sumRemainder650: 0,
    sumRemainder550: 0,
    sumRemainder330: 0,

    closingStock650: 0,
    closingStock550: 0,
    closingStock330: 0,

    sales650: 0,
    sales550: 0,
    sales330: 0,

    mainRate650: 0,
    mainRate550: 0,
    mainRate330: 0,

    total650: 0,
    total550: 0,
    total330: 0,

    grandTotal: "",
  };

  const [fristFormState, setFristFormState] = useState([fristFormObj]);

  const addFiveInFristFormHandler = () => {
    setFristFormState([
      ...fristFormState,
      fristFormObj,
      fristFormObj,
      fristFormObj,
      fristFormObj,
      fristFormObj,
    ]);
  };

  // ======================== add five in frist form ========================

  // ======================== add One in frist form ========================

  const addOneInFristFormHandler = () => {
    setFristFormState([...fristFormState, fristFormObj]);
  };

  // ======================== add One in frist f0orm ========================

  // ======================== onChange  ========================

  const onChangeFristBackFormHandler = (e, index) => {
    const firstFormHandel = fristFormState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setFristFormState(firstFormHandel);

    // ****************************** Formula ******************************

    //************* Formula **************** */

    const handelavg650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate650" ||
          e.target.name === "buyRate650"
        ) {
          console.log(obj.averageRate650);
          obj.averageRate650 =
            (Number(obj.purchaseRate650) + Number(obj.buyRate650)) / 2;
          console.log(obj.averageRate650);
        }
        return obj;
      } else return returned;
    });
    setFristFormState(handelavg650);

    const handelavg330 = fristFormState.map((returned, i) => {
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
    setFristFormState(handelavg330);

    const handelavg550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate550" ||
          e.target.name === "buyRate550"
        ) {
          obj.averageRate550 =
            (Number(obj.purchaseRate550) + Number(obj.buyRate550)) / 2;
        }
        return obj;
      } else return returned;
    });
    setFristFormState(handelavg550);

    const yog650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock650" ||
          e.target.name === "incomingPurchase650" ||
          e.target.name === "inflowCredit650" ||
          e.target.name === "incomePurchase650" ||
          e.target.name === "sending650"
        ) {
          obj.sumRemainder650 =
            Number(obj.startingStock650) +
            Number(obj.incomingPurchase650) +
            Number(obj.inflowCredit650) +
            Number(obj.incomePurchase650) -
            Number(obj.sending650);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(yog650);

    const yog330 = fristFormState.map((returned, i) => {
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

    setFristFormState(yog330);

    const yog550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock550" ||
          e.target.name === "incomingPurchase550" ||
          e.target.name === "inflowCredit550" ||
          e.target.name === "incomePurchase550" ||
          e.target.name === "sending550"
        ) {
          obj.sumRemainder550 =
            Number(obj.startingStock550) +
            Number(obj.incomingPurchase550) +
            Number(obj.inflowCredit550) +
            Number(obj.incomePurchase550) -
            Number(obj.sending550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(yog550);

    const sale650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumremainder650" ||
          e.target.name === "closingStock650"
        ) {
          obj.sales650 =
            Number(obj.sumRemainder650) - Number(obj.closingStock650);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(sale650);

    const sale330 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumremainder330" ||
          e.target.name === "closingStock330"
        ) {
          obj.sales330 =
            Number(obj.sumRemainder550) - Number(obj.closingStock550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(sale330);

    const sale550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumremainder550" ||
          e.target.name === "closingStock550"
        ) {
          obj.sales550 =
            Number(obj.sumRemainder550) - Number(obj.closingStock550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(sale550);

    const saleTotal650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales650" || e.target.name === "mainRate650") {
          obj.total650 = Number(obj.sales650) * Number(obj.mainRate650);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal650);

    const saleTotal330 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales330" || e.target.name === "mainrate330") {
          obj.total330 = Number(obj.sales330) * Number(obj.mainRate330);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal330);

    const saleTotal550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales550" || e.target.name === "mainrate550") {
          obj.total650 = Number(obj.sales550) * Number(obj.mainRate550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal550);

    const grandT = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "total&50" ||
          e.target.name === "total330" ||
          e.target.name === "total550"
        ) {
          obj.grandTotal =
            Number(obj.total650) + Number(obj.total550) + Number(obj.total550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(grandT);

    const startingStock650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.startingStock650),
      0
    );

    const startingStock330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.startingStock330),
      0
    );

    const startingStock550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.startingStock550),
      0
    );

    const incomingPurchase650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomingPurchase650),
      0
    );

    const incomingPurchase330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomingPurchase330),
      0
    );

    const incomingPurchase550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomingPurchase550),
      0
    );

    const incomePurchase650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomePurchase650),
      0
    );

    const incomePurchase330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomePurchase330),
      0
    );

    const incomePurchase550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.incomePurchase550),
      0
    );
  };

  const handelSubmitFristFormBack = (e) => {
    const addFristForm = Object.assign({}, fristFormState);
    console.log(addFristForm);
  };

  // ======================== onChange  ========================

  return {
    addFiveInFristFormHandler,
    addOneInFristFormHandler,
    fristFormState,
    handelSubmitFristFormBack,
    onChangeFristBackFormHandler,
  };
};

export default useFristFormAdd;
