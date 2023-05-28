import React from "react";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";
import useLiquors from "../../../../../../../Hooks/useLiquors";

const InfolwRml = ({ outSideData, index }) => {
  console.log("entered")
  const { getPartyName } = usePartyNames();
  const {  getNameByID, getSize } = useLiquors();
  // const { entries } = outSideData;
  console.log(outSideData)

 
  const { party, number, rate, total, comment, liquor } = outSideData;
  const partyName = getPartyName(party);
  return (
    <>
     

     
          <tr key={index}>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax" colSpan={4}>
              {partyName}
            </td>

            <td className="tg-0lax" colSpan={4}>
              {liquor?.brandName}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {liquor?.quantityInML}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {number}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {rate?.$numberDecimal}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {total}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {comment}
            </td>
          </tr>
      
    </>
  );
};

export default InfolwRml;
