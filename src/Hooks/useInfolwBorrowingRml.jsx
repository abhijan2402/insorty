import { useState } from "react";

const useInfolwBorrowingRml = () => {
  const addFiveInfolwBorring = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comments: "",
  };
  const addOneInfolwBorring = {
    partyName: "",
    brandName: "",
    theNumber: "",
    comments: "",
  };
  const [addFiveInfolwBorringState, setAddFiveInfolwBorringState] = useState([
    addFiveInfolwBorring,
  ]);
  const [addOneInfolwBorringState, setAddOneInfolwBorringState] = useState([
    addOneInfolwBorring,
  ]);

  const handelAddFiveBorrowingRml = () => {
    setAddFiveInfolwBorringState([
      ...addFiveInfolwBorringState,
      addFiveInfolwBorring,
    ]);
  };

  const handelAddOneBorrowingRml = () => {
    setAddOneInfolwBorringState([
      ...addOneInfolwBorringState,
      addOneInfolwBorring,
    ]);
  };

  return {
    addFiveInfolwBorringState,
    addOneInfolwBorringState,
    handelAddFiveBorrowingRml,
    handelAddOneBorrowingRml,
  };
};

export default useInfolwBorrowingRml;
