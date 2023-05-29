import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const usePhonePay = (start,end) => {
  const token = localStorage.getItem("token");

  const { data: phonePayData, isLoading,refetch } = useQuery({
    queryKey: ["phonePayData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getFinalReportData?from=${moment(start).format('DD MMMM YYYY')}&to=${moment(end).format('DD MMMM YYYY')}&page=0&pagesize=200`,
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
    phonePayData,
    isLoading,
    refetch
  };
};

export default usePhonePay;
