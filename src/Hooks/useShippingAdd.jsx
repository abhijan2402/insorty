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

  const onChangeShipping = (e, index) => {
    const shipingHandler = addShippingState.map((shipping, i) => {
      if (index === i) {
        return Object.assign(shipping, { [e.target.name]: e.target.value });
      } else {
        return shipping;
      }
    });
    setAddShippingState(shipingHandler);
  };

  const handelSubmitShipping = (e) => {
    const handelShipping = Object.assign({}, addShippingState);
    console.log(handelShipping);
  };

  return {
    addShippingState,
    onChangeShipping,
    handelSubmitShipping,
    handelAddFiveShipping,
    handelAddOneShipping,
  };
};

export default useShippingAdd;
