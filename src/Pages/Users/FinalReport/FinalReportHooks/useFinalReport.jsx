import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useFinalReport = (month) => {
  const token = localStorage.getItem("token");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["monthlyFinalReport", "borrowedBottles", "extraBottles"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getMonthlyFinalReport?date=${month}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data)
      return data.data;
    },
  });

  return {
    data,
    isLoading,
    refetch
  };
};

export default useFinalReport;
