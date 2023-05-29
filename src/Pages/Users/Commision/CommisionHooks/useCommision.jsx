import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const useCommision = (start,end) => {
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

  const { data: commitsonData, isLoading, refetch: commisonRefetch } = useQuery({
    queryKey: ["commitsonData"],
    queryFn: async () => {
      const res = await fetch(
       `${process.env.REACT_APP_API_URL}/shop/getTotalExpensesData?from=${moment(start).format('DD MMMM YYYY')}&to=${moment(end).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data,start,end)
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
    commisonRefetch
  };
};

export default useCommision;
