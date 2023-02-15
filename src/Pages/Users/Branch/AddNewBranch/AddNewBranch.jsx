import React from "react";

const AddNewBranch = ({ handelSubmitAddNewBranch }) => {
  return (
    <>
      <input type="checkbox" id="addNewBranch" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addNewBranch"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add New Branch</h3>
          <form action="" onSubmit={handelSubmitAddNewBranch}>
            <div className="flex gap-4 flex-col mt-4">
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="text"
                placeholder="Branch Name"
                name="branchName"
                className="input input-bordered w-full"
              />

            </div>
            <div>
              <button type="submit" className="dailyReportBtn  mt-4">
                Add New Branch
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewBranch;
