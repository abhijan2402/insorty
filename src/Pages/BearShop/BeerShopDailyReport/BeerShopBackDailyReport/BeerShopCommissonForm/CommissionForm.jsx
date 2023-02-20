import React from "react";

const CommissionForm = ({ index, onChangeCommison, item }) => {
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            {/* <input
              type="text"
              className="dailyReportInput"
              name="reason"
              value={item.reason}
              onChange={(e) => onChangeCommison(e, index)}
              style={{
                width: "443px",
              }}
            /> */}
            <select value={item.type} onChange={(e) => onChangeCommison(e, index)} name="type" className="semiSmallInput">
              <option value="COMMISSION">COMMISSION</option>
              <option value="FUT">FUT</option>
              <option value="KHARCHA">KHARCHA</option>
              <option value="PENALTY">PENALTY</option>
              <option value="BEGAR">BEGAR</option>
              <option value="MONTHLY">MONTHLY</option>
              <option value="OTHERS">OTHERS</option>
            </select>
          </div>
        </td>

        <td>
          <input
            type="number"
            className="semiSmallInput"
            name="amount"
            value={item.amount}
            onChange={(e) => onChangeCommison(e, index)}
            style={{
              width: "100%",
            }}
          />
        </td>
        <td>
          <input
            type="text"
            className="semiSmallInput"
            name="desc"
            value={item.desc}
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
