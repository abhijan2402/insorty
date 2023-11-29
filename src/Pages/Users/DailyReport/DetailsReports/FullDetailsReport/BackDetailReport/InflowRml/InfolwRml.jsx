import React from "react";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";
import useLiquors from "../../../../../../../Hooks/useLiquors";

const InfolwRml = ({ outSideData, index }) => {
  const { getPartyName } = usePartyNames();
  const {  getNameByID, getSize } = useLiquors();
  // const { entries } = outSideData;

 
  const { party, number, rate, total, comment, liquor } = outSideData;
  const partyName = getPartyName(party);
  return (
    <>
     

     
          <tr key={index}>
            <th className="tg-0lax">{index + 1}</th>
            <td className="tg-0lax" >
              {partyName}
            </td>

            <td className="tg-0lax" >
              {liquor?.brandName}
            </td>
            <td className="tg-0lax" >
              {liquor?.quantityInML}
            </td>
            <td className="tg-0lax"  >
              {number}
            </td>
            <td className="tg-0lax"  >
              {(Number(rate.$numberDecimal) || 0).toFixed(2)}
            </td>
            <td className="tg-0lax"  >
              {(Number(total) || 0).toFixed(2)}
            </td>
           
            <td className="tg-0lax"  >
              {comment}
            </td>
          </tr>
      
    </>
  );
};

export default InfolwRml;
