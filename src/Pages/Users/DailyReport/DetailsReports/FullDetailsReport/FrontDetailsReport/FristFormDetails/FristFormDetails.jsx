import React from "react";

const FristFormDetails = ({ exceptionalData, index,pageId,frontSet }) => {
  const {
    brandName,
    closingStock,
    openingStock,
    purchaseOutSide,
    averageRate,
    purchaseOutSideRate,
    purchaseShop,
    purchaseShopRate,
    quantityInML,
    remaining,
    credits,
    sales,
    send,
    sellingRate,
  } = exceptionalData;

  const amount = send * purchaseShopRate.$numberDecimal;

  return (
    <>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{brandName}</td>
        <td>{quantityInML}</td>
        <td>
          {Number(averageRate?.$numberDecimal).toFixed(2)}
        </td>
        <td>{openingStock}</td>
        <td>{purchaseShop}</td>
        <td>{purchaseShopRate.$numberDecimal || 0}</td>
        <td>{purchaseOutSide}</td>
        <td>{purchaseOutSideRate.$numberDecimal || 0}</td>
        <td>{credits}</td>
        <td>{send}</td>
        <td>{remaining}</td>
        <td>{closingStock}</td>
        <td>{sales}</td>
        <td>{sellingRate?.$numberDecimal}</td>
        <td>{Number(sellingRate?.$numberDecimal) * Number(sales)}</td>
      </tr>
    </>
  );
};

export default FristFormDetails;
