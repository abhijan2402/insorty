import React from "react";

const StockFormData = ({ index, handelOnChangeStockLanding, stock }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex gap-4">
          <div className="form-control">
            <input
              type="text"
              name="brandName"
              value={stock.brandName}
              onChange={(e) => handelOnChangeStockLanding(e, index)}
              className="semiSmallInput"
            />
          </div>
        </div>
      </td>

      <td>
        <div className="flex gap-4">
          <div className="form-control">
            <input
              type="number"
              name="sizeMl"
              value={stock.sizeMl}
              onChange={(e) => handelOnChangeStockLanding(e, index)}
              className="commonSmallForm "
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              name="inflowNumber"
              value={stock.inflowNumber}
              onChange={(e) => handelOnChangeStockLanding(e, index)}
              className="commonSmallForm "
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="inflowComment"
              value={stock.inflowComment}
              onChange={(e) => handelOnChangeStockLanding(e, index)}
              className="semiSmallInput "
            />
          </div>
        </div>
      </td>

      <td>
        <div className="flex gap-4">
          <div className="form-control">
            <input
              type="number"
              name="sendNumber"
              value={stock.sendNumber}
              onChange={(e) => handelOnChangeStockLanding(e, index)}
              className="commonSmallForm "
            />
          </div>
          <div className="form-control">
            <input type="text" name="sendComment" className="semiSmallInput" />
          </div>
          <div className="form-control">
            <input
              type="number"
              name="sendDeposit"
              value={stock.sendDeposit}
              onChange={(e) => handelOnChangeStockLanding(e, index)}
              className="semiSmallInput "
            />
          </div>
        </div>
      </td>

      <td>
        <div className="flex gap-4">
          <div className="form-control">
            <input
              type="text"
              name="debit"
              value={stock.debit}
              onChange={(e) => handelOnChangeStockLanding(e, index)}
              className="semiSmallInput"
            />
          </div>
        </div>
      </td>

      {/* ============= कुल योग ================ */}
    </tr>
  );
};

export default StockFormData;
