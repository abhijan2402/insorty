import React from "react";
import useLiquors from '../../../../Hooks/useLiquors'

const EnglishBearDataDisplay = ({ englishBear, index }) => {
  const { quantityInML, currentStock, brandName, totalRateSum,_id } = englishBear;
  const {getNameByID} = useLiquors()

  const Total = Number(currentStock * totalRateSum?.$numberDecimal);

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{brandName ? brandName : getNameByID(_id)}</td>
        <td>{quantityInML}</td>
        <td>{currentStock}</td>
        <td>{totalRateSum?.$numberDecimal}</td>
        <td>{Total}</td>
      </tr>
    </>
  );
};

export default EnglishBearDataDisplay;
