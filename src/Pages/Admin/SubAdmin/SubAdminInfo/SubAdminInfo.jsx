import React from "react";

const SubAdminInfo = ({ subadminId, subAdmin, onTokenChange }) => {
  console.log(subAdmin)
    return (
    <section>
     
      <input type="checkbox" id={subadminId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative" style={{ maxWidth: "700px" }}>
          <label
            htmlFor={subadminId}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
  
          <div className="py-4 divider"></div>

          <div>
            <div className="overflow-x-auto flex justify-around items-center  gap-6 flex-wrap w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={subAdmin?.name}
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
                  defaultValue={subAdmin?.mobileNumber}
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
                  defaultValue={subAdmin?.accountId}
                  disabled
                />
              </div>
            </div>
          </div>
              <table className="table my-3 mx-auto">
                <thead>
                  <td>Shop Name</td>
                  <td>GET</td>
                  <td>POST</td>
                  <td>PUT</td>
                  <td>DELETE</td>
                </thead>
                <tbody>
                  {subAdmin && subAdmin.permissions.filter((shop)=>shop?.shopId?.isActive===true).map((shop)=>{
                    console.log(shop)
                    if (shop.shopId) {
                      return(
                        <tr>
                        <td>{shop?.shopId?.name}</td>
                        <td>{shop?.permissionSet?.GET===true ? " ✔ " :"✖	"}</td>
                        <td>{shop?.permissionSet?.POST===true ? " ✔ " :"✖	"}</td>
                        <td>{shop?.permissionSet?.PUT===true ? " ✔ " :"✖	"}</td>
                        <td>{shop?.permissionSet?.DELETE===true ? " ✔ " :"✖	"}</td>
                        </tr>
                      )
                      
                    }
                  })}
                </tbody>
              </table>
        </div>
      </div>
    </section>
  );
};

export default SubAdminInfo;
