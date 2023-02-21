import React from "react";

const AddUser = () => {
  return (
    <section>
      <input type="checkbox" id="addNewSubAdmin" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addNewSubAdmin"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New User</h3>
          <div className="py-4">
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pin Code</span>
                </label>
                <input
                  type="text"
                  placeholder="Pin Code"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div>
                <button type="submit" className="btn btn-primary my-2">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddUser;
