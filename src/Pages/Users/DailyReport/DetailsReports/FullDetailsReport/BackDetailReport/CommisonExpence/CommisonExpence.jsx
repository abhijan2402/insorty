import React from "react";

const CommisonExpence = ({ expences, index, entries }) => {
  return (
    <>
      {/* <tr>
        <td>{index + 1}</td>
        <td colSpan={8}>{expences?.salesmen}</td>
      </tr> */}
      {entries?.map((entry, index) => {
        console.log(entry?.amount);

        return (
          <tr key={index}>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax" colSpan={4}>
              {entry?.type}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {entry?.description}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {entry?.amount?.$numberDecimal}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CommisonExpence;
