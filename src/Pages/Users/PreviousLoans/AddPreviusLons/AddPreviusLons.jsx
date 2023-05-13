import React from 'react';

const AddPreviusLons = ({handelSubmitAddNewPrevLoan}) => {
    return (
        <>
        <input type="checkbox" id="addNewPrevLone" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="addNewPrevLone"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Add New Loan</h3>
            <form action="" onSubmit={handelSubmitAddNewPrevLoan}>
              <div className="flex gap-4 flex-col mt-4">
                <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
                />
  
                <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="number"
                  name="financeYear"
                  className="input input-bordered w-full"
                  placeholder="Finance Year"
                />
              </div>
              <div>
                <button type="submit" className="dailyReportBtn  mt-4">
                  Add New 
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default AddPreviusLons;