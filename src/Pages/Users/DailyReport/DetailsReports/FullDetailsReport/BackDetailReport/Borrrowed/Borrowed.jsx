import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const Borrowed = ({index,item,entries}) => {
    const { getPartyName, getPartnerName, getBranchName } = usePartyNames();

  const { getNameByID } = useLiquors()
    return (
        <>
       
                <tr>
                    <th>{index+1}</th>
                    <td>{item.type}</td>
                    <td>{item?.type==="PARTY" ? getPartyName(item.from) : item.type==="PARTNER" ? getPartnerName(item.from) : item.type==="BRANCH" ? getBranchName(item.from):  ""}</td>
                    <td>{(Number(item?.amount?.$numberDecimal)||0).toFixed(2)}</td>
                    <td>{item.comment}</td>
                </tr>
         
           
        </>
    );
};

export default Borrowed;
