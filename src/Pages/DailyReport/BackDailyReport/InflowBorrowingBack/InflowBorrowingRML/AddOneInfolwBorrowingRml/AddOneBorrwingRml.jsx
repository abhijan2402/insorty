import React from "react";

const AddOneBorrwingRml = ({ index }) => {
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
            <input type="text" className="semiSmallInput" name="brandName" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="theNumber" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="comments" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneBorrwingRml;
