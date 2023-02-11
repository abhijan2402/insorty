import React from "react";
import { Link } from "react-router-dom";
import "../../Style/BackReport.module.scss";



const BackDetailsReport = () => {
  return (
    <section className="p-6">
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
      <div className="overflow-x-auto">
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-baqh" colSpan={36}>
                <span
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  बीयर
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-baqh" rowSpan={2}>
                क्र.सं.
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
              <td className="tg-baqh" rowSpan={2}>
                कुल योग
              </td>
            </tr>
            <tr>
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
            </tr>
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
            </tr>


            
            <tr>
              <td className="tg-0lax" colSpan={36} />
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={14}>
                <span style={{ fontWeight: "bold" }}>देशी/RML </span>
              </td>
              <td className="tg-0lax" />
              <td className="tg-0lax" colSpan={10}>
                <span style={{ fontWeight: "bold" }}>
                  अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
                </span>
              </td>
              <td className="tg-0lax" colSpan={6}>
                <span style={{ fontWeight: "bold" }}>
                  कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                </span>
              </td>
              <td className="tg-0lax" colSpan={5}>
                <span style={{ fontWeight: "bold" }}>
                  पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                </span>
              </td>
            </tr>
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
              <td className="tg-0lax" />
              <td className="tg-0lax">क्र.सं. </td>
              <td className="tg-0lax" colSpan={3}>
                पार्टी का नाम{" "}
              </td>
              <td className="tg-0lax" colSpan={3}>
                ब्राण्ड
              </td>
              <td className="tg-0lax">संख्या</td>
              <td className="tg-0lax" colSpan={2}>
                टिप्पणी
              </td>
              <td className="tg-0lax">क्र.सं. </td>
              <td className="tg-0lax" colSpan={4}>
                विवरण
              </td>
              <td className="tg-0lax">रकम</td>
              <td className="tg-0lax">क्र.सं.</td>
              <td className="tg-0lax" colSpan={3}>
                विवरण
              </td>
              <td className="tg-0lax">रकम</td>
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
            </tr>
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
              <td className="tg-0lax" colSpan={2} />
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
              <td className="tg-0lax" colSpan={5}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total
              </td>
              <td className="tg-0lax" />
              <td className="tg-0lax" colSpan={4}>
                Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td className="tg-0lax" />
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={36} />
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={8}>
                <span style={{ fontWeight: "bold" }}>
                  अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
                </span>
              </td>
              <td className="tg-0lax" colSpan={10}>
                <span style={{ fontWeight: "bold" }}>
                  अंग्रेजी/बीयर/देशी/RML का भेजान
                </span>
              </td>
              <td className="tg-0lax" colSpan={8}>
                <span style={{ fontWeight: "bold" }}>उधारी/नामे</span>
              </td>
              <td className="tg-0lax" colSpan={6}>
                <span style={{ fontWeight: "bold" }}>फाईनल रिपोर्ट</span>
              </td>
              <td className="tg-0lax" colSpan={4} rowSpan={23}>
                रफ जगह
              </td>
            </tr>
            <tr>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>क्र.सं.</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>पार्टी का नाम </span>
              </td>
              <td className="tg-0lax" colSpan={3}>
                <span style={{ fontWeight: "bold" }}>ब्राण्ड</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>संख्या</span>
              </td>
              <td className="tg-0lax" colSpan={2}>
                <span style={{ fontWeight: "bold" }}>टिप्पणी</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>क्र.सं.</span>
              </td>
              <td className="tg-0lax" colSpan={3}>
                <span style={{ fontWeight: "bold" }}>पार्टी का नाम</span>
              </td>
              <td className="tg-0lax" colSpan={3}>
                <span style={{ fontWeight: "bold" }}>ब्राण्ड</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>संख्या</span>
              </td>
              <td className="tg-0lax" colSpan={2}>
                <span style={{ fontWeight: "bold" }}>टिप्पणी</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>क्र.सं. </span>
              </td>
              <td className="tg-0lax" colSpan={3}>
                <span style={{ fontWeight: "bold" }}>नाम</span>
              </td>
              <td className="tg-0lax" colSpan={2}>
                <span style={{ fontWeight: "bold" }}>रकम</span>
              </td>
              <td className="tg-0lax" colSpan={2}>
                <span style={{ fontWeight: "bold" }}>टिप्पणी</span>
              </td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>क्र. सं.</span>
              </td>
              <td className="tg-0lax" colSpan={3}>
                <span style={{ fontWeight: "bold" }}>विवरण</span>
              </td>
              <td className="tg-0lax" colSpan={2}>
                <span style={{ fontWeight: "bold" }}>रकम</span>
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
              <td className="tg-0lax">1</td>
              <td className="tg-0lax" colSpan={3}>
                data
              </td>
              <td className="tg-0lax" colSpan={3}>
                data
              </td>
              <td className="tg-0lax">data</td>
              <td className="tg-0lax" colSpan={2}>
                data
              </td>
              <td className="tg-0lax">1</td>
              <td className="tg-0lax" colSpan={3}>
                data
              </td>
              <td className="tg-0lax" colSpan={2}>
                data
              </td>
              <td className="tg-0lax" colSpan={2}>
                data
              </td>
              <td className="tg-0lax" rowSpan={2}>
                1
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                अंग्रेजी{" "}
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
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
              <td className="tg-0lax" colSpan={4}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
              <td className="tg-0lax" colSpan={2} />
              <td className="tg-0lax" colSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                2
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                बीयर
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                3
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                देशी/RML{" "}
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                4
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                कुल बिक्री
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                5
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                6
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                खाते में (फोन पे आदि)
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                7
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                उधारी/नामे
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                8
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                9
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                पिछला बकाया
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax" rowSpan={2}>
                10
              </td>
              <td className="tg-0lax" colSpan={3} rowSpan={2}>
                आज भुगतान
              </td>
              <td className="tg-0lax" colSpan={2} rowSpan={2} />
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
            </tr>
            <tr>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">delete</td>
              <td className="tg-0lax">
                <span style={{ fontWeight: "bold" }}>11</span>
              </td>
              <td className="tg-0lax" colSpan={3}>
                <span style={{ fontWeight: "bold" }}>शेष रकम</span>
              </td>
              <td className="tg-0lax" colSpan={2} />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BackDetailsReport;
