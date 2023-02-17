import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const Borrowed = ({index,item,entries}) => {
    const { getPartyName, getPartnerName, getBranchName } = usePartyNames();
  const { getNameByID } = useLiquors()
    return (
        <>
        {entries.map((entry,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{entry.type==="PARTY" ? getPartyName(entry.from) : entry.type==="PARTNER" ? getPartnerName(entry.from) : entry.type==="BRANCH" ? getBranchName(entry.from):  ""}</td>
                    <td>{entry.type}</td>
                    <td>{entry.amount.$numberDecimal}</td>
                    <td>{entry.comment}</td>
                </tr>
            )
        })}
           
        </>
    );
};

export default Borrowed;
