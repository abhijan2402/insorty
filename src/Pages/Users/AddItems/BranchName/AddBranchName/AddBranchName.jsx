import React from "react";
import Swal from "sweetalert2";

const AddBranchName = ({ refetch }) => {
  const token = localStorage.getItem("token");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch("https://insorty-api.onrender.com/shop/addBranch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
      body: JSON.stringify({ branchName: data.addBranchName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Branch Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Branch Already Exist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <section>
      <input type="checkbox" id="AddPartyName" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="AddPartyName"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Branch</h3>
          <div className="my-4">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Branch Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Add Branch Name"
                  className="input input-bordered"
                  name="addBranchName"
                  required
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                />
              </div>
              <div>
                <button className="commonBtn" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBranchName;
