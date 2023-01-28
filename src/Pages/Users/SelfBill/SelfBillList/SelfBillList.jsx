import React from "react";


const SelfBillList = ({ index, billsData, isLoading }) => {
  const { averageRate, total, number, liquor } = billsData;

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

export default SelfBillList;
