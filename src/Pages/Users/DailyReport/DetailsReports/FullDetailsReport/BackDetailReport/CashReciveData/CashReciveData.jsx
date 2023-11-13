import React from "react";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const CashReciveData = ({ borrwedCashReturn, index, entries }) => {
  const { getBranchName,
    getPartnerName, getPartyName } = usePartyNames()
  return (

    <>


    
      
       
          <tr key={index}>
            <td className="tg-0lax">{index + 1}</td>
            <td className="tg-0lax" >
            {borrwedCashReturn.type==="PARTY" ? getPartyName(borrwedCashReturn.from) : borrwedCashReturn.type==="PARTNER" ? getPartnerName(borrwedCashReturn.from) : borrwedCashReturn.type==="BRANCH" ? getBranchName(borrwedCashReturn.from):""}
            </td>
            <td className="tg-0lax" >
              {borrwedCashReturn.type}
            </td>
            <td className="tg-0lax" >
              {borrwedCashReturn.cash}
            </td>
            <td className="tg-0lax" >
              {borrwedCashReturn.comment}
            </td>
          </tr>
        
   
    </>
  );
};

export default CashReciveData;
