import React from "react";
import "../../../Style/DetailsReport.css";
import FristFormBackData from "./FristFormBackData";

const FristFormBack = ({ filteredRegularData }) => {
  const filtered650mlRegularData = filteredRegularData.map((item) => {
  
  });

  console.log("filtered650mlRegularData", filtered650mlRegularData);

  const filtered550mlRegularData = filteredRegularData.map((item) => {
    const { entries } = item;
    return entries.filter((entry) => entry.quantityInML === 550);
  });

  console.log("filtered550mlRegularData", filtered550mlRegularData);

  const filtered330mlRegularData = filteredRegularData.map((item) => {
    const { entries } = item;
    return entries.filter((entry) => entry.quantityInML === 330);
  });

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="p-6 my-4">
          <thead>
            <tr>
              <th rowSpan={3}> क्र. सं.</th>
              <th rowSpan={3}>Brand Name/ ब्राण्ड</th>
              <th colSpan={3}>Average Rate</th>
              <th colSpan={3}>प्रारम्भिक स्टॉक</th>
              <th colSpan={3}>आमद (खरीद)-दु.</th>
              <th colSpan={3}>खरीद रेट - दु</th>
              <th colSpan={3}>आमद (खरीद)-बा.</th>
              <th colSpan={3}>खरीद रेट - बा.</th>
              <th colSpan={3}>आमद (उधारी)</th>
              <th colSpan={3}>भेजान</th>
              <th colSpan={3}>योग/शेष</th>
              <th colSpan={3}>अन्तिम स्टॉक</th>
              <th colSpan={3}>बिक्री</th>
              <th colSpan={3}>रेट</th>
              <th colSpan={3}>योग</th>
              <th rowSpan={3}>कुल योग</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="tg-0lax"></td>
              <td className="tg-0lax"></td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>650ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>550ml</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>330ml</span>
              </td>
            </tr>

            {filteredRegularData.map((regularData, index) => {
              return (
                <FristFormBackData
                  key={index}
                  index={index}
                  regularData={regularData}
                ></FristFormBackData>
              );
            })}

            <tr>
              <td className="tg-0lax" colSpan={2}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total
              </td>
              <td className="tg-0lax"> 0</td>
              <td className="tg-0lax"> 0</td>
              <td className="tg-0lax"> 0</td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.openingStock)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.openingStock)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.openingStock)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.purchaseShop)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.purchaseShop)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.purchaseShop)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(
                              currentItem.purchaseShopRate?.$numberDecimal
                            )),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(
                              currentItem.purchaseShopRate?.$numberDecimal
                            )),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(
                              currentItem.purchaseShopRate?.$numberDecimal
                            )),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.purchaseOutSide)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.purchaseOutSide)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.purchaseOutSide)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(
                              currentItem.purchaseOutSideRate?.$numberDecimal
                            )),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(
                              currentItem.purchaseOutSideRate?.$numberDecimal
                            )),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(
                              currentItem.purchaseOutSideRate?.$numberDecimal
                            )),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.credits)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.credits)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.credits)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.send)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.send)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.send)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.remaining)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.remaining)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.remaining)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.closingStock)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.closingStock)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.closingStock)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.sales)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.sales)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total = total + Number(currentItem.sales)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(currentItem.sellingRate?.$numberDecimal)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(currentItem.sellingRate?.$numberDecimal)),
                        0
                      )),
                  0
                )}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.reduce(
                  (total, currentItem) =>
                    (total =
                      total +
                      currentItem.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            Number(currentItem.sellingRate?.$numberDecimal)),
                        0
                      )),
                  0
                )}
              </td>

              <td className="tg-0lax">0 </td>
              <td className="tg-0lax">0 </td>
              <td className="tg-0lax">0 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FristFormBack;
