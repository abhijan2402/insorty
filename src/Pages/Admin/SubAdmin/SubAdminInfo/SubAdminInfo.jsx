import React from "react";

const SubAdminInfo = ({ subadminId, subAdmin }) => {

  return (
    <section>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
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
                  <span className="label-text">Account Id</span>
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
        </div>
      </div>
    </section>
  );
};

export default SubAdminInfo;
