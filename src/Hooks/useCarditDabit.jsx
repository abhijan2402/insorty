import { useState } from "react";

const useCarditDabit = () => {

  const craditDabitForm = {
    partyName: "",
    partyType:"",
    amount: 0,
    note: "",
  };

  const [craditDabitState, setCraditDabitState] = useState([craditDabitForm]);

  const handelAddFiveCarditDabit = () => {
    let data = craditDabitState

    for (let i = 0; i < 5; i++) {
      data = [...data, {
        partyName: "",
        partyType:'',
        amount: 0,
        note: "",
      }]

    }
    setCraditDabitState(data)
  };

  const handelAddOneCarditDabit = () => {
    setCraditDabitState([...craditDabitState, {
      partyName: "",
      partyType: '',
      amount: 0,
      note: "",
    }]);
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
