import { useQuery } from "@tanstack/react-query";

const usePhonePay = () => {
  const token = localStorage.getItem("token");

  const { data: phonePayData, isLoading } = useQuery({
    queryKey: ["phonePayData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFinalReportData",
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
  };
};

export default usePhonePay;
