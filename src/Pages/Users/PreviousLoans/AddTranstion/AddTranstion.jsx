import moment from "moment";
import React from "react";

const AddTranstion = ({ handelSubmit }) => {
  return (
    <>
      <input type="checkbox" id="addNewTranstion" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addNewTranstion"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add New Loan</h3>
          <form action="" onSubmit={handelSubmit}>
            <div className="flex gap-4 flex-col mt-4">
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="text"
                placeholder="Deposite"
                name="deposit"
                className="input input-bordered w-full"
              />

              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="date"
                name="dateData"
                max={moment(new Date()).format('YYYY-MM-DD')}
                className="input input-bordered w-full"
                placeholder="Date"
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

export default AddTranstion;
