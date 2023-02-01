import React from "react";
import useLiquors from '../../../../Hooks/useLiquors'

const EnglishBearDataDisplay = ({ englishBear, index }) => {
  const { quantityInML, currentStock, brandName, rate,_id } = englishBear;
  const {getNameByID} = useLiquors()

  const Total = Number(currentStock * rate);

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{brandName ? brandName : getNameByID(_id)}</td>
        <td>{quantityInML}</td>
        <td>{currentStock}</td>
        <td>{rate}</td>
        <td>{Total}</td>
      </tr>
    </>
  );
};

export default EnglishBearDataDisplay;
