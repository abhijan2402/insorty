import React from "react";
import EnglishBearForm from "../EnglishBearForm/EnglishBearForm";
import EnglishBearMlData from "../EnglishBearMlData/EnglishBearMlData";

const EnglishBear = () => {
  return (
    <section>
      <div className="title my-2">
        <h2 className="font-bold text-[1.5rem]">अंग्रेजी शराब</h2>
        <div className="flex gap-8 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">सेल्समेन का नाम</h2>
          <h2 className="font-bold text-[1.5rem]">12/12/2022</h2>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ब्राण्ड/ Brand Name </th>
              <th>स्टॉक / stock</th>
              <th>Rate / रेट</th>
              <th>Total / योग</th>
              <th>कुल योग/ Amount</th>
            </tr>
          </thead>
          <tbody>
            <EnglishBearForm></EnglishBearForm>
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="commonText">Total</td>
              <td className="price">162,000</td>
            </tr>

            <EnglishBearMlData></EnglishBearMlData>
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="commonText">Total</td>
              <td className="price">162,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EnglishBear;
