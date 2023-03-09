import React from "react";
import { Link } from "react-router-dom";

const BorrowForm = ({ index, party }) => {
  console.log(party, "party +++++++");

  const partyId = party?._id;
  return (
    <>
      <tr>
        <td>{index + 1}</td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">

              <Link
                to={`/user/borrow/from/${partyId}`}
                style={{
                  cursor: "pointer",
                }}
                className="dailyReportInput"
              >
                {party.partyName}
              </Link>
              
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">{party.deposits}</div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">{party.debits}</div>
          </div>
        </td>
        <td>
          <div className="flex gap-4">
            <div className="form-control">{party.current_balance}</div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BorrowForm;
