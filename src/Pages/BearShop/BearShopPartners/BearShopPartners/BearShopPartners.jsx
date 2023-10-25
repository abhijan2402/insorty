import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePartner from "../BearShopPartnerHooks/useBearShopPartner";
import PartnerForm from "../BearShopPartnerForm/BearShopPartnerForm";

const Partners = () => {
  const {
    partnerState,
    addOnePartner,
    addFivePartner,
    handelOnChangePartner,
    handelOnSubmitPartner,
  } = usePartner();

  return (
    <section className="py-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">पार्टनर</h2>

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

      {/* ************************ all sealy data************** */}
      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table ">
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
                        <label className="label">नामे </label>
                      </div>
                      <div className="form-control">
                        <label className="label">शेष</label>
                      </div>
                    </div>
                  </td>
                </tr>

                {partnerState.map((partner, index) => {
                  return (
                    <PartnerForm
                      partner={partner}
                      index={index}
                      handelOnChangePartner={handelOnChangePartner}
                    ></PartnerForm>
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
              onClick={() => handelOnSubmitPartner()}
              type="submit"
            >
              Submit
            </button>
            <button className="dailyReportBtn" onClick={() => addFivePartner()}>
              ADD 5
            </button>
            <button className="dailyReportBtn" onClick={() => addOnePartner()}>
              ADD 1
            </button>
            <Link className="dailyReportBtn text-center flex justify-center items-center">
              सूची
            </Link>
          </div>
        </div>
      </div>
      {/* ************************ all sealy data************** */}
    </section>
  );
};

export default Partners;
