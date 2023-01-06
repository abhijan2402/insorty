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
    setPurchesOutSideState([...purchesOutSideState, purchesOutSideAdd]);
  };

  const handelAddFivePurchesOutSide = () => {
    setPurchesOutSideState([
      ...purchesOutSideState,
      purchesOutSideAdd,
      purchesOutSideAdd,
      purchesOutSideAdd,
      purchesOutSideAdd,
      purchesOutSideAdd,
    ]);
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
