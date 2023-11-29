import { Liquor } from "@mui/icons-material";
import React from "react";
import useLiquors from "../../../../../../../Hooks/useLiquors";
import usePartyNames from "../../../../../../../Hooks/usePartyNames";

const ShippingEnglishBear = ({ index, item, entries }) => {
  const { getPartyName } = usePartyNames();
  return (
    <>
     
          <tr>
            <th>{index + 1}</th>
            <td>{getPartyName(item.party)}</td>
            <td>{item?.liquor?.brandName}</td>
            <td>{item.number}</td>
            <td>{item.liquor?.quantityInML}</td>
            <td>{Number(item.total) / Number(item.number)}</td>
            <td>{item.total}</td>
            <td>{item.comment}</td>
          </tr>
        
    </>
  );
};

export default ShippingEnglishBear;
