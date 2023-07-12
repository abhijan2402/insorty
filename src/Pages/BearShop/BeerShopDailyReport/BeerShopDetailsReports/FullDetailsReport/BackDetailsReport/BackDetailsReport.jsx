import React,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import useGetDailyReport from "../../../../../../Hooks/useGetDailyReport";
import Loader from "../../../../../../Components/Loader/Loader";
import InfolwRml from "../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/InflowRml/InfolwRml";
import InflowBorrow from "../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/InflowBorrow/InflowBorrow";
import CommisonExpence from "../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/CommisonExpence/CommisonExpence";
import Borrowed from "../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/Borrrowed/Borrowed";
import FinalReport from "../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/FinalReport/FinalReport";
import CashReciveData from "../../../../../Users/DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/CashReciveData/CashReciveData";
import { tr } from "date-fns/locale";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { useReactToPrint } from "react-to-print";

const BackDailyReport = () => {
  const [filterDate, setFilterData] = useState(new Date());
  const token = localStorage.getItem('token')
  const container = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => container.current,
  });

  
  const [pgNo, setPgNo] = useState(0);
  let frontSet2 = new Set([]);
  const {BackPageData,BackPageLoading,backPageRefetch} = useGetDailyReport(filterDate)

  useEffect(() => {
  
    backPageRefetch()
  }, [filterDate]);

  if(BackPageLoading){
    return <Loader></Loader>
  }
  BackPageData.length && BackPageData.map((item) => {
 
      frontSet2.add(item);
      // setPage(pg.page)
      return 0;
 
  });

 

  const deletePage = (id) =>{
    fetch(`https://insorty-api.onrender.com/shop/deleteBackPageData`, {
      method: "DELETE",
      body: JSON.stringify({ backPageId: id }),
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          Swal.fire("Failed!", "Your file has not been deleted.", "error");
        }
        window.location.reload()
      });
     
  }

  



  return (
    <>
      <section className="mx-2">
          <div className="my-4 flex  items-center">
            <h1 className="font-bold text-2xl">
            बीयर
            </h1>

              <Link to="/user/bearshop/details" className="commonBtn">
              अंग्रेजी
              </Link>

              {/* <Link to="/user/bearshop/dailyreport/front" className="commonBtn">
                Front
              </Link> */}
              <button className="commonBtn " onClick={handlePrint}>
              प्रिंट

        </button>
            </div>
        <div className="flex justify-center items-center gap-4 ">
          </div>
        <div className="flex gap-4 justify-center items-center">
        

          <div className="flex gap-4 items-center my-4">
        <div className="flex gap-2 items-center">
          <DatePicker
            selected={filterDate}
            onChange={(date) => {
              setFilterData(date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox date"
          />
        </div>
        {Array.from(frontSet2)
          .sort((a, b) => a - b)
          .map((item, index) => {
            return (
              <button
                className="commonBtn "
                onClick={() => {
                  setPgNo(index);
                }}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
        </div>
      <button className="commonBtn"  onClick={() => {
              swal({
                title: "Are you sure?",
                text: `Once deleted, you will not be able to recover page
                `,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                 deletePage( BackPageData && BackPageData?.length && BackPageData?.find((page,index)=>
                    index === pgNo
                    
                  )._id);
                  
                } 
              });
            }}>Delete Page</button>

        {/* *********************************************************BREAK*********************************************************  */}
        <form ref={container}> 
          <div className="flex  overflow-x-auto">
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">
                  अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
                </span>
              </h1>
              <div>
                <table className="table commonTable">
                  <thead>
                  <tr>
                      <th > क्र. सं.</th>
                      <th colSpan={4}> पार्टी का नाम</th>
                      <th colSpan={4}>ब्राण्ड</th>
                      <th colSpan={4}>ML</th>
                      <th colSpan={4}>संख्या</th>
                      
                      <th colSpan={4}>टिप्पणी</th>
                    </tr>
                  </thead>
                  <tbody>
                   

                  {BackPageData && BackPageData?.length && BackPageData?.map((page,index)=>{
                    if(index === pgNo){
                      return(<>{
                      page?.purchaseOutSide?.entries?.map((entry,index2)=>{
                        return(
                        <InfolwRml
                        key={index}
                        outSideData={entry}
                        index={index2}
                      ></InfolwRml>)
                      })
                    }</>)}
                  })}

                   <tr>
                <td className="tg-0lax">Total</td>
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax" colSpan={4}></td>
                <td className="tg-0lax" colSpan={4}>
                  {BackPageData &&
                    BackPageData?.length &&
                    BackPageData
                      
                      ?.slice(pgNo, pgNo + 1)
                      ?.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem?.purchaseOutSide?.entries?.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem?.number),
                              0
                            )),
                        0
                      )}
                </td>
               
              </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText mx-3">
                  अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
                </span>
              </h1>

              <>
                <div>
                  <table className="table commonTable">
                    <thead>
                    <tr>
                        <th colSpan={1}> क्र. सं.</th>
                        <th colSpan={1}> पार्टी का नाम</th>
                        <th colSpan={1}> ब्राण्ड</th>
                        <th colSpan={1}>ML</th>
                        <th colSpan={1}>संख्या</th>
                        <th colSpan={1}>टिप्पणी</th>
                      </tr>
                    </thead>
                    <tbody>
                     

                      {BackPageData && BackPageData?.length && BackPageData?.map((page,index)=>{
                    if(index === pgNo){
                      return(<>{
                      page?.purchaseBorrow?.entries?.map((entry,index2)=>{
                        return(
                          <InflowBorrow
                              key={index2}
                              index={index2}
                              // PurchaseBorrow={item}
                              entries={entry}
                            ></InflowBorrow>
                        )
                      })
                    }</>)}
                  })}

<tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax" />
                <td className="tg-0lax">
                  {BackPageData &&
                    BackPageData?.length &&
                    BackPageData
                      ?.slice(pgNo, pgNo + 1)
                      ?.reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem?.purchaseBorrow?.entries?.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem?.number),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax" />
              </tr>
                    </tbody>
                  </table>
                </div>
              </>
            </div>

            <div className="py-6">
              <h1 className="my-4 specialwidth">
                <span className="font-bold titleText mx-3">
                  कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                </span>
              </h1>
              <div>
                <table className="table commonTable">
                  <thead>
                  <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <th colSpan={4}>विवरण</th>
                      <th colSpan={4}>रकम</th>
                      <th colSpan={4}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                   

                    {BackPageData && BackPageData?.length && BackPageData?.map((page,index)=>{
                    if(index === pgNo){
                      return(<>{
                      page?.totalExpense?.entries?.map((entry,index2)=>{
                       
                        return(
                          <CommisonExpence
                          key={index2}
                          index={index2}
                          expences={entry}
                        ></CommisonExpence>
                        )
                      })
                    }</>)}
                  })}

<tr>
                <td className="tg-0lax">Total</td>
                <td className="tg-0lax" colSpan={4}></td>
                <td className="tg-0lax">
                  {BackPageData &&
                    BackPageData?.length &&
                    BackPageData
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem?.totalExpense?.entries?.reduce(
                              (total, currentItem) =>
                                (total =
                                  total +
                                  Number(currentItem?.amount?.$numberDecimal)),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax" colSpan={4}></td>
              </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* *********************************************************BREAK*********************************************************  */}

          {/* *********************************************************BREAK*********************************************************  */}
          <div className="flex  overflow-x-auto">
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">उधारी/नामे</span>
              </h1>

              <div>
                <table className="table commonTable">
                  <thead> <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <th colSpan={1}>पार्टी का नाम</th>
                      <th colSpan={1}>पार्टी/पार्टनर</th>
                      <th colSpan={1}>रकम</th>
                      <th colSpan={1}>टिप्पणी</th>
                    </tr></thead>

                  <tbody>
                   

                    {BackPageData && BackPageData?.length && BackPageData?.map((page,index)=>{
                    if(index === pgNo){
                      return(<>{
                      page?.borrowed?.entries?.map((entry,index2)=>{
                        return(
                          <Borrowed
                          key={index2}
                          index={index2}
                          item={entry}
                          
                        ></Borrowed>
                        )
                      })
                    }</>)}
                  })}

<tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax">
                  
                   
                      {BackPageData &&
                        BackPageData?.length > 0 &&
                        BackPageData
                          .slice(pgNo, pgNo + 1)
                          .reduce(
                            (total, currentItem) =>
                              (total =
                                total +
                                currentItem?.borrowed?.entries?.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(
                                        currentItem?.amount?.$numberDecimal
                                      )),
                                  0
                                )),
                            0
                          )}
                  
                  
                </td>
                <td className="tg-0lax" />
              </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4 ">
                <span className="font-bold titleText flex mx-3">
                  पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                </span>
              </h1>

              <div>
                <table className="table commonTable">
                  <thead>
                  <tr>
                    <th className="tg-0lax">क्र.सं.</th>
                <th className="tg-0lax" colSpan={4}>
                पार्टी का नाम	
                </th>
                <th className="tg-0lax" colSpan={4}>
                पार्टी/पार्टनर	
                </th>
                <th className="tg-0lax" colSpan={4}>
                  रकम
                </th>
                <th className="tg-0lax" colSpan={4}>
                  विवरण
                </th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {BackPageData && BackPageData?.length && BackPageData.map((page,index)=>{
                    if(index === pgNo){
                      return(<>{
                      page?.borrowedCashReturn?.entries?.map((entry,index2)=>{
                        return(
                          <CashReciveData
                          key={index2}
                          index={index2}
                          borrwedCashReturn={entry}
                        
                        ></CashReciveData>
                        )
                      })
                    }</>)}
                  })}
                    <tr>
                <td className="tg-0lax">Total</td>
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax">
                  {BackPageData &&
                    BackPageData?.length &&
                    BackPageData
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem?.borrowedCashReturn?.entries?.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem?.cash),
                              0
                            )),
                        0
                      )}
                </td>
              </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText ">
                राशन/सब्जी आदि खरीद
                </span>
              </h1>

              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <th colSpan={1}>रकम</th>
                      <th colSpan={1}>विवरण</th>
                    </tr>
                  </thead>
                  <tbody>
                  {BackPageData && BackPageData?.length && BackPageData?.map((page,index)=>{
                    if(index === pgNo){
                      return(<>{
                      page?.foodVegetable?.entries?.map((entry,index2)=>{
                        return(
                          <tr>
                          <td className="tg-0lax">{index2+1}</td>
                          <td className="tg-0lax">{entry?.price?.$numberDecimal}</td>
                          <td className="tg-0lax">{entry?.description}</td>
                          </tr>
                        )
                      })
                    }</>)}
                  })}

                    <tr>
                      <td className="tg-0lax">Total</td>
                      <td className="tg-0lax"> {BackPageData &&
                    BackPageData?.length &&
                    BackPageData
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem?.foodVegetable?.entries?.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem?.price?.$numberDecimal)),
                              0
                            )),
                        0
                      )}</td>
                      <td className="tg-0lax"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* *********************************************************BREAK*********************************************************  */}

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">बार कमीशन डेटा</span>
            </h1>

            <div>
              <table className="table commonTable">
                <thead>
                  <tr>
                    <th colSpan={1}> क्र. सं.</th>
                    <th colSpan={1}> ब्राण्ड</th>
                    <th colSpan={1}>ML</th>
                    <th colSpan={1}>मात्रा</th>
                    <th colSpan={1}>रकम</th>
                    <th colSpan={1}> टिप्पणी</th>
                  </tr>
                </thead>
                <tbody>
                {BackPageData && BackPageData?.length && BackPageData?.map((page,index)=>{
                    if(index === pgNo){
                      return(<>{
                      page?.barCommission?.entries.map((entry,index2)=>{
                        return(
                          <tr>
                         <td className="tg-0lax">{index2+1}</td>
                    <td className="tg-0lax">{entry?.liquor?.brandName}</td>
                    <td className="tg-0lax">{entry?.liquor?.quantityInML}</td>
                    <td className="tg-0lax">{entry?.quantity}</td>
                    <td className="tg-0lax">{entry?.amount?.$numberDecimal}</td>
                    <td className="tg-0lax">{entry?.comment}</td>
                          </tr>
                        )
                      })
                    }</>)}
                  })}

                  <tr>
                    <td className="tg-0lax">Total</td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"> {BackPageData &&
                    BackPageData?.length &&
                    BackPageData
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem?.barCommission?.entries?.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem?.quantity)),
                              0
                            )),
                        0
                      )}</td>
                    <td className="tg-0lax">{BackPageData &&
                    BackPageData?.length &&
                    BackPageData
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem?.barCommission?.entries?.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem?.amount?.$numberDecimal)),
                              0
                            )),
                        0
                      )}</td>
                    <td className="tg-0lax"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="py-6">
            <h1 className="my-4 mx-4">
              <span className="font-bold titleText ">फाईनल रिपोर्ट</span>
            </h1>
            <form action="">
              <div className="overflow-x-auto">
                <section>
                  <div className="overflow-x-auto">
                    {/* <------------------------BAR FINAL REPORT-----------------------> */}
                   

                    
                     { BackPageData && BackPageData?.length && BackPageData?.map((page,index)=>{
                    if(index === pgNo){
                      return(<FinalReport
                        data={page?.finalReport}
                      ></FinalReport>
                    )}
                  })}

                     
                  </div>
                </section>
              </div>
            </form>
          </div>

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">रफ जगह
</span>
            </h1>
            <div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="रफ जगह
                "
                rows="3"
                cols="50"
                name="comment"
                form="usrform"
                height="100px"
                width="100px"
              ></textarea>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default BackDailyReport;
