import React from "react";
import { FaInfo, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGetShopsNSubadmins from "../../../../Hooks/useGetShopsNSubadmins";
import AddSubAdmin from "../AddSubAdmin/AddSubAdmin";
import EditSubAdmin from "../EditSubAdmin/EditSubAdmin";
import SubAdminInfo from "../SubAdminInfo/SubAdminInfo";
import Swal from "sweetalert2";
import swal from "sweetalert";

const SubAdminList = () => {
  const { subAdmins, subAdminsLoading, subAdminRefetch } =
    useGetShopsNSubadmins();
  const subAdminListData = subAdmins?.data;
  const token = localStorage.getItem("token");

  

  const handelDelete = (id) => {
    console.log(id);
    fetch(`https://insorty-api.onrender.com/admin/deleteSubAdmin/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const addNewSubAdmin = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const password = from.password.value;
    const address = from.address.value;
    const phone = from.phone.value;
    const accountId = from.accountId.value;

    fetch("https://insorty-api.onrender.com/admin/createSubAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
      body: JSON.stringify({
        name: name,
        accountId: accountId,
        address: address,
        password: password,
        mobileNumber: phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sub Admin Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          subAdminRefetch();
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("add new sub admin");
  };

 const onTokenChange = (subAdminToken) => {
    const token = localStorage.getItem("token");
    const adminToken = localStorage.getItem("token2");

    if (subAdminToken !== token) {
      localStorage.setItem("token", subAdminToken);
      localStorage.setItem("token2", adminToken);
  
      const subAdminToken = localStorage.getItem("token");
      const userToken = localStorage.getItem("token2");
      const isAdmin = subAdminToken === adminToken;
  
      if (isAdmin) {
        window.location.href = "/admin";
      } else {
        window.location.href = "/subadmin";
      }
  
      console.log(subAdminToken, "token changed");
      console.log("Admin privileges:", isAdmin);
    } else {
      console.log("Token unchanged:", token);
    }
  };
  


  if (subAdminsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">सबएडमिन सूची
</h2>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className=" removeCommonWSpace">
            <tbody>
              {subAdminListData.map((subAdmin) => {
                const { _id } = subAdmin;

                const subadminId = _id;

                return (
                  <tr className="p-4 text-left" key={subAdmin?._id}>
                    <td className="border px-4 py-2 font-bold">
                    
                      {subAdmin?.name}
                    </td>

                    <td>
                      <div className="flex gap-4 items-center justify-end">
                        <button
                          onClick={() => {
                            swal({
                              title: "Are you sure?",
                              text: `Once deleted, you will not be able to recover ${subAdmin?.name}!`,
                              icon: "warning",
                              buttons: true,
                              dangerMode: true,
                            }).then((willDelete) => {
                              if (willDelete) {
                                handelDelete(subAdmin._id);
                                swal(`Subadmin has been deleted!`, {
                                  icon: "success",
                                });
                                subAdminRefetch();
                              } else {
                                swal("Your row is safe!");
                              }
                            });
                          }}
                        >
                          <FaRegTrashAlt className="text-[1.7rem]" />
                        </button>

                      

                        <label
                          htmlFor={subadminId}
                          className="text-[1.7rem] cursor-pointer"
                        >
                          <FaInfo className="text-[1.7rem]" />
                        </label>
                        <SubAdminInfo
                          subadminId={subadminId}
                          subAdmin={subAdmin}
                        ></SubAdminInfo>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="py-4 my-4">
            <label htmlFor="addNewSubAdmin" className="commonBtn ">
              ADD NEW
            </label>
          </div>
        </div>
      </div>

      <AddSubAdmin addNewSubAdmin={addNewSubAdmin}></AddSubAdmin>
      <EditSubAdmin></EditSubAdmin>
    </section>
  );
};

export default SubAdminList;
