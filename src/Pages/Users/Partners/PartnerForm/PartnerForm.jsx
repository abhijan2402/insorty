import React from "react";

const PartnerForm = ({ partner, index, handelOnChangePartner }) => {
  const { transactions } = partner;
  console.log(transactions);

  // get partner name from partner object and store it in

  const partnerId = partner._id;
  const partnerNameId = transactions.map((transaction) => transaction.partner);

  const partnerName = partnerNameId.filter((name) => name === partnerId);

  console.log(partnerName);

  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td>
          <div className="form-control">
            <input
              type="text"
              name="partnerName"
              value={partner.name}
              className="dailyReportInput"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            {transactions.map((transaction) => {
              return (
                <input
                  type="number"
                  name="debit"
                  value={transaction?.debit}
                  onChange={(e) => handelOnChangePartner(e, index)}
                  className="dailyReportInput"
                />
              );
            })}
          </div>
        </td>

        <td>
          <div className="form-control">
            {transactions.map((transaction) => {
              return (
                <input
                  type="number"
                  name="credit"
                  value={transaction?.credit}
                  onChange={(e) => handelOnChangePartner(e, index)}
                  className="dailyReportInput"
                />
              );
            })}
            {/* 
            <input
              type="number"
              name="deposit"
              value={partner?.deposit}
              onChange={(e) => handelOnChangePartner(e, index)}
              className="commonSmallForm"
            /> */}
          </div>
        </td>

        <td>
          <div className="flex gap-4">
            <div className="form-control">
              <input
                type="text"
                name="remaining_debit"
                value={partner.remaining_debit}
                onChange={(e) => handelOnChangePartner(e, index)}
                className="commonSmallForm"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="remaining"
                value={partner.remaining}
                onChange={(e) => handelOnChangePartner(e, index)}
                className="commonSmallForm"
              />
            </div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default PartnerForm;
