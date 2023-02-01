import React from "react";

const StockExcessStockExcessForm = ({
  index,
  handelOnChangeStockExcess,
  StockExcess,
}) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <input
              type="text"
              name="partyName"
              value={StockExcess.partyName}
              onChange={(e) => handelOnChangeStockExcess(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              name="brand"
              value={StockExcess.brand}
              onChange={(e) => handelOnChangeStockExcess(e, index)}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              name="theNumber"
              value={StockExcess.theNumber}
              onChange={(e) => handelOnChangeStockExcess(e, index)}
              className="commonSmallForm"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default StockExcessStockExcessForm;
