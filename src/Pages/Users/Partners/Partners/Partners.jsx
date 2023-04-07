import React, { useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
import PartnerForm from "../PartnerForm/PartnerForm";
import AddPartner from "../AddPartner/AddPartner";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { Link, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Partners = ({ isBearShop }) => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const { shopType } = useParams();
  const partnersUrl = isBearShop ? '/user/bearshop/sendFormat' : '/user/sendFormat';

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
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) return <Loader></Loader>;

  const filteredData = partnarData.filter((item) => {
    let filterPass = true;
    const date = moment(item.date).format("DD/MM/YYYY");

    if (StartDate) {
      filterPass = filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
    }
    if (EndDate) {
      filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
    }
    return filterPass;
  });

  return (
    <section className="py-4">
      <div className="title">
        <div className="flex justify-center items-center gap-4">
          {/* <Link className="commonBtn" to="/user/sendFormat">
            सभी पार्टनर
          </Link> */}

           <Link className="commonBtn" to={partnersUrl}>
            सभी पार्टनर
          </Link>


          <>
            {/* {!isBeerShop ? (
              <Link className="commonBtn" to="/user/bearshop/sendFormat">
                सभी पार्टनर
              </Link>
            ) : (
              <Link className="commonBtn" to="/user/sendFormat">
                Send this in shop
              </Link>
            )} */}
          </>
          <button className="commonBtn " onClick={handlePrint}>
            प्रिंट
          </button>
        </div>

        <div ref={front}>
          <h2 className="font-bold md:text-[1.5rem] text-center">
            पार्टनर खाते{" "}
          </h2>
          <div className="flex justify-center items-center">
            <div className="flex gap-4 items-center my-4">
              <h2 className="font-bold text-[1.5rem]">From</h2>
              <div className="flex gap-2 items-center">
                <DatePicker
                  selected={StartDate}
                  onChange={(date) => {
                    setStartDate(date);
                    console.log(moment(date).format());
                  }}
                  dateFormat="dd/MM/yyyy"
                  placeholderText={"dd/mm/yyyy"}
                  className="inputBox date"
                />
              </div>

              <h2 className="font-bold text-[1.5rem]">To</h2>
              <div className="flex gap-2 items-center">
                <DatePicker
                  selected={EndDate}
                  name="year"
                  onChange={(data) => setEndDate(data)}
                  dateFormat="dd/MM/yyyy"
                  className="inputBox date"
                  placeholderText={"dd/mm/yyyy"}
                />
              </div>
            </div>
            <div className="divider my-2"></div>
          </div>

          {/* ************************ all sealy data************** */}
          <div className="flex justify-center items-center">
            <form action="">
              <div className="overflow-x-auto">
                <table className=" removeCommonWSpace">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
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

                    {filteredData.map((partner, index) => {
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
              {/* <div className="mt-4 flex gap-4">
            <label htmlFor="addPartner" className="btn bg-[#AA237A]">
              Add Partner
            </label>
          </div> */}
            </div>
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
