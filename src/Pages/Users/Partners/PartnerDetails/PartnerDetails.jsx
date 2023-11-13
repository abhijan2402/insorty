import React,{useRef} from "react";
import { useParams } from "react-router-dom";
import usePartyNames from "../../../../Hooks/usePartyNames";
import Loader from "../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const PartnerDetails = () => {
  const { partners, partnerLoaded } = usePartyNames();
  let { partnerId } = useParams();
  const shopType = jwtDecode(localStorage.getItem('token')).shopType



  const partner = partners?.find((item) => {
    if (item._id === partnerId) {
      return item;
    }
  });

  const front = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => front.current,
  });


  const partnerTransactionsArray = partner?.transactions;

  const deposite = partnerTransactionsArray?.map((item) => item.deposit);
  const debit = partnerTransactionsArray?.map((item) => item.debit);

  const totalDepositeData = deposite?.reduce((a, b) => a + b, 0);
  const totalDebitData = debit?.reduce((a, b) => a + b, 0);
  const totalRemainingData = totalDepositeData - totalDebitData;

  

  if (partnerLoaded) {
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
     {shopType==="SHOP" &&( <Link
            to="/user/partners"
           
          >
            <button className="commonBtn">
            सूची
            </button>
      </Link>)}
     {shopType==="BAR" &&( <Link
            to="/user/bearshop/partners"
           
          >
            <button className="commonBtn">
            सूची
            </button>
      </Link>)}
      
    <section ref={front}>
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">{partner?.name}</h2>
        <div className="divider my-2"></div>
      </div>
      <div className="partner-details">
        <div className="overflow-x-auto">
            <table className="removeCommonWSpace ">
            <thead>
              <tr>
                <th className="text-xs"> क्र. सं.</th>
                <th className="text-xs"> नामे </th>
                <th className="text-xs"> जमा</th>
                <th className="text-xs"> शेष</th>
              </tr>
            </thead>
            <tbody>
              {partnerTransactionsArray?.map((item, index) => {
                const partnerName = partners.find(
                  (partner) => partner._id === item?.partner
                );
                const { debit, deposit } = item;
                const remaining = deposit - debit;
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

export default PartnerDetails;
