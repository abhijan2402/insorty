import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import React from 'react'


function useLiquors() {

    let brands;
    
    const token = localStorage.getItem("token");


    const { data: liquors, isLoading: brandsLoaded } = useQuery({
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
            console.log(data, "data.data");
            return data.data;
        },
    });

    if (liquors) {
        let brandSet = new Set();
        liquors.map((item) => {
            return brandSet.add(item.brandName);
        });
        brands = [...brandSet];
    }

    const checkLiquor=(name)=>{
       
           let liq =  liquors.filter((item)=>{
                if(item.brandName===name){
                    return item
                }
              
            })

        return liq[0].sizes

       
    }

  return {
brands,
liquors,
brandsLoaded,
checkLiquor
  }
}

export default useLiquors

