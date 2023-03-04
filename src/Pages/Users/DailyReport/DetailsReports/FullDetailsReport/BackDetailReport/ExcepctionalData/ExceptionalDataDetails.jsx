import React from "react";

const ExceptionalDataDetails = ({ exceptionalData, index }) => {
  const {
    brandName,
    closingStock,
    openingStock,
    purchaseOutSide,
    purchaseOutSideRate,
    purchaseShop,
    purchaseShopRate,
    quantityInML,
    remaining,
    credits,
    sales,
    send,
  } = exceptionalData;

  const amount = send * purchaseShopRate.$numberDecimal;

  return (
    <>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{brandName}</td>
        <td>{quantityInML}</td>
        <td>
          {(Number(purchaseShopRate.$numberDecimal) +
            Number(purchaseOutSideRate.$numberDecimal)) /
            2}
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
        <td>{Number(amount ? amount : 0) / sales}</td>
        <td>{amount}</td>
      </tr>
    </>
  );
};

export default ExceptionalDataDetails;
