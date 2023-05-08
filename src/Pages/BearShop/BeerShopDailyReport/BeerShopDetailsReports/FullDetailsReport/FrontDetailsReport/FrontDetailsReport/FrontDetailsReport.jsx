import React from "react";
import { Link } from "react-router-dom";

const FronteDailyReport = () => {
  return (
    <section className="mx-2">
      <div className="flex justify-center items-center flex-col">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report Details </h1>
          <Link to="/user/bearshop/details/back" className="commonBtn">
            Back
          </Link>
        </div>
        <div className="flex gap-4 ">
          <h1 className="font-bold ">सेल्समेन का नाम</h1>
          <input type="text" className="semiSmallInput" />
          <input type="date" name="" id="" className="semiSmallInput" />
        </div>
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
                    <th colSpan={4}>प्रारम्भिक स्टॉक</th>
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
                    <th colSpan={1}>कुल योग</th>
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
                    <td className="tg-0lax"></td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>Brand Name</td>
                    {/* ======== MRP Input ========= */}
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>

                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>

                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    {/* ======== आमद (खरीद)-दु. ========= */}

                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>

                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>

                    {/* ======== आमद (खरीद)-बा. ========= */}

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
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    {/* ======== योग/शेष ========= */}

                    <td className="tg-0lax"></td>
                    <td className="tg-0lax"></td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td className="tg-0lax"></td>

                    <td className="tg-0lax"></td>

                    <td className="tg-0lax"></td>
                    {/* ============= कुल योग ================ */}
                    <td className="tg-0lax"></td>
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
                  <th colSpan={1}> भेजान </th>
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
                <tr>
                  <td>1</td>
                  <td>Brand Name</td>
                  <td>54</td>

                  {/* ======== MRP Input ========= */}
                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>
                  {/* ======== प्रारम्भिक स्टॉक ========= */}
                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  {/* ======== आमद (खरीद)-दु. ========= */}

                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  {/* ======== आमद (खरीद)-बा. ========= */}

                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  {/*================ खरीद रेट - बा. ==================  */}
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
                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>
                  {/* ============= कुल योग ================ */}
                  <td className="tg-0lax"></td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>Brand Name</td>
                  <td>54</td>

                  {/* ======== MRP Input ========= */}
                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>
                  {/* ======== प्रारम्भिक स्टॉक ========= */}
                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  {/* ======== आमद (खरीद)-दु. ========= */}

                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  {/* ======== आमद (खरीद)-बा. ========= */}

                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>

                  {/*================ खरीद रेट - बा. ==================  */}
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
                  <td className="tg-0lax"></td>
                  <td className="tg-0lax"></td>
                  {/* ============= कुल योग ================ */}
                  <td className="tg-0lax"></td>
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

                        <tr>
                          {/* ======== प्रारम्भिक स्टॉक ========= */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          {/* ============खरीद रेट - बा. =============  */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          {/* ======== आमद (उधारी) ========= */}

                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          {/* ======== भेजान ========= */}

                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          {/* ======== योग/शेष ========= */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          {/* ======== अन्तिम स्टॉक ========= */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          {/* ============= बिक्री ================ */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          {/* ============= रेट ================ */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          {/* ============= योग ================ */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          {/* ============= कुल योग ================ */}
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>
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
                          <th colSpan={1}>Description/ सामान का विवरण</th>
                          <th colSpan={1}>Buying price/ खरीद रेट</th>
                          <th colSpan={1}>प्राम्भिक स्टॉक</th>
                          <th colSpan={1}>आमद</th>
                          <th colSpan={1}>योग</th>
                          <th colSpan={1}>अंतिम स्टॉक</th>
                          <th colSpan={1}>बिक्री</th>
                          <th colSpan={1}>रेट</th>
                          <th colSpan={1}>योग</th>
                        </tr>

                        <tr>
                          <th>1</th>
                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>
                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>

                          <td className="tg-0lax"></td>
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
                    <th colSpan={1}>Average Rate</th>
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
                  <tr>
                    <td className="tg-0lax">1</td>

                    <td className="tg-0lax"></td>
                    {/* ======== MRP Input ========= */}

                    <td className="tg-0lax"></td>

                    <td className="tg-0lax"></td>

                    <td className="tg-0lax"></td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}

                    <td className="tg-0lax"></td>

                    {/* ======== आमद (खरीद)-दु. ========= */}

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
