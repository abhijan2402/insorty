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
  const [drDate, setDrDate] = useState("")
  const [salesMan,setSalesMan] = useState("")

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

    // const salesman = localStorage.getItem('salesMan')
    //  console.log(salesMan)
    if (localStorage.getItem('salesMan')){
      setSalesMan(localStorage.getItem('salesMan'))
     }
    if (localStorage.getItem('drDate')){
      setDrDate(localStorage.getItem('drDate'))
     }
    console.log(localStorage.getItem('drDate'))

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
    salesMan, 
    setSalesMan,
    drDate, 
    setDrDate
  };

  return (
    <DataContextApi.Provider value={dataInfo}>
      {children}
    </DataContextApi.Provider>
  );
};

export default DataContext;
