import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import useFrontDetails from "../../../../../BeerHooks/DailyReportHooks/UseBeerShopFront/useFrontDetails";
import Loader from "../../../../../../../Components/Loader/Loader";
import FrontRegularData from "./FrontRegularData";
import FrontExceptional from "./FrontExceptional";
import useGetDailyReport from "../../../../../../../Hooks/useGetDailyReport";
import RegularData from "../../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/FrontDetailsReport/RegularData/RegularData";
import FristFormDetails from "../../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/FrontDetailsReport/FristFormDetails/FristFormDetails";

const FronteDailyReport = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  let dateChange = new Date()
  const [pageId, setPageId] = useState();
  const [pgNo,setPgNo] = useState(0)
  const { BackPageReportExceptionalSize,
    BackPageReportRegularSize,
    ExceptionalLoading,
    RegularLoading} = useGetDailyReport(selectedDate)
  let count = 0

  const calStock30 = (stock750, stock375, stock180) => {
    const stock =
      25 * Number(stock750) + 12.5 * Number(stock375) + 6 * Number(stock180);
    return stock;
  };


  const {
    FrontPageExceptionalData,
    isLoading2,
    FrontPageRegularData,
    isLoading,
    FrontPage,
    FrontisLoading2,
    frontPagerefetch,
      frontRegularrefetch,
      frontExceptrefetch
} = useFrontDetails(selectedDate)

useEffect(() => {
  // This code will run whenever the selectedDate changes
  // Perform any necessary actions here, such as fetching data using the updated selectedDate
  frontPagerefetch();
  frontRegularrefetch();
  frontExceptrefetch();
}, [selectedDate]);


if(isLoading2 || isLoading || FrontisLoading2 || ExceptionalLoading ||
  RegularLoading){
  return <Loader></Loader>
}


let frontSet = new Set([]);

FrontPageRegularData.map((item) => {
    item.pages.map((pg) => {
      frontSet.add(pg.page);
      return 0;
    });
    return 0;
  });

  let quan750 = []
  let quan375 = []
  let quan180 = []
  let quanOther = []
  let quan650=[]
  let quan500=[]
  let quan330=[]

 

  FrontPage && FrontPage.length && FrontPage.map((page,index)=>{
    if (index === pgNo) {
      page.wineReport.entries.map((entry)=>{
        if (entry?.liquor?.quantityInML===750) {
          quan750.push(entry)
        }
        if (entry?.liquor?.quantityInML===375) {
          quan375.push(entry)
        }
        if (entry?.liquor?.quantityInML===180) {
          quan180.push(entry)
        }
        if (entry?.liquor?.quantityInML!==180 && entry?.liquor?.quantityInML!==375 && entry?.liquor?.quantityInML!==750 && entry?.liquor?.quantityInML!==30) {

          quanOther.push(entry)
        }
      })

      page.beerReport.entries.map((entry)=>{
        if (entry?.liquor?.quantityInML===650) {
          quan650.push(entry)
        }
        if (entry?.liquor?.quantityInML===500) {
          quan500.push(entry)
        }
        if (entry?.liquor?.quantityInML===330) {
          quan330.push(entry)
        }
        
      })
    }
  })


  


  return (
    <section className="mx-2">
      <div className="flex justify-center items-center flex-col">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report Details </h1>
          <Link to="/user/bearshop/details/back" className="commonBtn">
            Back
          </Link>
          <Link to="/user/bearshop/dailyreport/back" className="commonBtn">
            Back
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox date"
          />
        </div>
        {Array.from(frontSet).map((item, index) => {
          return (
            <button
              className="commonBtn "
              onClick={() => {
                setPageId(item);
                setPgNo(index)
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <div className="py-6">
        <div>
          <>
            <div className="overflow-x-auto">
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <th rowSpan={2}> क्र. सं.</th>
                    <th rowSpan={2}>ब्राण्ड</th>
                    <th colSpan={4}>एवरेज रेट</th>
                    <th >प्रारम्भिक स्टॉक</th>
                    <th colSpan={4}>आमद(खरीद)-दु</th>
                    <th colSpan={4}>खरीद रेट - दुु</th>
                    <th colSpan={4}>/आमद(खरीद)बा</th>
                    <th colSpan={4}>खरीद रेट - बा.</th>
                    <th colSpan={4}>आमद (उधारी)</th>
                    <th colSpan={4}>भेजान</th>
                    <th colSpan={1}>योग - शेष</th>
                    <th colSpan={1}>अन्तिम स्टॉक</th>
                    <th colSpan={1}>बिक्री</th>
                    <th colSpan={1}> रेट</th>
                    <th colSpan={1}>योग</th>
                    {/* <th colSpan={1}>कुल योग</th> */}
                  </tr>

                  <tr>
                    {/* ======== MRP Input ========= */}
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    {/* <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td> */}
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    {/* ============खरीद रेट - बा. =============  */}
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>750ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>375ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>180ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>

                    {/* ======== आमद (उधारी) ========= */}

                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>
                    {/* ======== भेजान ========= */}

                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>
                    {/* ======== योग/शेष ========= */}
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>
                    <td className="tg-0lax">
                      <span style={{ fontWeight: "bold" }}>30ml</span>
                    </td>
                    {/* <td className="tg-0lax"></td> */}
                  </tr>
                  { FrontPageRegularData.map((regularData, index) => {
                return (
                  <FrontRegularData
                    key={index}
                    regularData={regularData}
                    index={index}
                    quan1={750}
                    quan2={375}
                    quan3={180}
                    pageId={pageId}
                    frontSet={frontSet}
                  ></FrontRegularData>
                );
              })}

              <tr>
                <td></td>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}</td>
                <td>{quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}</td>
                <td>{quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}</td>
                <td>{quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}</td>
                <td>{calStock30(quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  ),quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  ),quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  ))}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}</td>
                <td>{quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}</td>
                <td>{quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}</td>
                <td>{calStock30(quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  ),quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  ),quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  ))}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.credits),
                    0
                  )}</td>
                <td>{quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.credits),
                    0
                  )}</td>
                <td>{quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.credits),
                    0
                  )}</td>
                <td>{calStock30(quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.credits),
                    0
                  ),quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.credits),
                    0
                  ),quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.credits),
                    0
                  ))}</td>
                <td>{quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.send),
                    0
                  )}</td>
                <td>{quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.send),
                    0
                  )}</td>
                <td>{quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.send),
                    0
                  )}</td>
                <td>{calStock30(quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.send),
                    0
                  ),quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.send),
                    0
                  ),quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.send),
                    0
                  ))}</td>
                <td>{calStock30(quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  ),quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  ),quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  ))}</td>
                <td>{quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}</td>

                  
                <td>{calStock30(quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  ),quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  ),quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  ))-quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}</td>
                <td></td>


                <td>{quan750.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.remaining)*25)*Number(regularData.sellingRate?.$numberDecimal),
                    0
                  ) + 
                  quan375.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.remaining)*12.5)*Number(regularData.sellingRate?.$numberDecimal),
                    0
                  ) +
                  quan180.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.remaining)*6)*Number(regularData.sellingRate?.$numberDecimal),
                    0
                  ) - quan750.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.closingStock))*Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )
                  }</td>
              </tr>

                 
                </tbody>
              </table>
            </div>
          </>
        </div>

        <div>
          <div className="overflow-x-auto my-6">
            <table className="table ">
              <tbody>
                <tr>
                  <th rowSpan={2}>क्र. सं.</th>
                  <th rowSpan={2}>ब्राण्ड</th>
                  <th rowSpan={2}>ml</th>
                  <th colSpan={2}>एवरेज रेट </th>
                  <th colSpan={2}>प्रारम्भिक स्टॉक </th>
                  <th colSpan={2}>आमद (खरीद)-बार </th>
                  <th colSpan={2}>खरीद रेट-बार </th>
                  <th colSpan={2}>आमद (खरीद)-बाहर से </th>
                  <th colSpan={2}>खरीद रेट बाहर </th>
                  <th colSpan={2}>आमद (उधारी) </th>
                  <th colSpan={2}> भेजान </th>
                  <th colSpan={1}> योग/शेष</th>
                  <th colSpan={1}> अन्तिम स्टॉक</th>
                  <th colSpan={1}> बिक्री</th>
                  <th colSpan={1}> रेट</th>
                  <th colSpan={1}>योग</th>
                </tr>

                <tr>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>

                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>

                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>

                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>

                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>

                  {/* ============खरीद रेट - बा. =============  */}
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>

                  {/* ======== आमद (उधारी) ========= */}

                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>
                  {/* ======== भेजान ========= */}

                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>Other ML</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>
                  {/* ======== योग/शेष ========= */}
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>
                  {/* ======== अन्तिम स्टॉक ========= */}
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>
                  <td className="tg-0lax">
                    <span style={{ fontWeight: "bold" }}>30ml</span>
                  </td>
                  <td className="tg-0lax"></td>
                </tr>

                {/* ============== daynamic ==================== */}
                

                {FrontPageExceptionalData &&
                FrontPageExceptionalData.length > 0 &&
                FrontPageExceptionalData.filter((size)=>size.quantityInML !== 30).map((exceptionalData, index) => {
                  const pg = pageId ? pageId : Array.from(frontSet)[0];
                  if (exceptionalData.page === pg) {
                    count++
                    return (
                      
                      <FrontExceptional 
                      key={index}
                      index={count}
                      exceptionalData={exceptionalData}
                      pageId={pageId}
                      frontSet={frontSet}>

                      </FrontExceptional>
                    );
                  }
                })}

                <tr>
                  <td></td>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}</td>
                  <td></td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}</td>

                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.purchaseShop)*(regularData.liquor.quantityInML/30)),
                    0
                  )}</td>
                  <td></td>
                  <td></td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}</td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.purchaseOutSide)*(regularData.liquor.quantityInML/30)),
                    0
                  )}</td>
                  <td></td>
                  <td></td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + Number(regularData.credits),
                    0
                  )}</td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.credits)*(regularData.liquor.quantityInML/30)),
                    0
                  )}</td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + Number(regularData.send),
                    0
                  )}</td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.send)*(regularData.liquor.quantityInML/30)),
                    0
                  )}</td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.remaining)*(regularData.liquor.quantityInML/30)),
                    0
                  )}</td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}</td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.remaining)*(regularData.liquor.quantityInML/30)),
                    0
                  )-quanOther.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}</td>
                  <td></td>
                  <td>{quanOther.reduce(
                    (total, regularData) =>
                      total + (Number(regularData.remaining)*(regularData.liquor.quantityInML/30)*Number(regularData?.sellingRate?.$numberDecimal)),
                    0
                  ) - quanOther.reduce(
                    (total, regularData) =>
                      total +( Number(regularData.closingStock)*Number(regularData?.sellingRate?.$numberDecimal)),
                    0
                  )}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div>
            <>
              <div className="mt-6 ">
                <div className="overflow-x-auto flex ">
                  <div className="py-6">
                    <h1 className="my-4">
                      <span className="font-bold titleText">
                        बिक्री रिपोर्ट
                      </span>
                    </h1>

                    <table className="table">
                      <tbody>
                        <tr>
                          <th rowSpan={2}> क्र. सं.</th>
                          <th rowSpan={2}>Brand Name/ ब्राण्ड</th>
                          <th colSpan={3}>औसत दर</th>
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
                          <th colSpan={3}>कुल योग</th>
                        </tr>

                        <tr>
                          {/* ======== प्रारम्भिक स्टॉक ========= */}
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

                          {/* ============खरीद रेट - बा. =============  */}
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>
                          {/* ======== आमद (उधारी) ========= */}

                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>

                          {/* ======== भेजान ========= */}

                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>

                          {/* ======== योग/शेष ========= */}
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>

                          {/* ======== अन्तिम स्टॉक ========= */}
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>

                          {/* ============= बिक्री ================ */}
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>

                          {/* ============= रेट ================ */}
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>
                          {/* ============= योग ================ */}
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>650ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>550ml</span>
                          </td>
                          <td className="tg-0lax">
                            <span style={{ fontWeight: "bold" }}>330ml</span>
                          </td>

                          <td className="tg-0lax"></td>
                        </tr>

                        {BackPageReportRegularSize
                        .map((regularData, index) => {
                          
                return (
                  <RegularData
                    key={index}
                    regularData={regularData}
                    index={index}
                    pgNo={pgNo}
                    quan1={650}
                    quan2={500}
                    quan3={330}
                    pageId={pageId}
                    frontSet={frontSet}
                  ></RegularData>
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
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan500.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>

                <td>
                  {quan650.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  ) +
                    quan500.reduce(
                      (total, regularData) =>
                        total +
                        Number(regularData.sales) *
                          Number(regularData.sellingRate?.$numberDecimal),
                      0
                    ) +
                    quan330.reduce(
                      (total, regularData) =>
                        total +
                        Number(regularData.sales) *
                          Number(regularData.sellingRate?.$numberDecimal),
                      0
                    )}
                </td>
              </tr>

                      </tbody>
                    </table>
                  </div>

                  <div className="py-6">
                    <h1 className="my-4">
                      <span className="font-bold titleText">
                        पानी, नमकीन, सिगरेट, पुड़िया आदि
                      </span>
                    </h1>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th colSpan={1}> क्र. सं.</th>
                          <th colSpan={1}>विवरण</th>
                          <th colSpan={1}>Buying price/ खरीद रेट</th>
                          <th colSpan={1}>प्राम्भिक स्टॉक</th>
                          <th colSpan={1}>आमद</th>
                          <th colSpan={1}>योग</th>
                          <th colSpan={1}>अंतिम स्टॉक</th>
                          <th colSpan={1}>बिक्री</th>
                          <th colSpan={1}>रेट</th>
                          <th colSpan={1}>योग</th>
                        </tr>

                       

                      {FrontPage.length && FrontPage.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((page,index)=>{
                        console.log(page)
                        if (pgNo===index) {
                          return(
                          page.barSupplements.entries.map((entry,index2)=>{
                            return(
                              <tr>
                          <th>{index2+1}</th>
                          <td className="tg-0lax">{entry.description}</td>
                          <td className="tg-0lax">{entry.purchaseRate.$numberDecimal}</td>
  
                          <td className="tg-0lax">{entry.openingStock}</td>
                          <td className="tg-0lax">{entry.purchase}</td>
  
                          <td className="tg-0lax">{entry.totalQuantity}</td>
  
                          <td className="tg-0lax">{entry.closingStock}</td>
  
                          <td className="tg-0lax">{entry.sales}</td>
  
                          <td className="tg-0lax">{entry?.sellingRate?.$numberDecimal}</td>
  
                          <td className="tg-0lax">{entry?.total?.$numberDecimal}</td>
                        </tr>
                            )
                          }))
                        }
                      })}

                      <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{FrontPage.length && FrontPage.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[pgNo].barSupplements.entries.reduce(
                            (total, regularData) => total + Number(regularData.openingStock),
                            0
                          )}</td>
                        <td>{FrontPage.length && FrontPage.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[pgNo].barSupplements.entries.reduce(
                            (total, regularData) => total + Number(regularData.purchase),
                            0
                          )}</td>
                        <td>{FrontPage.length && FrontPage.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[pgNo].barSupplements.entries.reduce(
                            (total, regularData) => total + Number(regularData.totalQuantity),
                            0
                          )}</td>
                        <td>{FrontPage.length && FrontPage.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[pgNo].barSupplements.entries.reduce(
                            (total, regularData) => total + Number(regularData.closingStock),
                            0
                          )}</td>
                        <td>{FrontPage.length && FrontPage.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[pgNo].barSupplements.entries.reduce(
                            (total, regularData) => total + Number(regularData.sales),
                            0
                          )}</td>
                        <td></td>
                        <td>{FrontPage.length && FrontPage.sort((a, b) => b.createdAt.localeCompare(a.createdAt))[pgNo].barSupplements.entries.reduce(
                            (total, regularData) => total + (Number(regularData.closingStock)*Number(regularData.sellingRate.$numberDecimal)),
                            0
                          )}</td>
                      </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      <div>
        <>
          <div className="mt-6 mb-6">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* ==================== dayamice data */}
                  <tr>
                    <th colSpan={1}> क्र. सं.</th>
                    <th colSpan={1}>Brand Name/ ब्राण्ड</th>
                    <th colSpan={1}>ml</th>
                    <th colSpan={1}>औसत दर</th>
                    <th colSpan={1}>प्रारम्भिक स्टॉक</th>
                    <th colSpan={1}>आमद (खरीद)-दु.</th>
                    <th colSpan={1}>खरीद रेट - दु</th>
                    <th colSpan={1}>आमद (खरीद)-बा.</th>
                    <th colSpan={1}>खरीद रेट - बा.</th>
                    <th colSpan={1}>आमद (उधारी)</th>
                    <th colSpan={1}>भेजान</th>
                    <th colSpan={1}>योग/शेष</th>
                    <th colSpan={1}>अन्तिम स्टॉक</th>
                    <th colSpan={1}>बिक्री</th>
                    <th colSpan={1}>रेट</th>
                    <th colSpan={1}>योग</th>
                  </tr>
                  {BackPageReportExceptionalSize &&
                BackPageReportExceptionalSize.map((exceptionalData, index) => {
                  
                    return (
                      <FristFormDetails
                        key={index}
                        index={count}
                        exceptionalData={exceptionalData}
                        pageId={pageId}
                        frontSet={frontSet}
                      ></FristFormDetails>
                    );
                  
                })}

                  <tr>
                    <td className="tg-0lax">1</td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>

                    <td className="tg-0lax"></td>
                    {/* ======== भेजान ========= */}

                    <td className="tg-0lax"></td>
                    {/* ======== योग/शेष ========= */}

                    <td className="tg-0lax"></td>
                    {/* ======== अन्तिम स्टॉक ========= */}

                    <td className="tg-0lax"></td>
                    {/* ============= बिक्री ================ */}

                    <td className="tg-0lax"></td>
                    {/* ============= रेट ================ */}

                    <td className="tg-0lax"></td>
                    {/* ============= योग ================ */}

                    <td className="tg-0lax"></td>
                    {/* ============= कुल योग ================ */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default FronteDailyReport;
