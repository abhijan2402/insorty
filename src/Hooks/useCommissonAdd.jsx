import React from "react";

const useCommissonAdd = () => {
  const commissonForm = {
    reason: "",
    amount: "",
  };

  const [commissonState, setCommissonState] = React.useState([commissonForm]);

  const handelAddFiveCommison = () => {
    setCommissonState([
      ...commissonState,
      commissonForm,
      commissonForm,
      commissonForm,
      commissonForm,
      commissonForm,
    ]);
  };

  const handelAddOneCommison = () => {
    setCommissonState([...commissonState, commissonForm]);
  };

  return {
    commissonState,
    handelAddFiveCommison,
    handelAddOneCommison,
  };
};

export default useCommissonAdd;
