import React from "react";

const AddOneCommisson = () => {
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="dailyReportInput"
              name="reason"
              style={{
                width: "443px",
              }}
            />
          </div>
        </td>

        <td>
          <input
            type="text"
            className="semiSmallInput"
            name="amount"
            style={{
              width: "100%",
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default AddOneCommisson;
