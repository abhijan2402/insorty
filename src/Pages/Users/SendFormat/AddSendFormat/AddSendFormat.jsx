import React, { useContext } from "react";
import Swal from "sweetalert2";
import { DataContextApi } from "../../../../Context/DataContext";

const AddSendFormat = () => {
  const token = localStorage.getItem("token");
  const { refetch } = useContext(DataContextApi);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.partnerName.value,
      equity: 0,
    };

    fetch("https://insorty-api.onrender.com/shop/addPartner", {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Partner added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          window.location.reload();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };

  return (
    <section>
      {/* The button to open modal */}

      <input type="checkbox" id="addFormat" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addFormat"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add new partner</h3>
          <div className="py-4">
            <form action="" onSubmit={handelSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Partner Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Partner Name"
                  name="partnerName"
                  className="input input-bordered"
                  style={{
                    width: "100%",
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div>
                <button className="btn bg-[#AA237A] my-4 px-6" type="submit">
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

export default AddSendFormat;
