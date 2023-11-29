import React from "react";

const CommisonExpence = ({ expences, index, entries }) => {
  // console.log(entries);
  return (
    <>

     

       
          <tr key={index}>
            <th className="tg-0lax">{index + 1}</th>
            <td className="tg-0lax"  >
              {expences?.type}
            </td>
            <td className="tg-0lax"  >
              {(Number(expences?.amount?.$numberDecimal) || 0).toFixed(2)}
            </td>
            <td className="tg-0lax"  >
              {expences?.description}
            </td>
          </tr>
      
    </>
  );
};

export default CommisonExpence;
