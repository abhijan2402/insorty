import { useState, useEffect } from "react";

const useCommissonAdd = () => {
  const commissonForm = {
    type: "COMMISSION",
    amount: 0,
    desc: ""
  };

  const [commissonState, setCommissonState] = useState([commissonForm]);

  const prevdata = JSON.parse(localStorage.getItem("expenses"));

  useEffect(() => {
    if (prevdata) {
      setCommissonState(prevdata);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelAddFiveCommison = () => {
    let data = commissonState;

    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          type: "COMMISSION",
          amount: 0,
          desc: ""
        },
      ];
    }
    setCommissonState(data);
  };

  const handelAddOneCommison = () => {
    setCommissonState([
      ...commissonState,
      {
        type: "COMMISSION",
        amount: 0,
        desc: ""
      },
    ]);
  };

  const onChangeCommison = (event, index) => {
    const handelCommisson = commissonState.map((commison, i) =>
      index === i
        ? Object.assign(commison, { [event.target.name]: event.target.value })
        : commison
    );
    setCommissonState(handelCommisson);

    localStorage.setItem("expenses", JSON.stringify(commissonState));
    localStorage.setItem(
      "totalExpenses",
      JSON.stringify(
        commissonState.reduce(
          (total, currentItem) => (total = total + Number(currentItem.amount)),
          0
        )
      )
    );
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
