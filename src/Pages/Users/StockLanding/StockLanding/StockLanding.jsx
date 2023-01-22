// import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
// import Loader from "../../../../Components/Loader/Loader";
// import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";

const StockLanding = () => {
  const todayDate = new Date(new Date());
  // const token = localStorage.getItem("token");

  // const { data: salaryData, isLoading, refetch } = useQuery({
  //   queryKey: ["salaryData"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       "https://insorty-api.onrender.com/shop/getAllEmployees",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json", cookie_token: token },
  //       }
  //     );
  //     const data = await res.json();
  //     return data.data;
  //   },
  // });

  // if (isLoading) {
  //   return (
  //     <div>
  //       <Loader></Loader>
  //     </div>
  //   );
  // }

  // if (!salaryData) {
  //   return <div>No Stock Landing</div>;
  // }

  return (
    <section className="p-6">
      <div>
        <h1 className="titleStyle">पार्टी का नाम</h1>
        <div className="flex gap-10 font-bold">
          <p className="description">Sanjay wine shop</p>
          <p className="description">
            {todayDate.toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          </p>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <Link
                    className="font-bold text-[1rem]"
                    to={`/user/stocklanding/form`}
                  >
                    {/* {salary?.name} */}
                    Rahul
                  </Link>
                </td>
                <td>
                  <Link
                    className="font-3xl font-bold"
                    style={{ color: "#AA237A" }}
                    // onClick={() => handleDelete(salary?._id)}
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
                  </Link>
                </td>
              </tr>

              {/* {salaryData?.map((salary, index) => {
                return (
                  <tr key={salary?._id}>
                    <th>{index + 1}</th>
                    <td>
                      <Link
                        className="font-bold text-[1rem]"
                        to={`/user/stocklanding/form/${salary?._id}`}
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
              })} */}

              <tr>
                <label htmlFor="addNewEmploy" className="btn btn-sm my-4">
                  Add New
                </label>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StockLanding;
