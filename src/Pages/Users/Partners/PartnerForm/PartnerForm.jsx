import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const PartnerForm = ({ partner, StartDate, index, partnerData, EndDate }) => {
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

  console.log(partner?._id);

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
                style={{
                  cursor: "pointer",
                }}
                className="dailyReportInput"
              >
                {partner.name}
              </Link>
            </div>
          </td>
          <td>
            <div className="form-control">
              <input
                type="number"
                disabled
                value={transact.reduce(
                  (total, currentItem) => (total = total + currentItem.debit),
                  0
                )}
                className="dailyReportInput"
              />
            </div>
          </td>

          <td>
            <div className="form-control">
              <input
                type="number"
                disabled
                value={transact.reduce(
                  (total, currentItem) => (total = total + currentItem.deposit),
                  0
                )}
                className="dailyReportInput"
              />
            </div>
          </td>

          <td>
            <div className="flex gap-4">
              <div className="form-control">
                <input
                  type="number"
                  name="remaining"
                  disabled
                  // if vale is greater than 0 then show in remaining
                  value={remaining_debit}
                  className="commonSmallForm"
                />
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
