import React from "react";

const InflowBorrowingRML = ({
  index,
  onChangeBorrowingRml,
  item,
}) => {
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
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="comments"
              value={item.comments}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default InflowBorrowingRML;
