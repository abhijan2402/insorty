import { createContext, useEffect, useState } from "react";
import useFormulasFristFormFront from "../Hooks/useFormulas/useFormulasFristFormFront";
import { useQuery } from "@tanstack/react-query";
export const DataContextApi = createContext();

const DataContext = ({ children }) => {
  const { totalState } = useFormulasFristFormFront();
  const [intoAccountState, setintoAccountState] = useState(0);
  const [paidDues, setPaidDues] = useState(0);
  const [liquerState, setLiquerState] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("https://insorty-api.onrender.com/shop/getAllLiquors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setLiquerState(data));
  }, []);

  const { data: liquors, isLoading: brandsLoaded, refetch } = useQuery({
    queryKey: ["liquors"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllLiquors",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: liquorsParentData } = useQuery({
    queryKey: ["liquors"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParentLiquors",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  // /shop/getPurchaseOutsideData

  const { data: purchaseOutsideData } = useQuery({
    queryKey: ["purchaseOutsideData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getPurchaseOutsideData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  // /shop/getTotalExpensesData

  const { data: totalExpensesData, isLoading } = useQuery({
    queryKey: ["totalExpensesData"],
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

  // /shop/getBorrowedCashReturnData

  const { data: borrowedCashReturnData } = useQuery({
    queryKey: ["borrowedCashReturnData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBorrowedCashReturnData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const dataInfo = {
    totalState,
    intoAccountState,
    paidDues,
    setPaidDues,
    liquorsParentData,
    setintoAccountState,
    liquerState,
    liquors,
    brandsLoaded,
    refetch,

    purchaseOutsideData,
    totalExpensesData,
    borrowedCashReturnData,
    isLoading,
  };

  return (
    <DataContextApi.Provider value={dataInfo}>
      {children}
    </DataContextApi.Provider>
  );
};

export default DataContext;
