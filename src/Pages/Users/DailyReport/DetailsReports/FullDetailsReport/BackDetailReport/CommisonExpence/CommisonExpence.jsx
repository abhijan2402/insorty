import React from "react";

const CommisonExpence = ({ expences, index, entries }) => {
  // console.log(entries);
  return (
    <>

     

       
          <tr key={index}>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax"  >
              {expences?.type}
            </td>
            <td className="tg-0lax"  >
              {expences?.amount?.$numberDecimal}
            </td>
            <td className="tg-0lax"  >
              {expences?.description}
            </td>
          </tr>
      
    </>
  );
};

export default CommisonExpence;
