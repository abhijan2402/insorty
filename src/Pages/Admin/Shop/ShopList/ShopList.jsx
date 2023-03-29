import React from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaRegTrashAlt, FaInfo } from "react-icons/fa";
import AddNewShop from "../AddNewShop/AddNewShop";
import EditeShop from "../EditeShop/EditeShop";
import ShopInfo from "../ShopInfo/ShopInfo";
import useGetShopsNSubadmins from "../../../../Hooks/useGetShopsNSubadmins";
import Loader from "../../../../Components/Loader/Loader";

const ShopList = () => {
  const { subAdmins,
    subAdminsLoading,
    shops,
    shopsLoaded } = useGetShopsNSubadmins()

    if(shopsLoaded){
      return <Loader></Loader>
    }

    if(shops.success===false){
      return <div>{shops.message}</div>
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
              {shops && shops.data.length && shops.data.map((shop)=>{
                return(
                  <tr className="p-4 text-left">
                    <td className="border px-4 py-2 font-bold">
                      <Link>{shop?.shopId.name} </Link>
                    </td>
                    <td>
                      <div className="flex gap-4 items-center justify-end">
                        <Link>
                          <FaRegTrashAlt className="text-[1.7rem]" />
                        </Link>

                        <label
                          htmlFor="EditShop"
                          className="text-[1.7rem] cursor-pointer"
                        >
                          <FaPencilAlt className="text-[1.7rem]" />
                        </label>
                        <label
                          htmlFor="ShopInfo"
                          
                          className="text-[1.7rem] cursor-pointer"
                        >
                          <FaInfo className="text-[1.7rem]" />
                        </label>
                      </div>
                    </td>
                  </tr>
                )
              })   }
             
            </tbody>
          </table>
          <div className="py-4 my-4">
            <label htmlFor="addShop" className="commonBtn ">
              Add New
            </label>
          </div>
        </div>
      </div>

      <ShopInfo></ShopInfo>
      <EditeShop></EditeShop>
      <AddNewShop></AddNewShop>
    </section>
  );
};

export default ShopList;
