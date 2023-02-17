import { Liquor } from "@mui/icons-material";
import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";


const ShippingEnglishBear = ({ index, item, entries }) => {
  const { getPartyName } = usePartyNames();
  const { getNameByID, getSize } = useLiquors()
  return (
    <>

    {entries.map((entry,index)=>{
      return(
        <tr>
          <td>{index+1}</td>
          <td>{getPartyName(entry.party)}</td>
          <td>{getNameByID(entry.liquor)}</td>
          <td>{entry.number}</td>
          <td>{getSize(entry.liquor)}</td>
          <td>{Number(entry.total) / Number(entry.number)}</td>
          <td>{entry.total}</td>
          <td>{entry.comment}</td>
        </tr>
      )
    })}    
      
    </>
  );
};

export default ShippingEnglishBear;
