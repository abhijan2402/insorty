import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import useBranch from "../BearShopBranchHooks/useBearShopBranch";
import { Link } from "react-router-dom";
import BranchFormData from "./BearShopBranchFormData/BearShopBranchFormData";

const BranchFrom = () => {
  const {
    branchState,
    addOneBranch,
    addFiveBranch,
    handelBranchOnChange,
    handelBranchSubmit,
  } = useBranch();

  return (
    <section className="p-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          Branch Name / ब्रांच नाम
          <span className="titleStyle"> Rahul wine shop / राहुल</span>
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

      {/* ************************ all branch data************** */}
      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Date / दिनांक</th>
                  <th>debit / नामे </th>
                  <th>Deposit / जमा</th>
                  <th>Reamining /शेष</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th></th>
                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label"></label>
                      </div>
                    </div>
                  </td>

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
                        <label className="label">
                          <span className="label-text">चालू नामे</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">चालू जमा</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  {/* ============= कुल योग ================ */}
                </tr>
                {branchState.map((branch, index) => {
                  return (
                    <BranchFormData
                      key={index}
                      index={index}
                      branch={branch}
                      handelBranchOnChange={handelBranchOnChange}
                    ></BranchFormData>
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
              onClick={() => handelBranchSubmit()}
              type="submit"
            >
              Submit
            </button>
            <button className="dailyReportBtn" onClick={() => addFiveBranch()}>
              ADD 5
            </button>
            <button className="dailyReportBtn" onClick={() => addOneBranch()}>
              ADD 1
            </button>
            <Link className="dailyReportBtn text-center flex justify-center items-center">
              सूची
            </Link>
          </div>
        </div>
      </div>
      {/* ************************ all branch data************** */}
    </section>
  );
};

export default BranchFrom;
