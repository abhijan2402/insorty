import React from "react";
import Swal from "sweetalert2";

const AddPartyName = ({refetch}) => {
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch("https://insorty-api.onrender.com/shop/addParty", {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({ partyName: data.addPartyName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Party Name Added Successfully",
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
      });
  };

  return (
    <section>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="AddPartyName" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="AddPartyName"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Party Name/ पार्टी का नाम</h3>
          <div className="my-4">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Add Party Name"
                  className="input input-bordered"
                  name="addPartyName"
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

export default AddPartyName;
