import React from "react";

const useCommissonAdd = () => {
  const addFiveCommissonForm = {
    reason: "",
    amount: "",
  };

  const addOneCommissonForm = {
    reason: "",
    amount: "",
  };

  const [addFiveCommissonState, setAddFiveCommissonState] = React.useState([
    addFiveCommissonForm,
  ]);

  const [addOneCommissonState, setAddOneCommissonState] = React.useState([
    addOneCommissonForm,
  ]);

  const handelAddFiveCommison = () => {
    setAddFiveCommissonState([...addFiveCommissonState, addFiveCommissonForm]);
  };

  const handelAddOneCommison = () => {
    setAddOneCommissonState([...addOneCommissonState, addOneCommissonForm]);
  };

  return {
    addFiveCommissonState,
    addOneCommissonState,
    handelAddFiveCommison,
    handelAddOneCommison,
  };
};

export default useCommissonAdd;
