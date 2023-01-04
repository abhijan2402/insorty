import React from "react";

const useCommissonAdd = () => {
  const commissonForm = {
    reason: "",
    amount: 0,
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

  const onChangeCommisson = (e, index) => {
    const handelCommison = commissonState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setCommissonState(handelCommison);
  };

  const handelSubmitCommisson = (e) => {
    const handelCommisson = Object.assign({}, commissonState);
    console.log(handelCommisson);
  };

  return {
    commissonState,
    handelAddFiveCommison,
    handelAddOneCommison,
    onChangeCommisson,
    handelSubmitCommisson,
  };
};

export default useCommissonAdd;
