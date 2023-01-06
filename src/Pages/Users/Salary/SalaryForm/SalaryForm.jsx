import React from "react";
import SalaryFormData from "./SalaryFormData/SalaryFormData";
import useSalary from "../SalaryHooks/useSalary";
import { Link } from "react-router-dom";

const SalaryForm = () => {
  const {
    salaryState,
    setSalaryState,
    addOneSalary,
    addFiveSalary,
    handelSelaryOnChange,
    handelSalaryOnSubmit,
  } = useSalary();

  return (
    <section className="px-2 py-6">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          कर्माचीरी का नाम / Name{" "}
          <span className="titleStyle">Rahul / राहुल</span>
        </h2>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">Year</h2>
          <input type="text" name="year" className="semiSmallInput" />
        </div>
      </div>
      {/* ************************ all sealy data************** */}
      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Salary / वेतन</th>
                  <th>Payment / भुगतान</th>
                  <th>reason /टिप्पणी</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th></th>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Month Year</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"> रकम</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">दिनांक</span>
                        </label>
                      </div>

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
                        <label className="label"></label>
                      </div>
                    </div>
                  </td>
                  {/* ============= कुल योग ================ */}
                </tr>

                {salaryState.map((salary, index) => {
                  return (
                    <SalaryFormData
                      salary={salary}
                      index={index}
                      handelSelaryOnChange={handelSelaryOnChange}
                    ></SalaryFormData>
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
              onClick={() => handelSalaryOnSubmit()}
              type="submit"
            >
              Submit
            </button>
            <button className="dailyReportBtn" onClick={() => addFiveSalary()}>
              ADD 5
            </button>
            <button className="dailyReportBtn" onClick={() => addOneSalary()}>
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

export default SalaryForm;
