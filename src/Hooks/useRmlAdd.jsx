import { useState } from "react";

const useRmlAdd = () => {
  const addRmlForm = {
    brandName: "",
    averageRate: "",
    openingStock: "",
    incomingPurchase: "",
    incomePurchase: "",
    inflowCredit: "",
    sending: "",
    sumRemainder: "",
    sales: "",
    rate: "",
    cost: "",
  };

  const [addRmlState, setAddRmlState] = useState([addRmlForm]);

  const handelAddFiveInRml = () => {
    let data = addRmlState
    for (let i = 0; i < 5; i++) {
      data = [...data, {
        brandName: "",
        averageRate: "",
        openingStock: "",
        incomingPurchase: "",
        incomePurchase: "",
        inflowCredit: "",
        sending: "",
        sumRemainder: "",
        sales: "",
        rate: "",
        cost: "",
      }];
      
    }
    setAddRmlState(data)
  };

  const handelAddOneInRml = () => {
    setAddRmlState([...addRmlState, {
      brandName: "",
      averageRate: "",
      openingStock: "",
      incomingPurchase: "",
      incomePurchase: "",
      inflowCredit: "",
      sending: "",
      sumRemainder: "",
      sales: "",
      rate: "",
      cost: "",
    }]);
  };

  const onChangeRmlHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...addRmlState];
    list[index][name] = value;
    setAddRmlState(list);
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
