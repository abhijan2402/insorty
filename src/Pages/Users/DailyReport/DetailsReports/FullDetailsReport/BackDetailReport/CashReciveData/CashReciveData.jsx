import React from "react";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const CashReciveData = ({ borrwedCashReturn, index, entries }) => {
  const { getBranchName,
    getPartnerName, getPartyName } = usePartyNames()
  return (

    <>


    
      
       
          <tr key={index}>
            <th className="tg-0lax">{index + 1}</th>
            <td className="tg-0lax" >
              {borrwedCashReturn.type}
            </td>
            <td className="tg-0lax" >
            {borrwedCashReturn.type==="PARTY" ? getPartyName(borrwedCashReturn.from) : borrwedCashReturn.type==="PARTNER" ? getPartnerName(borrwedCashReturn.from) : borrwedCashReturn.type==="BRANCH" ? getBranchName(borrwedCashReturn.from):""}
            </td>
            <td className="tg-0lax" >
              {(Number(borrwedCashReturn.cash) || 0).toFixed(2)}
            </td>
            <td className="tg-0lax" >
              {borrwedCashReturn.comment}
            </td>
          </tr>
        
   
    </>
  );
};

export default CashReciveData;
