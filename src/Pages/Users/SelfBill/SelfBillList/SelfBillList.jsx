import React from "react";
import useLiquors from "../../../../Hooks/useLiquors";
import Loader from "../../../../Components/Loader/Loader";


const SelfBillList = ({ index, billsData, isLoading }) => {
  const { averageRate, total, number, liquor } = billsData;
  const { getNameByID,brandsLoaded } = useLiquors()

  if (brandsLoaded ) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }

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

export default SelfBillList;
