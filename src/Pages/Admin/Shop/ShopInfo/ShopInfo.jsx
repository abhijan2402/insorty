import React from "react";

const ShopInfo = ({ myShopId, shop }) => {
  const { name, accountId, address, licenceNumber, mobileNumber } = shop;
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
            <div className="overflow-x-auto flex justify-center items-center  gap-6 flex-wrap"

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
                  <span className="label-text">Account Id</span>
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
                  <span className="label-text">Licence Number</span>
                </label>
                <input
                  type="text"
                  className="commonDataInput"
                  defaultValue={licenceNumber}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
