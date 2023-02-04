import React from "react";

const AddPayment = ({
  handelAddPayment,
  handelOnChangePayment,
  handelOnSubmitPayment,
}) => {
  return (
    <section>
      <input type="checkbox" id="addPaymentData" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addPaymentData"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add New Payment </h3>
          <form action="" onSubmit={handelAddPayment}>
            <div className="flex gap-4 flex-col mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">DEBIT / नामे</span>
                </label>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">रकम</span>
                </label>
                <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="number"
                  name="debitAmount"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text font-bold">माह</span>
                </label>
                <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="number"
                  name="debitMonth"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="flex gap-4 flex-col mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Deposit / जमा</span>
                </label>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">रकम</span>
                </label>
                <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="number"
                  name="depositAmount"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text font-bold">माह</span>
                </label>
                <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="number"
                  name="depositMonth"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="label">
                <span className="label-text font-bold">चालू शेष नामे</span>
              </label>
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="number"
                name="currentBalance"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text font-bold">विवरणे</span>
              </label>
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="text"
                name="details"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <button type="submit" className="dailyReportBtn  mt-4">
                Add New Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPayment;
