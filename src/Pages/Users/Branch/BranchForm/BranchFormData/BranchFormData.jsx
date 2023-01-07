import React from "react";

const BranchFormData = ({
  index,
  branchState,
  branch,
  handelBranchOnChange,
}) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="date"
                name="date"
                value={branch.date}
                onChange={(e) => handelBranchOnChange(e, index)}
                className="semiSmallInput"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="number"
                name="debit_price"
                value={branch.debit_price}
                onChange={(e) => handelBranchOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="debit_cash"
                value={branch.debit_cash}
                onChange={(e) => handelBranchOnChange(e, index)}
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
                name="deposit_price"
                value={branch.deposit_price}
                onChange={(e) => handelBranchOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="deposit_cash"
                value={branch.deposit_cash}
                onChange={(e) => handelBranchOnChange(e, index)}
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
                name="current_debit"
                value={branch.current_debit}
                onChange={(e) => handelBranchOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="current_deposit"
                value={branch.current_deposit}
                onChange={(e) => handelBranchOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>

        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default BranchFormData;
