import React from "react";

const BorrowForm = ({ index, party }) => {
  return (
    <>
      <tr>
        <td>{index + 1}</td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {party.partyName}
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {party.deposits}
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {party.debits}
            </div>
          </div>
        </td>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {party.current_balance}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BorrowForm;
