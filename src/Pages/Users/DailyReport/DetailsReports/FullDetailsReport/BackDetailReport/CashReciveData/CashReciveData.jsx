import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const CashReciveData = ({ borrwedCashReturn, index, entries }) => {
  const { getBranchName,
    getPartnerName, getPartyName } = usePartyNames()
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
      {/* <tr>
        <td>{index + 1}</td>
        <td colSpan={8}>{borrwedCashReturn?.salesmen}</td>
      </tr> */}

      {entries?.map((entry, index) => {
        const { comment, cash,from,type } = entry;
        return (
          <tr key={index}>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax" colSpan={4}>
            {type==="PARTY" ? getPartyName(from) : type==="PARTNER" ? getPartnerName(from) : type==="BRANCH" ? getBranchName(from):""}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {type}
            </td>
            <td className="tg-0lax" colSpan={4}>
              {cash}
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

export default CashReciveData;
