import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";

const BackRmlDetailsData = ({RmlData, index}) => {
  const avg =
  RmlData.purchaseShopRate.$numberDecimal +
  RmlData.purchaseOutSideRate.$numberDecimal || 0;

  return (
    <>
    
      

      

       
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{(RmlData.liquor?.brandName)}</td>
            <td>{RmlData.liquor?.quantityInML || 0}</td>
            <td>{(Number(RmlData.purchaseShopRate.$numberDecimal) +
              Number(RmlData.purchaseOutSideRate.$numberDecimal))/2}</td>
            <td>{RmlData.openingStock}</td>
            <td>{RmlData.purchaseShop}</td>
            <td>{RmlData.purchaseShopRate.$numberDecimal || 0}</td>
            <td>{RmlData.purchaseOutSide}</td>
            <td>{RmlData.purchaseOutSideRate.$numberDecimal || 0}</td>
            <td>{RmlData.credits}</td>
            <td>{RmlData.send}</td>
            <td>{RmlData.remaining}</td>
            <td>{RmlData.closingStock}</td>
            <td>{RmlData.sales}</td>
            <td>
              {Number(RmlData.amount ? RmlData.amount.$numberDecimal : 0)/RmlData.sales}
             
            </td>
            <td>{RmlData.amount ? RmlData.amount.$numberDecimal : 0}</td>
          </tr>
        
    
    </>
  );
};

export default BackRmlDetailsData;
