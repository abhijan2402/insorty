import React from "react";

const CreditDabitForm = ({ index }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="partyName" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="ammount" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="note" />
          </div>
        </td>
      </tr>

      {/* 02 */}
      <tr>
        <th>{index + 2}</th>
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="partyName" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="ammount" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="note" />
          </div>
        </td>
      </tr>

      {/* 03 */}
      <tr>
        <th>{index + 3}</th>
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="partyName" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="ammount" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="note" />
          </div>
        </td>
      </tr>
      {/* 04 */}
      <tr>
        <th>{index + 4}</th>
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="partyName" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="ammount" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="note" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default CreditDabitForm;
