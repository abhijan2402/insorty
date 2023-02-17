import React ,{useRef,useState} from "react";
import { Link } from "react-router-dom";
import BackRmlDetailsData from "../../BackDetailReport/BackRmlDetails/BackRmlDetailsData";
import { useReactToPrint } from "react-to-print";
import useGetDailyReport from "../../../../../../../Hooks/useGetDailyReport";
import Loader from "../../../../../../../Components/Loader/Loader";
import FristFormDetails from "../FristFormDetails/FristFormDetails";
const FrontDetailsReport = () => {
  const front = useRef(null)
  const { FrontPageData,
    FrontPageDataLoaded } = useGetDailyReport()
  const [filterDate, setFilterDate] = useState('')


  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  if(FrontPageDataLoaded){
    return <Loader></Loader>;

  }

  return (
    <section className="my-4">
      <div className="flex gap-6 items-center my-4">
        <h2 className="font-bold text-xl text-gray-800">
          Front Details Report
        </h2>

        <Link
          to="/user/dailyreport/details"
          className="btn btn-error text-white font-bold"
        >
          Back Details Report
        </Link>

        <button
          className="my-4 btn btn-error text-white font-bold"
          onClick={handlePrint}
        >
          PRINT
        </button>

        <input type="date" name="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="mx-4 my-4 semiSmallInput" />
      </div>
      <div className="divider"></div>

      <div ref={front}>
        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="tg-baqh" colSpan={42}>
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    अंग्रेजी शराब
                  </span>
                </th>
              </tr>
              <tr>
                <td className="tg-baqh" colSpan={42}>
                  दुकान का नाम
                  ............................................................................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सेल्समेन
                  का नाम
                  ..................................................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;दिनांक
                  ...............................
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>S.no</td>
                <th rowSpan={2}>Brand Name/ ब्राण्ड</th>
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

              <tr>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>350ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
              </tr>

              <tr>
                <td className="tg-0lax">1</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                <td className="tg-0lax">data</td>
                {/* <td className="tg-0lax"> */}
                  {/* <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td> */}
              </tr>

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total
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
              </tr>
            </tbody>
          </table>

      
        </div>
          <div className="overflow-x-auto m-4 p-4 flex ">
            <table className="table w-full">
              <thead>
                <tr>
                  <td className="tg-0lax " colSpan={50}>
                    <span style={{ fontWeight: "bold" }}>English</span>
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
              {FrontPageData && FrontPageData.filter((item) => {
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
              ) : FrontPageData.filter((item) => {
                if (item.date?.toString().includes(filterDate.toString())) {
                  return item
                }
                else if (filterDate === '') {
                  return item
                }
              }).map((RmlData, index) => {
                return (
                  <FristFormDetails
                    key={index}
                    index={index}
                    RmlData={RmlData}
                  ></FristFormDetails>
                );
              })}
                {/* <BackRmlDetailsData></BackRmlDetailsData> */}

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

</div>
      </div>

      
    </section>



  );
};

export default FrontDetailsReport;
