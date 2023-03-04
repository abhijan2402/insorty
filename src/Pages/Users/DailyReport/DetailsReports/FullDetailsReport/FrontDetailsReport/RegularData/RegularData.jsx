import React from "react";

const RegularData = ({ regularData, index }) => {
  const { entries, brandName } = regularData;

  // get all quantityInML 750 ml data form entries arry

  const quantityInML750 = entries.filter((entry) => entry.quantityInML === 750);

  const quantityInML375 = entries.filter((entry) => entry.quantityInML === 375);

  const quantityInML180 = entries.filter((entry) => entry.quantityInML === 180);

  return (
    <>
      <tr>
        <td className="tg-0lax">{index + 1}</td>
        <td className="tg-0lax">{brandName}</td>

        <td className="tg-0lax">0</td>
        <td className="tg-0lax">0</td>
        <td className="tg-0lax">0</td>

        {/* starting stock */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.openingStock))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.openingStock))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.openingStock))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* Income (Purchase)-D */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item?.purchaseShop))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item?.purchaseShop))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item?.purchaseShop))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* buy rate */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.purchaseShopRate?.$numberDecimal))
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.purchaseShopRate?.$numberDecimal))
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.purchaseShopRate?.$numberDecimal))
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* Inflow (Purchase)-Ba */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.purchaseOutSide))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.purchaseOutSide))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.purchaseOutSide))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* Purchase Rate - Ba */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.purchaseOutSideRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.purchaseOutSideRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.purchaseOutSideRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* inflow (credit) */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.credits))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.credits))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.credits))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* sending */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.send))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.send))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.send))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* sum/remainder */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.remaining))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.remaining))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.remaining))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* closing stock */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.closingStock))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.closingStock))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.closingStock))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* sale, marketing, closeout */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.sales))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.sales))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.sales))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* rate */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.sellingRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.sellingRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.sellingRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* sum */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => Number(item.sellingRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b)) *
              quantityInML750
                .map((item) => Number(item.sales))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => Number(item.sellingRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b)) *
              quantityInML375
                .map((item) => Number(item.sales))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => Number(item.sellingRate?.$numberDecimal))
                .reduce((a, b) => Number(a) + Number(b)) *
              quantityInML180
                .map((item) => Number(item.sales))
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
      </tr>
    </>
  );
};

export default RegularData;