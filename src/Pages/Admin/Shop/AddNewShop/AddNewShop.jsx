import React from "react";

const AddNewShop = ({addNewShop}) => {
  return (
    <section>
  
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="addShop" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addShop"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
           Add New Shop
          </h3>
          <div className="py-4">
              <form onSubmit={addNewShop}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
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
                  name="phone"
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
                  name="password"
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
                  name="address"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Account Id</span>
                </label>
                <input
                  type="text"
                  placeholder="Account Id"
                  name="accountId"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Licence Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Licence Number"
                  name="licenceNumber"
                  className="input input-bordered"
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
             

              <div>
                <button type="submit" className="commonBtn">
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

export default AddNewShop;
