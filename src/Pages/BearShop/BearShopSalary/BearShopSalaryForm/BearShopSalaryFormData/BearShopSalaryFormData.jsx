import React from "react";
import Loader from "../../../../../Components/Loader/Loader";
import moment from "moment/moment";

const SalaryFormData = ({ index, salary, salareyDataLoading }) => {
  const { salary: salaryData, payment, comment } = salary;

  if (salareyDataLoading) {
    return <Loader></Loader>;
  }

  console.log(salary)

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
                value={salaryData?.price}
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
