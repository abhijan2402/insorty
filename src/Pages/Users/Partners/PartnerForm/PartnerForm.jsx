import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const PartnerForm = ({ partner, StartDate, index, EndDate }) => {
  // get partner name from partner object and store it in
  const token = jwtDecode(localStorage.getItem("token"));
  const ShopType = token.shopType;
  const role = ShopType.role;

  let transact = partner.transactions.filter((row) => {
    let filterPass = true;
    const date = new Date(row.date);
    if (StartDate) {
      filterPass = filterPass && new Date(StartDate) <= date;
    }
    if (EndDate) {
      filterPass = filterPass && new Date(EndDate) >= date;
    }
    return filterPass;
  });

  let remaining_debit =
    transact.reduce(
      (total, currentItem) => (total = total + currentItem.deposit),
      0
    ) -
    transact.reduce(
      (total, currentItem) => (total = total + currentItem.debit),
      0
    );

  const partnerId = partner?._id;

  return (
    <>
      <tr key={index}>
        <>
          <th>{index + 1}</th>
          <td >
            <div className="form-control">
              {role === "shop" && ShopType === "BAR" && (
                <Link
                  to={`/user/bearshop/partners/from/${partnerId}`}
                >
                  {partner.name}
                </Link>
              )}
              {role === "shop" && ShopType === "SHOP" && (
                <Link
                  to={`/user/partners/from/${partnerId}`}
                >
                  {partner.name}
                </Link>
              )}
            </div>
          </td>
          <td >
            <div className="form-control">
              {role === "shop" && ShopType === "BAR" && (
                <Link
                  to={`/user/bearshop/partners/from/${partnerId}`}
                >
                  {partner.name}
                </Link>
              )}
              {role === "shop" && ShopType === "SHOP" && (
                <Link
                  to={`/user/partners/from/${partnerId}`}
                >
                  {partner.name}
                </Link>
              )}
            </div>
          </td>
          <td>
            <div className="form-control">
              {transact.reduce(
                (total, currentItem) => (total = total + currentItem.debit),
                0
              )}
            </div>
          </td>

          <td>
            <div className="form-control">
              {transact.reduce(
                (total, currentItem) => (total = total + currentItem.deposit),
                0
              )}
            </div>
          </td>

          <td>
            <div className="flex gap-4">
              <div className="form-control">
                {remaining_debit}
              </div>
            </div>
          </td>
        </>

      </tr>
    </>
  );
};

export default PartnerForm;
