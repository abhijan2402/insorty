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
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      // console.log(data.data)
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
  // console.log(liquors)

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
            // console.log(brand)
            if (brand.quantityInML === ml) {
              // console.log(brand)
              return brand;
            }
          });
        }
      });
      // console.log(size)
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

  return {
    brands,
    liquors,
    brandsLoaded,
    checkLiquor,
    GetLiqId,
    getNameByID,
    loading,
  };
}

export default useLiquors;
