import React from "react";

const SalaryModal = ({
  salaryState,
  handelSelaryOnChange,
  handelSalaryOnSubmit,
  isLoading,
}) => {
  return (
    <>
      {/* Put this part before </body> tag */}

      <input type="checkbox" id="addData" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box w-2/3 max-w-5xl">
          <h3 className="font-bold text-lg text-center">Add New</h3>

          <div>
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[1rem]">
                    Salary / वेतन
                  </span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Month Year</span>
                </label>

                <div className="input-group">
                  <input
                    type="number"
                    name="salary_monthYear"
                    value={salaryState.salary_monthYear}
                    onChange={(e) => handelSelaryOnChange(e)}
                    className="input input-bordered input-accent w-full"
                    style={{
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text"> रकम</span>
                </label>
                <div className="form-control">
                  <input
                    type="number"
                    name="salary_price"
                    value={salaryState.salary_price}
                    onChange={(e) => handelSelaryOnChange(e)}
                    className="input input-bordered input-accent w-full"
                    style={{
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>

              {/* ============= */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[1rem] mt-3">
                    Payment / भुगतान
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">दिनांक</span>
                </label>

                <div>
                  <input
                    type="number"
                    name="payment_price"
                    value={salaryState.payment_price}
                    onChange={(e) => handelSelaryOnChange(e)}
                    className="input input-bordered input-accent w-full"
                    style={{
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">रकम</span>
                </label>

                <div className="form-control">
                  <input
                    type="number"
                    name="payment_price"
                    value={salaryState.payment_price}
                    onChange={(e) => handelSelaryOnChange(e)}
                    className="input input-bordered input-accent w-full"
                    style={{
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>

              {/* ============ */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">reason /टिप्पणी</span>
                </label>

                <div className="form-control">
                  <input
                    type="text"
                    name="reason"
                    value={salaryState.reason}
                    onChange={(e) => handelSelaryOnChange(e)}
                    className="input input-bordered input-accent w-full"
                    style={{
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
              <div className="mt-2">
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
              </div>
            </form>{" "}
          </div>

          <div className="modal-action">
            <label htmlFor="addData" className="btn">
              Exit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalaryModal;
