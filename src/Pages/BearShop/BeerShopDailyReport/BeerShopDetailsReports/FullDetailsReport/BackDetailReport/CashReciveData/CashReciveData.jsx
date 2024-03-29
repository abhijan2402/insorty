import React from "react";

const CashReciveData = ({ borrwedCashReturn, index, entries }) => {
  return (
    // <tr>
    //   <th className="tg-0lax">{index + 1}</th>
    //   <td className="tg-0lax" colSpan={4}>
    //     {/* {description} */}
    //   </td>
    //   <td className="tg-0lax" colSpan={4}>
    //     {/* {cash} */}
    //   </td>
    // </tr>

    <>
      {/* <tr>
        <th>{index + 1}</th>
        <td colSpan={8}>{borrwedCashReturn?.salesmen}</td>
      </tr> */}

      {entries?.map((entry, index) => {
        const { description, cash } = entry;
        return (
          <tr key={index}>
            <th className="tg-0lax">{index + 1}</th>
            <td className="tg-0lax" colSpan={4}>
            Name
            </td>
            <td className="tg-0lax" colSpan={4}>
              Type
            </td>
            <td className="tg-0lax" colSpan={4}>
              {cash}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {description}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CashReciveData;
