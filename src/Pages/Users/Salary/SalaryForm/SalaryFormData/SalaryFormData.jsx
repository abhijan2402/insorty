import React from "react";

const SalaryFormData = ({ index }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="text"
                value={new Date().toLocaleDateString()}
                disabled
                name="salary_monthYear"
                className="semiSmallInput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="salary_price"
                value={67867}
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
                type="date"
                name="payment_date"
                disabled
                value={new Date().toLocaleDateString()}
                className="semiSmallInput"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="payment_price"
                value={78979}
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
                value={"hello"}
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
