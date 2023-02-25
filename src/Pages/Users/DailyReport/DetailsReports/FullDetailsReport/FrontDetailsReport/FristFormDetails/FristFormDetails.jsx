import React from 'react';
import useLiquors from '../../../../../../../Hooks/useLiquors';

const FristFormDetails = ({ FrontPageData, index }) => {
    const { entries } = FrontPageData;
    const { getNameByID,getSize } = useLiquors();
    // console.log(RmlData, "++++++");

    return (
        <>
            {entries && entries.filter((brand) => {
                if (getSize(brand.liquor) !== 750 && getSize(brand.liquor) !== 330 && getSize(brand.liquor) !== 180 && brand.liquor?.quantityInML !== 750 && brand.liquor?.quantityInML !== 330 && brand.liquor?.quantityInML !== 180){
                    return brand
                }
              }).map((entry, index) => {


                const avg =
                    entry.purchaseShopRate.$numberDecimal +
                    entry.purchaseOutSideRate.$numberDecimal || 0;

                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{getNameByID(entry.liquor?._id)}</td>
                        <td>{entry.liquor?.quantityInML || 0}</td>
                        <td>{(Number(entry.purchaseShopRate.$numberDecimal) +
                            Number(entry.purchaseOutSideRate.$numberDecimal)) / 2}</td>
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
                            {Number(entry.amount ? entry.amount.$numberDecimal : 0)/entry.sales}

                        </td>
                        <td>{entry.amount ? entry.amount.$numberDecimal : 0}</td>
                    </tr>
                );
            })}
        </>
    );
};

export default FristFormDetails;