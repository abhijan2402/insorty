import { useQuery } from "@tanstack/react-query";



function useLiquors() {
    let loading = true
    let brands = [];
    
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

    if (!brandsLoaded) {
        liquors.map((item)=>{
            if(item.sizes){
                item.sizes.map((brand)=>{
                    let obj = {id: brand._id, name: item.brandName}
                    brands.push(obj)
                })
            }
        })
        loading = false
    }
    // console.log(liquors)

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
        let name ="multi ID"
        if(brands.length>0){
        brands.map((item)=>{
            if(item.id===id){
                name = item.name
                return 0
            }
        })
    }
        return name

    }

    

  return {
brands,
liquors,
brandsLoaded,
checkLiquor,
GetLiqId,
getNameByID,
loading
  }
}

export default useLiquors

