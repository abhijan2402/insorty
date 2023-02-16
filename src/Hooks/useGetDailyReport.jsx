import React from 'react'
import { useQuery } from '@tanstack/react-query'


function useGetDailyReport() {
    const token = localStorage.getItem("token");

    const { data: RMLData, isLoading: RMLLoaded, RMLrefetch } = useQuery({
        queryKey: ["RMLData"],
        queryFn: async () => {
            const res = await fetch(
                "https://insorty-api.onrender.com/shop/getBackPageRMLData",
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
    RMLData,
    RMLLoaded
  }
}

export default useGetDailyReport