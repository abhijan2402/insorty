import React from "react";
import moment from "moment/moment";

const PaymentForm = ({ index, payment, paymentData }) => {
  // console.log(payment.entries.length);

  if (payment.entries.length === 0) {
    return (
      <div>
        <td>No Payment Data Found</td>
      </div>
    );
  }

  let shesh = paymentData
    .slice(0, index)
    .reduce(
      (total, currentItem) =>
        (total =
          total +
          currentItem.entries.reduce(
            (total, currentItem) =>
              (total =
                total + (currentItem.debit.cash ? currentItem.debit.cash : 0)),
            0
          )),
      0
    );
  let totalPaid = paymentData
    .slice(0, index)
    .reduce(
      (total, currentItem) =>
        (total =
          total +
          currentItem.entries.reduce(
            (total, currentItem) =>
              (total =
                total +
                (currentItem.deposit.cash ? currentItem.deposit.cash : 0)),
            0
          )),
      0
    );

  console.log(shesh, totalPaid);
  return (
    <>
      <tr>
        <td>{index + 1}</td>

        {payment.entries.map((entry) => {
          return (
            <>
              <td>
                <div className="flex gap-4">
                  <div className="form-control">
                    <input
                      disabled
                      type="number"
                      name="debit_amount"
                      value={shesh - totalPaid + entry.debit.cash}
                      className="commonSmallForm"
                    />
                  </div>

                  <div className="form-control">
                    <input
                      disabled
                      type="text"
                      name="debit_month"
                      value={moment(entry.debit.date).format("DD/MM/YYYY")}
                      className="dailyReportInput"
                    />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-4">
                  <div className="form-control">
                    <input
                      disabled
                      type="number"
                      name="deposit_amount"
                      value={entry.deposit.cash}
                      className="commonSmallForm"
                    />
                  </div>

                  <div className="form-control">
                    <input
                      disabled
                      type="text"
                      name="deposit_date"
                      value={moment(entry.deposit.date).format("DD/MM/YYYY")}
                      className="dailyReportInput"
                    />
                  </div>
                </div>
              </td>

              <td>
                <div className="form-control">
                  <input
                    disabled
                    type="number"
                    name="current_balance_debit"
                    // value={entry.currentBalance}
                    value={
                      shesh - totalPaid + entry.deposit.cash - entry.debit.cash
                    }
                    className="semiSmallInput"
                  />
                </div>
              </td>

              <td>
                <div className="flex gap-4">
                  <div className="form-control">
                    <input
                      disabled
                      type="text"
                      name="description"
                      value={entry.description}
                      className="semiSmallInput"
                    />
                  </div>
                </div>
              </td>
            </>
          );
        })}

        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default PaymentForm;
