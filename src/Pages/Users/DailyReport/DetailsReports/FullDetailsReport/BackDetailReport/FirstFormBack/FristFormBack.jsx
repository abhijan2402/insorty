import React from "react";
import "../../../Style/DetailsReport.css";
import FristFormBackData from "./FristFormBackData";

const FristFormBack = ({ filteredRegularData }) => {
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
                Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
              <td className="tg-0lax" />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FristFormBack;
