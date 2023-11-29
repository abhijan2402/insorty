import React from "react";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";

const ShopInfo = ({ myShopId, shop,token }) => {
  const { name, accountId, address, licenceNumber, mobileNumber,shopType } = shop;
  const [shopSubs, setShopSubs] = useState([])

  useEffect(() => {
    fetch(`https://insorty-api.onrender.com/shop/getSubAdminsWithMyPermissions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
    .then((res) => res.json())
      .then((data) => setShopSubs(data))
    
    .catch((err)=>console.log(err))
  }, [token])
  
 


  return (
    <section>
      {/* The button to open modal */}
      {/* <label htmlFor={myShopId} className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={myShopId} className="modal-toggle" />
      <div className="modal">
        <div
          className="relative"
          style={{
            width: "50%",
            borderRadius: "10px",
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
            padding: "1rem",
          }}
        >
          <label
            htmlFor={myShopId}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Shop Information</h3>
          <div
            className="py-4"
           
          >
            <div className=" flex justify-center items-center  gap-6 flex-wrap"

            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  disabled
                  className="commonDataInput"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  defaultValue={mobileNumber}
                  className="commonDataInput"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  className="commonDataInput"
                  defaultValue={accountId}
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  className="commonDataInput"
                  defaultValue={address}
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">License Number</span>
                </label>
                <input
                  type="text"
                  className="commonDataInput"
                  defaultValue={licenceNumber}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Type</span>
                </label>
                <input
                  type="text"
                  className="commonDataInput"
                  defaultValue={shopType}
                  disabled
                />
              </div>
            </div>
          </div>
          <table className=" my-3 mx-auto">
                <thead className="font-bold">
                  <td>Sub Admin Name</td>
                  <td>Get</td>
                  <td>Post</td>
                  <td>Put</td>
                  <td>Delete</td>
                </thead>
                <tbody>
                  {shopSubs && shopSubs?.data?.map((shop)=>{
                    
                      return(
                        <tr>
                        <td>{shop?.name}</td>
                        <td>{shop?.permissionSet?.GET===true ? " ✔ " :"✖	"}</td>
                        <td>{shop?.permissionSet?.POST===true ? " ✔ " :"✖	"}</td>
                        <td>{shop?.permissionSet?.PUT===true ? " ✔ " :"✖	"}</td>
                        <td>{shop?.permissionSet?.DELETE===true ? " ✔ " :"✖	"}</td>
                        </tr>
                      )
                      
                    
                  })}
                </tbody>
              </table>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
