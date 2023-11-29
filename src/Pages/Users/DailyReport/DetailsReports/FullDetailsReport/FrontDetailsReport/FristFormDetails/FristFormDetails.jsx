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
        <th>{index }</th>
        <td>{brandName}</td>
        <td>{quantityInML}</td>
        <td>
          {Number(averageRate?.$numberDecimal).toFixed(2)}
        </td>
        <td>{openingStock}</td>
        <td>{purchaseShop}</td>
        <td>{(Number(purchaseShopRate.$numberDecimal || 0)||0).toFixed(2)}</td>
        <td>{purchaseOutSide}</td>
        <td>{(Number(purchaseOutSideRate.$numberDecimal || 0)||0).toFixed(2)}</td>
        <td>{credits}</td>
        <td>{send}</td>
        <td>{remaining}</td>
        <td>{closingStock}</td>
        <td>{sales}</td>
        <td>{(Number(sellingRate?.$numberDecimal)||0).toFixed(2)}</td>
        <td>{(Number(Number(sellingRate?.$numberDecimal) * Number(sales))||0).toFixed(2)}</td>
      </tr>
    </>
  );
};

export default FristFormDetails;
