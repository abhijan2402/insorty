import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const WineBill = () => {
  const token = jwtDecode(localStorage.getItem("token"));
  const ShopType = token.shopType;
  const role = token.role;

  return (
    <section className="p-4">
      <div>
        <div className="title">
          <div className="flex gap-4 items-center justify-center">
            <h2 className="font-bold md:text-[1.5rem] text-center">शराब बिल
</h2>
          </div>
          <div className="divider my-2"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center">
          { ShopType === "BAR" && (
            <>
              <Link className="commonBtn" to="/user/bearshop/selfbill">
                दुकान बिल
              </Link>

              <Link className="commonBtn " to="/user/bearshop/outbill">
                बाहर का बिल
              </Link>
            </>
          )}{" "}
          { ShopType === "SHOP" && (
            <>
              <Link className="commonBtn" to="/user/selfbill">
                दुकान बिल
              </Link>

              <Link className="commonBtn " to="/user/outbill">
                बाहर का बिल
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WineBill;
