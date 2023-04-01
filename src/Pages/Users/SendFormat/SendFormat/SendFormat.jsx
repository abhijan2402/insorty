import React,{useRef} from "react";
import AddSendFormat from "../AddSendFormat/AddSendFormat";
import usePartyNames from "../../../../Hooks/usePartyNames";
import Loader from "../../../../Components/Loader/Loader";
import ChangeEquity from "../ChangeEquity";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const SendFormat = () => {
  const { partners, partnerLoaded } = usePartyNames();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  if (partnerLoaded) return <Loader></Loader>;

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center justify-center">
         
          <Link className="commonBtn" to="/user/partners">
            Partner
          </Link>
          <button
            className="commonBtn "
            onClick={handlePrint}
          >
            PRINT
          </button>
        </div>

        <div className="divider my-2"></div>
      </div>

      <div >
        <section ref={front}>
      <div className="mx-6 flex justify-center flex-col">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          All Partner
        </h2>
        <div className="flex justify-center items-center flex-col">
          <table className="removeCommonWSpace ">
           
            <thead>
              <tr>
                <th> क्र. सं.</th>
                <th>Partner Name/पार्टनर नाम</th>
                <th>Partner Percentage</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((item, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.equity} %</td>
                    <td>{item?.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
          </div> </section>


        <div>

        <div className="flex justify-center ">
          <label htmlFor="addFormat" className="btn bg-[#AA237A] my-4 mx-4">
            Add new Partner
          </label>
          <label htmlFor="changeShare" className="btn bg-[#AA237A] my-4">
            Change Share
          </label>
        </div>
      </div>
      <AddSendFormat></AddSendFormat>
      <ChangeEquity data={partners}></ChangeEquity>
      </div>
    </section>

  );
};

export default SendFormat;
