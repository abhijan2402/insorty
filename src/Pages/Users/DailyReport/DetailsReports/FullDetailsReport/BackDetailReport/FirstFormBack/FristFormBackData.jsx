import React from "react";

const FristFormBackData = ({ regularData, index }) => {
  const { entries, brandName } = regularData;

  // get all quantityInML 650 ml data form entries arry

  const quantityInML650 = entries.filter((entry) => entry.quantityInML === 650);
  console.log("quantityInML650", quantityInML650);

  const quantityInML550 = entries.filter((entry) => entry.quantityInML === 550);
  console.log("quantityInML550", quantityInML550);

  // get all quantityInML 330 ml data form entries arry

  const quantityInML330 = entries.filter((entry) => entry.quantityInML === 330);
  console.log("quantityInML330", quantityInML330);

  return (
    <>
      <tr>
        <td className="tg-0lax">{index + 1}</td>
        <td className="tg-0lax">{brandName}</td>

        {/* Average Rate */}
        {/* show the 650 data  */}

        <td className="tg-0lax">0</td>
        <td className="tg-0lax">0</td>
        <td className="tg-0lax">
          {
            // get the average rate for the 330 ml data

            quantityInML330.length > 0
              ? quantityInML330
                  .map((item) => Number(item.purchaseShopRate?.$numberDecimal))
                  .reduce((a, b) => a + b) /
                quantityInML330
                  .map((item) =>
                    Number(item.purchaseOutSideRate?.$numberDecimal)
                  )
                  .reduce((a, b) => a + b)
              : 0
          }
        </td>

        {/* starting stock */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.openingStock)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.openingStock)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.openingStock)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* Income (Purchase)-D */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item?.purchaseShop)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item?.purchaseShop)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item?.purchaseShop)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* buy rate */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.purchaseShopRate?.$numberDecimal)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.purchaseShopRate?.$numberDecimal)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.purchaseShopRate?.$numberDecimal)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* Inflow (Purchase)-Ba */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* Purchase Rate - Ba */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.purchaseOutSideRate?.$numberDecimal)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.purchaseOutSideRate?.$numberDecimal)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.purchaseOutSideRate?.$numberDecimal)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* inflow (credit) */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.credits)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.credits)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.credits)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* sending */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.send)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.send)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.send)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* sum/remainder */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.remaining)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.remaining)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.remaining)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* closing stock */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.closingStock)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.closingStock)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.closingStock)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* sale, marketing, closeout */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.sales)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.sales)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.sales)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>

        {/* rate */}
        <td className="tg-0lax">data</td>
        <td className="tg-0lax">data</td>
        <td className="tg-0lax">data</td>

        {/* sum */}
        <td className="tg-0lax">
          {quantityInML650.length > 0
            ? quantityInML650
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => Number(a) + Number(b)) +
              quantityInML650
                .map((item) => item.purchaseShop)
                .reduce((a, b) => Number(a) + Number(b)) +
              quantityInML650
                .map((item) => item.credits)
                .reduce((a, b) => Number(a) + Number(b)) -
              quantityInML650
                .map((item) => item.send)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML550.length > 0
            ? quantityInML550
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => Number(a) + Number(b)) +
              quantityInML550
                .map((item) => item.purchaseShop)
                .reduce((a, b) => Number(a) + Number(b)) +
              quantityInML550
                .map((item) => item.credits)
                .reduce((a, b) => Number(a) + Number(b)) -
              quantityInML550
                .map((item) => item.send)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML330.length > 0
            ? quantityInML330
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => Number(a) + Number(b)) +
              quantityInML330
                .map((item) => item.purchaseShop)
                .reduce((a, b) => Number(a) + Number(b)) +
              quantityInML330
                .map((item) => item.credits)
                .reduce((a, b) => Number(a) + Number(b)) -
              quantityInML330
                .map((item) => item.send)
                .reduce((a, b) => Number(a) + Number(b))
            : 0}
        </td>
      </tr>
    </>
  );
};

export default FristFormBackData;
