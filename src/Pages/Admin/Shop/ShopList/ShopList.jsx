import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaRegTrashAlt, FaInfo } from "react-icons/fa";
import AddNewShop from "../AddNewShop/AddNewShop";
import EditeShop from "../EditeShop/EditeShop";
import ShopInfo from "../ShopInfo/ShopInfo";
import useGetShopsNSubadmins from "../../../../Hooks/useGetShopsNSubadmins";
import Loader from "../../../../Components/Loader/Loader";
import swal from "sweetalert";

const ShopList = () => {
  const token = localStorage.getItem("token");
  const { shopsRefetch, shops, shopsLoaded } = useGetShopsNSubadmins();

  const handelDelete = (id) => {
    console.log(id);
    fetch(`https://insorty-api.onrender.com/admin/deleteShop/${id}`, {
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

  const onTokenChange=(Shoptoken)=>{
    const token = localStorage.getItem('token')
      localStorage.setItem('token2',token)
      localStorage.setItem('token',Shoptoken)
      
    console.log(Shoptoken,"token changed")
    console.log(localStorage.getItem('token'),"token unchanged")
  }

  const addNewShop = (e) => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const phone = from.phone.value;
    const password = from.password.value;
    const licenceNumber = from.licenceNumber.value;
    const address = from.address.value;
    const accountId = from.accountId.value;

    fetch("https://insorty-api.onrender.com/admin/createShop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
      body: JSON.stringify({
        cookie_token: token,
        name,
        accountId,
        address,
        password,
        licenceNumber,
        mobileNumber: phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          swal("Shop Added Successfully", "", "success");
          shopsRefetch();
        }
      });
  };

  if (shopsLoaded) {
    return <Loader></Loader>;
  }

  if (shops.success === false) {
    return <div>{shops.message}</div>;
  }

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">Shop List</h2>
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
              {shops &&
                shops.data.length &&
                shops.data.map((shop) => {
                  const myShop = shop?.shopId;
                  const myShopId = myShop?._id;
                  console.log(shop)

                  return (
                    <tr className="p-4 text-left">
                      <td className="border px-4 py-2 font-bold">
                        <Link onClick={() => onTokenChange(shop.shopToken)}>{shop?.shopId.name} </Link>
                      </td>
                      <td>
                        <div className="flex gap-4 items-center justify-end">
                          <button
                            onClick={() => {
                              swal({
                                title: "Are you sure?",
                                text: `Once deleted, you will not be able to recover ${shop?.shopId.name}!`,
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              }).then((willDelete) => {
                                if (willDelete) {
                                  handelDelete(myShopId);
                                  swal(`Subadmin has been deleted!`, {
                                    icon: "success",
                                  });
                                  shopsRefetch();
                                } else {
                                  swal("Your row is safe!");
                                }
                              });
                            }}
                          >
                            <FaRegTrashAlt className="text-[1.7rem]" />
                          </button>

                          <label
                            htmlFor="EditShop"
                            className="text-[1.7rem] cursor-pointer"
                          >
                            <FaPencilAlt className="text-[1.7rem]" />
                          </label>
                          <label
                            htmlFor={myShopId}
                            className="text-[1.7rem] cursor-pointer"
                          >
                            <FaInfo className="text-[1.7rem]" />
                          </label>
                          <ShopInfo
                            myShopId={myShopId}
                            shop={myShop}
                          ></ShopInfo>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="py-4 my-4">
            <label htmlFor="addShop" className="commonBtn ">
              Add New
            </label>
          </div>
        </div>
      </div>

      {/* <ShopInfo></ShopInfo> */}
      <EditeShop></EditeShop>
      <AddNewShop addNewShop={addNewShop}></AddNewShop>
    </section>
  );
};

export default ShopList;
