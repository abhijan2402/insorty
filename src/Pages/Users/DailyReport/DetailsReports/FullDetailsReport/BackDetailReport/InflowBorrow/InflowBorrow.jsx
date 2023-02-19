import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const InflowBorrow = ({index, PurchaseBorrow, entries}) => {
  const { getPartyName } = usePartyNames();
  const { getNameByID,getSize } = useLiquors()
  // console.log(entries)

  return (
    <>
    {
      entries.map((entry,index)=>{
        return(
          <tr>
           <td>{index+1}</td>
      <td>{getPartyName(entry.party)}</td>
      <td>{getNameByID(entry.liquor)}</td>
      <td>{getSize(entry.liquor)}</td>
      <td>{entry.number}</td>
      <td>{entry.comment}</td>
      </tr>
        )
      })
    }

    {/* <h1>test</h1> */}
     
    </>
  );
};

export default InflowBorrow;
