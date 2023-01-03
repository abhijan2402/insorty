import React from "react";

const AddOneCaraditDabite = ({ index }) => {
  return (
    <>
      <tr>
        <th>{index + 5}</th>
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

export default AddOneCaraditDabite;
