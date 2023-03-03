import React from "react";
import ExceptionalDataDetails from "./ExceptionalDataDetails";

const ExcepctionalData = ({
  BackPageReportExceptionalSize: filteredExceptionalData,
}) => {
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

        <tr>
          <td className="tg-0lax" colSpan={2}>
            Total
          </td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.openingStock),
                        0
                      )),
                  0
                )}
          </td>
          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.purchaseShop),
                        0
                      )),
                  0
                )}
          </td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.purchaseOutSide),
                        0
                      )),
                  0
                )}
          </td>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.credits),
                        0
                      )),
                  0
                )}
          </td>
          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.send),
                        0
                      )),
                  0
                )}
          </td>
          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.remaining),
                        0
                      )),
                  0
                )}
          </td>
          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.closingStock),
                        0
                      )),
                  0
                )}
          </td>

          <td className="tg-0lax">
            {filteredExceptionalData &&
              filteredExceptionalData
                .filter((item) => {
                  if (
                    item.date
                      ?.toString()
                      .includes(filteredExceptionalData.toString())
                  ) {
                    return item;
                  } else if (filteredExceptionalData === "") {
                    return item;
                  }
                  return false;
                })
                .reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + currentItem.sales),
                        0
                      )),
                  0
                )}
          </td>

          <td className="tg-0lax"></td>

          <td className="tg-0lax">
            {/* {FrontPageData.filter((item) => {
                    if (item.date?.toString().includes(filterDate.toString())) {
                      return item;
                    } else if (filterDate === "") {
                      return item;
                    }
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total =
                              total +
                              Number(currentItem?.amount?.$numberDecimal)),
                          0
                        )),
                    0
                  )} */}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExcepctionalData;
