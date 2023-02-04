import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import PaymentForm from "../PaymentForm/PaymentForm";
import AddPayment from "../AddPayment/AddPayment";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const Payments = () => {
  const token = localStorage.getItem("token");
  const [paymentDetailsData, setPaymentDetailsData] = React.useState([]);

  const { data: paymentData, isLoading, refetch } = useQuery({
    queryKey: ["paymentData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getShopAccount",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const paymentDetails = paymentData?.entries;
  console.log("Payments -> paymentDetails", paymentDetailsData);

  const handelAddPayment = async (e) => {
    e.preventDefault();
    const from = e.target;
    const debitAmount = from.debitAmount.value;
    const debitMonth = from.debitMonth.value;
    const depositAmount = from.depositAmount.value;
    const depositDate = from.depositMonth.value;
    const currentBalanceDebit = from.currentBalance.value;
    const description = from.details.value;

    const shopAccount = [
      {
        debit: {
          cash: debitAmount,
          month: debitMonth,
        },
        deposit: {
          cash: depositAmount,
          month: depositDate,
        },
        currentBalalcne: currentBalanceDebit,
        description: description,
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
        console.log(data);
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

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">दुकान/बार पेमेंट</h2>
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>
          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="text"
              value={"12 Dec 2022 "}
              name="year"
              className="semiSmallInput"
            />
          </div>
          <h2 className="font-bold text-[1.5rem]">To</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="text"
              value={"07 January 2023 "}
              name="year"
              className="semiSmallInput"
            />
          </div>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Debit / नामे</th>
                  <th>Deposit / जमा </th>

                  <th>चालू शेष नामे</th>
                  <th>विवरणे</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th></th>

                  <td>
                    <div className="flex gap-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">रकम</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">माह</span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">रकम</span>
                        </label>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">दिनाक</span>
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
                  <td>
                    <div className="flex gap-4">
                      <div className="form-control">
                        <label className="label"></label>
                      </div>
                    </div>
                  </td>

                  {/* ============= कुल योग ================ */}
                </tr>
                {paymentDetails && paymentDetails.length === 0 ? (
                  <tr>
                    <td className="font-bold font-2xl text-red-600 text-center">
                      No Payment Data Found
                    </td>
                  </tr>
                ) : (
                  paymentDetails.map((payment, index) => {
                    return (
                      <PaymentForm
                        key={index}
                        index={index}
                        payment={payment}
                      ></PaymentForm>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </form>{" "}
        <div>
          <div className="mt-4 flex gap-4">
            <label htmlFor="addPaymentData" className="btn bg-[#AA237A]">
              Add Payment
            </label>
          </div>
        </div>
      </div>
      <AddPayment handelAddPayment={handelAddPayment}></AddPayment>
    </section>
  );
};

export default Payments;
