import React from "react";

const OutBillList = ({ outBill, index }) => {
  const { averageRate, total, number, liquor } = outBill;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td></td>
        <td>{liquor?.quantityInML}</td>
        <td>{number}</td>
        <td>{averageRate}</td>
        <td>{total}</td>
      </tr>
    </>
  );
};

export default OutBillList;
