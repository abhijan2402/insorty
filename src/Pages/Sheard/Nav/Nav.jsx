import React from "react";

import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";
import "../Style/SheardStyle.scss";

const Nav = () => {
  return (
    <section className="mx-2">
      <div
        className="flex justify-between items-center"
        style={{
          paddingTop: "20px",
        }}
      >
        <div>
          <Link className="Navlogo">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "160px",
              }}
            />
          </Link>
        </div>

        <div className="text-center">
          <h1 className="font-4xl font-bold text-red-500">Jai Wine Shop</h1>
          <p>A4 ss colony Merta city Raj. </p>
        </div>
      </div>
    </section>
  );
};

export default Nav;
