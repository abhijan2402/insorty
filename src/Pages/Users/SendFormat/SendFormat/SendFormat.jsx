import React from "react";
import AddSendFormat from "../AddSendFormat/AddSendFormat";
import usePartyNames from "../../../../Hooks/usePartyNames";
import Loader from "../../../../Components/Loader/Loader";
import ChangeEquity from "../ChangeEquity";
import { Link } from "react-router-dom";

const SendFormat = () => {
  const { partners, partnerLoaded } = usePartyNames();

  if (partnerLoaded) return <Loader></Loader>;

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center justify-center">
          <h2 className="font-bold md:text-[1.5rem] text-center">
            All Partner
          </h2>
          <Link className="commonBtn" to="/user/partners">
            Partner
          </Link>
        </div>

        <div className="divider my-2"></div>
      </div>
      <div className="mx-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
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
        <div>
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
    </section>
  );
};

export default SendFormat;
