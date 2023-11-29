import jwtDecode from "jwt-decode";
import React from "react";
import { Link } from "react-router-dom";

const BorrowForm = ({ index, party }) => {
const shopType = jwtDecode(localStorage.getItem('token')).shopType
console.log(shopType)
  const partyId = party?._id;
  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td className={shopType==="SHOP" ? "" : "displayHidden"}>
          <div className="flex gap-4">
            <div className="form-control">

              <Link
                to={`/user/borrow/from/${partyId}`}
                style={{
                  cursor: "pointer",
                }}
                
              >
                {party.partyName}
              </Link>
              
            </div>
          </div>
        </td>

        <td className={shopType==="BAR" ? "" : "displayHidden"}>
          <div className="flex gap-4">
            <div className="form-control">

              <Link
                to={`/user/bearshop/borrow/from/${partyId}`}
                style={{
                  cursor: "pointer",
                }}
                
              >
                {party.partyName}
              </Link>
              
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">{party.debits}</div>
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">{party.deposits}</div>
          </div>
        </td>
        <td>
          <div className="flex gap-4">
            <div className="form-control">{party.current_balance}</div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BorrowForm;
