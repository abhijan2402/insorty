import React from "react";

const AddOneShipping = () => {
  return (
    <>
      <tr>
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
            <input type="text" className="semiSmallInput" name="comment" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneShipping;
