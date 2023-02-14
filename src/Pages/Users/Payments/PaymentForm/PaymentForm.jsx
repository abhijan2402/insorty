import React from "react";
import moment from "moment/moment";

const PaymentForm = ({ index, payment }) => {
  // console.log(payment.entries.length);

if(payment.entries.length === 0){
  return(
    <div>
    <td >
      No Payment Data Found
    </td>
    </div>
  )
}
  return (
    <>
      <tr>
        <td>{index + 1}</td>

        { (payment.entries.map((entry) => {
         {entry.debit ? console.log('found') : console.log('not found')}

          
          return (
            <>
              <td>
                <div className="flex gap-4">
                  <div className="form-control">
                    <input
                    disabled
                      type="number"
                      name="debit_amount"
                      value={entry.debit.cash}
                      className="commonSmallForm"
                    />
                  </div>

                  <div className="form-control">
                    <input
                    disabled
                      type="text"
                      name="debit_month"
                      value={moment(entry.debit.month).format("DD/MM/YYYY")}
                      className="commonSmallForm"
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
                      className="commonSmallForm"
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
                    value={entry.currentBalance}
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
          )
        }))
}
        

        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default PaymentForm;
