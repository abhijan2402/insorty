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
            <td className="tg-0lax">{index + 1}</td>
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
              {rate.$numberDecimal}
            </td>
            <td className="tg-0lax"  >
              {(total)}
            </td>
           
            <td className="tg-0lax"  >
              {comment}
            </td>
          </tr>
      
    </>
  );
};

export default InfolwRml;
