import React from "react";
import "./Style/DailyReport.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DailyReport = () => {
  const token = localStorage.getItem("token")
  const clearData = ()=>{
    fetch("https://insorty-backend-clone.vercel.app/shop/deleteMyData", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((response) => {
        response.json();
        console.log(response)
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Data Cleared Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "some error occured",
           
          });
        }
      })
    .catch((err)=>console.log(err))
  }

  return (
    <section className="mx-2">
      <div className="flex flex-col justify-center items-center">
        <div className="my-4">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
        </div>
        <div className="flex gap-4">
        <h1 className="font-bold ">सेल्समेन का नाम </h1>
        <h1 className="font-bold ">12/12/2022 </h1>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex gap-4">
        <Link to="/user/bearshop/dailyreport/front" className="commonBtn">
          Front
        </Link>
        <Link to="/user/bearshop/dailyreport/back" className="commonBtn">
          Back
        </Link>
        <Link to="/user/bearshop/details" className="commonBtn">
          Details
        </Link>
        <button className="commonBtn" onClick={()=>clearData()}>Clear Data</button>
      </div>
    </section>
  );
};

export default DailyReport;
