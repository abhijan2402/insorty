import React from "react";

const AddPartner = ({ handelPartnerSubmit }) => {
  return (
    <>
      <input type="checkbox" id="addPartner" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addPartner"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Partner</h3>
          <form onSubmit={handelPartnerSubmit}>
            <div className="flex gap-4 flex-col mt-4">
              <label className="label">
                <span className="label-text">पार्टनर नाम</span>
              </label>
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="text"
                placeholder="Partner Name"
                name="partnerName"
                className="input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">नामे</span>
              </label>
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="number"
                name="debit"
                className="input input-bordered w-full"
                placeholder="Debit"
              />

              <label className="label">
                <span className="label-text">जमा</span>
              </label>
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="number"
                name="deposit"
                className="input input-bordered w-full"
                placeholder="Deposit"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Remaining / शेष</span>
              </label>

              <label className="label">
                <span className="label-text">Debit/ नामे </span>
              </label>

              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="number"
                name="remianingDebit"
                className="input input-bordered w-full"
                placeholder="Remining Debit"
              />

              <label className="label">
                <span className="label-text">Remaining / शेष</span>
              </label>
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="number"
                name="remaining"
                className="input input-bordered w-full"
                placeholder="Deposit"
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

export default AddPartner;
