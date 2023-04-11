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
  const [drDate, setDrDate] = useState(new Date());
  const [salesMan, setSalesMan] = useState("");

  useEffect(() => {
    fetch("https://insorty-api.onrender.com/shop/getAllLiquors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setLiquerState(data));

    if (localStorage.getItem("salesMan")) {
      setSalesMan(localStorage.getItem("salesMan"));
    }
    if (localStorage.getItem("drDate")) {
      setDrDate(localStorage.getItem("drDate"));
    }
    console.log(localStorage.getItem("drDate"));
  }, []);

  const { data: liquors, isLoading: brandsLoaded, refetch } = useQuery({
    queryKey: ["liquors"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllLiquors",
        {
          method: "GET",
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
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });


  const { data: purchaseOutsideData } = useQuery({
    queryKey: ["purchaseOutsideData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getPurchaseOutsideData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  

  const { data: totalExpensesData, isLoading } = useQuery({
    queryKey: ["totalExpensesData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getTotalExpensesData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  
  const { data: borrowedCashReturnData } = useQuery({
    queryKey: ["borrowedCashReturnData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBorrowedCashReturnData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });


  const { data: getBackRmlData, isLoading: RMLloading } = useQuery({
    queryKey: ["getBackRmlData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBackPageRMLData",
        {
          method: "GET",
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
    getBackRmlData,
    purchaseOutsideData,
    totalExpensesData,
    borrowedCashReturnData,
    isLoading,
    salesMan,
    setSalesMan,
    drDate,
    setDrDate,
    RMLloading
  };

  return (
    <DataContextApi.Provider value={dataInfo}>
      {children}
    </DataContextApi.Provider>
  );
};

export default DataContext;
