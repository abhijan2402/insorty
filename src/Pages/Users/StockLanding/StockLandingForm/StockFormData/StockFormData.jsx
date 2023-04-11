import React from "react";
import useLiquors from "../../../../../Hooks/useLiquors";

const StockFormData = ({ index, stockData }) => {
  const { inflow, inflowComment, liquor, send, sendComment } = stockData;
  const { getNameByID, getSize } = useLiquors()

  const restBalance = Number(inflow - send);

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
          <div className="form-control">
          {getNameByID(liquor._id)}
          </div>
          </td>

          <td>

          <div className="form-control">
          {getSize(liquor._id)} ml
          </div>
      </td>

      <td>
          <div className="form-control">
          {inflow}
          </div>
          </td>

          <td>
          <div className="form-control">
          {inflowComment}
          </div>
      </td>

      <td>
          <div className="form-control">
          {send}
          </div>
          </td>

          <td>
          <div className="form-control">
          {sendComment}
          </div>
      </td>

      <td>
        <div className="form-control">
          {restBalance < 0 ? restBalance : 0} 
          </div>
          </td>

          <td>
          <div className="form-control">
          {restBalance > 0 ? restBalance : 0}
          </div>
      </td>

      {/* ============= कुल योग ================ */}
    </tr>
  );
};

export default StockFormData;
