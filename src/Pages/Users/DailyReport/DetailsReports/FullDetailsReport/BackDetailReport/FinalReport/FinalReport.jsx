import React from "react";

const FinalReport = ({ data, date }) => {
  return (
    <>
      <tr>
        <td className="tg-0lax">1</td>
        <td className="tg-0lax" colSpan={4}>
          अंग्रेजी
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.english),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">2</td>
        <td className="tg-0lax" colSpan={4}>
          बीयर
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.beer),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">3</td>
        <td className="tg-0lax" colSpan={4}>
          देशी/RML
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.RML),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">4</td>
        <td className="tg-0lax" colSpan={4}>
          कुल बिक्री
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.totalSell),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">5</td>
        <td className="tg-0lax" colSpan={4}>
          पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) =>
              (total = total + currentItem.borrowedCashReturn),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">6</td>
        <td className="tg-0lax" colSpan={4}>
          खाते में (फोन पे आदि)
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.intoAccount),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">7</td>
        <td className="tg-0lax" colSpan={4}>
          उधारी/नामे
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.borrowed),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">8</td>
        <td className="tg-0lax" colSpan={4}>
          कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.commission),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">9</td>
        <td className="tg-0lax" colSpan={4}>
          पिछला बकाया
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.previousDues),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">10</td>
        <td className="tg-0lax" colSpan={4}>
          आज भुगतान
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) => (total = total + currentItem.todaysPayment),
            0
          )}
        </td>
      </tr>
      <tr>
        <td className="tg-0lax">11</td>
        <td className="tg-0lax" colSpan={4}>
          शेष रकम
        </td>
        <td className="tg-0lax" colSpan={4}>
          {data.reduce(
            (total, currentItem) =>
              (total = total + Number(currentItem.restAmount.$numberDecimal)),
            0
          )}
        </td>
      </tr>
    </>
  );
};

export default FinalReport;
