import React, { useState, useRef } from "react";
import SalaryFormData from "./SalaryFormData/SalaryFormData";
import useSalary from "../SalaryHooks/useSalary";
import { Link, useLoaderData } from "react-router-dom";
import SalaryModal from "../SalaryModal/SalaryModal";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";


const SalaryForm = () => {
  const token = localStorage.getItem("token");
  const { employeeId } = useParams()
  const [year, setYear] = useState("");
  const salaryData = useLoaderData();
  const employeeData = salaryData?.data;
  const { salaryState, isLoading, handelSelaryOnChange, setIsLoading } =
    useSalary();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  console.log(employeeId)

  const {
    data: salareyDataList,
    isLoading: salareyDataLoading,
    refetch,
  } = useQuery({
    queryKey: ["salareyDataList"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getEmployeeSalaryData?employeeId=${employeeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          
        }
      );
      const data = await res.json();
        console.log(data)
      return data.data;
    },
  });

  const [slaryDate, setSalaryDate] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  const handelSalaryOnSubmit = async () => {
    const handelSalary = salaryState;

    const salaryData = [
      {
        salary: {
          month: slaryDate,
          price: handelSalary?.salary_price,
        },
        payment: {
          date: paymentDate,
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
            employeeId: employeeId,
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

  if (isLoading || salareyDataLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="px-2 py-6">
      <button className="commonBtn " onClick={handlePrint}>
        प्रिंट
      </button>
      <div ref={front}>
        <div className="flex justify-center items-center">
          <div className="title">
            <h2 className="font-bold text-[1.5rem]">
              कर्माचीरी का नाम :- {" "}
              <span className="titleStyle">{salareyDataList.name}</span>
            </h2>

            <div className="flex gap-4 items-center my-4">
              <h2 className="font-bold text-[1.5rem]">वर्ष</h2>
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="text"
                className="semiSmallInput"
              />


            </div>
          
          </div>
        </div>

        {/* ************************ all sealy data************** */}
        <div>
          <form action="">
            <div className="flex justify-center items-center">
              <table className="removeCommonWSpace ">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th colSpan={2}> वेतन</th>
                    <th colSpan={2}> भुगतान</th>
                    <th>शेष </th>
                    <th>टिप्पणी</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th></th>

                    <td>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">दिनांक</span>
                          </label>
                        </div>
                        </td>


                        {/* <div className="form-control">
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
                        </div> */}
                        <td>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text"> रकम</span>
                          </label>
                        </div>
                    </td>

                    <td>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">दिनांक</span>
                          </label>
                        </div>
                        </td>
                        {/* <div className="form-control">
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
                        </div> */}
                        <td>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">रकम</span>
                          </label>
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

                  {(salareyDataList &&
                    salareyDataList.salaryData
                      .filter((item) => {
                        if (
                          item.salary.month.toString().includes(year) &&
                          item.payment.date.toString().includes(year)
                        ) {
                          return item;
                        }
                      })
                      ?.map((salary, index) => {
                        console.log(salary, ":salary+++++++++++++");

                        return (
                          <SalaryFormData
                            key={index}
                            salareyDataLoading={salareyDataLoading}
                            salareyDataList={salareyDataList.salaryData}
                            salary={salary}
                            index={index}
                          ></SalaryFormData>
                        );
                      })) || (
                    <>
                      <tr>
                        <td>
                          <span className="text-red-500">No Data Found</span>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </form>{" "}
        </div>
      </div>
      <div>
        <div className="mt-4 flex justify-center items-center gap-4">
          <label htmlFor="addData" className="commonBtn">
            लेन-देन जोड़ें
          </label>

          <Link
            to="/user/salary"
            className="dailyReportBtn text-center flex justify-center items-center"
          >
            सूची
          </Link>
        </div>
      </div>
      {/* ************************ all sealy data************** */}
      <SalaryModal
        salaryState={salaryState}
        isLoading={isLoading}
        slaryDate={slaryDate}
        setSalaryDate={setSalaryDate}
        paymentDate={paymentDate}
        setPaymentDate={setPaymentDate}
        handelSalaryOnSubmit={handelSalaryOnSubmit}
        handelSelaryOnChange={handelSelaryOnChange}
      ></SalaryModal>
    </section>
  );
};

export default SalaryForm;
