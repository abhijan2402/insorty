import React,{useState,useEffect} from "react";
import "../../../../Pages/Home/Style/Home.scss";
import AddBrandList from "./AddBrandList/AddBrandList";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import EditBrandPrice from "./EditBrandPrice";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa";
import EditBrandName from "./EditBrandName";
import swal from "sweetalert";

const BrandList = () => {
  const token = localStorage.getItem("token");
  const [wineStock, setWineStock] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedObject, setSelectedObject] = useState(null);
  const [priceList,setPriceList] = useState([])
  const [filter, setFilter] = useState("noFilter")


  const editName=(obj)=>{
    setSelectedObject(obj)
  }

  const reInitiate=()=>{
    setWineStock([])
    setPriceList([])
    setPage(0)
    setHasMore(true)
    fetchData()
  }

  const addToPriceList=(obj)=>{
    const brand={
      _id: obj._id,
      fullName: obj.fullName,
      brandName: obj.brandName,
      type: obj.type,
      rate: obj.rate.$numberDecimal,
      quantityInML: obj.quantityInML
  }
  const newArr = [...priceList,brand]
  setPriceList(newArr)
  }

  const editPrice = (index,newValue) => {
    let pl=[...priceList]
    pl[index].rate = newValue
    setPriceList(pl)
  }

  const handleRemove=(index)=>{
    let pl = [...priceList]
    pl.splice(index,1)
    setPriceList(pl)
  }
  

  const handlePriceUpdate = () => {
    fetch("https://insorty-api.onrender.com/admin/updateGlobalLiquorsRate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },

      body: JSON.stringify({globalLiquors:priceList}),
    })
    .then((res) => res.json())
    .then((data)=>{
      if (data.success===true) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Brand Added Successfully",
        });
        reInitiate()
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something Went Wrong",
        });
      }
   
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  const deleteBrand=(id)=>{
    fetch("https://insorty-api.onrender.com/admin/deleteGlobalLiquorFromAllShops", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },

      body: JSON.stringify({globalParentLiquorId:id}),
    })
    .then((res) => res.json())
    .then((data)=>{
      if (data.success===true) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Brand Deleted Successfully",
        });
        reInitiate()
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something Went Wrong",
        });
      }
   
    })
    .catch((err)=>{
      console.log(err)
    })
  }

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
  }, [wineStock,selectedObject]);


  return (
    <section className="p-4">
      <div className="title sticky top-0 z-20	 bg-white">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="font-bold md:text-[1.5rem] text-center">
            ब्राण्ड सूची
          </h2>
          

          
        </div>
        <div className="flex justify-center items-center">
        <div className="my-4">
          <label htmlFor="AddBrandList" className="commonBtn">
            Add New
          </label>
        </div>
        <div className="my-4">
          <label htmlFor="EditBrandPrice" className="commonBtn">
           Edit Price List
          </label>
        </div>
        <select className="semiSmallInput " onChange={(e)=>{setFilter(e.target.value); console.log(filter)}} name="filter" >
          <option selected value="noFilter">No Filter</option>
          <option value="WINE">Wine</option>
          <option value="BEER">Beer</option>
          <option value="DESHIRML">Deshi/Rml</option>
         </select>
      </div>
        <div className="divider my-2"></div>
      </div>
      <div className=" justify-center items-center">
      <InfiniteScroll
            dataLength={wineStock.length}
            next={fetchData}
            hasMore={hasMore}
            scrollableTarget="scrollableDiv"
            loader={<h4>Loading...</h4>}
            className="h-fix"
          >
        <table className="table overflow-x-auto removeCommonWSpace">
          <thead className="text-center sticky top-0 ">
            
            <th className="clr-dif">
              <h1>Sr. No.</h1>
            </th>
            <th className="clr-dif">
              <h1>Brand Name</h1>
            </th>
            <th className="clr-dif">
              <h1>Full Name</h1>
            </th>
            <th className="clr-dif">
              <h1>Type</h1>
            </th>
            <th className="clr-dif">
              <h1>Edit Brand Name</h1>
            </th>
            <th className="clr-dif">
              <h1>Delete</h1>
            </th>
            <th className="clr-dif">
              <h1>ML</h1>
            </th>
            <th className="clr-dif">
              <h1>Price</h1>
            </th>
            <th className="clr-dif">
              <h1>Edit Price</h1>
            </th>
          </thead>

          <tbody >
           
{wineStock && wineStock.filter((item)=>item.isActive===true).sort((a, b) => a.brandName.localeCompare(b.brandName)).filter((item)=>{
                  if (filter==="WINE") {
                    if (item?.type==="WINE") {
                      return item
                    }
                  }
                  else if(filter==="BEER"){
                    if (item?.type==="BEER") {
                      return item
                    }
                  }
                  else if(filter==="DESHIRML"){
                    if (item?.type==="DESHIRML") {
                      return item
                    }
                  }
                  else{
                    return item
                  }
                }).map((item,index) => (
          <React.Fragment key={item._id}>
            <tr>
  <th className="text-center"  rowSpan={item.sizes.length+1}>{index+1}</th>
              <td rowSpan={item.sizes.length+1}>{item.brandName}</td>
              <td className="whitespace-pre-wrap" rowSpan={item.sizes.length+1}>{item.fullName}</td>
              <td rowSpan={item.sizes.length+1}>{item?.type==="DESHIRML" ? "DESHI/RML" : item?.type}</td>
              <th className="text-center align-center item-center text-[1.7rem]" rowSpan={item.sizes.length+1}>
              <label htmlFor="EditBrandName">
                <FaPen onClick={()=>editName(item)} className="cursor-pointer"/>
                </label>
                </th>
              <th rowSpan={item.sizes.length+1} className="text-[1.7rem] ">
                
                <FaTrash onClick={() => {
              swal({
                title: "Are you sure?",
                text: `Once deleted, you will not be able to recover Brand ${
                  index + 1
                }`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  deleteBrand(item._id);
                  
                } else {
                  swal("Your Brand is safe!");
                }
              });
            }} className="cursor-pointer"/>
                </th>
              {/* <td>{item.sizes[0].quantityInML}, {item.sizes[0].rate.$numberDecimal}</td> */}
              </tr>

            
            {item.sizes.map((obj) => {
              return(
              <tr key={obj._id}>
                <td>{obj.quantityInML}</td>
                <td>{obj.rate.$numberDecimal}</td>
                <td>
                {/* <FaMoneyCheckAlt className="text-[1.7rem]" style={{cursor:"pointer"}} onClick={() => addToPriceList(obj)}/> */}
                <p className="text-[1.7rem]" style={{cursor:"pointer"}} onClick={() => addToPriceList(obj)}>₹</p>
                </td>
              </tr>)
})}
 
    </React.Fragment>
        ))}


          </tbody>
          
        </table>
        </InfiniteScroll>
      </div>
    

      <AddBrandList reInitiate={reInitiate}></AddBrandList>
     {selectedObject && <EditBrandName reInitiate={reInitiate} selectedObject={selectedObject}/>}

      
<EditBrandPrice priceList={priceList} editPrice={editPrice} handleRemove = {handleRemove} handlePriceUpdate={handlePriceUpdate}></EditBrandPrice>  


    </section>
  );
};

export default BrandList;
