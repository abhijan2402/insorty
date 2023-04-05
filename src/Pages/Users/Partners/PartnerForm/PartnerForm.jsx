import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const PartnerForm = ({ partner, StartDate, index, EndDate }) => {
  // get partner name from partner object and store it in

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
      <tr>
        <>
          <th>{index + 1}</th>
          <td key={index}>
            <div className="form-control">
              <Link
                to={`/user/partners/from/${partnerId}`}
               
              >
                {partner.name}
              </Link>
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
        {/* ); */}
        {/* })} */}

        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default PartnerForm;
