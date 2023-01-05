import React from "react";

const CommissionForm = ({ index, onChangeCommison, commissonState }) => {
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
              onChange={(e) => onChangeCommison(e, index)}
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
            onChange={(e) => onChangeCommison(e, index)}
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
