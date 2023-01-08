import React from "react";

const ListOfFinalReport = () => {
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.No </th>
              <th>विवरण</th>
              <th>रकम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="commonText">1</th>
              <td className="commonText">माल ओपनिंग स्टॉक</td>
              <td className="price">500</td>
            </tr>
            <tr>
              <th className="commonText">2</th>
              <td className="commonText">माल खरीद</td>
              <td className="price">500</td>
            </tr>
            <tr>
              <th className="commonText">3</th>
              <td className="commonText">माल शेष/अन्तिम स्टॉक</td>
              <td className="price">500</td>
            </tr>
            <tr>
              <th className="commonText">4</th>
              <td className="commonText">माल काम में लिया</td>
              <td className="price">500</td>
            </tr>
            <tr>
              <th className="commonText">5</th>
              <td className="commonText">माल से नकद प्राप्ति (पर्चा रकम)</td>
              <td className="price">500</td>
            </tr>
            <tr>
              <th className="commonText">6</th>
              <td className="commonText">कमीशन/खर्चा/फूट/मंथली/पेनल्टी आदि</td>
              <td className="price">500</td>
            </tr>
            <tr>
              <th className="commonText">7</th>
              <td className="commonText">बचत</td>
              <td className="price">500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListOfFinalReport;
