import React from "react";
import { Link } from "react-router-dom";

const CommsionRoute = () => {
  return (
    <section className="p-4">
      <div>
        <div className="title">
          <div className="flex gap-4 items-center justify-center  text-center ">
            <h2 className="font-bold md:text-[1.5rem] text-center ">
              All Commisson
            </h2>
          </div> 
          <div className="divider my-2"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center flex-wrap">
          <Link className="commonBtn" to="/user/commisson">
            COMMISSION
          </Link>

          <Link className="commonBtn " to="/user/kharcha">
            KHARCHA
          </Link>

          <Link className="commonBtn " to="/user/fut">
            FUT
          </Link>

          <Link className="commonBtn " to="/user/begar">
            BEGAR
          </Link>

          <Link className="commonBtn " to="/user/monthly">
            MONTHLY
          </Link>

          <Link className="commonBtn " to="/user/penalty">
            PENALTY
          </Link>

          <Link className="commonBtn " to="/user/others">
            OTHERS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommsionRoute;
