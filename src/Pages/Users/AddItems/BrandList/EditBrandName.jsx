import React from "react";
import Swal from "sweetalert2";

const EditBrandName = ({ selectedObject, reInitiate}) => {
  const [brandName, setBrandName] = React.useState();
  const [fullName, setfullName] = React.useState();

  

  

 

  const handleSubmit = () => {
    
    const token = localStorage.getItem("token");
    fetch("https://insorty-api.onrender.com/admin/updateGlobalLiquorName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },

      body: JSON.stringify(
        {    globalParentLiquorId: selectedObject._id,
          newBrandName: brandName, 
          newFullName: fullName}
      ),
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
      <input type="checkbox" id="EditBrandName" className="modal-toggle" />
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
            htmlFor="EditBrandName"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={()=>{setBrandName(null);
            setfullName(null)}}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Brand Name:- {selectedObject?._id}</h3>
          <div className="divider my-2"></div>
          <div>
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Full Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="brandName"
                  defaultValue={selectedObject?.fullName}

                  value={fullName ? fullName : selectedObject?.fullName}
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                  onChange={(e) => setfullName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <input
                  className=" input input-bordered"
                  name="typeData"
                  type="text"
                  value={brandName ? brandName : selectedObject.brandName}
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                  onChange={(e) => setBrandName(e.target.value)}
                />
                  
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

export default EditBrandName;
