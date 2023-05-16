import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Stock = () => {
  const token = jwtDecode(localStorage.getItem("token"));
  const ShopType = token.shopType;
  const role = token.role;

  return (
    <section className="p-4">
      <div className="title">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="font-bold md:text-[1.5rem] text-center">All Stock</h2>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center">
          {role === "shop" && ShopType === "BAR" && (
            <>
              <Link to="/user/bearshop/winestock" className="commonBtn ">
                अंग्रेजी
              </Link>
              <Link to="/user/bearshop/beerstock" className="commonBtn ">
                बीयर
              </Link>

              <Link className="commonBtn" to="/user/bearshop/rmlstock">
                देशी / RML
              </Link>
            </>
          )}

          {role === "shop" && ShopType === "SHOP" && (
            <>
              <Link to="/user/winestock" className="commonBtn ">
                अंग्रेजी
              </Link>
              <Link to="/user/beerstock" className="commonBtn ">
                बीयर
              </Link>

              <Link className="commonBtn" to="/user/rmlstock">
                देशी / RML
              </Link>
            </>
          )}

          {/* <Link to="/user/winestock" className="commonBtn ">
            अंग्रेजी
          </Link>
          <Link to="/user/beerstock" className="commonBtn ">
            बीयर
          </Link>

          <Link className="commonBtn" to="/user/rmlstock">
            देशी / RML
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Stock;
