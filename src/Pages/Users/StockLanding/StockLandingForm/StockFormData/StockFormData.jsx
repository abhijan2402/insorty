import React from "react";

const StockFormData = ({ index, stockData }) => {
  const { inflow, inflowComment, liquor, send, sendComment } = stockData;

  const restBalance = Number(inflow - send);

  // how to place  if restblance is negative then this will be go debit and if positive then this will be go deposit

  if (restBalance < 0) {
    // this will be go debit
  } else {
    // this will be go deposit
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex gap-4">
          <div className="form-control">
            <input
              type="text"
              className="dailyReportInput"
              value={liquor?.brandName}
            />
          </div>

          <div className="form-control">
            <input type="number" className="commonSmallForm " />
          </div>
        </div>
      </td>

      <td>
        <div className="flex gap-4">
          <div className="form-control">
            <input
              type="number"
              name="inflowNumber"
              value={inflow}
              className="commonSmallForm "
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="inflowComment"
              value={inflowComment}
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
              value={send}
              className="commonSmallForm "
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="sendComment"
              value={sendComment}
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
              name="sendDeposit"
              value={restBalance < 0 ? restBalance : 0} // show the positive amount for deposit
              className="semiSmallInput "
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="debit"
              // show the negative amount for debit
              value={restBalance > 0 ? restBalance : 0}
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
