import React, { useRef } from "react";
import BorrowForm from "../BorrowForm/BorrowForm";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "react-bootstrap-typeahead";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Borrow = () => {
  const token = localStorage.getItem("token");

  const shopType = jwtDecode(token).shopType;
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  const {
    data: parties,
    isLoading: partiesLoading,
    refetch,
  } = useQuery({
    queryKey: ["parties"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParties",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  if (partiesLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <div className="py-0 sticky top-0 bg-gray-50 z-5000">
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
        <div className="title flex justify-center items-center">
          <Link
            className={shopType === "SHOP" ? "commonBtn" : "displayHidden"}
            to="/user/branchname"
          >
            ब्रांच जोड़ें
          </Link>

          <Link
            className={shopType === "SHOP" ? "commonBtn" : "displayHidden"}
            to="/user/partyname"
          >
            पार्टी जोड़ें
          </Link>
          <Link
            className={shopType === "SHOP" ? "commonBtn" : "displayHidden"}
            to="/user/branch"
          >
            ब्रांच
          </Link>

          <Link
            className={shopType === "BAR" ? "commonBtn" : "displayHidden"}
            to="/user/bearshop/partyname"
          >
            पार्टी जोड़ें
          </Link>
        </div>
      </div>
      <section className="py-4 scroll-y">
        <div ref={front}>
          <h1 className="titleStyle text-center">पार्टी सूची</h1>
          <div className="divider my-2"></div>
          <div>
            <h2 className="font-bold md:text-[1.5rem] text-center">
              उधारी (माल व नकद) नामे व जमा
            </h2>
            <form action="">
              <div className="flex justify-center items-center">
                <table className="removeCommonWSpace ">
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <th className="text-xs"> पार्टी का नाम</th>
                      <th className="text-xs">नामे </th>
                      <th className="text-xs">जमा </th>
                      <th className="text-xs">चालू शेष नामे</th>
                    </tr>
                  </thead>

                  <tbody>
                    {(parties &&
                      parties.map(
                        ((cur_sum) => (party, index) => {
                          return (
                            <BorrowForm
                              key={index}
                              index={index}
                              party={{
                                ...party,
                                current_balance: (cur_sum +=
                                  party.debits - party.deposits),
                              }}
                            ></BorrowForm>
                          );
                        })(0)
                      )) || (
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
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Borrow;
