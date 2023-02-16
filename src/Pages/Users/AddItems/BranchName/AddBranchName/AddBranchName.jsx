import React from "react";

const AddBranchName = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
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
          <h3 className="text-lg font-bold">Add Party Name/ पार्टी का नाम</h3>
          <div className="my-4">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Add Branch Name"
                  className="input input-bordered"
                  name="addBranchName"
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
