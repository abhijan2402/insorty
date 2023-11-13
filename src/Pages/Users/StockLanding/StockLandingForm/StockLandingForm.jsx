import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import StockFormData from "../StockLandingForm/StockFormData/StockFormData";
import useStockHooks from "../StockHooks/useStockHooks";
import usePartyNames from "../../../../Hooks/usePartyNames";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import jwtDecode from "jwt-decode";

const StockLandingForm = () => {
  const token = localStorage.getItem("token");
  const { getPartyName } = usePartyNames();
  const id = useParams();
  const { handelOnChangeStockLanding, stockLandingStocks } = useStockHooks();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  const shopType = jwtDecode(token).shopType 

  const { data: partyData, isLoading } = useQuery({
    queryKey: ["partyData"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getStockLendingAndReceivingData?party=${id.partyId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });



  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <button className="commonBtn " onClick={handlePrint}>
        प्रिंट
      </button>
      {shopType==="SHOP" && ( <Link
            to="/user/stocklanding"
           
          >
            <button className="commonBtn">
            सूची
            </button>
      </Link>)}
     {shopType==="BAR" && ( <Link
            to="/user/bearshop/stocklanding"
           
          >
            <button className="commonBtn">
            सूची
            </button>
      </Link>)}
      <section ref={front} className="px-2 py-6">
        <div className="title flex justify-center items-center">
          <h2 className="font-bold text-[1.5rem]">
            पार्टी का नाम:- 
            <span className="titleStyle">{getPartyName(id.partyId)}</span>
          </h2>
        
        </div>
        {/* ************************ all sealy data************** */}

        <div>
          <form action="">
            <div
              className="flex justify-center items-center
          "
            >
              <table className="removeCommonWSpace">
                <thead>
                  <tr>
                    <th className="text-xs"  rowSpan={2}> क्र. सं.</th>
                    <th className="text-xs"  colSpan={2}>ब्राण्ड</th>
                    <th className="text-xs"  colSpan={2}>आमद</th>
                    <th className="text-xs"  colSpan={2}>भेजान </th>
                    <th className="text-xs" colSpan={2}>शेष</th>
                  </tr>
                
                  <tr>
                    

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">ब्राण्ड</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">साईज</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">संख्या</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">टिप्पणी</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">संख्या</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">टिप्पणी</span>
                        </label>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-4">
                        <div className="form-control">
                          <label className="label">जमा</label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <label className="label">नामे</label>
                      </div>
                    </td>

                    {/* ============= कुल योग ================ */}
                  </tr>

                  </thead>

                <tbody>
                  {partyData.length === 0 && partyData ? (
                    <>
                     
                    </>
                  ) : (
                    <>
                      {partyData.map((stockData, index) => {
                        return (
                          <StockFormData
                            key={index}
                            index={index}
                            stockData={stockData}
                          ></StockFormData>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </form>{" "}
          <div>
            <div className="mt-4 flex justify-center gap-4">
            
            </div>
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default StockLandingForm;
