/* eslint-disable no-use-before-define */
import React, { useRef, useState } from "react";
import PaymentForm from "../PaymentForm/PaymentForm";
import AddPayment from "../AddPayment/AddPayment";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import jwtDecode from "jwt-decode";

const Payments = () => {
  const token = localStorage.getItem("token");
  const [paymentDetailsData, setPaymentDetailsData] = React.useState([]);
  const [debitMonth, setDebitMonth] = React.useState("");
  const [depositMonth, setDepositMonth] = React.useState("");
  const [msg, setMsg] = useState("");
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const {
    data: paymentData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["paymentData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getShopAccount",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      return data?.data;
    },
  });

  const handelAddPayment = async (e) => {
    e.preventDefault();
    const from = e.target;
    const debitAmount = from.debitAmount.value;
    const depositAmount = from.depositAmount.value;

    const shopAccount = [
      {
        debit: {
          cash: debitAmount,
          date: debitMonth,
        },
        deposit: {
          cash: depositAmount,
          date: depositMonth,
        },
        description: msg,
      },
    ];

    fetch("https://insorty-api.onrender.com/shop/addShopAccount", {
      method: "POST",
      body: JSON.stringify({
        entries: shopAccount,
      }),
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPaymentDetailsData(data?.data);

        refetch();
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Payment Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        }
      });
  };

  const handelDelete = async (id) => {
    fetch(`https://insorty-api.onrender.com/shop/deleteShopAccount`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
      body: JSON.stringify({ shopAccountPageId: id }),
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Payment Deleted Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="py-0 sticky top-0 bg-white z-5000">
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
        <div className="title flex justify-center items-center">
          {jwtDecode(token).shopType === "SHOP" ? (
            <h2 className="font-bold md:text-[1.5rem] text-center">
              सर्विस पेमेंट
            </h2>
          ) : (
            <h2 className="font-bold md:text-[1.5rem] text-center">
              सर्विस पेमेंट
            </h2>
          )}
        </div>
        <div className="divider my-2"></div>
      </div>

      <section>
        <div ref={front}>
          {/* <div className="divider my-2"></div> */}

          <div>
            <form action="">
              <div className="justify-center flex items-center">
                <table className="removeCommonWSpace self-center	">
                  <tbody>
                    <tr>
                      <th className="text-xs" rowSpan={2}>
                        {" "}
                        क्र. सं.
                      </th>
                      <th className="text-xs" colSpan={2}>
                        {" "}
                        नामे
                      </th>
                      <th className="text-xs" colSpan={2}>
                        {" "}
                        जमा{" "}
                      </th>
                      <th className="text-xs wd-5" rowSpan={2}>
                        {" "}
                        चालू शेष नामे{" "}
                      </th>
                      <th className="text-xs" rowSpan={2}>
                        विवरण
                      </th>
                      <th className="text-xs" rowSpan={2}>
                        डिलीट
                      </th>
                    </tr>
                    <tr>
                      <th className="text-xs">रकम</th>

                      <th className="text-xs">दिनांक</th>

                      <th className="text-xs">रकम</th>

                      <th className="text-xs">दिनांक</th>

                      {/* ============= कुल योग ================ */}
                    </tr>
                    {paymentData.map((payment, index) => {
                      return (
                        <PaymentForm
                          key={index}
                          index={index}
                          paymentData={paymentData}
                          payment={payment}
                          handelDelete={handelDelete}
                        ></PaymentForm>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>{" "}
          </div>
        </div>

        <div>
          <div className="mt-4 flex justify-center items-center gap-4">
            <label htmlFor="addPaymentData" className="btn bg-[#AA237A]">
              लेन-देन जोड़ें
            </label>
          </div>
        </div>
        <AddPayment
          handelAddPayment={handelAddPayment}
          debitMonth={debitMonth}
          setDebitMonth={setDebitMonth}
          depositMonth={depositMonth}
          setDepositMonth={setDepositMonth}
          msg={msg}
          setMsg={setMsg}
        ></AddPayment>
      </section>
    </>
  );
};

export default Payments;
