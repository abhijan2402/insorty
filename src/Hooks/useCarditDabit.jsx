import { useState } from "react";

const useCarditDabit = () => {
  const addFiveCarditDabitForm = {
    partyName: "",
    ammount: "",
    note: "",
  };
  const addOneCarditDabitForm = {
    partyName: "",
    ammount: "",
    note: "",
  };

  const [
    addFiveCarditDabitFormState,
    setAddFiveCarditDabitFormState,
  ] = useState([addFiveCarditDabitForm]);

  const [addOneCraditDabitFomeState, setAddOneCraditDabitFomeState] = useState([
    addOneCarditDabitForm,
  ]);

  const handelAddFiveCarditDabit = () => {
    setAddFiveCarditDabitFormState([
      ...addFiveCarditDabitFormState,
      addFiveCarditDabitForm,
    ]);
  };

  const handelAddOneCarditDabit = () => {
    setAddOneCraditDabitFomeState([
      ...addOneCraditDabitFomeState,
      addOneCarditDabitForm,
    ]);
  };

  return {
    addFiveCarditDabitFormState,
    addOneCraditDabitFomeState,
    handelAddFiveCarditDabit,
    handelAddOneCarditDabit,
  };
};

export default useCarditDabit;
