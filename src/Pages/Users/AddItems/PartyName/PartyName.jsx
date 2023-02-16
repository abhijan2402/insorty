import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PartyName = () => {
  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-[1.5rem]">Party Name/ पार्टी का नाम</h2>
          <Link to="/" className="commonBtn ">
            Branch
          </Link>
          <Link to="/" className="commonBtn ">
            Brand List
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <table className="table w-4/5">
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <Link
                  className="font-bold text-[1rem]"
                  // to={`/user/salary/from/${salary?._id}`}
                  to="/"
                >
                  MAC
                </Link>
              </td>
              <td>
                <Link
                  className="font-3xl font-bold"
                  style={{ color: "#AA237A" }}
                  // onClick={() => handleDelete(salary?._id)}
                >
                  <FaRegTrashAlt></FaRegTrashAlt>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className="my-4">
          <Link to="/" className="commonBtn ">
            Add Naw
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartyName;
