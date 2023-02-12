import React from "react";

const CashReciveData = ({ borrwedCashReturn, index, entries }) => {
  return (
    // <tr>
    //   <td className="tg-0lax">{index + 1}</td>
    //   <td className="tg-0lax" colSpan={4}>
    //     {/* {description} */}
    //   </td>
    //   <td className="tg-0lax" colSpan={4}>
    //     {/* {cash} */}
    //   </td>
    // </tr>

    <>
      <tr>
        <td>{index + 1}</td>
        <td colSpan={8}>{borrwedCashReturn?.salesmen}</td>
      </tr>

      {entries?.map((entry, index) => {
        const { description, cash } = entry;
        return (
          <tr key={index}>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax" colSpan={4}>
              {description}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {cash}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CashReciveData;
