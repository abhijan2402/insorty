import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const useCashRecive = (start,end) => {
  const token = localStorage.getItem("token");

  const { data: CashReciveData, isLoading,refetch } = useQuery({
    queryKey: ["CashReciveData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getBorrowedCashReturnData?from=${moment(start).format('DD MMMM YYYY')}&to=${moment(end).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await res.json();
      return data?.data;
    },
  });

  return {
    CashReciveData,
    isLoading,
    refetch
  };
};

export default useCashRecive;
