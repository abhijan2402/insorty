import React from "react";

const SalaryFormData = ({ salary, index, handelSelaryOnChange }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="number"
                name="salary_monthYear"
                value={salary.salary_monthYear}
                onChange={(e) => handelSelaryOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="salary_price"
                value={salary.salary_price}
                onChange={(e) => handelSelaryOnChange(e, index)}
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
                name="payment_date"
                value={salary.payment_date}
                onChange={(e) => handelSelaryOnChange(e, index)}
                className="commonSmallForm"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="payment_price"
                value={salary.payment_price}
                onChange={(e) => handelSelaryOnChange(e, index)}
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
                value={salary.reason}
                onChange={(e) => handelSelaryOnChange(e, index)}
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

export default SalaryFormData;
