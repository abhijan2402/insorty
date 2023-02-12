import { useState,useEffect } from "react";

const useShippingAdd = () => {
  const addShippingForm = {
    liquorId:"",
    partyId:"",
    partyName: "",
    brandName: "",
    quantity:750,
    theNumber: "",
    comment: "",
  };

  const [addShippingState, setAddShippingState] = useState([addShippingForm]);

  const prevdata = JSON.parse(localStorage.getItem('bhejan'))

  useEffect(() => {
    if (prevdata) {
      setAddShippingState(prevdata)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelAddFiveShipping = () => {
    let data = addShippingState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        liquorId: "",
        partyId: "",
        partyName: "",
        brandName: "",
        quantity: 750,
        theNumber: "",
        comment: "",
      }]

    }
    setAddShippingState(data)
  };

  const handelAddOneShipping = () => {
    setAddShippingState([...addShippingState, {
      liquorId: "",
      partyId: "",
      partyName: "",
      brandName: "",
      quantity: 750,
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

    localStorage.setItem('bhejan',JSON.stringify(addShippingState))
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
