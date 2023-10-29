import React from "react";
import "./Style/DailyReport.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DailyReport = () => {
  const token = localStorage.getItem("token")
  const clearData = () => {
    fetch("https://insorty-api.onrender.com/shop/deleteMyData", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((response) => {
        response.json();
        
        if (response.status === 200) {
         localStorage.clear()
         localStorage.setItem('token',token)
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
      .catch((err) => console.log(err))
  }

  return (
    <section className="mx-2">
      <div className="my-4">
        <h1 className="font-bold text-2xl text-center">दैनिक रिपोर्ट </h1>
      </div>

      <div className="divider"></div>

      <div className="flex gap-4">
        <Link
          to="/user/dailyreport/front"
          className="commonBtn"
        >
          अंग्रेजी
        </Link>
        <Link
          to="/user/dailyreport/back"
          className="commonBtn"
        >
          बीयर
        </Link>

        <Link
          to="/user/frontdailyreport/details"
          className="commonBtn"
        >
          पर्चा

        </Link>

        <button className="commonBtn" onClick={() => clearData()}>Clear Data</button>
      </div>
    </section>
  );
};

export default DailyReport;
