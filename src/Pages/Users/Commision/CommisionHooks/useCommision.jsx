import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useCommision = () => {
  const token = localStorage.getItem("token");
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

  const { data: commitsonData, isLoading } = useQuery({
    queryKey: ["commitsonData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getTotalExpensesData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  return {
    commisionState,
    commitsonData,
    isLoading,
    addFiveCommision,
    addOneCommision,
    handelOnChangeCommision,
    handelOnSubmitCommision,
  };
};

export default useCommision;
