import React from "react";
import useLiquors from "../../../../Hooks/useLiquors";
import Loader from "../../../../Components/Loader/Loader";
import moment from "moment/moment";


const SelfBillList = ({ index, billsData, isLoading }) => {
  const { averageRate, total, number, liquor,date } = billsData;
  const { getNameByID, loading, brandsLoaded } = useLiquors()

  if (brandsLoaded || loading ) {
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
        <th>{moment(date).format('DD/MM/YYYY')}</th>
        <td>{getNameByID(liquor?._id)}</td>
        <td>{liquor?.quantityInML}</td>
        <td>{number}</td>
        <td>{Number(averageRate?.$numberDecimal).toFixed(2)}</td>
        <td>{Number(total?.$numberDecimal).toFixed(2)}</td>
      </tr>
    </>
  );
};

export default SelfBillList;
