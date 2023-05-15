import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../../Components/Loader/Loader";
import AddPreviusLons from "../AddPreviusLons/AddPreviusLons";
import jwtDecode from "jwt-decode";

const PreviousLoansList = () => {
  const token = localStorage.getItem("token");
  const tokenShop = jwtDecode(localStorage.getItem("token"));
  const ShopType = tokenShop.shopType;
  const role = tokenShop.role;

  const BasedURL = process.env.REACT_APP_API_URL;


  console.log(tokenShop, "tokenShop");

  const {
    data: prevLoneData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["prevLoneData"],
    queryFn: async () => {
      const res = await fetch(
       `${BasedURL}/shop/getAllPreviousBorroweds`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const handleDelete = (previousBorrowedId) => {
    fetch(`${BasedURL}/shop/deletePreviousBorrowed`, {
      method: "DELETE",
      body: JSON.stringify({ previousBorrowedId }),
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

  const handelSubmitAddNewPrevLoan = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const financeYear = e.target.financeYear.value;

    console.log(name, financeYear, "financeYear");

    fetch(`${BasedURL}/shop/addPreviousBorrowed`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({
        name: name,
        financeYear: financeYear,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        // refetch();
        if (data.success === true) {
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
        <h1 className="titleStyle text-center">Previous Loans</h1>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div
          className="flex justify-center items-center
        "
        >
          <table className="table w-3/4">
            <thead>
              <tr>
                <th> क्र. सं.</th>
                <th colSpan={2}>Name</th>
                {/* <th colSpan={2}>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {(prevLoneData &&
                prevLoneData.length &&
                prevLoneData?.map((prevLone, index) => {
                  const id = prevLone?._id

                  return (
                    <tr key={prevLone?._id}>
                      <td>{index + 1}</td>
                      <td>
                        {role === "shop" && ShopType === "SHOP" && (
                          <Link
                            className="font-bold text-[1rem]"
                            to={`/user/previousloan/details/${id}`}
                          >
                            {prevLone?.name}
                          </Link>
                        )}

                        {role === "shop" && ShopType === "BAR" && (
                          <Link
                            className="font-bold text-[1rem]"
                            to={`/user/bearshop/previousloan/details/${prevLone?._id}`}
                          >
                            {prevLone?.name}
                          </Link>
                        )}
                      </td>

                      <td>
                        <Link
                          className="font-3xl font-bold"
                          style={{ color: "#AA237A" }}
                          onClick={() => handleDelete(prevLone?._id)}
                        >
                          <FaRegTrashAlt></FaRegTrashAlt>
                        </Link>
                      </td>
                    </tr>
                  );
                })) || (
                <>
                  <p>
                    <span className="text-red-500">No Data Found</span>
                  </p>
                </>
              )}
            </tbody>
          </table>
        </div>
        <tr className="py-4 flex justify-center">
          <label htmlFor="addNewPrevLone" className="commonBtn">
            Add New
          </label>
        </tr>
      </div>

      <AddPreviusLons
        handelSubmitAddNewPrevLoan={handelSubmitAddNewPrevLoan}
        key={prevLoneData?._id}
      />
    </section>
  );
};

export default PreviousLoansList;
