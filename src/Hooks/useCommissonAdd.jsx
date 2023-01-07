import { useState } from "react";

const useCommissonAdd = () => {
  const commissonForm = {
    reason: "",
    amount: 0,
  };

  const [commissonState, setCommissonState] = useState([commissonForm]);

  const handelAddFiveCommison = () => {
    let data = commissonState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        reason: "",
        amount: 0,
      }]

    }
    setCommissonState(data)
  };

  const handelAddOneCommison = () => {
    setCommissonState([...commissonState, {
      reason: "",
      amount: 0,
    }]);
  };

  const onChangeCommison = (event, index) => {
    const handelCommisson = commissonState.map((commison, i) =>
      index === i
        ? Object.assign(commison, { [event.target.name]: event.target.value })
        : commison
    );
    setCommissonState(handelCommisson);
  };

  const handelSubmitCommisson = () => {
    const handelCommisson = Object.assign({}, commissonState);
    console.log(handelCommisson);
  };

  return {
    handelAddFiveCommison,
    handelAddOneCommison,
    onChangeCommison,
    commissonState,
    handelSubmitCommisson,
  };
};

export default useCommissonAdd;
