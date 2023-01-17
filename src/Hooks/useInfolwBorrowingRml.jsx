import { useState } from "react";

const useInfolwBorrowingRml = () => {
  const infolwBorrwingForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    quantity: 0,
    rate: 0,
    total: 0,
    reason: "",
  };

  const [infolwBorrwingFormState, setInfolwBorrwingFormState] = useState([
    infolwBorrwingForm,
  ]);

  const handelAddFiveBorrowingRml = () => {
    let data = infolwBorrwingFormState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        partyName: "",
        brandName: "",
        theNumber: "",
        quantity: 0,
        rate: 0,
        total: 0,
        reason: "",
      }]

    }
    setInfolwBorrwingFormState(data)
  };

  const handelAddOneBorrowingRml = () => {
    setInfolwBorrwingFormState([
      ...infolwBorrwingFormState,
      {
        partyName: "",
        brandName: "",
        theNumber: "",
        quantity: 0,
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

  return {
    infolwBorrwingFormState,
    onChangeBorrowingRml,
    handelSubmitBorrowingRml,
    handelAddFiveBorrowingRml,
    handelAddOneBorrowingRml,
  };
};

export default useInfolwBorrowingRml;
