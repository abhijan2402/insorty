import { useState } from "react";

const useShippingAdd = () => {
  const addShippingForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comment: "",
  };

  const [addShippingState, setAddShippingState] = useState([addShippingForm]);

  const handelAddFiveShipping = () => {
    setAddShippingState([
      ...addShippingState,
      addShippingForm,
      addShippingForm,
      addShippingForm,
      addShippingForm,
      addShippingForm,
    ]);
  };

  const handelAddOneShipping = () => {
    setAddShippingState([...addShippingState, addShippingForm]);
  };

  return {
    addShippingState,
    handelAddFiveShipping,
    handelAddOneShipping,
  };
};

export default useShippingAdd;
