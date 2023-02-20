import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PartnerDetails = () => {
  const partnerData = useLoaderData();
  const partner = partnerData.data;
  const { _id: userId } = useParams();
  const partnerTransactions = partner.find(
    (transaction) => transaction.partner === userId
  );
  const partnerTransactionsArray = partnerTransactions?.transactions;
  const deposite = partnerTransactionsArray.map((item) => item.deposit);
  const debit = partnerTransactionsArray.map((item) => item.debit);
  const totalDeposite = deposite.reduce((a, b) => a + b, 0);
  const totalDebit = debit.reduce((a, b) => a + b, 0);
  const totalRemaining = totalDeposite - totalDebit;

  console.log(totalRemaining);

  return (
    <section>
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">{partnerTransactions?.name}</h2>
        <div className="divider my-2"></div>
      </div>
      <div className="partner-details">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Partner Name/पार्टनर नाम</th>
                <th>Debit/ नामे </th>
                <th>Deposit / जमा</th>
                <th>Remaining / शेष</th>
              </tr>
            </thead>
            <tbody>
              {partnerTransactionsArray?.map((item, index) => {
                const partnerName = partner.find(
                  (partner) => partner._id === item.partner
                );
                const { debit, deposit } = item;
                const remaining = deposit - debit;
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{partnerName?.name}</td>
                    <td>{debit}</td>
                    <td>{deposit}</td>
                    <td>{remaining}</td>
                  </tr>
                );
              })}

              <tr>
                <th>Total</th>
                <td></td>
                <td>{totalDebit}</td>
                <td>{totalDeposite}</td>
                <td>{totalRemaining}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PartnerDetails;
