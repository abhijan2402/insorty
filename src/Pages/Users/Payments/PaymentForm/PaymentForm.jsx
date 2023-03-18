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
                  <div className="form-control">
                    {shesh - totalPaid + entry.debit.cash}
                  </div>
                  </td>


                  <td>

                  <div className="form-control">
                    {moment(entry.debit.date).format("DD/MM/YYYY")}
                  </div>
              </td>

              <td>
                  <div className="form-control">
                  {entry.deposit.cash}
                  </div>
                  </td>

                  <td>

                  <div className="form-control">
                  {moment(entry.deposit.date).format("DD/MM/YYYY")}
                  </div>
              </td>

              <td>
                <div className="form-control">
                  {
                    - shesh + totalPaid - entry.deposit.cash + entry.debit.cash
                  }
                </div>
              </td>

              <td>
                <div className="flex gap-4">
                  <div className="form-control">
                    {entry.description}
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
