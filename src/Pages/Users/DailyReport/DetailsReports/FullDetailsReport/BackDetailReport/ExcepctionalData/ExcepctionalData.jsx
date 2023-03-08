import React from "react";
import ExceptionalDataDetails from "./ExceptionalDataDetails";

const ExcepctionalData = ({
  BackPageReportExceptionalSize: filteredExceptionalData,
}) => {
  const openingStock = filteredExceptionalData.map((item) => {
    const { openingStock } = item;
    return openingStock;
  });

  console.log(openingStock, "openingStock");

  const purchaseShop = filteredExceptionalData.map((item) => {
    const { purchaseShop } = item;
    return purchaseShop;
  });

  const purchaseOutSide = filteredExceptionalData.map((item) => {
    const { purchaseOutSide } = item;
    return purchaseOutSide;
  });

  const credits = filteredExceptionalData.map((item) => {
    const { credits } = item;
    return credits;
  });

  const send = filteredExceptionalData.map((item) => {
    const { send } = item;
    return send;
  });

  const remaining = filteredExceptionalData.map((item) => {
    const { remaining } = item;
    return remaining;
  });

  const closingStock = filteredExceptionalData.map((item) => {
    const { closingStock } = item;
    return closingStock;
  });

  const sales = filteredExceptionalData.map((item) => {
    console.log(item, "item+++++");
    const { sales } = item;
    return sales;
  });

  console.log(sales, "468++");

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <td className="tg-0lax " colSpan={50}>
            <span style={{ fontWeight: "bold" }}>English</span>
          </td>
        </tr>

        <tr>
          <td>S.no</td>
          <th>Brand Name/ ब्राण्ड</th>
          <th>ml</th>
          <th>Average Rate</th>
          <th>प्रारम्भिक स्टॉक</th>
          <th>आमद (खरीद)-दु.</th>
          <th>खरीद रेट - दु</th>
          <th>आमद (खरीद)-बा.</th>
          <th>खरीद रेट - बा.</th>
          <th>आमद (उधारी)</th>
          <th>भेजान</th>
          <th>योग/शेष</th>
          <th>अन्तिम स्टॉक </th>
          <th>बिक्री</th>
          <th>रेट</th>
          <th>रकम</th>
        </tr>
      </thead>
      <tbody>
        {filteredExceptionalData &&
          filteredExceptionalData.map((exceptionalData, index) => {
            return (
              <ExceptionalDataDetails
                key={index}
                index={index}
                exceptionalData={exceptionalData}
              ></ExceptionalDataDetails>
            );
          })}

        {/* <tr>
          <td className="tg-0lax" colSpan={2}>
            Total
          </td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            {filteredExceptionalData && filteredExceptionalData.length && filteredExceptionalData.length>0 && openingStock.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            })}
          </td>
          <td className="tg-0lax">
            {purchaseShop.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            }, 0)}
          </td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            {purchaseOutSide.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            })}
          </td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            {credits.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            }, 0)}
          </td>
          <td className="tg-0lax">
            {send.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            }, 0)}
          </td>
          <td className="tg-0lax">
            {remaining.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            }, 0)}
          </td>
          <td className="tg-0lax">
            {closingStock.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            }, 0)}
          </td>

          <td className="tg-0lax">
            {sales.reduce((acc, item) => {
              const total = Number(acc) + Number(item);
              return total;
            })}
          </td>

          <td className="tg-0lax"></td>

          <td className="tg-0lax"></td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default ExcepctionalData;
