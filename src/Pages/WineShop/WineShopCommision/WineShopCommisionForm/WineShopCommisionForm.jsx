import React from "react";

const CommisionForm = ({ index, commision, handelOnChangeCommision }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <input
              type="text"
              name="description"
              value={commision.description}
              onChange={(e) => handelOnChangeCommision(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              name="amount"
              value={commision.amount}
              onChange={(e) => handelOnChangeCommision(e, index)}
              className="commonSmallForm"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              name="comment"
              value={commision.comment}
              onChange={(e) => handelOnChangeCommision(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default CommisionForm;
