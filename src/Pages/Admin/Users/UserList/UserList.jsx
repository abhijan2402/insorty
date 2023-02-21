import React from "react";
import { FaInfo, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddUser from "../AddUser/AddUser";
import EditUser from "../EditUser/EditUser";
import InfoUser from "../InfoUser/InfoUser";

const UserList = () => {
  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">User List</h2>
          <Link to="/" className="commonBtn ">
            Sub Admin List
          </Link>
          <Link to="/user" className="commonBtn ">
            User List
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-3/4">
            <tbody>
              <tr className="p-4 text-left">
                <td className="border px-4 py-2 font-bold">
                  <Link>rahul / राहुल </Link>
                </td>
                <td>
                  <div className="flex gap-4 items-center justify-end">
                    <Link>
                      <FaRegTrashAlt className="text-[1.7rem]" />
                    </Link>

                    <label
                      htmlFor="EditUser"
                      className="text-[1.7rem] cursor-pointer"
                    >
                      <FaPencilAlt className="text-[1.7rem]" />
                    </label>

                    <label
                      htmlFor="UserInfo"
                      className="text-[1.7rem] cursor-pointer"
                    >
                      <FaInfo className="text-[1.7rem]" />
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="py-4 my-4">
            <label htmlFor="addNewSubAdmin" className="commonBtn ">
              ADD NEW
            </label>
          </div>
        </div>
      </div>

      <AddUser></AddUser>
      <EditUser></EditUser>
      <InfoUser></InfoUser>
    </section>
  );
};

export default UserList;
