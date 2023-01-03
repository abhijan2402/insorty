import { useState } from "react";

const usePurchesOutSideAdd = () => {
  const purchesOutSideAdd = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comment: "",
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

  return {
    purchesOutSideState,
    handelAddFivePurchesOutSide,
    handelAddOnePurchesOutSide,
  };
};

export default usePurchesOutSideAdd;
