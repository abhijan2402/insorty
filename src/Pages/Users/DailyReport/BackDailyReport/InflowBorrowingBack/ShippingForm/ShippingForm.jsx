import React from "react";

const ShippingForm = ({ index, onChangeShipping, item }) => {
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
              value={item.partyName}
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
              value={item.brandName}
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
              value={item.theNumber}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <select
              className="select w-full max-w-xs semiSmallInput"
              name="quantity"
              value={item.quantity}
              onChange={(e) => onChangeShipping(e, index)}
            >
              <option value={650} selected>
                650ml
              </option>
              <option value={550}>550ml</option>
              <option value={330}>330ml</option>
              <option value={90}>90ml</option>
              <option value={60}>60ml</option>
            </select>
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="comment"
              value={item.comment}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ShippingForm;
