import React from "react";
import { FaInfo, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSubAdminHooks from "../../SubAdminHooks/useSubAdminHooks";
import AddShop from "../AddShop/AddShop";
import EditUser from "../EditShop/EditShop";
import InfoShop from "../InfoShop/InfoShop";
import Loader from "../../../../Components/Loader/Loader";
import swal from "sweetalert";
import jwtDecode from "jwt-decode";


const ShopList = () => {
  const token = localStorage.getItem("token");
  const { shops, shopsLoaded, shopsRefetch } = useSubAdminHooks();

  console.log(shops , "shops")

  const handelDelete = (id) => {
    console.log(id);
    fetch(`https://insorty-api.onrender.com/subadmin/deleteShop/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const addNewShop = (e) => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const phone = from.phone.value;
    const password = from.password.value;
    const licenceNumber = from.licenceNumber.value;
    const address = from.address.value;
    const accountId = from.accountId.value;

    fetch("https://insorty-api.onrender.com/subadmin/createShop", {
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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          swal("Shop Added Successfully", "", "success");
          shopsRefetch();
        }
      });
  };



  const onTokenChange = (Shoptoken) => {
    console.log(Shoptoken)
    // Get the current values of "token" and "token2" from localStorage
  
      
      // Update the "token" and "token2" values in localStorage
      localStorage.setItem("token", Shoptoken);
  
      // Check whether the current user has admin privileges
      
  
      // Redirect to the appropriate dashboard based on the user's privileges
       if(jwtDecode(Shoptoken).shopType==="SHOP"){
        window.location.href = "/user";
      }
      else if(jwtDecode(Shoptoken).shopType==="BAR"){
        window.location.href = "/user/bearshop";
      }
  
      // Log the new token value and the status of the admin privileges

    } 
  

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
        <div className="divider my-2"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-3/4">
            <tbody>
              {shops &&
                shops.data.length!==undefined && shops.data.length>0 &&
                shops.data.map((shop) => {
                  const myShop = shop?.shopId;
                  const myShopId = myShop?._id;

                  if(myShop){
                  return (
                    <tr className="p-4 text-left">
                      <td className="border px-4 py-2 font-bold">
                        <Link 
                         onClick={() => onTokenChange(shop.shopToken)}
                        >{shop?.shopId?.name} </Link>
                      </td>
                      <td>
                        <div className="flex gap-4 items-center justify-end">
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
                          <InfoShop
                           myShopId={myShopId}
                            shop={myShop}
                          ></InfoShop>
                        
                        </div>
                      </td>
                    </tr>
                  );}
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

      <AddShop
      addNewShop={addNewShop}
      ></AddShop>
      <EditUser></EditUser>
     
    </section>
  );
};

export default ShopList;
