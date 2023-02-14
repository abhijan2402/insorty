import React from "react";
import Loader from "../../../../../Components/Loader/Loader";
import moment from "moment/moment";

const SalaryFormData = ({ index, salary, salareyDataLoading,salareyDataList }) => {
  const { salary: salaryData, payment, comment } = salary;

  if (salareyDataLoading) {
    return <Loader></Loader>;
  }

  let shesh = salareyDataList.slice(0,index).reduce(
    (total, currentItem) => (total = total + currentItem.salary.price),
    0
  );
  let totalPaid = salareyDataList.slice(0,index).reduce(
    (total, currentItem) => (total = total + currentItem.payment.price),
    0
  );


// console.log(`shesh is ${shesh} at ${index}`)

// console.log(totalPaid)

  // console.log(salareyDataList[index - 1] ? ((salareyDataList[index - 1].salary.price)-(salareyDataList[index - 1].payment.price)+salaryData.price) : 0 )
  // console.log(salareyDataList[index - 1] ? salareyDataList[index - 1].salary.price : 0 )
  // console.log((salaryData?.price)-(payment?.price))
  // console.log(salary)

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                value={moment(salaryData?.month).format("DD/MM/YYYY")}
                disabled
                className="semiSmallInput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={shesh-totalPaid+salaryData?.price}
                // value={salareyDataList[index - 1] ? ((salareyDataList[index - 1].salary.price) - (salareyDataList[index - 1].payment.price) + salaryData.price) : salaryData.price}
                disabled
                className="semiSmallInput"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                disabled
                value={moment(payment?.date).format("DD/MM/YYYY")}
                className="semiSmallInput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                value={payment?.price}
                disabled
                className="semiSmallInput"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="text"
                name="reason"
                disabled
                value={shesh - totalPaid + salaryData?.price - (payment?.price)}
                className="semiSmallInput"
              />
            </div>
          </div>
        </td>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="text"
                name="reason"
                disabled
                value={comment}
                className="semiSmallInput"
              />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SalaryFormData;
