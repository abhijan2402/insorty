import React from "react";
import { Link } from "react-router-dom";

const AddItems = () => {
  return (
    <section className="p-4">
      <div>
        <div className="title">
          <div className="flex gap-4 items-center">
            <h2 className="font-bold md:text-[1.5rem] text-center">
              All Items
            </h2>
          </div>
          <div className="divider my-2"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center flex-wrap">
       
          
          <Link className="commonBtn " to="/user/bearshop/branchname">
            ब्रांच जोड़ें
          </Link>

          <Link className="commonBtn " to="/user/bearshop/cpartyname">
            पार्टी जोड़ें
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddItems;
