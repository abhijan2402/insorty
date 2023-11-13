import React, { useState, useRef, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Loader from "../../../../Components/Loader/Loader";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import useCommision from "../CommisionHooks/useCommision";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import jwtDecode from "jwt-decode";

const Penalty = () => {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const { commitsonData, isLoading, commisonRefetch } = useCommision(
    StartDate,
    EndDate
  );
  useEffect(() => {
    commisonRefetch();
  }, [StartDate, EndDate]);
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShopToken.shopType;
  const role = ShopToken.role;

  if (isLoading) {
    return <Loader></Loader>;
  }

  const filteredData =
    commitsonData.length &&
    commitsonData.filter((item) => {
      let filterPass = true;
      const date = moment(item.date).format("DD/MM/YYYY");

      if (StartDate) {
        filterPass =
          filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
      }
      if (EndDate) {
        filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
      }
      return filterPass;
    });

  const totalAmount =
    commitsonData.length &&
    filteredData.reduce((acc, item) => {
      return (
        Number(acc) +
        item.entries
          .filter((item) => {
            return item.type === "PENALTY";
          })
          .reduce((acc, item) => {
            return Number(acc) + Number(item.amount.$numberDecimal);
          }, 0)
      );
    }, 0);

  return (
    <section className="py-4 px-4">
      <div className="title">
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
        <div className="flex items-center justify-center flex-wrap">
          {ShopType === "BAR" && (
            <>
              <Link className="commonBtn" to="/user/bearshop/commisson">
                कमीशन
              </Link>

              <Link className="commonBtn " to="/user/bearshop/kharcha">
                खर्चा
              </Link>

              <Link className="commonBtn " to="/user/bearshop/fut">
                फूट
              </Link>

              <Link className="commonBtn " to="/user/bearshop/begar">
                बेगार
              </Link>

              <Link className="commonBtn " to="/user/bearshop/monthly">
                मंथली
              </Link>

              <Link className="commonBtn " to="/user/bearshop/others">
                अन्य
              </Link>
            </>
          )}
          {ShopType === "SHOP" && (
            <>
              <Link className="commonBtn" to="/user/commisson">
                कमीशन
              </Link>

              <Link className="commonBtn " to="/user/kharcha">
                खर्चा
              </Link>

              <Link className="commonBtn " to="/user/fut">
                फूट
              </Link>

              <Link className="commonBtn " to="/user/begar">
                बेगार
              </Link>

              <Link className="commonBtn " to="/user/monthly">
                मंथली
              </Link>

              <Link className="commonBtn " to="/user/others">
                अन्य
              </Link>
            </>
          )}
        </div>

        <div ref={front}>
          <div>
            <h2 className="font-bold md:text-[1.5rem] text-center">
              {" "}
              पेनाल्टी
            </h2>

            <div className="flex gap-4 justify-center items-center my-4">
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

          <div className="flex justify-center items-center">
            <form action="">
              <div className="overflow-x-auto">
                <table className="removeCommonWSpace">
                  <thead>
                    <tr>
                    <th className="text-xs"> क्र. सं.</th>
                      <th className="text-xs">विवरण</th>
                      <th className="text-xs">रकम</th>
                      <th className="text-xs">टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {commitsonData.length &&
                      filteredData.map((burger, index) => {
                        const { entries } = burger;

                        const filterPenaltyForm = (type) => {
                          let filtered = entries.filter((item) => {
                            return item.type === "PENALTY";
                          });
                          return filtered;
                        };
                        const PenaltyForm = filterPenaltyForm("PENALTY");

                        return (
                          <>
                            {PenaltyForm.map((item) => {
                              const { amount, comment } = item;
                              const dateData = burger?.date;

                              const changeDateFormet =
                                moment(dateData).format("DD/MM/YYYY");

                              return (
                                <tr key={index}>
                                  <th>{index + 1}</th>
                                  <td>
                                    <div className="form-control">
                                      {changeDateFormet}
                                    </div>
                                  </td>

                                  <td>
                                    <div className="form-control">
                                      {amount?.$numberDecimal}
                                    </div>
                                  </td>

                                  <td>
                                    <div className="form-control">
                                      {comment}
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        );
                      })}

                    <tr>
                      <th colSpan={2}>कुल योग</th>
                      <td>{totalAmount}</td>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Penalty;
