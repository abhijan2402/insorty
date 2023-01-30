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
            // console.log(data.data)
            return data.data;
        },
    });

    // if (liquors) {
    //     let brandSet = new Set();
    //     liquors.map((item) => {
    //         return brandSet.add(item.brandName);
    //     });
    //     brands = [...brandSet];
    // }
    console.log(liquors)

    const checkLiquor=(name)=>{
        let liq 
        if(!brandsLoaded){
            liq = liquors.filter((item) => {
                if (item.brandName === name) {
                    return item
                }

            })
            if (liq.length > 0) {
                return liq[0]._id
            }
            else {
                return null
            }
        }
           // eslint-disable-next-line array-callback-return
           
    }

    const GetLiqId=(id,ml,type)=>{

        let size,liq
        if (!brandsLoaded) {
            if (id === null) {
                return null
            }

            // else {
            //     liq = liquors.filter((item) => {
            //         if (item.type === "RML") {
            //             return item
            //         }

            //         if (liq.length === 1) {
            //             liq = liq.filter((item) => {
            //                 if (item._id === id) {
            //                     return item
            //                 }
            //             })
            //         }
                    
            //     })

            //     if (liq.length === 1) {
            //         size = liq.filter((item) => {
            //             if (item.quantityInML === ml) {
            //                 return item
            //             }
            //         })
            //     }
            //     if (size.length === 1) {
            //         return size._id
            //     }
            //     else {
            //         return null
            //     }
            // }

            liquors.map((item)=>{
                if (item._id === id && item.type === type) {
                    console.log(ml)
                   size= item.sizes.filter((brand)=>{
                        // console.log(brand)
                        if (brand.quantityInML === ml) {
                            // console.log(brand)
                            return brand
                            
                        }
                    })
                }
            })
            // console.log(size)
            if(size && size.length>0){
            return size[0]._id
}
else return null
        }
       
       
    }

    const getNameByID=(id)=>{
        let name,sizeData
        if(!brandsLoaded){
            sizeData=liquors.filter((item)=>{
                if(item.sizes){
                    return item
                }
            })

            if(sizeData.length>0){
                sizeData.map((item)=>{
                    item.sizes.map((brand)=>{
                        if(brand._id===id){
                            name = item.brandName
                            return 0
                        }
                    })
                })
            }
        }

        return name

    }

    

  return {
brands,
liquors,
brandsLoaded,
checkLiquor,
GetLiqId,
getNameByID
  }
}

export default useLiquors

