import React from "react";

const RegularData = ({ regularData, index }) => {
  const { entries, brandName } = regularData;

  // get all quantityInML 750 ml data form entries arry

  const quantityInML750 = entries.filter((entry) => entry.quantityInML === 750);

  const quantityInML375 = entries.filter((entry) => entry.quantityInML === 375);
  console.log("quantityInML375", quantityInML375);

  // get all quantityInML 180 ml data form entries arry

  const quantityInML180 = entries.filter((entry) => entry.quantityInML === 180);
  console.log("quantityInML180", quantityInML180);

  return (
    <>
      <tr>
        <td className="tg-0lax">{index + 1}</td>
        <td className="tg-0lax">{brandName}</td>

        {/* Average Rate */}
        {/* show the 750 data  */}

        <td className="tg-0lax">
          {
            // get the average rate for the 750 ml data

            quantityInML750.length > 0
              ? quantityInML750
                  .map((item) => Number(item.purchaseShopRate?.$numberDecimal))
                  .reduce((a, b) => a + b) /
                quantityInML750
                  .map((item) =>
                    Number(item.purchaseOutSideRate?.$numberDecimal)
                  )
                  .reduce((a, b) => a + b)
              : 0
          }
        </td>
        <td className="tg-0lax">
          {
            // get the average rate for the 375 ml data

            quantityInML375.length > 0
              ? quantityInML375
                  .map((item) => Number(item.purchaseShopRate?.$numberDecimal))
                  .reduce((a, b) => a + b) /
                quantityInML375
                  .map((item) =>
                    Number(item.purchaseOutSideRate?.$numberDecimal)
                  )
                  .reduce((a, b) => a + b)
              : 0
          }
        </td>
        <td className="tg-0lax">
          {
            // get the average rate for the 180 ml data

            quantityInML180.length > 0
              ? quantityInML180
                  .map((item) => Number(item.purchaseShopRate?.$numberDecimal))
                  .reduce((a, b) => a + b) /
                quantityInML180
                  .map((item) =>
                    Number(item.purchaseOutSideRate?.$numberDecimal)
                  )
                  .reduce((a, b) => a + b)
              : 0
          }
        </td>

        {/* starting stock */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item.openingStock)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item.openingStock)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item.openingStock)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* Income (Purchase)-D */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item?.purchaseShop)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item?.purchaseShop)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item?.purchaseShop)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* buy rate */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item.purchaseShopRate?.$numberDecimal)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item.purchaseShopRate?.$numberDecimal)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item.purchaseShopRate?.$numberDecimal)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* Inflow (Purchase)-Ba */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item.purchaseOutSide)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* Purchase Rate - Ba */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item.purchaseOutSideRate?.$numberDecimal)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item.purchaseOutSideRate?.$numberDecimal)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item.purchaseOutSideRate?.$numberDecimal)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* inflow (credit) */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item.credits)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item.credits)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item.credits)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* sending */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750.map((item) => item.send).reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375.map((item) => item.send).reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180.map((item) => item.send).reduce((a, b) => a + b)
            : 0}
        </td>

        {/* sum/remainder */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item.remaining)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item.remaining)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item.remaining)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* closing stock */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750
                .map((item) => item.closingStock)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375
                .map((item) => item.closingStock)
                .reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180
                .map((item) => item.closingStock)
                .reduce((a, b) => a + b)
            : 0}
        </td>

        {/* sale, marketing, closeout */}
        <td className="tg-0lax">
          {quantityInML750.length > 0
            ? quantityInML750.map((item) => item.sales).reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML375.length > 0
            ? quantityInML375.map((item) => item.sales).reduce((a, b) => a + b)
            : 0}
        </td>
        <td className="tg-0lax">
          {quantityInML180.length > 0
            ? quantityInML180.map((item) => item.sales).reduce((a, b) => a + b)
            : 0}
        </td>

        {/* rate */}
        <td className="tg-0lax">data</td>
        <td className="tg-0lax">data</td>
        <td className="tg-0lax">data</td>

        {/* sum */}
        <td className="tg-0lax">data</td>
        <td className="tg-0lax">data</td>
        <td className="tg-0lax">data</td>
        {/* <td className="tg-0lax"> */}
        {/* <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td> */}
      </tr>
    </>
  );
};

export default RegularData;
