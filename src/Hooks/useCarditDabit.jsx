import { useState } from "react";

const useCarditDabit = () => {

  const craditDabitForm = {
    partyName: "",
    ammount: 0,
    note: "",
  };

  const [craditDabitState, setCraditDabitState] = useState([craditDabitForm]);

  const handelAddFiveCarditDabit = () => {
    setCraditDabitState([
      ...craditDabitState,
      craditDabitForm,
      craditDabitForm,
      craditDabitForm,
      craditDabitForm,
      craditDabitForm,
    ]);
  };

  const handelAddOneCarditDabit = () => {
    setCraditDabitState([...craditDabitState, craditDabitForm]);
  };

  const onChangeCarditDabit = (e, index) => {
    const dabitCarditHandel = craditDabitState.map((craditDabit, i) => {
      if (index === i) {
        return Object.assign(craditDabit, { [e.target.name]: e.target.value });
      } else {
        return craditDabit;
      }
    });
    setCraditDabitState(dabitCarditHandel);
  };

  const handelSubmitCarditDabit = (e) => {
    const handelCraditDabit = Object.assign({}, craditDabitState);
    console.log(handelCraditDabit);
  };

  return {
    craditDabitState,
    onChangeCarditDabit,
    handelSubmitCarditDabit,
    handelAddFiveCarditDabit,
    handelAddOneCarditDabit,
  };
};

export default useCarditDabit;
