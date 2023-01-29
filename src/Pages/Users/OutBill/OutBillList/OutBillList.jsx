import React from "react";
import useLiquors from "../../../../Hooks/useLiquors";

const OutBillList = ({ outBill, index }) => {
  const { averageRate, total, number, liquor } = outBill;
  const {getNameByID} = useLiquors()
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{getNameByID(liquor?._id)}</td>
        <td>{liquor?.quantityInML}</td>
        <td>{number}</td>
        <td>{averageRate}</td>
        <td>{total}</td>
      </tr>
    </>
  );
};

export default OutBillList;
