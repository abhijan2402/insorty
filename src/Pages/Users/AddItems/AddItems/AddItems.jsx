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
       
          
          <Link className="commonBtn " to="/user/branchname">
            Branch Name
          </Link>

          <Link className="commonBtn " to="/user/partyname">
            Party Name
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddItems;
