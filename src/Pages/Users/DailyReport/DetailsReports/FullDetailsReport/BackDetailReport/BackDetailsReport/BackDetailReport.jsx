import React from "react";
import { Link } from "react-router-dom";
import FristFormBack from "../FirstFormBack/FristFormBack";
import BackRmlDetailsData from "../BackRmlDetails/BackRmlDetailsData";
import InfolwRml from "../InflowRml/InfolwRml";
import CommisonExpence from "../CommisonExpence/CommisonExpence";

const BackDetailReport = () => {
  return (
    <section className="my-4">
      <div className="flex gap-6 items-center ">
        <h1>Back Details Report</h1>
        <Link
          to="/user/frontdailyreport/details"
          className="btn btn-error text-white font-bold"
        >
          Front Details Report
        </Link>
      </div>
      <div className="divider"></div>

      <div className="overflow-x-auto m-4 p-4 ">
        <FristFormBack></FristFormBack>
      </div>

      <div className="overflow-x-auto m-4 p-4 flex ">
        <table>
          <thead>
            <tr>
              <td className="tg-0lax" colSpan={36} />
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={14}>
                <span style={{ fontWeight: "bold" }}>देशी/RML </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax">क्र.सं.</td>
              <td className="tg-0lax">ब्राण्ड</td>
              <td className="tg-0lax">MRP</td>
              <td className="tg-0lax">प्रारम्भिक स्टॉक</td>
              <td className="tg-0lax">आमद (खरीद)-दु.</td>
              <td className="tg-0lax">आमद (खरीद)-बा.</td>
              <td className="tg-0lax">आमद (उधारी)</td>
              <td className="tg-0lax">भेजान</td>
              <td className="tg-0lax">योग/ शेष</td>
              <td className="tg-0lax">अन्तिम स्टॉक</td>
              <td className="tg-0lax">बिक्री</td>
              <td className="tg-0lax">रेट </td>
              <td className="tg-0lax" colSpan={2}>
                रकम
              </td>
              <td className="tg-0lax"></td>
            </tr>

            <BackRmlDetailsData></BackRmlDetailsData>

            <tr>
              <td className="tg-0lax" colSpan={2}>
                Total
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
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <td className="tg-0lax" colSpan={36} />
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={14}>
                <span style={{ fontWeight: "bold" }}>
                  अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से){" "}
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax">क्र.सं.</td>
              <td className="tg-0lax" colSpan={3}>
                पार्टी का नाम
              </td>
              <td className="tg-0lax" colSpan={3}>
                ब्राण्ड
              </td>
              <td className="tg-0lax">संख्या</td>
              <td className="tg-0lax" colSpan={2}>
                टिप्पणी
              </td>
              <td className="tg-0lax"></td>
            </tr>

            <InfolwRml></InfolwRml>

            <tr>
              <td className="tg-0lax">Total</td>
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

        <table>
          <thead>
            <tr>
              <td className="tg-0lax" colSpan={36} />
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={14}>
                <span style={{ fontWeight: "bold" }}>
                  कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax">क्र.सं.</td>
              <td className="tg-0lax" colSpan={3}>
                विवरण
              </td>
              <td className="tg-0lax" colSpan={3}>
                रकम
              </td>

              <td className="tg-0lax"></td>
            </tr>

            <CommisonExpence></CommisonExpence>

            <tr>
              <td className="tg-0lax">Total</td>
              <td className="tg-0lax" colSpan={3} />
              <td className="tg-0lax" colSpan={3} />
              <td className="tg-0lax"></td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <td className="tg-0lax" colSpan={36} />
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={14}>
                <span style={{ fontWeight: "bold" }}>
                  पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                </span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax">क्र.सं.</td>
              <td className="tg-0lax" colSpan={3}>
                विवरण
              </td>
              <td className="tg-0lax" colSpan={3}>
                रकम
              </td>
              <td className="tg-0lax"></td>
            </tr>

            <CommisonExpence></CommisonExpence>

            <tr>
              <td className="tg-0lax">Total</td>
              <td className="tg-0lax" colSpan={3} />
              <td className="tg-0lax" colSpan={3} />
              <td className="tg-0lax"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BackDetailReport;
