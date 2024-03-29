import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const AddBrandList = ({ reInitiate }) => {
  const [brandName, setBrandName] = React.useState("");
  const [typeData, setTypeData] = React.useState("");
  const [fullName,setfullName] = useState('')

 
  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    fetch("https://insorty-api.onrender.com/admin/addGlobalLiquor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },

      body: JSON.stringify({
        fullName,
           brandName: brandName,
        type: typeData,
      }),
    })
    .then((res) => res.json())
      .then((data) => {
        if (data.success===true) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Brand Added Successfully",
          });
          reInitiate()
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something Went Wrong",
          });
        }
      });
   
  };

  return (
    <>
      <input type="checkbox" id="AddBrandList" className="modal-toggle" />
      <div className="modal p-6 " style={{ width: "100%" }}>
        <div
          className="modal-box "
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "100%",
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          <label
            htmlFor="AddBrandList"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New Brand</h3>
          <div className="divider my-2"></div>
          <div>
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  name="brandName"
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                  onChange={(e) => setfullName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  name="brandName"
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Type</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="typeData"
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                  onChange={(e) => setTypeData(e.target.value)}
                >
                  <option disabled selected>
                    Select Type
                  </option>
                  <option>WINE</option>
                  <option>BEER</option>
                  <option>DESHIRML</option>
                </select>
              </div>

             

              <div>
                <button
                  className="btn btn-primary my-4"
                  style={{ width: "100%", height: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrandList;
