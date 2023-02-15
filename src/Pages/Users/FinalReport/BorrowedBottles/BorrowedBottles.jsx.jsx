import React from "react";

const BorrowedBottles = ({ index, handelOnChangeFinalReport, borrowedBottle }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            {borrowedBottle.partyName}
          </div>
        </td>

        <td>
          <div className="form-control">
            {borrowedBottle.brandName}
          </div>
        </td>

        <td>
          <div className="form-control">
            {borrowedBottle.quantityInML}
          </div>
        </td>

        <td>
          <div className="form-control">
            {borrowedBottle.number}
          </div>
        </td>
      </tr>
    </>
  );
};

export default BorrowedBottles;
