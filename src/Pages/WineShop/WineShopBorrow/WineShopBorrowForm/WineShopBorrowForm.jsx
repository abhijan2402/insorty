import React from "react";

const BorrowForm = ({ index, borrow, handelBorrowOnChange }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="text"
                name="party_name"
                value={borrow.party_name}
                onChange={(e) => handelBorrowOnChange(e, index)}
                className="dailyReportInput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="debit_amount"
                value={borrow.debit_amount}
                onChange={(e) => handelBorrowOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="number"
                name="deposit_amount"
                value={borrow.deposit_amount}
                onChange={(e) => handelBorrowOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="number"
                name="debit"
                value={borrow.debit}
                onChange={(e) => handelBorrowOnChange(e, index)}
                className="semiSmallInput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="remaining"
                value={borrow.remaining}
                onChange={(e) => handelBorrowOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BorrowForm;
