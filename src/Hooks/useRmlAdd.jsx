import { useState } from "react";

// backPageRmlData

const useRmlAdd = () => {
  // const token = localStorage.getItem("token");

  const addRmlForm = {
    brandName: "", //brandName
    averageRate: 0,
    openingStock: 0, //initialStock
    incomingPurchase: 0, //purchaseShop.purchaseShopNum
    buyRate: 0, //purchaseShop.purchaseShopRate
    incomePurchase: 0, //purchaseOutSide.purchaseOutSideNum
    purchaseRate: 0, //purchaseOutSide.purchaseOutSideRate
    inflowCredit: 0, //purchaseBorrow
    sending: 0, //sendingBhejan
    sumRemainder: 0,
    closingStock: 0, //lastStock
    sales: 0,
    rate: 0, //soldRate
    cost: 0,
  };

  //
  const [addRmlState, setAddRmlState] = useState([addRmlForm]);

  const handelAddFiveInRml = () => {
    let data = addRmlState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          brandName: "",
          averageRate: 0,
          openingStock: 0,
          incomingPurchase: 0,
          buyRate: 0,
          incomePurchase: 0,
          purchaseRate: 0,
          inflowCredit: 0,
          sending: 0,
          sumRemainder: 0,
          closingStock: 0,
          sales: 0,
          rate: 0,
          cost: 0,
        },
      ];
    }
    setAddRmlState(data);
  };

  const handelAddOneInRml = () => {
    setAddRmlState([
      ...addRmlState,
      {
        brandName: "",
        averageRate: 0,
        openingStock: 0,
        incomingPurchase: 0,
        buyRate: 0,
        incomePurchase: 0,
        purchaseRate: 0,
        inflowCredit: 0,
        sending: 0,
        sumRemainder: 0,
        closingStock: 0,
        sales: 0,
        rate: 0,
        cost: 0,
      },
    ]);
  };

  const [total, setTotal] = useState({
    totalOpening: 0,
    totalIncomingStock: 0,
    totalIncomeStock: 0,
    totalInflow: 0,
    totalSending: 0,
    totalRemainder: 0,
    totalClosing: 0,
    totalSales: 0,
    totalCost: 0,
  });

  const onChangeRmlHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...addRmlState];
    list[index][name] = value;
    setAddRmlState(list);

    const handelavg = addRmlState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "purchaseRate" || e.target.name === "buyRate") {
          obj.averageRate =
            (Number(obj.purchaseRate) + Number(obj.buyRate)) / 2;
        }
        return obj;
      } else return returned;
    });
    setAddRmlState(handelavg);

    const yog = addRmlState.map((returned, i) => {
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
            Number(obj.openingStock) +
            Number(obj.incomingPurchase) +
            Number(obj.inflowCredit) +
            Number(obj.incomePurchase) -
            Number(obj.sending);
        }
        return obj;
      } else return returned;
    });

    setAddRmlState(yog);

    const sale = addRmlState.map((returned, i) => {
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

    setAddRmlState(sale);

    const saleTotal = addRmlState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales" || e.target.name === "rate") {
          obj.cost = Number(obj.sales) * Number(obj.rate);
        }
        return obj;
      } else return returned;
    });

    setAddRmlState(saleTotal);

    let obj1 = total;
    obj1.totalOpening = addRmlState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.openingStock)),
      0
    );
    setTotal(obj1);
    console.log(total.totalOpening);
  };

  // const dataDetails = [
  //   {
  //     brandName: brandName,
  //     initialStock: initialStock,
  //     purchaseShop: {
  //       purchaseShopNum: purchaseShopNum,
  //       purchaseShopRate: purchaseShopRate,
  //     },
  //     purchaseOutSide: {
  //       purchaseOutSideNum: purchaseOutSideNum,
  //       purchaseOutSideRate: purchaseOutSideRate,
  //     },
  //     purchaseBorrow: purchaseBorrow,
  //     sendingBhejan: sendingBhejan,
  //     lastStock: lastStock,
  //     soldRate: soldRate,
  //   },
  // ];

  // const handelSubmitRml = async (e) => {
  //   // fatch data from api
  //   e.preventDefault();
  //   fetch("https://insorty-api.onrender.com/shop/backPageRmlData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       cookie_token: token,
  //     },
  //     body: JSON.stringify({
  //       dataDetails,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "Data Added Successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((err) => {
  //       const error = err.response.data;
  //       Swal.fire({
  //         position: "center",
  //         icon: "error",
  //         title: error,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     });
  // };

  //

  return {
    addRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
    onChangeRmlHandler,
    total,
  };
};

export default useRmlAdd;
