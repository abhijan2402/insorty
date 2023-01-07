import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useBorrow from "../BorrowHooks/useBorrow";
import BorrowForm from "../BorrowForm/BorrowForm";

const Borrow = () => {
  const {
    borrowState,
    addOneBorrow,
    addFiveBorrow,
    handelBorrowOnChange,
    handelBorrowOnSubmit,
  } = useBorrow();

  return (
    <section className="py-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          उधारी (माल व नकद) नामे व जमा
        </h2>

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
                  <th>S.no</th>
                  <th>नामे </th>
                  <th>जमा </th>
                  <th>शेष</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th></th>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">पार्टी का नाम</span>
                        </label>
                      </div>

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
                            <label className="label"></label>
                          </div>
                        </div>
                      </td>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">रकम</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">रकम</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">नामे</span>
                        </label>
                      </div>
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

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">शेष</span>
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                {borrowState.map((borrow, index) => {
                  return (
                    <BorrowForm
                      key={index}
                      index={index}
                      borrow={borrow}
                      handelBorrowOnChange={handelBorrowOnChange}
                    ></BorrowForm>
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
              type="submit"
              onClick={handelBorrowOnSubmit}
            >
              Submit
            </button>
            <button className="dailyReportBtn" onClick={addFiveBorrow}>
              ADD 5
            </button>
            <button className="dailyReportBtn" onClick={addOneBorrow}>
              ADD 1
            </button>
            <Link className="dailyReportBtn text-center flex justify-center items-center">
              सूची
            </Link>
          </div>
        </div>
      </div>
      {/* ************************ all borrowed data************** */}
    </section>
  );
};

export default Borrow;
