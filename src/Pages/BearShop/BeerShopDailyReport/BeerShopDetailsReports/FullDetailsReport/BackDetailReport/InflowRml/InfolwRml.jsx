import React from "react";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";
import useLiquors from "../../../../../../../Hooks/useLiquors";

const InfolwRml = ({ outSideData, index }) => {
  const { getPartyName } = usePartyNames();
  const { liquors, getNameByID, getTheSizeById } = useLiquors();
  const { entries } = outSideData;

  // get brandName from liquors array

  return (
    <>
      <td>
        <b>{index + 1}</b>
      </td>

      {entries.map((inflowData, index) => {
        const { party, number, rate, total, comment, liquor } = inflowData;
        const partyName = getPartyName(party);

        return (
          <tr key={index}>
            <th className="tg-0lax">{index + 1}</th>
            <td className="tg-0lax" colSpan={4}>
              {partyName}
            </td>

            <td className="tg-0lax" colSpan={4}>
              {getNameByID(liquor)}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {number}
            </td>
            <td className="tg-0lax" colSpan={4}>
              Size
              {/* {getTheSizeById(liquor)} */}
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
        );
      })}
    </>
  );
};

export default InfolwRml;
