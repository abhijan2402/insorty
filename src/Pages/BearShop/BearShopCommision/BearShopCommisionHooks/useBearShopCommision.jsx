import { useState } from "react";

const useCommision = () => {
  const commisionFormData = {
    description: "",
    amount: 0,
    comment: "",
  };
  const [commisionState, setCommisionState] = useState([commisionFormData]);

  const addFiveCommision = () => {
    let data = commisionState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          description: "",
          amount: 0,
          comment: "",
        },
      ];
    }
    setCommisionState(data);
  };

  const addOneCommision = () => {
    setCommisionState([
      ...commisionState,
      {
        description: "",
        amount: 0,
        comment: "",
      },
    ]);
  };

  const handelOnChangeCommision = (e, index) => {
    const { name, value } = e.target;
    const list = [...commisionState];
    list[index][name] = value;
    setCommisionState(list);
  };

  const handelOnSubmitCommision = (e) => {
    e.preventDefault();
    console.log(commisionState);
  };

  return {
    commisionState,
    addFiveCommision,
    addOneCommision,
    handelOnChangeCommision,
    handelOnSubmitCommision,
  };
};

export default useCommision;
