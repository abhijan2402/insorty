import React from "react";
import { Link } from "react-router-dom";

const WineBill = () => {
  return (
    <section className="p-4">
      <div>
        <div className="title">
          <div className="flex gap-4 items-center">
            <h2 className="font-bold md:text-[1.5rem] text-center">
              वाइन बिल का फोर्मेट
            </h2>
          </div>
          <div className="divider my-2"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center">
          <Link className="commonBtn" to="/user/selfbill">
            Self Bill
          </Link>

          <Link className="commonBtn " to="/user/outbill">
            Out Bill
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WineBill;
