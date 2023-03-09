import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const BorrowDetails = () => {
  const token = localStorage.getItem("token");

  const { partyId } = useParams();

  console.log(partyId, "mypartyId +++++++");

  const { data: borrowTranstion, isLoading } = useQuery({
    queryKey: ["partnarData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getPartyTransactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({
            partyId: partyId,
          }),
        }
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const partyTransactionsArray = borrowTranstion?.transactions;

  const deposite = partyTransactionsArray?.map((item) => item.deposit);
  const debit = partyTransactionsArray?.map((item) => item.debit);

  const totalDepositeData = deposite?.reduce((a, b) => a + b, 0);
  const totalDebitData = debit?.reduce((a, b) => a + b, 0);
  const totalRemainingData = totalDepositeData - totalDebitData;

  console.log(borrowTranstion, "1+++++++");

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          {borrowTranstion?.partyName}
        </h2>
        <div className="divider my-2"></div>
      </div>
      <div className="partner-details">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Debit/ नामे </th>
                <th>Deposit / जमा</th>
                <th>Remaining / शेष</th>
              </tr>
            </thead>
            <tbody>
              {borrowTranstion?.transactions?.map((item, index) => {
                const { debit, deposit } = item;
                const remaining = Number(deposit) - Number(debit);

                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{debit}</td>
                    <td>{deposit}</td>
                    <td>{remaining}</td>
                  </tr>
                );
              })}

              <tr>
                <th>Total</th>
                <td>{totalDebitData}</td>
                <td>{totalDepositeData}</td>
                <td>{totalRemainingData}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BorrowDetails;
