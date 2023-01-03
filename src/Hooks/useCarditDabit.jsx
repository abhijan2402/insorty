import { useState } from "react";

const useCarditDabit = () => {
  const craditDabitForm = {
    partyName: "",
    ammount: "",
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

  return {
    craditDabitState,
    handelAddFiveCarditDabit,
    handelAddOneCarditDabit,
  };
};

export default useCarditDabit;
