import React from "react";
// import { Link } from "react-router-dom";

const PartnerForm = ({
  partner,
  StartDate,
  index,
  partnerData,
  EndDate,
}) => {
  // get partner name from partner object and store it in
  
  let transact = partner.transactions.filter(row => {
    let filterPass = true
    const date = new Date(row.date)
    if (StartDate) {
      filterPass = filterPass && (new Date(StartDate) <= date)
    }
    if (EndDate) {
      filterPass = filterPass && (new Date(EndDate) >= date)
    }
    //if filterPass comes back `false` the row is filtered out
    return filterPass
  })


  let remaining_debit = transact.reduce(
    (total, currentItem) => (total = total + currentItem.deposit),
    0
  ) - transact.reduce(
    (total, currentItem) => (total = total + currentItem.debit),
    0
  )


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
                    disabled
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
