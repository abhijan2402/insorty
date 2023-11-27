import React from "react";
import "../../UserStyle/UserStyle.scss";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import AddNewEmploy from "../AddNewEmploy/AddNewEmploy";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import jwtDecode from "jwt-decode";
import swal from "sweetalert";

const SalaryList = () => {
  const token = localStorage.getItem("token");
  const ShopToken = jwtDecode(localStorage.getItem("token"));

  const ShopType = ShopToken.shopType;
  const role = ShopToken.role;

  console.log(role, ShopType, "+++++")



  const {
    data: salaryData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["salaryData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllEmployees",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
    
      return data.data;
    },
  });

  const handleDelete = (employeeId) => {
    fetch(`https://insorty-api.onrender.com/shop/deleteEmployee`, {
      method: "DELETE",
      body: JSON.stringify({ employeeId }),
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          refetch();
        } else {
          Swal.fire("Failed!", "Your file has not been deleted.", "error");
        }
      });
  };

  const handelSubmitAddNewEmploy = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const mobile = e.target.phoneNumber.value;

    const testName = name.toLowerCase()

    const test = salaryData.length >0 ? salaryData.some((emp)=>emp?.name.toLowerCase()===testName) : []

    if (test===true) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Salesman name already present',
      });
    
    }

    else{

    fetch("https://insorty-api.onrender.com/shop/addEmployee", {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({ name, mobile }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.success) {
          Swal.fire("Success!", "Your file has been added.", "success");
        } else {
          Swal.fire("Failed!", "Your file has not been added.", "error");
        }
      });
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }

  return (
    <section className="px-2 py-6">
      <div>
        <h1 className="titleStyle text-center">कर्मचारी</h1>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div
          className="flex justify-center items-center
        "
        >
          <table className="table removeCommonWSpace">
            <thead>
              <tr>
                <th> क्र. सं.</th>
                <th>नाम</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {(salaryData.length > 0 &&
                salaryData?.map((salary, index) => {
                  return (
                    <>
                      { ShopType === "BAR" && (
                        <tr key={salary?._id}>
                          <th>{index + 1}</th>
                          <td>
                            <Link
                              className="font-bold text-[1rem]"
                              to={`/user/bearshop/salary/from/${salary?._id}`}
                            >
                              {salary?.name}
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="font-3xl font-bold"
                              style={{ color: "#AA237A" }}
                              onClick={() => {
                                swal({
                                  title: "Are you sure?",
                                  text: `Once deleted, you will not be able to recover employee ${salary?.name}`,
                                  icon: "warning",
                                  buttons: true,
                                  dangerMode: true,
                                }).then((willDelete) => {
                                  if (willDelete) {
                                    
                                    handleDelete(salary?._id);
                                    
                                  } else {
                                    swal("Your Employee is safe!");
                                  }
                                });
                              }}
                            >
                              <FaRegTrashAlt></FaRegTrashAlt>
                            </Link>
                          </td>
                        </tr>

                      )}

                      {ShopType === "SHOP" && (
                        <tr key={salary?._id}>
                          <th>{index + 1}</th>
                          <td>
                            <Link
                              className="font-bold text-[1rem]"
                              to={`/user/salary/from/${salary?._id}`}
                            >
                              {salary?.name}
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="font-3xl font-bold"
                              style={{ color: "#AA237A" }}
                              onClick={() => {
                                swal({
                                  title: "Are you sure?",
                                  text: `Once deleted, you will not be able to recover employee ${salary?.name}`,
                                  icon: "warning",
                                  buttons: true,
                                  dangerMode: true,
                                }).then((willDelete) => {
                                  if (willDelete) {
                                    
                                    handleDelete(salary?._id);
                                    
                                  } else {
                                    swal("Your Employee is safe!");
                                  }
                                });
                              }}
                            >
                              <FaRegTrashAlt ></FaRegTrashAlt>
                            </Link>
                          </td>
                        </tr>
                      )}



                    </>
                  );
                })) }
            </tbody>
          </table>
        </div>
        <tr className="py-4 flex justify-center">
          <label htmlFor="addNewEmploy" className="commonBtn">
            नया कर्मचारी जोड़ें
          </label>
        </tr>
      </div>
      <AddNewEmploy
        key={salaryData?._id}
        handelSubmitAddNewEmploy={handelSubmitAddNewEmploy}
      ></AddNewEmploy>
    </section>
  );
};

export default SalaryList;
