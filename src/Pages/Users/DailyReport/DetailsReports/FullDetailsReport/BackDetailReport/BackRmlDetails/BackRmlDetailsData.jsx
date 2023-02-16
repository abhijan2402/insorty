import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";

const BackRmlDetailsData = ({RmlData, index}) => {
  // const { entries } = RmlData;
  // const { getNameByID } = useLiquors();
  // console.log(RmlData, "++++++");

  return (
    <>
      {/* {entries.map((entry, index) => {
        const {
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
        } = entry;

        // const avvregrate =
        //   purchaseShopRate.$numberDecimal +
        //     purchaseOutSideRate.$numberDecimal || 0;

        return (
          // <tr key={index}>
          //   <td>{index + 1}</td>
          //   <td>{getNameByID(liquor?._id)}</td>
          //   <td>{liquor?.quantityInML || 0}</td>
          //   <td>{avvregrate}</td>
          //   <td>{openingStock}</td>
          //   <td>{purchaseShop}</td>
          //   <td>{purchaseShopRate.$numberDecimal || 0}</td>
          //   <td>{purchaseOutSide}</td>
          //   <td>{purchaseOutSideRate.$numberDecimal || 0}</td>
          //   <td>{credits}</td>
          //   <td>{send}</td>
          //   <td>{remaining}</td>
          //   <td>{closingStock}</td>
          //   <td>{sales}</td>
          //   <td>
          //     रेट
          //     {avvregrate * sales}
          //   </td>
          //   <td>{amount.$numberDecimal || 0}</td>
          // </tr>
          <h1>{index + 1}</h1>
        );
      })} */}
    </>
  );
};

export default BackRmlDetailsData;
