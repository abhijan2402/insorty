import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const useFrontDetailHooks = (date) => {
  const token = localStorage.getItem("token");

  const { data: FrontPageRegularData, isLoading, refetch: refetch1 } = useQuery({
    queryKey: ["FrontPageRegularData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getFrontPageRegularSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: FrontPageExceptionalData, isLoading: isLoading2, refetch: refetch2 } = useQuery({
    queryKey: ["FrontPageExceptionalData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getFrontPageExceptionalSize?from=${moment(date).format('DD MMMM YYYY')}&to=${moment(date).format('DD MMMM YYYY')}&page=0&pagesize=200`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  return {
    FrontPageRegularData,
    FrontPageExceptionalData,
    isLoading,
    isLoading2,
    refetch1,
    refetch2
  };
};

export default useFrontDetailHooks;
