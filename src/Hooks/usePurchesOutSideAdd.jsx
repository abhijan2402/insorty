import { useState } from "react";

const usePurchesOutSideAdd = () => {
  const purchesOutSideAdd = {
    partyName: "",
    brandName: "",
    theNumber: 0,
    quantity: 0,
    total: 0,
    rate: 0,
    reason: "",
  };

  const [purchesOutSideState, setPurchesOutSideState] = useState([
    purchesOutSideAdd,
  ]);

  const handelAddOnePurchesOutSide = () => {
    setPurchesOutSideState([...purchesOutSideState, {
      partyName: "",
      brandName: "",
      theNumber: 0,
      quantity: 0,
      total: 0,
      rate: 0,
      reason: "",
    }]);
  };

  const handelAddFivePurchesOutSide = () => {
    let data = purchesOutSideState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        partyName: "",
        brandName: "",
        theNumber: 0,
        quantity: 0,
        total: 0,
        rate: 0,
        reason: "",
      }]
      
    }
    setPurchesOutSideState(data)
  };

  const onChangePurchesOutSide = (e, index) => {
    const { name, value } = e.target;
    const list = [...purchesOutSideState];
    list[index][name] = value;
    setPurchesOutSideState(list);
  };

  const handelSubmitPurchesOutSide = (e) => {
    const addPurcheshOut = Object.assign({}, purchesOutSideState);
    console.log(addPurcheshOut);
  };

  return {
    purchesOutSideState,
    handelAddFivePurchesOutSide,
    handelAddOnePurchesOutSide,
    onChangePurchesOutSide,
    handelSubmitPurchesOutSide,
  };
};

export default usePurchesOutSideAdd;
