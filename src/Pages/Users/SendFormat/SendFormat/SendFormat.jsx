import React, { useRef } from "react";
import AddSendFormat from "../AddSendFormat/AddSendFormat";
import usePartyNames from "../../../../Hooks/usePartyNames";
import Loader from "../../../../Components/Loader/Loader";
import ChangeEquity from "../ChangeEquity";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { FaRegTrashAlt } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
import swal from "sweetalert";

const SendFormat = ({ isBearShop }) => {
  const { partners, partnerLoaded, refetch } = usePartyNames();
  const token = localStorage.getItem('token')
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
 
  // const token = jwtDecode(localStorage.getItem("token"));
  const ShopType = jwtDecode(localStorage.getItem("token")).shopType;
  

  const deletePartner = (id) => {
    fetch(`https://insorty-api.onrender.com/shop/deletePartner`, {
      method: "DELETE",
      body: JSON.stringify({ partnerId: id }),
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          window.location.reload();
        } else {
          Swal.fire("Failed!", "Your file has not been deleted.", "error");
        }
      });
  };

  if (partnerLoaded) return <Loader></Loader>;

  return (
    <section className="py-4">
      <div className="title">
      <button className="commonBtn " onClick={handlePrint}>
            प्रिंट
          </button>
        <div className="flex gap-4 items-center justify-center">
          

          { ShopType === "BAR" && (
            <Link className="commonBtn" to="/user/bearshop/partners">
              पार्टनर खाते
            </Link>
          ) }{ ShopType === "SHOP" && (
            <Link className="commonBtn" to="/user/partners">
              पार्टनर खाते
            </Link>
          )}

          
        </div>

        <div className="divider my-2"></div>
      </div>

      <div>
        <section ref={front}>
          <div className="mx-6 flex justify-center flex-col">
            <h2 className="font-bold md:text-[1.5rem] text-center my-4">
              सभी पार्टनर
            </h2>
            <div className="flex justify-center items-center flex-col">
              <table className="removeCommonWSpace ">
                <thead>
                  <tr>
                    <th className="text-xs"> क्र. सं.</th>
                    <th className="text-xs">पार्टनर नाम</th>
                    <th className="text-xs">हिस्सा</th>
                    <th className="text-xs">खाते में शेष</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((item, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{item?.name}</td>
                        <td>{item?.equity} %</td>
                        <td>{Number(item?.balance).toFixed(2)}</td>
                        <td>
                          <FaRegTrashAlt className="cursor-pointer"
                            onClick={() => {
                              swal({
                                title: "Are you sure?",
                                text: `Once deleted, you will not be able to recover partner ${item?.name}`,
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              }).then((willDelete) => {
                                if (willDelete) {
                                  if (item.equity !== 0) {
                                    swal(`Please Change Equity to 0%`, {
                                      icon: "error",
                                    });
                                  } else {
                                    deletePartner(item._id);
                                  }
                                } else {
                                  swal("Your partner is safe!");
                                }
                              });
                            }}
                          ></FaRegTrashAlt>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </section>

        <div>
          <div className="flex justify-center ">
            <label htmlFor="addFormat" className="btn bg-[#AA237A] my-4 mx-4">
              नया पार्टनर जोड़ें
            </label>
            <label htmlFor="changeShare" className="btn bg-[#AA237A] my-4">
              शेयर बदलें
            </label>
          </div>
        </div>
        <AddSendFormat partners={partners}></AddSendFormat>
        <ChangeEquity data={partners}></ChangeEquity>
      </div>
    </section>
  );
};

export default SendFormat;
