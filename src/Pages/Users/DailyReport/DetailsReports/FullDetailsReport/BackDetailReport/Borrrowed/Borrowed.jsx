import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const Borrowed = ({index,item,entries}) => {
    const { getPartyName, getPartnerName, getBranchName } = usePartyNames();

  const { getNameByID } = useLiquors()
    return (
        <>
       
                <tr>
                    <td>{index+1}</td>
                    <td>{item?.type==="PARTY" ? getPartyName(item.from) : item.type==="PARTNER" ? getPartnerName(item.from) : item.type==="BRANCH" ? getBranchName(item.from):  ""}</td>
                    <td>{item.type}</td>
                    <td>{item?.amount?.$numberDecimal}</td>
                    <td>{item.comment}</td>
                </tr>
         
           
        </>
    );
};

export default Borrowed;
