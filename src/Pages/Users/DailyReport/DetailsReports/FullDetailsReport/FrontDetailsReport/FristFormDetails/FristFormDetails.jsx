import React from "react";

const FristFormDetails = ({ exceptionalData, index }) => {

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

        {/* <td>{entry.openingStock}</td>
        <td>{entry.purchaseShop}</td>
        <td>{entry.purchaseShopRate.$numberDecimal || 0}</td>
        <td>{entry.purchaseOutSide}</td>
        <td>{entry.purchaseOutSideRate.$numberDecimal || 0}</td>
        <td>{entry.credits}</td>
        <td>{entry.send}</td>
        <td>{entry.remaining}</td>
        <td>{entry.closingStock}</td>
        <td>{entry.sales}</td>
        <td>
          {Number(entry.amount ? entry.amount.$numberDecimal : 0) / entry.sales}
        </td>
        <td>{entry.amount ? entry.amount.$numberDecimal : 0}</td> */}
      </tr>
    </>
  );
};

export default FristFormDetails;
