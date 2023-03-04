import React from "react";
import "../../../Style/DetailsReport.css";
import FristFormBackData from "./FristFormBackData";

const FristFormBack = ({ filteredRegularData }) => {
  const filtered650mlRegularData = filteredRegularData.map((item) => {
    const { entries } = item;
    return entries.filter((entry) => entry.quantityInML === 650);
  });

  const filtered550mlRegularData = filteredRegularData.map((item) => {
    const { entries } = item;
    return entries.filter((entry) => entry.quantityInML === 550);
  });

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
              <th rowSpan={3}>S.no</th>
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
                {
                  //  filteredData.map((item) => {
                  //   // get total ammount using reduce method
                  //   const total = item.entries.reduce((acc, item) => {
                  //     return acc + Number(item.amount.$numberDecimal);
                  //   }, 0);
                  //   return total;
                  // });

                  filtered650mlRegularData.map((items) => {
                    const total = items.reduce((acc, item) => {
                      const total = Number(acc) + Number(item.openingStock);
                      return total;
                    }, 0);
                    return total;
                  })
                }
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.openingStock);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.openingStock);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item?.purchaseShop);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item?.purchaseShop);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item?.purchaseShop);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) +
                      Number(Number(item.purchaseShopRate?.$numberDecimal));
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) +
                      Number(Number(item.purchaseShopRate?.$numberDecimal));
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) +
                      Number(Number(item.purchaseShopRate?.$numberDecimal));
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.purchaseOutSide);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.purchaseOutSide);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.purchaseOutSide);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) +
                      Number(Number(item.purchaseOutSideRate?.$numberDecimal));
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) +
                      Number(Number(item.purchaseOutSideRate?.$numberDecimal));
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) +
                      Number(Number(item.purchaseOutSideRate?.$numberDecimal));
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.credits);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.credits);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.credits);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.send);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.send);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.send);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.remaining);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.remaining);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.remaining);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.closingStock);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.closingStock);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.closingStock);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.sales);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.sales);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total = Number(acc) + Number(item.sales);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>

              <td className="tg-0lax">
                {filtered650mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) + Number(item.sellingRate?.$numberDecimal);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered550mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) + Number(item.sellingRate?.$numberDecimal);
                    return total;
                  }, 0);
                  return total;
                })}
              </td>
              <td className="tg-0lax">
                {filtered330mlRegularData.map((items) => {
                  const total = items.reduce((acc, item) => {
                    const total =
                      Number(acc) + Number(item.sellingRate?.$numberDecimal);
                    return total;
                  }, 0);
                  return total;
                })}
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
