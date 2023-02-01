import React from "react";

const FinalReportForm = ({ index, handelOnChangeFinalReport, finalReport }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <input
              type="text"
              name="partyName"
              value={finalReport.partyName}
              onChange={(e) => handelOnChangeFinalReport(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              name="brand"
              value={finalReport.brand}
              onChange={(e) => handelOnChangeFinalReport(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              name="theNumber"
              value={finalReport.theNumber}
              onChange={(e) => handelOnChangeFinalReport(e, index)}
              className="commonSmallForm"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default FinalReportForm;
