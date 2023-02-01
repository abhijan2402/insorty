import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BranchName = () => {
  return (
    <section className="py-4">
      <div>
        <h1 className="titleStyle">List / सूची</h1>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <Link
                    className="font-bold text-[1rem]"
                    to={`/user/branch/from`}
                  >
                    Rahul / राहुल
                  </Link>
                </td>
                <td>
                  <Link
                    className="font-3xl font-bold"
                    style={{ color: "#AA237A" }}
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>
                  <Link
                    className="font-bold text-[1rem]"
                    to={`/user/branch/from`}
                  >
                    Rahul / राहुल
                  </Link>
                </td>
                <td>
                  <Link
                    className="font-3xl font-bold"
                    style={{ color: "#AA237A" }}
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>3</th>
                <td>
                  <Link
                    className="font-bold text-[1rem]"
                    to={`/user/branch/from`}
                  >
                    Rahul / राहुल
                  </Link>
                </td>
                <td>
                  <Link
                    className="font-3xl font-bold"
                    style={{ color: "#AA237A" }}
                  >
                    <FaRegTrashAlt></FaRegTrashAlt>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BranchName;
