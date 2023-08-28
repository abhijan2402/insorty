import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

import useGetShopsNSubadmins from "../../../../Hooks/useGetShopsNSubadmins";
import Loader from "../../../../Components/Loader/Loader";
import Swal from "sweetalert2";


const ShopParmisson = () => {
  const { shops,
    shopsLoaded, subAdmins,
    subAdminsLoading,
} = useGetShopsNSubadmins()

const token = localStorage.getItem('token')


  const shopParmissonTemplate = {
    shopId: "",
    shopName: "",
    ShopPermission : {
      GET : true,
      POST: true,
      DELETE: true,
      PUT: true
    }
  };



  const [shopParmisson, setShopParmisson] = useState([{
    shopId: "",
    shopName: "",
    ShopPermission: {
      GET: true,
      POST: true,
      DELETE: true,
      PUT: true
    }
}]);
  const [subAdminName, setSubAdminName] = useState({subAdminName:"",subAdminId:""});

  const addMore = () => {
    setShopParmisson([...shopParmisson, shopParmissonTemplate]);
  };


  const onChange = (type, event, index) => {

    if (type === "permissions") {
      const updatedShopParmisson = shopParmisson.map((shopData, i) =>
        index === i
          ? {
            ...shopData,
            ShopPermission: {
              ...shopData.ShopPermission,
              [event.target.name]: event.target.checked
            }
          }
          : shopData
      );
      setShopParmisson(updatedShopParmisson);
    }

   
    else{
      const updatedProduct = shopParmisson.map((shopParmisson, i) =>
        index === i
          ? Object.assign(shopParmisson, {
            [event.target.name]: event.target.value,
          })
          : shopParmisson
      )
      setShopParmisson(updatedProduct);
    }

  };

  const removeShop = (index) => {
    const newReturned = shopParmisson.filter((shopParmisson, i) => i !== index);
    setShopParmisson(newReturned);
  };

  const hendelSubmit = (e) => {
    e.preventDefault();

    let shopDetails=[]
    for (let index = 0; index < shopParmisson.length; index++) {
      const element = shopParmisson[index]
      shopDetails.push(
        {
          shopId: element.shopId,
          permissionSet: {
            GET: element.ShopPermission.GET,
            POST: element.ShopPermission.POST,
            DELETE: element.ShopPermission.DELETE,
            PUT: element.ShopPermission.PUT
          }
        }
      )
      
    }
    fetch("https://insorty-api.onrender.com/admin/assignShopToSubadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
      body: JSON.stringify({ subAdminId: subAdminName.subAdminId,
    shops: shopDetails
  }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sub Admin Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });


    console.log()

    
  };

  if (shopsLoaded || subAdminsLoading){
    return <Loader></Loader>
  }

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 shopParmissons-center my-4">
          <h2 className="font-bold text-[1.5rem]">दुकान/बार  की अनुमति
</h2>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div className=" mx-auto border shadow-lg p-6">
        <div className="form-control mb-2">
          <label className="label">
           Sub Admin Name
          </label>

          <Autocomplete
            size="small"
            style={{
              width: "20rem",
              border:"1px solid black",
              borderRadius:"5px"
            }}
            options={
              subAdmins.data.length > 0
                ? subAdmins?.data
                : ["no options"]
            }
            getOptionLabel={(option) => (option ? option?.name : "")}
            onChange={(event, value) => {
              const sub = subAdminName
              if (value) {
                sub.subAdminName = value.name;
                sub.subAdminId = value._id;
              } else {
                sub.subAdminName = "";
                sub.subAdminId = "";
              }
              setSubAdminName(sub)
              console.log(subAdminName)
            }}
            renderInput={(params) => (
              <TextField
                required
                size="small"
                {...params}
                // value={addOneFirst.brandName}
                inputProps={{
                  ...params.inputProps,
                  value: subAdminName.subAdminName,
                }}
                onChange={(event) => {
                  const sub = subAdminName
                  sub.shopName = event.target.value;
                }}
              />
            )}
          />
        </div>

        <form onSubmit={hendelSubmit}>

          {shopParmisson.map((shop, index) => {
            return (
              <div key={index}>
               

                <div className="form-control mb-2">
                  <label className="label">
                    Shop Name
                  </label>
                  <Autocomplete
                    size="small"
                    style={{
                      border:"1px solid black",
              borderRadius:"5px",
                      width: "20rem",
                    }}
                    options={
                      shops.data.length > 0
                        ? shops?.data.filter((shop)=>shop.shopId.isActive===true)
                        : ["no options"]
                    }
                    getOptionLabel={(option) => (option ? option?.shopId?.name : "")}
                    onChange={(event, value) => {
                      if (value) {
                        shop.shopName = value.shopId.name;
                        shop.shopId = value.shopId._id;
                      } else {
                        shop.shopName = "";
                        shop.shopId = "";
                      }
                      onChange('shopName',event, index);
                    }}
                    renderInput={(params) => (
                      <TextField
                        required
                        size="small"
                        {...params}
                        // value={addOneFirst.brandName}
                        inputProps={{
                          ...params.inputProps,
                          value: shop.shopName,
                        }}
                        onChange={(event) => {
                          shop.shopName = event.target.value;
                        }}
                      />
                    )}
                  />
                </div>


              

                <div className="form-control w-52">
                  <label className="cursor-pointer label">
                    <span className="label-text">GET</span>
                    <input name="GET" type="checkbox" className="toggle toggle-secondary" checked={shop.ShopPermission.GET}
                    onChange={(event) => onChange("permissions" , event, index)}  style={{
                      border: "1px solid black",
                    }} />
                  </label>
                </div>
                <div className="form-control w-52">
                  <label className="cursor-pointer label">
                    <span className="label-text">POST</span>
                    <input name="POST" type="checkbox" className="toggle toggle-secondary" checked={shop.ShopPermission.POST}
                    onChange={(event) => onChange("permissions" , event, index)}  style={{
                      border: "1px solid black",
                    }} />
                  </label>
                </div>
                <div className="form-control w-52">
                  <label className="cursor-pointer label">
                    <span className="label-text">DELETE</span>
                    <input name="DELETE" type="checkbox" className="toggle toggle-secondary" checked={shop.ShopPermission.DELETE}
                    onChange={(event) => onChange("permissions" , event, index)}  style={{
                      border: "1px solid black",
                    }} />
                  </label>
                </div>
                <div className="form-control w-52">
                  <label className="cursor-pointer label">
                    <span className="label-text">PUT</span>
                    <input name="PUT" type="checkbox" className="toggle toggle-secondary" checked={shop.ShopPermission.PUT}
                    onChange={(event) => onChange("permissions" , event, index)}  style={{
                      border: "1px solid black",
                    }} />
                  </label>
                </div>


                <div className="flex">
                  <button
                    className="commonBtn flex justify-center shopParmissons-center"
                    onClick={() => removeShop(index)}
                  >
                    <FaTrashAlt className="text-2xl mr-2"></FaTrashAlt>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </form>

        <div className="pt-2 ">
          <button className="commonBtn mx-4" onClick={() => addMore()}>
            Add
          </button>

          <button className="commonBtn" type="submit" onClick={hendelSubmit}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopParmisson;
