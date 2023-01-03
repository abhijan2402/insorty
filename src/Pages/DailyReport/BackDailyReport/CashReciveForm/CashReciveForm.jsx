import React from "react";

const CashReciveForm = () => {
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="dailyReportInput"
              name="reson"
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
