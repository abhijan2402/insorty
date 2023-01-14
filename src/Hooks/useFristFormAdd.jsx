// import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const useFristFormAdd = () => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);

  // ======================== add five in frist form ======================== backPageReportData
  const fristFormObj = {
    brandName: "", //brandName

    averageRate650: 0,
    averageRate550: 0,
    averageRate330: 0,

    startingStock650: 0, //initialStock650  650=650 330=550 180=330
    startingStock550: 0, //initialStock330
    startingStock330: 0, //initialStock180  /done

    incomingPurchase650: 0, //purchaseShop.purchaseShop650
    incomingPurchase550: 0, //purchaseShop.purchaseShop330
    incomingPurchase330: 0, //purchaseShop.purchaseShop180 /done

    buyRate650: 0, //purchaseShop.purchaseShopRate650
    buyRate550: 0, //purchaseShop.purchaseShopRate330
    buyRate330: 0, //purchaseShop.purchaseShopRate180  /done

    incomePurchase650: 0, //purchaseOutSide.purchaseOutSide650
    incomePurchase550: 0, //purchaseOutSide.purchaseOutSide330
    incomePurchase330: 0, //purchaseOutSide.purchaseOutSide180

    purchaseRate650: 0, //purchaseOutSide.purchaseShopRate650
    purchaseRate550: 0, //purchaseOutSide.purchaseShopRate330
    purchaseRate330: 0, //purchaseOutSide.purchaseShopRate180

    inflowCredit650: 0, //purchaseBorrow/purchaseBorrow650
    inflowCredit550: 0, //purchaseBorrow.purchaseBorrow330
    inflowCredit330: 0, //purchaseBorrow.purchaseBorrow180

    sending650: 0, //sendingBhejan.sendingBhejan650
    sending550: 0, //sendingBhejan.sendingBhejan330
    sending330: 0, //sendingBhejan.sendingBhejan180

    sumRemainder650: 0,
    sumRemainder550: 0,
    sumRemainder330: 0,

    closingStock650: 0, //lastStock.lastStock650
    closingStock550: 0, //lastStock.lastStock330
    closingStock330: 0, //lastStock.lastStock180

    sales650: 0,
    sales550: 0,
    sales330: 0,

    mainRate650: 0, //soldRate.soldRate650
    mainRate550: 0, //soldRate.soldRate330
    mainRate330: 0, //soldRate.soldRate180

    total650: 0,
    total550: 0,
    total330: 0,

    grandTotal: "",
  };

  const [fristFormState, setFristFormState] = useState([fristFormObj]);

  const addFiveInFristFormHandler = () => {
    let data = fristFormState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
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
        },
      ];
    }
    setFristFormState(data);
  };

  // ======================== add five in frist form ========================

  // ======================== add One in frist form ========================

  const addOneInFristFormHandler = () => {
    setFristFormState([
      ...fristFormState,
      {
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
      },
    ]);
  };

  const [totalState, setTotalState] = useState({
    startingStock650Total: "",
    startingStock550Total: 0,
    startingStock330Total: 0,
    incomingPurchase650Total: 0,
    incomingPurchase550Total: 0,
    incomingPurchase330Total: 0,
    incomePurchase650Total: 0,
    incomePurchase550Total: 0,
    incomePurchase330Total: 0,
    inflowCredit650Total: 0,
    inflowCredit550Total: 0,
    inflowCredit330Total: 0,

    sending650Total: 0,
    sending550Total: 0,
    sending330Total: 0,

    sumRemainder650Total: 0,
    sumRemainder550Total: 0,
    sumRemainder330Total: 0,

    closingStock650Total: 0,
    closingStock550Total: 0,
    closingStock330Total: 0,

    sales650Total: 0,
    sales550Total: 0,
    sales330Total: 0,

    total650Total: 0,
    total550Total: 0,
    total330Total: 0,

    allGrandTotal: 0,
  });

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

    const sale550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder550" ||
          e.target.name === "closingStock550"
        ) {
          obj.sales550 =
            Number(obj.sumRemainder650) - Number(obj.closingStock650);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(sale550);

    const sale330 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder330" ||
          e.target.name === "closingStock330"
        ) {
          obj.sales330 =
            Number(obj.sumRemainder550) - Number(obj.closingStock550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(sale330);

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

    const saleTotal550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales550" || e.target.name === "mainRate550") {
          obj.total550 = Number(obj.sales550) * Number(obj.mainRate550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal550);

    const saleTotal330 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales330" || e.target.name === "mainRate330") {
          obj.total330 = Number(obj.sales330) * Number(obj.mainRate330);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal330);

    const grandT = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sales650" ||
          e.target.name === "mainRate650" ||
          e.target.name === "sales550" ||
          e.target.name === "mainRate550" ||
          e.target.name === "sales330" ||
          e.target.name === "mainRate330"
        ) {
          obj.grandTotal =
            Number(obj.sales650) * Number(obj.mainRate650) +
            Number(obj.sales550) * Number(obj.mainRate550) +
            Number(obj.sales330) * Number(obj.mainRate330);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(grandT);

    let obj1 = totalState;
    obj1.startingStock650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock650)),
      0
    );
    setTotalState(obj1);

    let obj2 = totalState;
    obj2.startingStock550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock550)),
      0
    );
    setTotalState(obj2);

    let obj3 = totalState;
    obj3.startingStock330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock330)),
      0
    );
    setTotalState(obj3);

    let obj4 = totalState;
    obj4.incomingPurchase650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase650)),
      0
    );
    setTotalState(obj4);

    let obj5 = totalState;
    obj5.incomingPurchase550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase550)),
      0
    );
    setTotalState(obj5);

    let obj6 = totalState;
    obj6.incomingPurchase330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase330)),
      0
    );
    setTotalState(obj6);

    let obj7 = totalState;
    obj7.incomePurchase650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase650)),
      0
    );
    setTotalState(obj7);

    let obj8 = totalState;
    obj8.incomePurchase550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase550)),
      0
    );
    setTotalState(obj8);

    let obj9 = totalState;
    obj9.incomePurchase330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase330)),
      0
    );
    setTotalState(obj9);

    let obj10 = totalState;
    obj10.inflowCredit650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit650)),
      0
    );
    setTotalState(obj10);

    let obj11 = totalState;
    obj11.inflowCredit550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit550)),
      0
    );
    setTotalState(obj11);

    let obj12 = totalState;
    obj12.inflowCredit330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit330)),
      0
    );
    setTotalState(obj12);

    let obj13 = totalState;
    obj13.sending650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending650)),
      0
    );
    setTotalState(obj13);

    let obj14 = totalState;
    obj14.sending550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending550)),
      0
    );
    setTotalState(obj14);

    let obj15 = totalState;
    obj15.sending330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending330)),
      0
    );
    setTotalState(obj15);

    let obj16 = totalState;
    obj16.sumRemainder650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder650)),
      0
    );
    setTotalState(obj16);

    let obj17 = totalState;
    obj17.sumRemainder550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder550)),
      0
    );
    setTotalState(obj17);

    let obj18 = totalState;
    obj18.sumRemainder330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder330)),
      0
    );
    setTotalState(obj18);

    let obj19 = totalState;
    obj19.closingStock650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock650)),
      0
    );
    setTotalState(obj19);

    let obj20 = totalState;
    obj20.closingStock550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock550)),
      0
    );
    setTotalState(obj20);

    let obj21 = totalState;
    obj21.closingStock330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock330)),
      0
    );
    setTotalState(obj21);

    let obj22 = totalState;
    obj22.sales650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales650)),
      0
    );
    setTotalState(obj22);

    let obj23 = totalState;
    obj23.sales550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales550)),
      0
    );
    setTotalState(obj23);

    let obj24 = totalState;
    obj24.sales330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales330)),
      0
    );
    setTotalState(obj24);

    let obj25 = totalState;
    obj25.total650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total650)),
      0
    );
    setTotalState(obj25);

    let obj26 = totalState;
    obj26.total550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total550)),
      0
    );
    setTotalState(obj26);

    let obj27 = totalState;
    obj27.total330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total330)),
      0
    );
    setTotalState(obj27);

    let obj28 = totalState;
    obj28.allGrandTotal = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.grandTotal),
      0
    );
    setTotalState(obj28);
  };

  const handelSubmitFristFormBack = async (e) => {
    setIsLoading(true);

    const dataDetails = [];

    for (let index = 0; index < fristFormState.length; index++) {
      const element = fristFormState[index];
      dataDetails.push({
        brandName: element.brandName,
        initialStock: {
          initialStock650: element.startingStock650,
          initialStock550: element.startingStock550,
          initialStock330: element.startingStock330,
        },
        purchaseShop: {
          purchaseShop650: element.incomingPurchase650,
          purchaseShop550: element.incomingPurchase550,
          purchaseShop330: element.incomingPurchase330,
          purchaseShopRate650: element.buyRate650,
          purchaseShopRate550: element.buyRate550,
          purchaseShopRate330: element.buyRate330,
        },

        purchaseOutSide: {
          purchaseOutSide650: element.incomePurchase650,
          purchaseOutSide550: element.incomePurchase550,
          purchaseOutSide330: element.incomePurchase330,
          purchaseOutSideRate650: element.purchaseRate650,
          purchaseOutSideRate550: element.purchaseRate550,
          purchaseOutSideRate330: element.purchaseRate330,
        },

        purchaseBorrow: {
          purchaseBorrow650: element.inflowCredit650,
          purchaseBorrow550: element.inflowCredit550,
          purchaseBorrow330: element.inflowCredit330,
        },

        sendingBhejan: {
          sendingBhejan650: element.sending650,
          sendingBhejan550: element.sending550,
          sendingBhejan330: element.sending330,
        },

        lastStock: {
          lastStock650: element.closingStock650,
          lastStock550: element.closingStock550,
          lastStock330: element.closingStock330,
        },

        soldRate: {
          soldRate650: element.mainRate650,
          soldRate550: element.mainRate550,
          soldRate330: element.mainRate330,
        },
      });
    }

    try {
      const response = await fetch(
        "https://insorty-api.onrender.com/shop/backPageReportData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ dataDetails }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Added successfully",
        });
      }
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
  };

  // ======>

  // ======================== onChange  ========================

  return {
    addFiveInFristFormHandler,
    addOneInFristFormHandler,
    fristFormState,
    handelSubmitFristFormBack,
    onChangeFristBackFormHandler,
    totalState,
    isLoading,
  };
};

export default useFristFormAdd;
