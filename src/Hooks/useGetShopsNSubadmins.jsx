import React from 'react'
import { useQuery } from "@tanstack/react-query";


const useGetShopsNSubadmins = () => {
    const token = localStorage.getItem("token");

    const { data: shops, isLoading: shopsLoaded, shopsRefetch } = useQuery({
        queryKey: ["Shops"],
        queryFn: async () => {
            const res = await fetch(
                "https://insorty-api.onrender.com/admin/getMyShops",
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json", cookie_token: token },
                }
            );
            const data = await res.json();
            
            return data;
        },
    });

    const { data: subAdmins, isLoading: subAdminsLoading, subAdminRefetch } = useQuery({
        queryKey: ["subAdmins"],
        queryFn: async () => {
            const res = await fetch(
                "https://insorty-api.onrender.com/admin/getAllSubAdmins",
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json", cookie_token: token },
                }
            );
            const data = await res.json();
            console.log(data)
            return data;
        },
    });


  return {
    subAdmins,
    subAdminsLoading,
    shops,
    shopsLoaded
  }
}

export default useGetShopsNSubadmins