import React from "react";
import moment from "moment/moment";
import { FaRegTrashAlt } from "react-icons/fa";
import swal from "sweetalert";

const PaymentForm = ({ index, payment, paymentData,handelDelete }) => {
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

  return (
    <>
      <tr>
        <th>{index + 1}</th>

        {payment.entries.map((entry) => {
          return (
            <>
              <td>
                  <div className="form-control">
                    { entry.debit.cash}
                  </div>
                  </td>


                  <td>

                  <div className="form-control">
                    {entry?.debit?.date ? moment(entry.debit.date).format("DD/MM/YYYY") : ''}
                  </div>
              </td>

              <td>
                  <div className="form-control">
                  {entry.deposit.cash}
                  </div>
                  </td>

                  <td>

                  <div className="form-control">
                  {entry?.deposit?.date ? moment(entry.deposit.date).format("DD/MM/YYYY") : ""}
                  </div>
              </td>

              <td>
                <div className="form-control">
                  {
                     shesh - totalPaid - entry.deposit.cash + entry.debit.cash
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
              <td>
                    <p
                      className="font-3xl font-bold"
                      style={{ color: "#AA237A" }}
                      // onClick={() => handelDelete(entry?._id)}
                      onClick={() => {
                        swal({
                          title: "Are you sure?",
                          text: `Once deleted, you will not be able to recover entry ${index+1}`,
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            
                            handelDelete(payment?._id);
                            
                          } else {
                            swal("Your entry is safe!");
                          }
                        });
                      }}
                    >
                      <FaRegTrashAlt></FaRegTrashAlt>
                    </p>
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
