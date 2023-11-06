import { createContext, useEffect, useState } from "react";
import useFormulasFristFormFront from "../Hooks/useFormulas/useFormulasFristFormFront";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import jwtDecode from "jwt-decode";

export const DataContextApi = createContext();

const DataContext = ({ children }) => {
  const { totalState } = useFormulasFristFormFront();
  const [intoAccountState, setintoAccountState] = useState(0);
  const [food, setFood] = useState(0);
  const [paidDues, setPaidDues] = useState(0);
  const [liquerState, setLiquerState] = useState([]);
  const token = localStorage.getItem("token");
  const [drDate, setDrDate] = useState(new Date());
  const [salesMan, setSalesMan] = useState("");
  // const shopType = token ? jwtDecode(localStorage.getItem("token")).shopType : ""

  const BasedURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${BasedURL}/shop/getAllLiquors`, {
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

    if (token && jwtDecode(localStorage.getItem("token")).shopType==="SHOP") {
      
      fetch(`${BasedURL}/shop/getBackPageData?from=${moment(drDate).subtract(1,'days').format('DD MMMM YYYY')}&to=${moment(drDate).format('DD MMMM YYYY')}&page=0&pagesize=200`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie_token: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if(data.success===true){
            
            setSalesMan(data?.data[data.data.length-1]?.dailyReport?.salesmen)
          }
          else{
            localStorage.getItem("salesMan") ? setSalesMan(localStorage.getItem("salesMan")) : setSalesMan("")
          }
        });
    }

    if (token && jwtDecode(localStorage.getItem("token")).shopType==="BAR") {
      fetch(`${BasedURL}/shop/getBarFrontPageData?from=${moment(drDate).subtract(1,'days').format('DD MMMM YYYY')}&to=${moment(drDate).format('DD MMMM YYYY')}&page=0&pagesize=200`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie_token: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if(data.success===true){
            
            setSalesMan(data?.data[data.data.length-1]?.salesmen)
          }
          else{
            setSalesMan("")
          }
        });
    }


    
  }, [drDate]);

  const { data: liquors, isLoading: brandsLoaded, refetch } = useQuery({
    queryKey: ["liquors"],
    queryFn: async () => {
      const res = await fetch(
        `${BasedURL}/shop/getAllLiquors`,
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
        `${BasedURL}/shop/getAllParentLiquors`,
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
        `${BasedURL}/shop/getPurchaseOutsideData`,
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
        `${BasedURL}/shop/getTotalExpensesData`,
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
        `${BasedURL}/shop/getBorrowedCashReturnData`,
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
        `${BasedURL}/shop/getBackPageRMLData`,
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
    RMLloading,
    food, 
    setFood
    
  };

  return (
    <DataContextApi.Provider value={dataInfo}>
      {children}
    </DataContextApi.Provider>
  );
};

export default DataContext;
