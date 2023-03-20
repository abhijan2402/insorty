import React from "react";

const RegularData = ({ regularData, index,quan1,quan2,quan3,pageId,frontSet }) => {
  const { pages, brandName } = regularData;

  // get all quantityInML 750 ml data form entries arry

  return (
    <>
      {pages.map((page, index) => {

        const pg = pageId ? pageId : Array.from(frontSet)[0]

        if (page.page === pg){
        const quantityInML750 = page.entries.filter(
          (entry) => entry.quantityInML === quan1
        );

        const quantityInML375 = page.entries.filter(
          (entry) => entry.quantityInML === quan2
        );

        const quantityInML180 = page.entries.filter(
          (entry) => entry.quantityInML === quan3
        );

        return (
          <tr>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax">{brandName}</td>

            {/* Average Rate */}
            {/* show the 750 data  */}

            <td className="tg-0lax">{quantityInML750.map((item, index) => {
              return item?.averageRate?.$numberDecimal;
            })}</td>
            <td className="tg-0lax">{quantityInML375.map((item, index) => {
              return item?.averageRate?.$numberDecimal;
            })}</td>
            <td className="tg-0lax">{quantityInML180.map((item, index) => {
              return item?.averageRate?.$numberDecimal;
            })}</td>

            {/* starting stock */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.openingStock;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.openingStock;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.openingStock;
              })}
            </td>

            {/* Income (Purchase)-D */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseShop;
              })}
            </td>

            {/* buy rate */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseShopRate?.$numberDecimal;
              })}
            </td>

            {/* Inflow (Purchase)-Ba */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseOutSide;
              })}
            </td>

            {/* Purchase Rate - Ba */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.purchaseOutSideRate?.$numberDecimal;
              })}
            </td>

            {/* inflow (credit) */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.credits;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.credits;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.credits;
              })}
            </td>

            {/* sending */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.send;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.send;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.send;
              })}
            </td>

            {/* sum/remainder */}
            <td className="tg-0lax">
              {quantityInML750.length > 0
                ? quantityInML750.map((item, index) => {
                    return item.remaining;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML375.length > 0
                ? quantityInML375.map((item, index) => {
                    return item.remaining;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML180.length > 0
                ? quantityInML180.map((item, index) => {
                    return item.remaining;
                  })
                : 0}
            </td>

            {/* closing stock */}
            <td className="tg-0lax">
              {quantityInML750.length > 0
                ? quantityInML750.map((item, index) => {
                    return item.closingStock;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML375.length > 0
                ? quantityInML375.map((item, index) => {
                    return item.closingStock;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML180.length > 0
                ? quantityInML180.map((item, index) => {
                    return item.closingStock;
                  })
                : 0}
            </td>

            {/* sale, marketing, closeout */}
            <td className="tg-0lax">
              {quantityInML750.length > 0
                ? quantityInML750.map((item, index) => {
                    return item.sales;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML375.length > 0
                ? quantityInML375.map((item, index) => {
                    return item.sales;
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML180.length > 0
                ? quantityInML180.map((item, index) => {
                    return item.sales;
                  })
                : 0}
            </td>

            {/* rate */}
            <td className="tg-0lax">
              {quantityInML750.map((item, index) => {
                return item.sellingRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML375.map((item, index) => {
                return item.sellingRate?.$numberDecimal;
              })}
            </td>
            <td className="tg-0lax">
              {quantityInML180.map((item, index) => {
                return item.sellingRate?.$numberDecimal;
              })}
            </td>

            {/* sum */}
            <td className="tg-0lax">
              {quantityInML750.length > 0
                ? quantityInML750.map((item, index) => {
                    return (
                      Number(item.sellingRate?.$numberDecimal)*Number(item.sales)
                    );
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML375.length > 0
                ? quantityInML375.map((item, index) => {
                    return (
                      Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                    );
                  })
                : 0}
            </td>
            <td className="tg-0lax">
              {quantityInML180.length > 0
                ? quantityInML180.map((item, index) => {
                    return (
                      Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                    );
                  })
                : 0}
            </td>
            <td> {Number(quantityInML750.length > 0
              ? quantityInML750.map((item, index) => {
                return (
                  Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                );
              })
              : 0) + Number(
              quantityInML375.length > 0
                  ? quantityInML375.map((item, index) => {
                    return (
                      Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                    );
                  })
                  : 0
              ) + Number(
                quantityInML180.length > 0
                  ? quantityInML180.map((item, index) => {
                    return (
                      Number(item.sellingRate?.$numberDecimal) * Number(item.sales)
                    );
                  })
                  : 0
              )}</td>
            {/* <td className="tg-0lax"> */}
          </tr>
        );}
      })}
    </>
  );
};

export default RegularData;
