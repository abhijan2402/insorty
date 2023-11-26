import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaInfo } from "react-icons/fa";
import AddNewShop from "../AddNewShop/AddNewShop";
import EditeShop from "../EditeShop/EditeShop";
import ShopInfo from "../ShopInfo/ShopInfo";
import useGetShopsNSubadmins from "../../../../Hooks/useGetShopsNSubadmins";
import Loader from "../../../../Components/Loader/Loader";
import swal from "sweetalert";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

const ShopList = () => {
  const token = localStorage.getItem("token");
  const { shopsRefetch, shops, shopsLoaded } = useGetShopsNSubadmins();
  const [Loading,setLoading] = useState(false)
  const [filter, setFilter] = useState("noFilter")

  const handelDelete = (id) => {
    fetch(`https://insorty-api.onrender.com/admin/deleteShop/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        
      });
  };

  const onTokenChange = (Shoptoken) => {
    // Get the current values of "token" and "token2" from localStorage
    const token = localStorage.getItem("token");
    const adminToken = localStorage.getItem("token2");
  
    if (Shoptoken !== token) {
      
      // Update the "token" and "token2" values in localStorage
      localStorage.setItem("token", Shoptoken);
      localStorage.setItem("token2", adminToken);
  
      // Check whether the current user has admin privileges
      const shopToken = localStorage.getItem("token");
      const isAdmin = shopToken === adminToken;
  
      // Redirect to the appropriate dashboard based on the user's privileges
      if (isAdmin) {
        window.location.href = "/admin";
      } else if(jwtDecode(Shoptoken).shopType==="SHOP"){
        window.location.href = "/user";
      }
      else if(jwtDecode(Shoptoken).shopType==="BAR"){
        window.location.href = "/user/bearshop";
      }
  
      // Log the new token value and the status of the admin privileges

    } 
  };
  
  

  const addNewShop = async  (e) => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const phone = from.phone.value;
    const password = from.password.value;
    const licenceNumber = from.licenceNumber.value;
    const address = from.address.value;
    const accountId = from.accountId.value;
    const shopType = from.shopType.value;
    
    setLoading(true)
try{
    await fetch(`${process.env.REACT_APP_API_URL}/admin/createShop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
      body: JSON.stringify({
        cookie_token: token,
        name,
        accountId,
        address,
        password,
        licenceNumber,
        mobileNumber: phone,
        shopType

      }),
    })
    .then((res) => res.json())
      .then((data) => {
        if (data.success===true) {
          swal(`${(shopType).charAt(0).toUpperCase() + shopType.slice(1).toLowerCase()} Added Successfully", "", "success`);
          shopsRefetch();
        }
        else{
          Swal.fire({
            icon: "error",
            title: `${data?.message ? data?.message : "some server error occurred"}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err)=>{
        Swal.fire({
          icon: "error",
          title: `${err?.message ? err?.message : "some server error occurred"}`,
          showConfirmButton: false,
          timer: 1500,
        });
      
        console.log(err)
      });
    }
    finally{
      setLoading(false)
    }
  };

  if (shopsLoaded) {
    return <Loader></Loader>;
  }

  if (shops.success === false) {
    return <div>{shops.message}</div>;
  }


  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">दुकान/बार </h2>
        </div>
          <div className="flex item-center justify-center text-center">
         <select className="semiSmallInput " onChange={(e)=>{setFilter(e.target.value); }} name="filter" >
          <option selected value="noFilter">No Filter</option>
          <option value="SHOP">Filter Shops</option>
          <option value="BAR">Filter Bars</option>
         </select>
         </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className=" removeCommonWSpace">
            <tbody>
              {shops &&
                shops.data.length!==undefined &&
                shops.data.sort((a, b) => a?.shopId.name?.localeCompare(b?.shopId?.name)).filter((shop)=>{
                  if (filter==="SHOP") {
                    if (shop?.shopId?.shopType==="SHOP") {
                      return shop
                    }
                  }
                  else if(filter==="BAR"){
                    if (shop?.shopId?.shopType==="BAR") {
                      return shop
                    }
                  }
                  else{
                    return shop
                  }
                }).filter((shop)=>shop.shopId.isActive===true).map((shop) => {
                  const myShop = shop?.shopId;
                  const myShopId = myShop?._id;

                  return (
                    <tr className="p-4 text-left">
                      <td className="border px-4 py-2 font-bold">
                        <Link onClick={() => onTokenChange(shop.shopToken)}>
                          {shop?.shopId.name}{" "}
                        </Link>
                      </td>
                      <td>
                        <div className="flex items-center justify-end">
                          <button
                            onClick={() => {
                              swal({
                                title: "Are you sure?",
                                text: `Once deleted, you will not be able to recover ${shop?.shopId.name}!`,
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              }).then((willDelete) => {
                                if (willDelete) {
                                  handelDelete(myShopId);
                                  swal(`Subadmin has been deleted!`, {
                                    icon: "success",
                                  });
                                  shopsRefetch();
                                } else {
                                  swal("Your row is safe!");
                                }
                              });
                            }}
                          >
                            <FaRegTrashAlt className="text-[1.7rem]" />
                          </button>

                        
                          <label
                            htmlFor={myShopId}
                            className="text-[1.7rem] cursor-pointer"
                          >
                            <FaInfo className="text-[1.7rem]" />
                          </label>
                          <ShopInfo
                            myShopId={myShopId}
                            shop={myShop}
                            token={shop.shopToken}
                          ></ShopInfo>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="py-4 my-4">
            <label htmlFor="addShop" className="commonBtn ">
              Add New
            </label>
          </div>
        </div>
      </div>

      {/* <ShopInfo></ShopInfo> */}
      <EditeShop></EditeShop>
      <AddNewShop addNewShop={addNewShop} Loading={Loading}></AddNewShop>
    </section>
  );
};

export default ShopList;
