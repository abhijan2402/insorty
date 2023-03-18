import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPayment = ({
  handelAddPayment,
  handelOnChangePayment,
  handelOnSubmitPayment,
  debitMonth,
  setDebitMonth,
  depositMonth,
  setDepositMonth,
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

                {/* <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="date"
                  name="debitMonth"
                  className="input input-bordered w-full"
                /> */}

                <DatePicker
                  name="debitMonth"
                 
                  selected={debitMonth}
                  onChange={(date) => setDebitMonth(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText={"dd/MM/yyyy"}
                  className="inputBox wd-100"
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
                {/* <input
                  style={{
                    border: "1px solid #4CAF50",
                  }}
                  type="date"
                  name="depositMonth"
                  className="input input-bordered w-full"
                /> */}

                <DatePicker
                  name="depositMonth"
                  selected={depositMonth}
                  onChange={(date) => setDepositMonth(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText={"dd/MM/yyyy"}
                  className="inputBox wd-100"
                />
              </div>
            </div>

            <div className="mt-4">
              {/* <label className="label">
                <span className="label-text font-bold">चालू शेष नामे</span>
              </label>
              <input
                style={{
                  border: "1px solid #4CAF50",
                }}
                type="number"
                name="currentBalance"
                className="input input-bordered w-full"
              /> */}
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
