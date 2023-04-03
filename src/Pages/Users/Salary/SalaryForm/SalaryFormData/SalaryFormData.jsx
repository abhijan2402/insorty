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
            <div className="form-control">
              {moment(salaryData?.month).format("DD/MM/YYYY")}
            </div>
            </td>

            <td>

            <div className="form-control">
              {shesh - totalPaid + salaryData?.price}
            </div>
        </td>

        <td>
            <div className="form-control">
              {moment(payment?.date).format("DD/MM/YYYY")}
            </div>
            </td>

            <td>

            <div className="form-control">
              {payment?.price}
            </div>
        </td>

        <td>
         <div className="form-control">
              {shesh - totalPaid + salaryData?.price - (payment?.price)}
            </div>
        </td>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {comment}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SalaryFormData;
