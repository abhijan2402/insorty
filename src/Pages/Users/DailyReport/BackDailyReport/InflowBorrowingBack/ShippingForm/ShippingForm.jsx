import React from "react";

const ShippingForm = ({ index, onChangeShipping, addShippingState }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="partyName"
              value={addShippingState.partyName}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="brandName"
              value={addShippingState.brandName}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="theNumber"
              value={addShippingState.theNumber}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="comment"
              value={addShippingState.comment}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ShippingForm;
