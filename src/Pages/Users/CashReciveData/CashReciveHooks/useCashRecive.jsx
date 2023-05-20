import { useQuery } from "@tanstack/react-query";

const useCashRecive = () => {
  const token = localStorage.getItem("token");

  const { data: CashReciveData, isLoading } = useQuery({
    queryKey: ["CashReciveData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-backend-clone.vercel.app/shop/getBorrowedCashReturnData",
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
  };
};

export default useCashRecive;
