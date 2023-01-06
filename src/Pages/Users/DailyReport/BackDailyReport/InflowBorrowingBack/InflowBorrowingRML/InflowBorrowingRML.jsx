import React from "react";

const InflowBorrowingRML = ({ index, onChangeBorrowingRml, item }) => {
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
              onChange={(e) => onChangeBorrowingRml(e, index)}
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
              onChange={(e) => onChangeBorrowingRml(e, index)}
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
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control ">
            <select
              className="select select-bordered"
              name="quantity"
              value={item.quantity}
              onChange={(e) => onChangeBorrowingRml(e, index)}
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
              type="number"
              className="semiSmallInput"
              name="total"
              value={item.total}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="rate"
              value={item.rate}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="reason"
              value={item.reason}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default InflowBorrowingRML;
