import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FristFormBack from "../FirstFormBack/FristFormBack";
import BackRmlDetailsData from "../BackRmlDetails/BackRmlDetailsData";
import InfolwRml from "../InflowRml/InfolwRml";
import CommisonExpence from "../CommisonExpence/CommisonExpence";
import CashReciveData from "../CashReciveData/CashReciveData";
import { DataContextApi } from "../../../../../../../Context/DataContext";
import Loader from "../../../../../../../Components/Loader/Loader";

const BackDetailReport = () => {
  const {
    purchaseOutsideData,
    totalExpensesData,
    borrowedCashReturnData,
    isLoading,
  } = useContext(DataContextApi);

  // console.log(purchaseOutsideData, "purchaseOutsideData");
  console.log(totalExpensesData, "totalExpensesData");

  if (isLoading) {
    return <Loader></Loader>;
  }

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
        <table className="table w-full">
          <thead>
            <tr>
              <td className="tg-0lax " colSpan={50}>
                <span style={{ fontWeight: "bold" }}>देशी/RML </span>
              </td>
            </tr>

            <tr>
              <td className="tg-baqh">क्र.सं.</td>
              <td className="tg-baqh" colSpan={4}>
                ब्राण्ड
              </td>
              <td className="tg-baqh" colSpan={4}>
                MRP
              </td>
              <td className="tg-baqh" colSpan={4}>
                प्रारम्भिक स्टॉक
              </td>
              <td className="tg-baqh" colSpan={4}>
                आमद (खरीद)-दु.
              </td>
              <td className="tg-baqh" colSpan={4}>
                आमद (खरीद)-बा.
              </td>
              <td className="tg-baqh" colSpan={4}>
                आमद (उधारी)
              </td>
              <td className="tg-baqh" colSpan={4}>
                भेजान
              </td>
              <td className="tg-baqh" colSpan={4}>
                योग/ शेष
              </td>
              <td className="tg-baqh" colSpan={4}>
                अन्तिम स्टॉक
              </td>
              <td className="tg-baqh" colSpan={4}>
                बिक्री
              </td>
              <td className="tg-baqh" colSpan={4}>
                रेट{" "}
              </td>
              <td className="tg-baqh" colSpan={4}>
                रकम
              </td>
            </tr>
          </thead>
          <tbody>
            <BackRmlDetailsData></BackRmlDetailsData>

            <tr>
              <td className="tg-0lax" colSpan={2}>
                Total
              </td>
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
            </tr>
          </tbody>
        </table>

        <table className="table w-full">
          <thead>
            <tr>
              <td className="tg-0lax" colSpan={40}>
                <span style={{ fontWeight: "bold" }}>
                  अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से){" "}
                </span>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={4}>
                क्र.सं.
              </td>
              <td className="tg-0lax" colSpan={4}>
                पार्टी का नाम
              </td>
              <td className="tg-0lax" colSpan={4}>
                ब्राण्ड
              </td>
              <td className="tg-0lax" colSpan={4}>
                संख्या
              </td>
              <td className="tg-0lax" colSpan={4}>
                टिप्पणी
              </td>
            </tr>
          </thead>
          <tbody>
            <InfolwRml></InfolwRml>

            <tr>
              <td className="tg-0lax">Total</td>
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
            </tr>
          </tbody>
        </table>

        <table className="table w-full">
          <thead>
            <tr>
              <td className="tg-0lax" colSpan={40}>
                <span style={{ fontWeight: "bold" }}>
                  कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                </span>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax">क्र.सं.</td>
              <td className="tg-0lax" colSpan={4}>
                विवरण
              </td>
              <td className="tg-0lax" colSpan={4}>
                रकम
              </td>
            </tr>
          </thead>
          <tbody>
            {totalExpensesData.map((expences, index) => {
              const { entries } = expences;
              return (
                <CommisonExpence
                  key={index}
                  entries={entries}
                  index={index}
                  expences={expences}
                ></CommisonExpence>
              );
            })}

            <tr>
              <td className="tg-0lax">Total</td>
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
            </tr>
          </tbody>
        </table>

        <table className="table w-full">
          <thead>
            <tr>
              <td className="tg-0lax" colSpan={40}>
                <span style={{ fontWeight: "bold" }}>
                  पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                </span>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax">क्र.सं.</td>
              <td className="tg-0lax" colSpan={4}>
                विवरण
              </td>
              <td className="tg-0lax" colSpan={4}>
                रकम
              </td>
            </tr>
          </thead>
          <tbody>
            {borrowedCashReturnData && borrowedCashReturnData.length === 0 ? (
              <>
                <p>No Data Found</p>
              </>
            ) : (
              <>
                {borrowedCashReturnData.map((borrwedCashReturn, index) => {
                  const { entries } = borrwedCashReturn;
                  return (
                    <CashReciveData
                      key={index}
                      index={index}
                      borrwedCashReturn={borrwedCashReturn}
                      entries={entries}
                    ></CashReciveData>
                  );
                })}
              </>
            )}

            <tr>
              <td className="tg-0lax">Total</td>
              <td className="tg-0lax" colSpan={4} />
              <td className="tg-0lax" colSpan={4} />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BackDetailReport;
