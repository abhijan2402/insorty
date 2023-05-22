import React from "react";
import useLiquors from "../../../../Hooks/useLiquors";
import Loader from "../../../../Components/Loader/Loader";
import moment from "moment/moment";

const OutBillList = ({ outBill, index }) => {
  const { averageRate, total, number, liquor, date } = outBill;
  const {  loading, brandsLoaded } = useLiquors();

  if (brandsLoaded || loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <th>{moment(date).format("DD/MM/YYYY")}</th>
        <td>{liquor?.brandName}</td>
        <td>{liquor?.quantityInML}</td>
        <td>{number}</td>
        <td>{Number(averageRate?.$numberDecimal).toFixed(2)}</td>
        <td>{Number(total?.$numberDecimal).toFixed(2)}</td>
      </tr>
    </>
  );
};

export default OutBillList;
