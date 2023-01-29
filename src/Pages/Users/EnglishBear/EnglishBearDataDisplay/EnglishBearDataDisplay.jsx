import React from "react";

const EnglishBearDataDisplay = ({ englishBear, index }) => {
  const { quantityInML, currentStock, brandName, rate } = englishBear;

  const Total = Number(currentStock * rate);

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{brandName ? brandName : "Not Available Brand Name  "}</td>
        <td>{quantityInML}</td>
        <td>{currentStock}</td>
        <td>{rate}</td>
        <td>{Total}</td>
      </tr>
    </>
  );
};

export default EnglishBearDataDisplay;
