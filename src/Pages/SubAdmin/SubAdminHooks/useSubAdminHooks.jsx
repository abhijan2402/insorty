import { useQuery } from "@tanstack/react-query";

const useSubAdminHooks = () => {
  const token = localStorage.getItem("token");

  const {
    data: shops,
    isLoading: shopsLoaded,
    refetch: shopsRefetch,
  } = useQuery({
    queryKey: ["Shops"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/subadmin/getMyShops",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();

      return data;
    },
  });

  return {
    shops,
    shopsLoaded,
    shopsRefetch
  };
};

export default useSubAdminHooks;
