import React from "react";

const FinalReport = () => {
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Reason / विवरण</th>
              <th>रकम</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>1</th>
              <td>अंग्रेजी</td>
              <td>500</td>
            </tr>

            {/* 02 */}
            <tr>
              <th>2</th>
              <td>बीयर</td>
              <td>500</td>
            </tr>

            {/* 03 */}
            <tr>
              <th>3</th>
              <td>देशी/RML</td>
              <td>500</td>
            </tr>
            {/* 04 */}
            <tr>
              <th>4</th>
              <td>कुल बिक्री</td>
              <td>500</td>
            </tr>
            {/* 05 */}
            <tr>
              <th>5</th>
              <td>पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति</td>
              <td>500</td>
            </tr>
            {/* 06 */}
            <tr>
              <th>6</th>
              <td>खाते में (फोन पे आदि)</td>
              <td>500</td>
            </tr>
            {/* 07 */}
            <tr>
              <th>7</th>
              <td>उधारी/नामे</td>
              <td>500</td>
            </tr>
            {/* 08 */}
            <tr>
              <th>8</th>
              <td>कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
              <td>500</td>
            </tr>
            {/* 09 */}
            <tr>
              <th>9</th>
              <td>पिछला बकाया</td>
              <td>500</td>
            </tr>
            {/* 10 */}
            <tr>
              <th>10</th>
              <td>आज भुगतान</td>
              <td>500</td>
            </tr>
            {/* 11 */}
            <tr>
              <th>11</th>
              <td>शेष रकम</td>
              <td>500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FinalReport;
