import React from "react";
import SalaryFormData from "./SalaryFormData/SalaryFormData";
import useSalary from "../SalaryHooks/useSalary";
import { Link, useLoaderData } from "react-router-dom";

const SalaryForm = () => {
  const salaryData = useLoaderData();
  const employeeData = salaryData?.data;
  const {
    salaryState,
    isLoading,
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
          <span className="titleStyle">{employeeData?.name}</span>
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
                          <span className="label-text"></span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"></span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"></span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"></span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"></span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"></span>
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
                      key={index}
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
            {isLoading ? (
              <>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-[#AA237A] transition duration-150 ease-in-out border-2 border-[#AA237A] rounded-md shadow cursor-not-allowed"
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-[#AA237A] animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </button>
              </>
            ) : (
              <button
                className="dailyReportBtnSubmit"
                onClick={() => handelSalaryOnSubmit()}
                type="submit"
              >
                Submit
              </button>
            )}

            <button className="dailyReportBtn" onClick={() => addFiveSalary()}>
              ADD 5
            </button>
            <button className="dailyReportBtn" onClick={() => addOneSalary()}>
              ADD 1
            </button>
            <Link
              to="/user/salary"
              className="dailyReportBtn text-center flex justify-center items-center"
            >
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
