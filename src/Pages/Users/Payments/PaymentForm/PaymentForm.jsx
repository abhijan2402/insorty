import React from "react";

const PaymentForm = ({ index, payment }) => {
  console.log("PaymentForm -> payment", payment);

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="number"
                name="debit_amount"
                value={payment.debit_amount}
                className="commonSmallForm"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="debit_month"
                value={payment.debit_month}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="number"
                name="deposit_amount"
                value={payment.deposit_amount}
                className="commonSmallForm"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="deposit_date"
                value={payment.deposit_date}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              name="current_balance_debit"
              value={payment.current_balance_debit}
              className="semiSmallInput"
            />
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="text"
                name="description"
                value={payment.description}
                className="semiSmallInput"
              />
            </div>
          </div>
        </td>

        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default PaymentForm;
