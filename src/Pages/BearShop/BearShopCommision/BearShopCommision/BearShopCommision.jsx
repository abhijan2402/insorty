import React from "react";
import useCommision from "../BearShopCommisionHooks/useBearShopCommision";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommisionForm from "../BearShopCommisionForm/BearShopCommisionForm";

const Commision = () => {
  const {
    commisionState,
    addFiveCommision,
    addOneCommision,
    handelOnChangeCommision,
    handelOnSubmitCommision,
  } = useCommision();

  return (
    <section className="py-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">कमीशन</h2>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="text"
              value={"12 Dec 2022 "}
              name="year"
              className="semiSmallInput"
            />
          </div>
          <h2 className="font-bold text-[1.5rem]">To</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="text"
              value={"07 January 2023 "}
              name="year"
              className="semiSmallInput"
            />
          </div>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th> क्र. सं.</th>
                  <th>विवरण</th>
                  <th>रकम</th>
                  <th>टिप्पणी</th>
                </tr>
              </thead>

              <tbody>
                {commisionState.map((commision, index) => {
                  return (
                    <CommisionForm
                      key={index}
                      index={index}
                      commision={commision}
                      handelOnChangeCommision={handelOnChangeCommision}
                    ></CommisionForm>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>{" "}
        <div>
          <div className="mt-4 flex gap-4">
            <button
              className="dailyReportBtnSubmit"
              onClick={() => handelOnSubmitCommision()}
              type="submit"
            >
              Submit
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => addFiveCommision()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => addOneCommision()}
            >
              ADD 1
            </button>
            <Link className="dailyReportBtn text-center flex justify-center items-center">
              सूची
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commision;
