/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useCarditDabit = () => {
  const craditDabitForm = {
    partyId:"",
    partyName: "",
    partyType: "PARTNER",
    amount: 0,
    note: "",
  };

  const [craditDabitState, setCraditDabitState] = useState([craditDabitForm]);

  const prevdata = JSON.parse(localStorage.getItem("credit"));

  useEffect(() => {
    if (prevdata) {
      setCraditDabitState(prevdata);
    }
  }, []);

  const handelAddFiveCarditDabit = () => {
    let data = craditDabitState;

    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          partyId: "",
          partyName: "",
          partyType: "PARTNER",
          amount: 0,
          note: "",
        },
      ];
    }
    setCraditDabitState(data);
  };

  const handelAddOneCarditDabit = () => {
    setCraditDabitState([
      ...craditDabitState,
      {
        partyId: "",
        partyName: "",
        partyType: "PARTNER",
        amount: 0,
        note: "",
      },
    ]);
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

    localStorage.setItem("credit", JSON.stringify(craditDabitState));

    localStorage.setItem(
      "creditTotal",
      JSON.stringify(
        craditDabitState.reduce(
          (total, currentItem) => (total = total + Number(currentItem.amount)),
          0
        )
      )
    );
  };

  const handelSubmitCarditDabit = (e) => {
    const handelCraditDabit = Object.assign({}, craditDabitState);
    console.log(handelCraditDabit);
  };


  const handleRemoveFieldsCredit = index => {
    const values = [...craditDabitState];
    values.splice(index, 1);
    // console.log(index)
    setCraditDabitState(values);
    localStorage.setItem("credit", JSON.stringify(values))
    localStorage.setItem(
      "creditTotal",
      JSON.stringify(
        values.reduce(
          (total, currentItem) => (total = total + Number(currentItem.amount)),
          0
        )
      )
    );
  };

  return {
    craditDabitState,
    onChangeCarditDabit,
    handelSubmitCarditDabit,
    handelAddFiveCarditDabit,
    handelAddOneCarditDabit,
    handleRemoveFieldsCredit
  };
};

export default useCarditDabit;
