import React from "react";
import "../../UserStyle/UserStyle.scss";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const SalaryList = () => {
  return (
    <section className="px-2 py-6">
      <div>
        <h1 className="titleStyle">Salary List</h1>
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
                    to={`/user/salary/from`}
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
                <td className="font-bold text-[1rem]">Rahul / राहुल</td>
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
                <td className="font-bold text-[1rem]">Rahul / राहुल</td>
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

export default SalaryList;
