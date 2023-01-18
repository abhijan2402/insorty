import React from "react";

const AddNewEmploy = ({ handelSubmitAddNewEmploy }) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="addNewEmploy" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addNewEmploy"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add New Employ</h3>
          <form action="" onSubmit={handelSubmitAddNewEmploy}>
            <div className="flex gap-4 flex-col mt-4">
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="text"
                placeholder="Employ Name"
                name="name"
                className="input input-bordered w-full"
              />

              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="number"
                name="phoneNumber"
                className="input input-bordered w-full"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <button type="submit" className="dailyReportBtn  mt-4">
                Add New Employ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewEmploy;
