import { useState } from "react";

const usePurchesOutSideAdd = () => {
  const addFivePurchesOutSideForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comment: "",
  };

  const addOnePurchesOutSideForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comment: "",
  };
  const [AddFivePurchesOutSideState, setAddFivePurchesOutSideState] = useState([
    addFivePurchesOutSideForm,
  ]);

  const [AddOnePurchesOutSideState, setAddOnePurchesOutSideState] = useState([
    addOnePurchesOutSideForm,
  ]);

  const handelAddOnePurchesOutSide = () => {
    setAddOnePurchesOutSideState([
      ...AddOnePurchesOutSideState,
      addOnePurchesOutSideForm,
    ]);
  };

  const handelAddFivePurchesOutSide = () => {
    setAddFivePurchesOutSideState([
      ...AddFivePurchesOutSideState,
      addFivePurchesOutSideForm,
    ]);
  };

  return {
    AddFivePurchesOutSideState,
    AddOnePurchesOutSideState,
    handelAddFivePurchesOutSide,
    handelAddOnePurchesOutSide,
  };
};

export default usePurchesOutSideAdd;
