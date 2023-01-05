import React from "react";

const CashReciveForm = ({ index, onChangeCashRecive, cashReciveState }) => {
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="dailyReportInput"
              name="reson"
              value={cashReciveState.reson}
              onChange={(e) => onChangeCashRecive(e, index)}
              style={{
                width: "443px",
              }}
            />
          </div>
        </td>

        <td>
          <input
            type="number"
            name="amount"
            value={cashReciveState.amount}
            onChange={(e) => onChangeCashRecive(e, index)}
            className="semiSmallInput"
            style={{
              width: "100%",
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CashReciveForm;
