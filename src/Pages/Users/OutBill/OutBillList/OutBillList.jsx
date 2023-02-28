import React from "react";
import useLiquors from "../../../../Hooks/useLiquors";
import Loader from "../../../../Components/Loader/Loader";
import moment from "moment/moment";

const OutBillList = ({ outBill, index }) => {
  const { averageRate, total, number, liquor, date } = outBill;
  const { getNameByID, loading, brandsLoaded } = useLiquors();

  if (brandsLoaded || loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <th>{moment(date).format("DD/MM/YYYY")}</th>
        <td>{getNameByID(liquor._id)}</td>
        <td>{liquor?.quantityInML}</td>
        <td>{number}</td>
        <td>{averageRate.$numberDecimal}</td>
        <td>{total}</td>
      </tr>
    </>
  );
};

export default OutBillList;
