import { useState } from "react";

const useCommision = () => {
  const commisionFormData = {
    description: "",
    amount: 0,
    comment: "",
  };
  const [commisionState, setCommisionState] = useState([commisionFormData]);

  const addFiveCommision = () => {
    setCommisionState([
      ...commisionState,
      commisionFormData,
      commisionFormData,
      commisionFormData,
      commisionFormData,
      commisionFormData,
    ]);
  };

  const addOneCommision = () => {
    setCommisionState([...commisionState, commisionFormData]);
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
