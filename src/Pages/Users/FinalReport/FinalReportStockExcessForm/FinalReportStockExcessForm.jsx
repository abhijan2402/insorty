import React from "react";

const StockExcessStockExcessForm = ({
  index,
  StockExcess,
}) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            {StockExcess.partyName}
          </div>
        </td>

        <td>
          <div className="form-control">
            {StockExcess.brandName}
          </div>
        </td>

        <td>
          <div className="form-control">
            {StockExcess.quantityInML}
          </div>
        </td>

        <td>
          <div className="form-control">
            {StockExcess.number}
          </div>
        </td>
      </tr>
    </>
  );
};

export default StockExcessStockExcessForm;
