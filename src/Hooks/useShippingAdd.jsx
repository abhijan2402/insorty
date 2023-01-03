import { useState } from "react";

const useShippingAdd = () => {
  const addFiveShippingForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comment: "",
  };

  const addOneShippingForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comment: "",
  };

  const [addFiveShippingState, setAddFiveShippingState] = useState([
    addFiveShippingForm,
  ]);

  const [addOneShippingState, setAddOneShippingState] = useState([
    addOneShippingForm,
  ]);

  const handelAddFiveShipping = () => {
    setAddFiveShippingState([...addFiveShippingState, addFiveShippingForm]);
  };

  const handelAddOneShipping = () => {
    setAddOneShippingState([...addOneShippingState, addOneShippingForm]);
  };

  return {
    addFiveShippingState,
    addOneShippingState,
    handelAddFiveShipping,
    handelAddOneShipping,
  };
};

export default useShippingAdd;
