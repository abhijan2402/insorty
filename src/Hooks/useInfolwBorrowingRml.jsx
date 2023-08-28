import { useState,useEffect } from "react";

const useInfolwBorrowingRml = () => {
  const infolwBorrwingForm = {
    liquorId:"",
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
    partyId:"",
    partyName: "",
    brandName: "",
    theNumber: "",
    quantity: 750,
    rate: 0,
    total: 0,
    reason: "",
  };
  //

  const [infolwBorrwingFormState, setInfolwBorrwingFormState] = useState([
    infolwBorrwingForm,
  ]);

  const prevdata = JSON.parse(localStorage.getItem('borrow'))

  useEffect(() => {
    if (prevdata) {
      setInfolwBorrwingFormState(prevdata)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelAddFiveBorrowingRml = () => {
    let data = infolwBorrwingFormState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        liquorId: "",
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
        partyId: "",
        partyName: "",
        brandName: "",
        theNumber: "",
        quantity: 750,
        rate: 0,
        total: 0,
        reason: "",
      }]

    }
    setInfolwBorrwingFormState(data)
  };

  const handelAddOneBorrowingRml = (e) => {
    e.preventDefault()

    setInfolwBorrwingFormState([
      ...infolwBorrwingFormState,
      {
        liquorId: "",
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
        partyId: "",
        partyName: "",
        brandName: "",
        theNumber: "",
        quantity: 750,
        rate: 0,
        total: 0,
        reason: "",
      },
    ]);
  };
  const onChangeBorrowingRml = (e, index) => {
    const borrowingRmlHandler = infolwBorrwingFormState.map(
      (borrowingRml, i) => {
        if (index === i) {
          return Object.assign(borrowingRml, {
            [e.target.name]: e.target.value,
          });
        } else {
          return borrowingRml;
        }
      }
    );
    setInfolwBorrwingFormState(borrowingRmlHandler);

    const handelavg650 = infolwBorrwingFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "theNumber" ||
          e.target.name === "rate"
        ) {
          
          obj.total =
            Number(obj.theNumber) * Number(obj.rate);
         
        }
        return obj;
      } else return returned;
    });
    setInfolwBorrwingFormState(handelavg650);

    localStorage.setItem('borrow',JSON.stringify(infolwBorrwingFormState))
    localStorage.setItem('totalBorrow', JSON.stringify(infolwBorrwingFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total)),
      0
    )))
  };

  const handelSubmitBorrowingRml = (e) => {
    const handelBorrowingRml = Object.assign({}, infolwBorrwingFormState);
    console.log(handelBorrowingRml);
  };

  const handleRemoveFieldsInflow = index => {
    const values = [...infolwBorrwingFormState];
    values.splice(index, 1);
    setInfolwBorrwingFormState(values);
    localStorage.setItem('borrow', JSON.stringify(values))
    localStorage.setItem('totalBorrow', JSON.stringify(values.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total)),
      0
    )))

  };

  return {
    infolwBorrwingFormState,
    onChangeBorrowingRml,
    handelSubmitBorrowingRml,
    handelAddFiveBorrowingRml,
    handelAddOneBorrowingRml,
    handleRemoveFieldsInflow
  };
};

export default useInfolwBorrowingRml;
