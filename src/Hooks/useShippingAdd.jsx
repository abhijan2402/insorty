import { useState,useEffect } from "react";

const useShippingAdd = () => {
  const addShippingForm = {
    liquorId:"",
    partyId:"",
    size: {
      sizes: [
        {
          _id: null,
          currentStock: 0,
          quantityInML: 750,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 375,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 180,
        },
      ],
    },
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
        size: {
          sizes: [
            {
              _id: null,
              currentStock: 0,
              quantityInML: 750,
            },
            {
              _id: null,
              currentStock: 0,
              quantityInML: 375,
            },
            {
              _id: null,
              currentStock: 0,
              quantityInML: 180,
            },
          ],
        },
        partyName: "",
        brandName: "",
        quantity: 750,
        theNumber: "",
        comment: "",
      }]

    }
    setAddShippingState(data)
  };

  const handelAddOneShipping = (e) => {
    e.preventDefault()

    setAddShippingState([...addShippingState, {
      liquorId: "",
      partyId: "",
      size: {
        sizes: [
          {
            _id: null,
            currentStock: 0,
            quantityInML: 750,
          },
          {
            _id: null,
            currentStock: 0,
            quantityInML: 375,
          },
          {
            _id: null,
            currentStock: 0,
            quantityInML: 180,
          },
        ],
      },
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

  const handleRemoveFieldsShipping = index => {
    const values = [...addShippingState];
    values.splice(index, 1);
    console.log(index)
    setAddShippingState(values);
    localStorage.setItem('bhejan', JSON.stringify(values))

  };

  return {
    addShippingState,
    onChangeShipping,
    handelSubmitShipping,
    handelAddFiveShipping,
    handelAddOneShipping,
    handleRemoveFieldsShipping
  };
};

export default useShippingAdd;
