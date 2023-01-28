import { useQuery } from "@tanstack/react-query";



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
            // console.log(data.data);
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
       
           // eslint-disable-next-line array-callback-return
           let liq =  liquors.filter((item)=>{
                if(item.brandName===name){
                    return item
                }
              
            })
            if(liq.length>0){
        return liq[0]._id
       }
       else{
        return null
       }
    }

    const GetLiqId=(id,ml)=>{
        let size,liq
        if(id===null){
            return null
        }

        else{
         liq=liquors.filter((item)=>{
            if(item.type==="WINE"){
                return item
            }
           if(liq.length===1){
           liq = liq.filter((item)=>{
                if(item._id===id){
                    return item
                }
            })
           }
        })

        if(liq.length === 1){
         size=liq.filter((item)=>{
            if (item.quantityInML===ml){
                return item
            }
        })
}
        if(size.length===1){
            return size._id
        }
        else{
            return null
        }
    }
    }

    

  return {
brands,
liquors,
brandsLoaded,
checkLiquor,
GetLiqId
  }
}

export default useLiquors

