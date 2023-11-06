import React,{useRef} from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const BorrowDetails = () => {
  const token = localStorage.getItem("token");
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const shopType = jwtDecode(localStorage.getItem("token")).shopType

  const { partyId } = useParams();

  const { data: borrowTranstion, isLoading } = useQuery({
    queryKey: ["partnarData"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getPartyTransactions?partyId=${partyId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          
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
  const totalRemainingData = totalDebitData -totalDepositeData;



  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <button
        className="commonBtn "
        onClick={handlePrint}
      >
        प्रिंट
      </button>
     {shopType==="SHOP" && ( <Link
            to="/user/borrow"
           
          >
            <button className="commonBtn">
            सूची
            </button>
      </Link>)}
     {shopType==="BAR" && ( <Link
            to="/user/bearshop/borrow"
           
          >
            <button className="commonBtn">
            सूची
            </button>
      </Link>)}
    <section ref={front}>
      <div className="title text-center">
        <h2 className="font-bold text-[1.5rem]">
        पार्टी का नाम	:-  {borrowTranstion?.partyName}
        </h2>
        <div className="divider my-2"></div>
      </div>
      <div className="partner-details flex justify-center">
        <div className="overflow-x-auto">
            <table className="removeCommonWSpace ">
            <thead>
              <tr>
                <th> क्र. सं.</th>
                <th> नामे </th>
                <th> जमा</th>
                <th> चालू शेष नामे</th>
              </tr>
            </thead>
            <tbody>
              {borrowTranstion?.transactions?.map((item, index) => {
                const { debit, deposit } = item;
                const remaining = Number(debit) - Number(deposit);

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
    </>
  );
};

export default BorrowDetails;
