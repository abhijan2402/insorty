import { useQuery } from "@tanstack/react-query";

const useFrontDetailHooks = () => {
  const token = localStorage.getItem("token");

  const { data: FrontPageRegularData, isLoading } = useQuery({
    queryKey: ["FrontPageRegularData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFrontPageRegularSize",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const { data: FrontPageExceptionalData } = useQuery({
    queryKey: ["FrontPageExceptionalData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getFrontPageExceptionalSize",
        {
          method: "POST",
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
  };
};

export default useFrontDetailHooks;