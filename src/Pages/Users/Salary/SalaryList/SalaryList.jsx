import React from "react";
import "../../UserStyle/UserStyle.scss";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import AddNewEmploy from "../AddNewEmploy/AddNewEmploy";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const SalaryList = () => {
  const token = localStorage.getItem("token");

  const { data: salaryData, isLoading, refetch } = useQuery({
    queryKey: ["salaryData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllEmployees",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const handleDelete = (employeeId) => {
    fetch(`https://insorty-api.onrender.com/shop/deleteEmployee`, {
      method: "POST",
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
        <h1 className="titleStyle">Salary List</h1>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <tbody>
              {salaryData?.map((salary, index) => {
                return (
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
                        onClick={() => handleDelete(salary?._id)}
                      >
                        <FaRegTrashAlt></FaRegTrashAlt>
                      </Link>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <label htmlFor="addNewEmploy" className="btn btn-sm my-4">
                  Add New
                </label>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddNewEmploy
        key={salaryData?._id}
        handelSubmitAddNewEmploy={handelSubmitAddNewEmploy}
      ></AddNewEmploy>
    </section>
  );
};

export default SalaryList;
