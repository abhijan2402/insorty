import React, { useContext, useRef,useState } from "react";
import { Link } from "react-router-dom";
import FristFormBack from "../FirstFormBack/FristFormBack";
import BackRmlDetailsData from "../BackRmlDetails/BackRmlDetailsData";
import InfolwRml from "../InflowRml/InfolwRml";
import CommisonExpence from "../CommisonExpence/CommisonExpence";
import CashReciveData from "../CashReciveData/CashReciveData";
import { DataContextApi } from "../../../../../../../Context/DataContext";
import Loader from "../../../../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import InflowBorrow from "../InflowBorrow/InflowBorrow";
import ShippingEnglishBear from "../ShippingEnglishBear/ShippingEnglishBear";
import FinalReport from "../FinalReport/FinalReport";
import Borrowed from "../Borrrowed/Borrowed";
import useGetDailyReport from "../../../../../../../Hooks/useGetDailyReport";

const BackDetailReport = () => {
  // const {
  //   getBackRmlData,
  //   purchaseOutsideData,
  //   totalExpensesData,
  //   borrowedCashReturnData,
  //   isLoading,
  //   RMLloading
  // } = useContext(DataContextApi);

  const { RMLData,
    RMLLoaded, PurchaseOutsideData,
    PurchaseOutsideLoaded, TotalExpensesData,
    TotalExpensesLoaded, BorrowedCashReturnData,
    BorrowedCashReturnLoaded, PurchaseBorrowData,
    PurchaseBorrowLoaded, SendData,
    SendLoaded, BorrowedData,
    BorrowedDataLoaded, FinalReportData,FinalReportDataLoaded } = useGetDailyReport()

  const container = useRef(null);
  const [filterDate,setFilterDate] = useState('')

  const handlePrint = useReactToPrint({
    content: () => container.current,
  });

  
  if ( RMLLoaded || PurchaseOutsideLoaded || TotalExpensesLoaded || BorrowedCashReturnLoaded || PurchaseBorrowLoaded || SendLoaded || BorrowedDataLoaded || FinalReportDataLoaded ) {
    return <Loader></Loader>;
  }
  
  // console.log(filterDate, "purchaseborrow");
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

      <button
        className="my-4 btn btn-error text-white font-bold"
        onClick={handlePrint}
      >
        PRINT
      </button>

      <input type="date" name="date" value={filterDate} onChange={(e)=>setFilterDate(e.target.value)} className="mx-4 my-4 semiSmallInput" />

      <div className="divider"></div>

      <div ref={container}>
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
                <th>S.no</th>
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
            
              { RMLData && RMLData.filter((item)=>{
                if (item.date?.toString().includes(filterDate.toString())){
                  return item
                }
                else if(filterDate===''){
                  return item
                }
              }).length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : RMLData.filter((item) => {
                if (item.date?.toString().includes(filterDate.toString())) {
                  return item
                }
                else if (filterDate === '') {
                  return item
                }
              }).map((RmlData, index) => {
                return (
                  <BackRmlDetailsData
                    key={index}
                    index={index}
                    RmlData={RmlData}
                  ></BackRmlDetailsData>
                );
              })}

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
                <td className="tg-0lax" />
                <td className="tg-0lax" />
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
                  Size
                </td>
                <td className="tg-0lax" colSpan={4}>
                  Rate
                </td>
                <td className="tg-0lax" colSpan={4}>
                  Total
                </td>
                <td className="tg-0lax" colSpan={4}>
                  टिप्पणी
                </td>
              </tr>
            </thead>
            <tbody>
              {PurchaseOutsideData && PurchaseOutsideData.filter((item) => {
                if (item.date?.toString().includes(filterDate.toString())) {
                  return item
                }
                else if (filterDate === '') {
                  return item
                }
              }).length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) :
                PurchaseOutsideData.filter((item) => {
                  if (item.date?.toString().includes(filterDate.toString())) {
                    return item
                  }
                  else if (filterDate === '') {
                    return item
                  }
                }).map((outSideData, index) => {
                return (
                  <InfolwRml
                    key={index}
                    outSideData={outSideData}
                    index={index}
                  ></InfolwRml>
                );
              })}

              <tr>
                <td className="tg-0lax">Total</td>
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
                    कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                  </span>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">क्र.सं.</td>
                <td className="tg-0lax" colSpan={4}>
                  type
                </td>
                <td className="tg-0lax" colSpan={4}>
                  विवरण
                </td>
                <td className="tg-0lax" colSpan={4}>
                  रकम
                </td>
              </tr>
            </thead>
            <tbody>
              {TotalExpensesData && TotalExpensesData.filter((item) => {
                if (item.date?.toString().includes(filterDate.toString())) {
                  return item
                }
                else if (filterDate === '') {
                  return item
                }
              }).length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) :
                TotalExpensesData.filter((item) => {
                  if (item.date?.toString().includes(filterDate.toString())) {
                    return item
                  }
                  else if (filterDate === '') {
                    return item
                  }
                }).map((expences, index) => {
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
                  Name
                </td>
                <td className="tg-0lax" colSpan={4}>
                  Type
                </td>
                <td className="tg-0lax" colSpan={4}>
                  रकम
                </td>
                <td className="tg-0lax" colSpan={4}>
                  विवरण
                </td>
              </tr>
            </thead>
            <tbody>
              {BorrowedCashReturnData && BorrowedCashReturnData.length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <>
                    {BorrowedCashReturnData.filter((item) => {
                      if (item.date?.toString().includes(filterDate.toString())) {
                        return item
                      }
                      else if (filterDate === '') {
                        return item
                      }
                    }).map((borrwedCashReturn, index) => {
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
                <td className="tg-0lax" colSpan={4}  />
                <td className="tg-0lax"  />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>
                    अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
                  </span>
                </td>
              </tr>

              <tr>
                <td className="tg-baqh">क्र.सं.</td>
                <th>Party Name/ पार्टी का नाम</th>
                <th>Brand Name/ ब्राण्ड</th>
                <th>Size</th>
                <th>संख्या</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>

              {PurchaseBorrowData && PurchaseBorrowData.length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <>
                    {PurchaseBorrowData.filter((item) => {
                      if (item.date?.toString().includes(filterDate.toString())) {
                        return item
                      }
                      else if (filterDate === '') {
                        return item
                      }
                    }).map((item, index) => {
                      const { entries } = item;
                    return (
                      <InflowBorrow
                        key={index}
                        index={index}
                        PurchaseBorrow = {item}
                        entries={entries}
                      ></InflowBorrow>
                    );
                  })}
                </>
              )}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax" />
                <td className="tg-0lax" />
                <td className="tg-0lax" />
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>
                    अंग्रेजी/बीयर/देशी/RML का भेजान
                  </span>
                </td>
              </tr>

              <tr>
                <td className="tg-baqh">क्र.सं.</td>
                <th>Party Name/ पार्टी का नाम</th>
                <th>Brand Name/ ब्राण्ड</th>
                <th>संख्या</th>
                <th>Quantity</th>
                <th>रेट</th>
                <th>योग</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>

              {SendData && SendData.length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <>
                    {SendData.filter((item) => {
                      if (item.date?.toString().includes(filterDate.toString())) {
                        return item
                      }
                      else if (filterDate === '') {
                        return item
                      }
                    }).map((item, index) => {
                    const { entries } = item;
                    return (
                      <ShippingEnglishBear
                        key={index}
                        index={index}
                        item={item}
                        entries={entries}
                      ></ShippingEnglishBear>
                    );
                  })}
                </>
              )}

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
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>उधारी/नामे</span>
                </td>
              </tr>
              <tr>
                <th>S.no</th>
                <th>पार्टी का नाम</th>
                <th>पार्टी/पार्टनर</th>
                <th>रकम</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>
              {BorrowedData && BorrowedData.length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <>
                    {BorrowedData.filter((item) => {
                      if (item.date?.toString().includes(filterDate.toString())) {
                        return item
                      }
                      else if (filterDate === '') {
                        return item
                      }
                    }).map((item, index) => {
                    const { entries } = item;
                    return (
                      <Borrowed
                        key={index}
                        index={index}
                        item={item}
                        entries={entries}
                      ></Borrowed>
                    );
                  })}
                </>
              )}
              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax" />
                <td className="tg-0lax" />
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>फाईनल रिपोर्ट</span>
                </td>
              </tr>

              <tr>
                <td className="tg-baqh">क्र.सं.</td>
                <td className="tg-baqh" colSpan={4}>
                  विवरण
                </td>
                <td className="tg-baqh" colSpan={4}>
                  रकम
                </td>
              </tr>
            </thead>
            <tbody>
              {FinalReportData && FinalReportData.filter((item) => {
                if (item?.date?.toString().includes(filterDate.toString())) {
                  return item
                }
                else if (filterDate === '') {
                  return item
                }
              }).length === 0 ? (
              <>
                <p>No Data Found</p>
              </>
              ) : (<FinalReport data={FinalReportData.filter((item) => {
                if (item?.date?.toString().includes(filterDate.toString())) {
                  return item
                }
                else if (filterDate === '') {
                  return item
                }
              })}></FinalReport>)}
              
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>रफ जगह</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax" colSpan={4}>
                  Comments Data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BackDetailReport;
