import React from 'react'

function FrontExceptional({ exceptionalData, index,pageId,frontSet }) {
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

      const pegInOne = exceptionalData.quantityInML/30
      const yog =Number(openingStock) + Number(purchaseOutSide) + Number(purchaseShop) + Number(credits) - Number(send)
      const calAvg = (a,b,c,d) => {
        const totalStockRate = (a*b) + (c*d)
        return (totalStockRate/(a+c)).toFixed(2)
      }

  return (
    <tr>
    <td>{index}</td>
    <td>{brandName}</td>
    <td>{quantityInML}</td>

    {/* ======== MRP Input ========= */}
    <td className="tg-0lax"> {Number(averageRate?.$numberDecimal).toFixed(2)}</td>
    <td className="tg-0lax">{calAvg(Number(purchaseShop)*pegInOne,((Number(purchaseShop)*Number(purchaseShopRate.$numberDecimal || 0))/(Number(purchaseShop)*pegInOne)),Number(purchaseOutSide)*pegInOne, ((Number(purchaseOutSide)*Number(purchaseOutSideRate.$numberDecimal || 0))/(Number(purchaseOutSide)*pegInOne)))}</td>
    {/* ======== प्रारम्भिक स्टॉक ========= */}
    <td className="tg-0lax">{openingStock}</td>
    <td className="tg-0lax">{Number(openingStock)*pegInOne}</td>

    {/* ======== आमद (खरीद)-दु. ========= */}

    <td className="tg-0lax">{purchaseShop}</td>
    <td className="tg-0lax">{Number(purchaseShop)*pegInOne}</td>

    <td className="tg-0lax">{purchaseShopRate.$numberDecimal || 0}</td>
    <td className="tg-0lax">{((Number(purchaseShop)*Number(purchaseShopRate.$numberDecimal || 0))/(Number(purchaseShop)*pegInOne)).toFixed(2)}</td>

    {/* ======== आमद (खरीद)-बा. ========= */}

    <td className="tg-0lax">{purchaseOutSide}</td>
    <td className="tg-0lax">{Number(purchaseOutSide)*pegInOne}</td>

    {/*================ खरीद रेट - बा. ==================  */}
    <td className="tg-0lax">{purchaseOutSideRate.$numberDecimal || 0}</td>
    <td className="tg-0lax">{((Number(purchaseOutSide)*Number(purchaseOutSideRate.$numberDecimal || 0))/(Number(purchaseOutSide)*pegInOne)).toFixed(2)}</td>

    <td className="tg-0lax">{credits}</td>
    <td className="tg-0lax">{Number(credits)*pegInOne}</td>
    {/* ======== भेजान ========= */}
    <td className="tg-0lax">{send}</td>
    {/* ======== योग/शेष ========= */}
    <td className="tg-0lax">{Number(send)*pegInOne}</td>
    {/* ======== अन्तिम स्टॉक ========= */}
    <td className="tg-0lax">{Number(remaining)*pegInOne}</td>
    <td className="tg-0lax">{closingStock}</td>
    <td className="tg-0lax">{(Number(remaining)*pegInOne-Number(closingStock))}</td>
    {/* ============= कुल योग ================ */}
    <td className="tg-0lax">{sellingRate.$numberDecimal}</td>
    <td className="tg-0lax">{((Number(remaining)*pegInOne-Number(closingStock)))*Number(sellingRate.$numberDecimal)}</td>
  </tr>
  )
}

export default FrontExceptional