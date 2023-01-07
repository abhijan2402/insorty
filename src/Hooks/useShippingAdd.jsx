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
    let data = addShippingState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        partyName: "",
        brandName: "",
        theNumber: "",
        comment: "",
      }]

    }
    setAddShippingState(data)
  };

  const handelAddOneShipping = () => {
    setAddShippingState([...addShippingState, {
      partyName: "",
      brandName: "",
      theNumber: "",
      comment: "",
    }]);
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
