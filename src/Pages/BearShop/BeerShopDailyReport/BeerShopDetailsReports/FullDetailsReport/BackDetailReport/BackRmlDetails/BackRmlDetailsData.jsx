import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";

const BackRmlDetailsData = ({RmlData, index}) => {
  const { entries } = RmlData;
  const { getNameByID } = useLiquors();
  console.log(RmlData, "++++++");

  return (
    <>
      {entries.map((entry, index) => {
        {/* const {
          liquor,
          openingStock,
          purchaseShop,
          purchaseShopRate,
          purchaseOutSide,
          purchaseOutSideRate,
          credits,
          send,
          remaining,
          closingStock,
          sales,
          amount,
        } = entry; */}

        const avg =
          entry.purchaseShopRate.$numberDecimal +
          entry.purchaseOutSideRate.$numberDecimal || 0;

        return (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{getNameByID(entry.liquor?._id)}</td>
            <td>{entry.liquor?.quantityInML || 0}</td>
            <td>{(Number(entry.purchaseShopRate.$numberDecimal) +
              Number(entry.purchaseOutSideRate.$numberDecimal))/2}</td>
            <td>{entry.openingStock}</td>
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
              रेट
             
            </td>
            <td>{entry.amount ? entry.amount.$numberDecimal : 0}</td>
          </tr>
        );
      })}
    </>
  );
};

export default BackRmlDetailsData;
