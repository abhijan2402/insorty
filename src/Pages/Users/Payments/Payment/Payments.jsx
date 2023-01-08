import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import usePayment from "../PaymentHooks/usePayment";
import PaymentForm from "../PaymentForm/PaymentForm";
import { Link } from "react-router-dom";

const Payments = () => {
  const {
    paymentState,
    addFivePayment,
    addOnePayment,
    handelOnChangePayment,
    handelOnSubmitPayment,
  } = usePayment();

  return (
    <section>
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
                  <th>S.no</th>
                  <th>नामे</th>
                  <th>जमा </th>

                  <th>चालू शेष नामे</th>
                  <th>विवरणे</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th></th>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">माल पेटे</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">नकद</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">माल पेटे</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">नकद</span>
                        </label>
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

                  {/* ============= कुल योग ================ */}
                </tr>
                {paymentState.map((payment, index) => {
                  return (
                    <PaymentForm
                      key={index}
                      index={index}
                      payment={payment}
                      handelOnChangePayment={handelOnChangePayment}
                    ></PaymentForm>
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
              onClick={() => handelOnSubmitPayment()}
              type="submit"
            >
              Submit
            </button>
            <button className="dailyReportBtn" onClick={() => addFivePayment()}>
              ADD 5
            </button>
            <button className="dailyReportBtn" onClick={() => addOnePayment()}>
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

export default Payments;
