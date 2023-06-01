import { useQuery } from "@tanstack/react-query";
import React,{useState,useEffect} from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddPreviusLons from "../AddPreviusLons/AddPreviusLons";
import jwtDecode from "jwt-decode";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const PreviousLoansList = () => {
  const token = localStorage.getItem("token");
  const tokenShop = jwtDecode(localStorage.getItem("token"));
  const ShopType = tokenShop.shopType;
  const role = tokenShop.role;
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [parties,setParties] = useState([])
  const BasedURL = process.env.REACT_APP_API_URL;



  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/shop/getAllPreviousBorroweds?page=${page}&pagesize=30`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((response) => {
        setParties((data) => [...data, ...response.data.data]);
        setPage((page) => page + 1);
        if (response.data.data.length === 0) {
          setHasMore(false);
        }

      })
      .catch((err) => {
        console.log(err)

       
          setHasMore(false);
        
      });

  
  };

  useEffect(() => {
    fetchData();
  }, [parties]);

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
          window.location.reload()
        } else {
          Swal.fire("Failed!", "Your file has not been deleted.", "error");
        }
      });
  };

  const handelSubmitAddNewPrevLoan = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const financeYear = e.target.financeYear.value;

    

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
        window.location.reload()
        if (data.success === true) {
          Swal.fire("Success!", "Your file has been added.", "success");
        } else {
          Swal.fire("Failed!", "Your file has not been added.", "error");
        }
      });
  };

  

  return (
    <section className="px-2 py-6">
      <div>
        <h1 className="titleStyle text-center">पिछले ऋण</h1>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div
          className="flex justify-center items-center
        "
        >
           <InfiniteScroll
            dataLength={parties.length}
            next={fetchData}
            hasMore={hasMore}
            scrollableTarget="scrollableDiv"
            loader={<h4>Loading...</h4>}
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
              {(parties &&
                parties.length &&
                parties?.map((prevLone, index) => {
                  const id = prevLone?._id

                  return (
                    <tr id="scrollableDiv" className={prevLone.isActive===true ? "" : "displayHidden"} key={prevLone?._id}>
                      <td>{index + 1}</td>
                      <td >
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
          </InfiniteScroll>
        </div>
        <tr className="py-4 flex justify-center">
          <label htmlFor="addNewPrevLone" className="commonBtn">
            Add New
          </label>
        </tr>
      </div>

      <AddPreviusLons
        handelSubmitAddNewPrevLoan={handelSubmitAddNewPrevLoan}
        key={parties?._id}
      />
    </section>
  );
};

export default PreviousLoansList;
