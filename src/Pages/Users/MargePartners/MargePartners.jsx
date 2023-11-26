import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const MargePartners = () => {
  const token = jwtDecode(localStorage.getItem("token"));
  const ShopType = token.shopType;
  const role = token.role;

  return (
    <section className="p-4">
      <div>
        <div className="title">
          <div className="flex gap-4 items-center justify-center">
            <h2 className="font-bold md:text-[1.5rem] text-center">पार्टनर</h2>
          </div>
          <div className="divider my-2"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center gap-4">
          { ShopType === "BAR" && (
            <>
              <Link className="commonBtn" to="/user/bearshop/partners">
                पार्टनर खाते
              </Link>
              <Link className="commonBtn " to="/user/bearshop/sendFormat">
                सभी पार्टनर
              </Link>
            </>
          )}


          { ShopType === "SHOP" && (
            <>
              <Link className="commonBtn" to="/user/partners">
                पार्टनर खाते
              </Link>

              <Link className="commonBtn " to="/user/sendFormat">
                सभी पार्टनर
              </Link>
            </>
          )}

          {/* <Link className="commonBtn " to="/user/sendFormat">
            सभी पार्टनर
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default MargePartners;
