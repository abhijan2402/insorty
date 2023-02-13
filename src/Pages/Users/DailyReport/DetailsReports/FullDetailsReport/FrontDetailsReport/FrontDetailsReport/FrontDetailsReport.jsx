import React from "react";
import { Link } from "react-router-dom";

const FrontDetailsReport = () => {
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
      </div>
      <div className="divider"></div>

      <div>
        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="tg-baqh" colSpan={36}>
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    अंग्रेजी शराब
                  </span>
                </th>
              </tr>
              <tr>
                <td className="tg-baqh" colSpan={36}>
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
                <td className="tg-baqh" rowSpan={2}>
                  {" "}
                  क्र. सं.
                </td>
                <td className="tg-baqh" rowSpan={2}>
                  ब्राण्ड
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>MRP</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>प्रारम्भिक स्टॉक</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>आमद (खरीद)-दु.</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>आमद (खरीद)-बा.</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>आमद (उधारी)</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>भेजान</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>योग/शेष</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>अन्तिम स्टॉक</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>बिक्री</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>रेट</span>
                </td>
                <td className="tg-baqh" colSpan={3}>
                  <span style={{ fontWeight: "bold" }}>योग</span>
                </td>
                <td className="tg-0lax" rowSpan={2}>
                  कुल योग{" "}
                </td>
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
                </td>
                <td className="tg-0lax">
                  <span
                    style={{ fontWeight: "normal", backgroundColor: "#FFF" }}
                  >
                    data
                  </span>
                </td>
              </tr>

              <tr>
                <td className="tg-0lax" colSpan={5}>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FrontDetailsReport;
