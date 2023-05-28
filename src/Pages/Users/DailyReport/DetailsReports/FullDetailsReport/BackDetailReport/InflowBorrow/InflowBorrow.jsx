import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const InflowBorrow = ({index, PurchaseBorrow, entries}) => {
  const { getPartyName } = usePartyNames();
  const { getNameByID,getSize } = useLiquors()
  // console.log(entries)

  return (
    <>
    
     
          <tr>
           <td>{index+1}</td>
      <td>{getPartyName(entries.party)}</td>
      <td>{entries?.liquor?.brandName}</td>
      <td>{entries?.liquor?.quantityInML}</td>
      <td>{entries.number}</td>
      <td>{entries.comment}</td>
      </tr>
        

    {/* <h1>test</h1> */}
     
    </>
  );
};

export default InflowBorrow;
