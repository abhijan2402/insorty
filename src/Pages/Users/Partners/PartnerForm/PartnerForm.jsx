import React from "react";

const PartnerForm = ({
  partner,
  transaction,
  index,
  partnerData,
  handelOnChangePartner,
}) => {
  // get partner name from partner object and store it in
  console.log(partner.transactions.reduce(
    (total, currentItem) => (total = total + currentItem.deposit),
    0
  ))
  console.log(partner.transactions.reduce(
    (total, currentItem) => (total = total + currentItem.debit),
    0
  ))
  let remaining_debit = partner.transactions.reduce(
    (total, currentItem) => (total = total + currentItem.deposit),
    0
  ) - partner.transactions.reduce(
    (total, currentItem) => (total = total + currentItem.debit),
    0
  )
  console.log(partner)


  return (
    <>
      <tr>
        <th>{index + 1}</th>
        {/* {partner.transactions.map((transaction, index) => { */}
          {/* // get the name form the transaction object partner name id from partner object filter by transaction partner id */}
          {/* const partnerName =
            partner.id === transaction.name ? partner.name : ""; */}
          {/* const { deposit, debit } = transaction;
          const remaining_debit = debit - deposit; */}

          {/* return ( */}
            <>

              <td key={index}>
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
                  <input
                    type="number"
                value={partner.transactions.reduce(
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
                value={partner.transactions.reduce(
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
