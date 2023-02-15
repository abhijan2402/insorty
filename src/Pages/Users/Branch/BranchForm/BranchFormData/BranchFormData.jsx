import moment from "moment";
import React from "react";

const BranchFormData = ({
  index,
  transaction,
}) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {moment(transaction.date).format("DD/MM/YYYY")}
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {transaction.debit}
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {transaction.deposit}
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {transaction.current_balance}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BranchFormData;
