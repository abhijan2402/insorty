import React from "react";

const CommissionForm = ({ onChangeCommisson, commissonState }) => {
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="dailyReportInput"
              name="reason"
              value={commissonState.reason}
              onChange={(e) => onChangeCommisson(e)}
              style={{
                width: "443px",
              }}
            />
          </div>
        </td>

        <td>
          <input
            type="number"
            className="semiSmallInput"
            name="amount"
            value={commissonState.amount}
            onChange={(e) => onChangeCommisson(e)}
            style={{
              width: "100%",
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CommissionForm;
