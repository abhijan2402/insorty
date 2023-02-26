import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
import usePartner from "../PartnerHooks/usePartner";
import PartnerForm from "../PartnerForm/PartnerForm";
import AddPartner from "../AddPartner/AddPartner";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import format from "date-fns/format";
import DatePicker from "react-datepicker";

const Partners = () => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const {
    partnerState,
    // addOnePartner,
    // addFivePartner,
    handelOnChangePartner,
    // handelOnSubmitPartner,
  } = usePartner();

  const handelPartnerSubmit = (e) => {
    e.preventDefault();
    const data = {
      partnerName: "",
      debit: "",
      deposit: "",
      remianingDebit: "",
      remaining: "",
    };
  };

  const { data: partnarData, isLoading } = useQuery({
    queryKey: ["partnarData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllPartners",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) return <Loader></Loader>;

  return (
    <section className="py-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">पार्टनर</h2>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <DatePicker
              selected={StartDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="inputBox"
            />
          </div>
          <h2 className="font-bold text-[1.5rem]">To</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <DatePicker
              selected={EndDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              className="inputBox"
            />

            {/* <input
              type="date"
              value={EndDate}
              name="year"
              onChange={(e) => {
                setEndDate(e.target.value);
                console.log(EndDate);
              }}
              dateFormate="dd/MM/yyyy"
              className="semiSmallInput"
            /> */}
          </div>
        </div>
        <div className="divider my-2"></div>
      </div>

      {/* ************************ all sealy data************** */}
      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table ">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>पार्टनर नाम</th>
                  <th>नामे </th>
                  <th>जमा</th>
                  <th>शेष</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th></th>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label"></label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label"></label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label"></label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        {/* <label className="label">नामे </label> */}
                      </div>
                      <div className="form-control">
                        <label className="label"> </label>
                      </div>
                      <div className="form-control">
                        <label className="label"> </label>
                      </div>

                      <div className="form-control">
                        {/* <label className="label">शेष</label> */}
                      </div>
                    </div>
                  </td>
                </tr>

                {partnarData.map((partner, index) => {
                  return (
                    <PartnerForm
                      key={index}
                      partner={partner}
                      index={index}
                      partnerData={partnarData}
                      StartDate={StartDate}
                      EndDate={EndDate}
                    ></PartnerForm>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>{" "}
        <div>
          <div className="mt-4 flex gap-4">
            <label htmlFor="addPartner" className="btn bg-[#AA237A]">
              Add Partner
            </label>
          </div>
        </div>
      </div>
      {/* ************************ all sealy data************** */}

      <div>
        <div className="divider my-4"></div>
      </div>
      <AddPartner handelPartnerSubmit={handelPartnerSubmit}></AddPartner>
    </section>
  );
};

export default Partners;
