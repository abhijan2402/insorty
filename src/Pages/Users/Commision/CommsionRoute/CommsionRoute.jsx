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
            कमीशन
          </Link>

          <Link className="commonBtn " to="/user/kharcha">
            खर्चा
          </Link>

          <Link className="commonBtn " to="/user/fut">
            फूट
          </Link>

          <Link className="commonBtn " to="/user/begar">
            बेगार
          </Link>

          <Link className="commonBtn " to="/user/monthly">
            मंथली
          </Link>

          <Link className="commonBtn " to="/user/penalty">
            पेनाल्टी
          </Link>

          <Link className="commonBtn " to="/user/others">
            अन्य
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommsionRoute;
