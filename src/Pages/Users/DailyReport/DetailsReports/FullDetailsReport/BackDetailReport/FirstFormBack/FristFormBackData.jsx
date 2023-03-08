import React from "react";

const FristFormBackData = ({ regularData, index }) => {
  const { pages, brandName } = regularData;

  return (
    <>
      {pages.map((page, index) => {
        console.log("page", page);

        const quantityInML650 = page.entries.filter(
          (entry) => entry.quantityInML === 650
        );

        console.log(quantityInML650, "4hjui");

        const quantityInML550 = page.entries.filter(
          (entry) => entry.quantityInML === 550
        );

        const quantityInML330 = page.entries.filter(
          (entry) => entry.quantityInML === 330
        );

        return (
          <tr>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax">{brandName}</td>

            {/* Average Rate */}
            {/* show the 650 data  */}

            <td className="tg-0lax">0</td>
            <td className="tg-0lax">0</td>
            <td className="tg-0lax">0</td>

            {/* starting stock */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.openingStock;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.openingStock;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.openingStock;
              })}
            </td>

            {/* Income (Purchase)-D */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>

            {/* buy rate */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>

            {/* Inflow (Purchase)-Ba */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>

            {/* Purchase Rate - Ba */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>

            {/* inflow (credit) */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.credits;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.credits;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.credits;
              })}
            </td>

            {/* sending */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.send;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.send;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.send;
              })}
            </td>

            {/* sum/remainder */}
            <td className="tg-0lax">
              {quantityInML650.length > 0
                ? quantityInML650.map((item, index) => {
                    return item.remaining;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML550.length > 0
                ? quantityInML550.map((item, index) => {
                    return item.remaining;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML330.length > 0
                ? quantityInML330.map((item, index) => {
                    return item.remaining;
                  })
                : 0}
            </td>

            {/* closing stock */}
            <td className="tg-0lax">
              {quantityInML650.length > 0
                ? quantityInML650.map((item, index) => {
                    return item.closingStock;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML550.length > 0
                ? quantityInML550.map((item, index) => {
                    return item.closingStock;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML330.length > 0
                ? quantityInML330.map((item, index) => {
                    return item.closingStock;
                  })
                : 0}
            </td>

            {/* sale, marketing, closeout */}
            <td className="tg-0lax">
              {quantityInML650.length > 0
                ? quantityInML650.map((item, index) => {
                    return item.sales;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML550.length > 0
                ? quantityInML550.map((item, index) => {
                    return item.sales;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML330.length > 0
                ? quantityInML330.map((item, index) => {
                    return item.sales;
                  })
                : 0}
            </td>

            {/* rate */}
            <td className="tg-0lax">
              {quantityInML650.map((item, index) => {
                return item.sellingRate.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML550.map((item, index) => {
                return item.sellingRate.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML330.map((item, index) => {
                return item.sellingRate.$numberDecimal;
              })}
            </td>

            {/* sum */}
            <td className="tg-0lax">
              {quantityInML650.length > 0
                ? quantityInML650.map((item, index) => {
                    return (
                      item.purchaseOutSide +
                      item.purchaseShop +
                      item.credits +
                      item.send
                    );
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML550.length > 0
                ? quantityInML550.map((item, index) => {
                    return (
                      item.purchaseOutSide +
                      item.purchaseShop +
                      item.credits +
                      item.send
                    );
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML330.length > 0
                ? quantityInML330.map((item, index) => {
                    return (
                      item.purchaseOutSide +
                      item.purchaseShop +
                      item.credits +
                      item.send
                    );
                  })
                : 0}
            </td>
            {/* <td className="tg-0lax"> */}
          </tr>
        );
      })}
    </>
  );
};

export default FristFormBackData;
