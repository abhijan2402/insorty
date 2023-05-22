import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddTranstion from "../AddTranstion/AddTranstion";
import moment from "moment/moment";

const PreviousLoansDetails = () => {
  const token = localStorage.getItem("token");
  const { loandataId } = useParams();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const BasedURL = process.env.REACT_APP_API_URL;

  const {
    data: prevLoneByIdData,
    isLoading: prevLoneByIdLoading,
    refetch: prevLoneByIdRefetch,
  } = useQuery({
    queryKey: ["prevLoneByIdData"],
    queryFn: async () => {
      const res = await fetch(
        `${BasedURL}/shop/getPreviousBorrowedTransactions?previousBorrowedId=${loandataId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      console.log(data.data);
      return data.data;
    },
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(prevLoneByIdData)

    fetch(`${BasedURL}/shop/addPreviousBorrowedTransaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({
        previousBorrowedId: prevLoneByIdData?._id,
        deposit: 0,
        debit: e.target.deposit.value,
        date: e.target.dateData.value,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        if (data.success === true) {
          Swal.fire("Success!", "Your file has been added.", "success");
          prevLoneByIdRefetch();
        } else {
          Swal.fire("Failed!", "Your file has not been added.", "error");
        }
      });
  };

  console.log(prevLoneByIdData, "prevLoneByIdData");

  if (prevLoneByIdLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div className="title flex justify-center items-center gap-4">
        <h2 className="font-bold text-[1.5rem]">{prevLoneByIdData?.name}</h2>

        <button className="commonBtn " onClick={handlePrint}>
          PRINT
        </button>
      </div>
      <div className="divider my-2"></div>

      <div ref={front}>
        <div
          className="flex justify-center items-center
        "
        >
          <table className="table w-3/4">
            <thead>
              <tr>
                <th> क्र. सं.</th>
                <th colSpan={2}>Date</th>
                <th colSpan={2}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {(prevLoneByIdData?.transactions &&
                prevLoneByIdData?.transactions.length &&
                prevLoneByIdData?.transactions?.map((prevLone, index) => {
                  return (
                    <tr key={prevLone?._id}>
                      <td>{index + 1}</td>
                      <td colSpan={3}>
                        <Link className="font-bold text-[1rem]">
                          {moment(prevLone?.date,).format("DD/MM/YYYY")}
                        </Link>
                      </td>
                      

                      <td>
                        <Link className="font-bold text-[1rem]">
                          {prevLone?.debit}
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
          <label htmlFor="addNewTranstion" className="commonBtn">
            Add New
          </label>
        </tr>
      </div>

      <AddTranstion handelSubmit={handelSubmit} />
    </section>
  );
};

export default PreviousLoansDetails;
