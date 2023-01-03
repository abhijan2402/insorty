import { useState } from "react";

const useInfolwBorrowingRml = () => {
  const infolwBorrwingForm = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comments: "",
  };

  const [infolwBorrwingFormState, setInfolwBorrwingFormState] = useState([
    infolwBorrwingForm,
  ]);

  const handelAddFiveBorrowingRml = () => {
    setInfolwBorrwingFormState([
      ...infolwBorrwingFormState,
      infolwBorrwingForm,
      infolwBorrwingForm,
      infolwBorrwingForm,
      infolwBorrwingForm,
      infolwBorrwingForm,
    ]);
  };

  const handelAddOneBorrowingRml = () => {
    setInfolwBorrwingFormState([
      ...infolwBorrwingFormState,
      infolwBorrwingForm,
    ]);
  };

  return {
    infolwBorrwingFormState,
    handelAddFiveBorrowingRml,
    handelAddOneBorrowingRml,
  };
};

export default useInfolwBorrowingRml;
