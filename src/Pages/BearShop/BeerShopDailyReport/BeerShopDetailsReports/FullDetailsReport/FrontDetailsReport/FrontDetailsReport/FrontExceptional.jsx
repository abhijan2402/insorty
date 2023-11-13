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

      const pegInOne = Number((exceptionalData.quantityInML/30).toFixed(2))
      const yog =Number((Number(openingStock) + Number(purchaseOutSide) + Number(purchaseShop) + Number(credits) - Number(send)).toFixed(2))
      const calAvg = (a,b,c,d) => {
        const totalStockRate = ((Number(a) || 0)*(Number(b) || 0)) + ((Number(c) || 0)*(Number(d) || 0))
        return Number(Number((totalStockRate/(a+c)) || 0).toFixed(2))
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
    <td className="tg-0lax">{Number(openingStock).toFixed(2)}</td>
    <td className="tg-0lax">{Number(Number(openingStock)*pegInOne).toFixed(2)}</td>

    {/* ======== आमद (खरीद)-दु. ========= */}

    <td className="tg-0lax">{purchaseShop}</td>
    <td className="tg-0lax">{Number(Number(purchaseShop)*pegInOne).toFixed(2)}</td>

    <td className="tg-0lax">{purchaseShopRate.$numberDecimal || 0}</td>
    <td className="tg-0lax">{Number((Number(purchaseShop)*Number(purchaseShopRate.$numberDecimal || 0))/(Number(purchaseShop)*pegInOne)).toFixed(2)}</td>

    {/* ======== आमद (खरीद)-बा. ========= */}

    <td className="tg-0lax">{purchaseOutSide}</td>
    <td className="tg-0lax">{Number(Number(purchaseOutSide)*pegInOne).toFixed(2)}</td>

    {/*================ खरीद रेट - बा. ==================  */}
    <td className="tg-0lax">{purchaseOutSideRate.$numberDecimal || 0}</td>
    <td className="tg-0lax">{((Number(purchaseOutSide)*Number(purchaseOutSideRate.$numberDecimal || 0))/(Number(purchaseOutSide)*pegInOne)).toFixed(2)}</td>

    <td className="tg-0lax">{credits}</td>
    <td className="tg-0lax">{Number(Number(credits)*pegInOne).toFixed(2)}</td>
    {/* ======== भेजान ========= */}
    <td className="tg-0lax">{send}</td>
    {/* ======== योग/शेष ========= */}
    <td className="tg-0lax">{Number(Number(send)*pegInOne).toFixed(2)}</td>
    {/* ======== अन्तिम स्टॉक ========= */}
    <td className="tg-0lax">{Number(Number(remaining)*pegInOne).toFixed(2)}</td>
    <td className="tg-0lax">{closingStock}</td>
    <td className="tg-0lax">{((Number(remaining)*pegInOne-Number(closingStock))).toFixed(2)}</td>
    {/* ============= कुल योग ================ */}
    <td className="tg-0lax">{Number(sellingRate.$numberDecimal).toFixed(2)}</td>
    <td className="tg-0lax">{Number(((Number(remaining)*pegInOne-Number(closingStock)))*Number(sellingRate.$numberDecimal)).toFixed(2)}</td>
  </tr>
  )
}

export default FrontExceptional