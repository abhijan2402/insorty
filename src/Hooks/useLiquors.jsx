import { useQuery } from "@tanstack/react-query";

function useLiquors() {
  let loading = true;
  let brands = [];

  const token = localStorage.getItem("token");

  const { data: liquors, isLoading: brandsLoaded } = useQuery({
    queryKey: ["liquors"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParentLiquors",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data,"all paent liqs")
      return data.data;
    },
  });

  const { data: AllLiquors, isLoading: liquorsLoaded } = useQuery({
    queryKey: ["ALlLiquors"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllLiquors",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (!brandsLoaded && liquors.length > 0) {
    liquors.map((item) => {
      if (item.sizes) {
        item.sizes.map((brand) => {
          let obj = { id: brand._id, name: item.brandName };
          brands.push(obj);
        });
      }
    });
    loading = false;
  }

  const checkLiquor = (name) => {
    let liq;
    if (!brandsLoaded && liquors.length > 0) {
      liq = liquors.filter((item) => {
        if (item.brandName === name) {
          return item;
        }
      });
      if (liq.length > 0) {
        return liq[0]._id;
      } else {
        return null;
      }
    }
    // eslint-disable-next-line array-callback-return
  };

  const GetLiqId = (id, ml, type) => {
    let size, liq;
    if (!brandsLoaded && liquors.length > 0) {
      if (id === null) {
        return null;
      }

      liquors.map((item) => {
        if (item._id === id && item.type === type) {
          size = item.sizes.filter((brand) => {
            if (brand.quantityInML === ml) {
              return brand;
            }
          });
        }
        if (item._id === id && type === null) {
          size = item.sizes.filter((brand) => {
            if (brand.quantityInML === ml) {
              return brand;
            }
          });
        }
      });
      if (size && size.length > 0) {
        return size[0]._id;
      } else return null;
    }
  };

  const getNameByID = (id) => {
    let name = "multi ID";
    if (brands.length > 0) {
      brands.map((item) => {
        if (item.id === id) {
          name = item.name;
          return 0;
        }
      });
    }
    return name;
  };

  // get liquore by the id

  const getLiquorByID = (id) => {
    let liq;
    if (!brandsLoaded && liquors.length > 0) {
      liq = liquors.filter((item) => {
        if (item._id === id) {
          return item;
        }
      });
      if (liq.length > 0) {
        return liq[0];
      } else {
        return null;
      }
    }
  };

  const getTheSizeById = (id) => {
    let liq;
    if (!brandsLoaded && liquors.length > 0) {
      liq = liquors.filter((item) => {
        if (item._id === id) {
          return item;
        }
      });
      if (liq.length > 0) {
        return liq[0];
      } else {
        return null;
      }
    }
  };

  const getSize = (id)=>{
    if(!liquorsLoaded && AllLiquors.length>0){
      const liq = AllLiquors.find((item)=>item._id===id)
      if (!liq) {
        return null
      }
      return liq.quantityInML
    }
  }

  return {
    brands,
    liquors,
    brandsLoaded,
    checkLiquor,
    GetLiqId,
    getNameByID,
    getLiquorByID,
    getTheSizeById,
    loading,
    getSize
  };
}

export default useLiquors;
