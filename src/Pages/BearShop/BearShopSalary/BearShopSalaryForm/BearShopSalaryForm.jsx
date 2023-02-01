import React from "react";
import SalaryFormData from "./BearShopSalaryFormData/BearShopSalaryFormData";
import useSalary from "../BearShopSalaryHooks/useBearShopSalary";
import { Link, useLoaderData } from "react-router-dom";
import SalaryModal from "../BearShopSalaryModal/BearShopSalaryModal";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const SalaryForm = () => {
  const token = localStorage.getItem("token");
  const salaryData = useLoaderData();
  const employeeData = salaryData?.data;
  const {
    salaryState,
    isLoading,
    handelSelaryOnChange,
    setIsLoading,
  } = useSalary();

  const {
    data: salareyDataList,
    isLoading: salareyDataLoading,
    refetch,
  } = useQuery({
    queryKey: ["salareyDataList"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getEmployeeSalaryData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ employeeId: employeeData._id }),
        }
      );
      const data = await res.json();
      return data?.data?.salaryData;
    },
  });

  const handelSalaryOnSubmit = async () => {
    const handelSalary = salaryState;
    // const salaryData = [];
    // for (let index = 0; index < handelSalary.length; index++) {
    //   const element = handelSalary[index];

    //   salaryData.push({
    //     salary: {
    //       month: element.salary_monthYear,
    //       price: element.salary_price,
    //     },
    //     payment: {
    //       month: element.payment_date,
    //       price: element.payment_price,
    //     },
    //     comments: element.reason,
    //   });
    // }

    const salaryData = [
      {
        salary: {
          month: handelSalary?.salary_monthYear,
          price: handelSalary?.salary_price,
        },
        payment: {
          date: handelSalary?.payment_date,
          price: handelSalary?.payment_price,
        },
        comment: handelSalary?.reason,
      },
    ];

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://insorty-api.onrender.com/shop/addEmployeeSalaryData",
        {
          method: "POST",
          body: JSON.stringify({
            employeeId: employeeData._id,
            salaryData,
          }),
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await response.json();
      if (data.success === true) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });
        console.log(data);
        refetch();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="px-2 py-6">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          कर्माचीरी का नाम / Name{" "}
          <span className="titleStyle">{employeeData?.name}</span>
        </h2>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">Year</h2>
          <input type="text" className="semiSmallInput" />
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

                {salareyDataList?.map((salary, index) => {
                  return (
                    <SalaryFormData
                      key={index}
                      salareyDataLoading={salareyDataLoading}
                      salary={salary}
                      index={index}
                    ></SalaryFormData>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>{" "}
        <div>
          <div className="mt-4 flex gap-4">
            <label htmlFor="addData" className="btn bg-[#AA237A]">
              Add Now
            </label>

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
      <SalaryModal
        salaryState={salaryState}
        isLoading={isLoading}
        handelSalaryOnSubmit={handelSalaryOnSubmit}
        handelSelaryOnChange={handelSelaryOnChange}
      ></SalaryModal>
    </section>
  );
};

export default SalaryForm;
