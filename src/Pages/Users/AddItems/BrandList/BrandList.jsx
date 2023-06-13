import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../../../../Pages/Home/Style/Home.scss";
import AddBrandList from "./AddBrandList/AddBrandList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";


const BrandList = () => {
  const token = localStorage.getItem("token");
  const [wineStock, setWineStock] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/admin/getAllGlobalParentLiquors?page=${page}&pagesize=30`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
    
      .then((response) => {
        console.log(response)
        setWineStock((data) => [...data, ...response.data.data]);
        setPage((page) => page + 1);
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 404) {
          setHasMore(false);
        }
      });

  
  };

  useEffect(() => {
    fetchData();
    // console.log(page,hasMore,'page ')
  }, [wineStock]);


  return (
    <section className="p-4">
      <div className="title">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="font-bold md:text-[1.5rem] text-center">
            ब्राण्ड सूची
          </h2>
          
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex justify-center items-center">
      <InfiniteScroll
            dataLength={wineStock.length}
            next={fetchData}
            hasMore={hasMore}
            scrollableTarget="scrollableDiv"
            loader={<h4>Loading...</h4>}
          >
        <table className="table w-4/5 removeCommonWSpace">
          <thead className="text-center">
            <th>
              <h1>Sr. No.</h1>
            </th>
            <th>
              <h1>Brand Name</h1>
            </th>
            <th>
              <h1>Type</h1>
            </th>
            <th>
              <h1>Quantity In ML</h1>
            </th>
          </thead>

          <tbody>
            {wineStock.length &&
              wineStock?.map((item, index) => {
                const { sizes } = item;
                const quantityInML = sizes?.map((item) => item?.quantityInML);

                return (
                  <tr key={index} className="text-center">
                    <th>
                      <h1>{index + 1}</h1>
                    </th>
                    <td>
                      <h1>{item?.brandName}</h1>
                    </td>
                    <td>{item?.type}</td>
                    <td>
                      <h1>
                        {quantityInML?.map((item, index) => {
                          return (
                            <span key={index}>
                              {item}
                              {index !== quantityInML?.length - 1 && ", "}
                            </span>
                          );
                        })}
                      </h1>
                    </td>
                    <td>
                      <Link
                        className="font-3xl font-bold"
                        style={{ color: "#AA237A" }}
                      >
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        </InfiniteScroll>
      </div>
      <div className="flex justify-center items-center">
        <div className="my-4">
          <label htmlFor="AddBrandList" className="commonBtn">
            Add New
          </label>
        </div>
      </div>

      <AddBrandList ></AddBrandList>
    </section>
  );
};

export default BrandList;
