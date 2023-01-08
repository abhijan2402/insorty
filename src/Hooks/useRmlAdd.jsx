import { useState } from "react";

const useRmlAdd = () => {
  const addRmlForm = {
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
    sales: 0,
    rate: 0,
    cost: 0,
  };

  const [addRmlState, setAddRmlState] = useState([addRmlForm]);

  const handelAddFiveInRml = () => {
    let data = addRmlState
    for (let i = 0; i < 5; i++) {
      data = [...data, {
        brandName: "",
        averageRate: 0,
        openingStock: 0,
        incomingPurchase: 0,
        incomePurchase: 0,
        purchaseRate: 0,
        inflowCredit: 0,
        sending: 0,
        sumRemainder: 0,
        sales: 0,
        rate: 0,
        cost: 0,
      }];
      
    }
    setAddRmlState(data)
  };

  const handelAddOneInRml = () => {
    setAddRmlState([...addRmlState, {
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
      sales: 0,
      rate: 0,
      cost: 0,
    }]);
  };

  const onChangeRmlHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...addRmlState];
    list[index][name] = value;
    setAddRmlState(list);

    const handelavg = addRmlState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate" ||
          e.target.name === "buyRate"
        ) {
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
            Number(obj.startingStock) +
            Number(obj.incomingPurchase) +
            Number(obj.inflowCredit) +
            Number(obj.incomePurchase) -
            Number(obj.sending);
        }
        return obj;
      } else return returned;
    });

    setAddRmlState(yog);

  };

  const handelSubmitRml = (e) => {
    const addRmlForm = Object.assign({}, addRmlState);
    console.log(addRmlForm);
  };

  return {
    addRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
    handelSubmitRml,
    onChangeRmlHandler,
  };
};

export default useRmlAdd;
