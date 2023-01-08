import { useState } from "react";

const useInfolwBorrowingRml = () => {
  const infolwBorrwingForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    quantity: 0,
    total: 0,
    rate: 0,
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
        total: 0,
        rate: 0,
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
        total: 0,
        rate: 0,
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
