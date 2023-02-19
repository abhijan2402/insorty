import React from "react";
import { Link } from "react-router-dom";

const AddItems = () => {
  return (
    <section className="p-4">
      <div>
        <div className="title">
          <div className="flex gap-4 items-center">
            <h2 className="font-bold text-[1.5rem]">All Items</h2>
          </div>
          <div className="divider my-2"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center">
          <Link to="/user/beerstock" className="commonBtn ">
            Bear Stock
          </Link>
          <Link to="/user/winestock" className="commonBtn ">
            Wine Stock
          </Link>

          <Link className="commonBtn" to="/user/brandlist">
            Brand List
          </Link>

          <Link className="commonBtn " to="/user/partyname">
            Party Name
          </Link>

          <Link className="commonBtn " to="/user/branchname">
            Branch Name
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddItems;
