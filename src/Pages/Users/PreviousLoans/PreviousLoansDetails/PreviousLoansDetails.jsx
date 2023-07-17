import React, { useRef,useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddTranstion from "../AddTranstion/AddTranstion";
import moment from "moment/moment";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import useMainInvestmentHooks from "../../MainInvestment/MainInvestmentHooks/useMainInvestmentHooks";

const PreviousLoansDetails = () => {
  const token = localStorage.getItem("token");
  const { loandataId } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [transactions,setTransactions] = useState([])
  const front = useRef(null);
  const [partyName,setPartyName] = useState("")
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  const {data} = useMainInvestmentHooks()


  const BasedURL = process.env.REACT_APP_API_URL;

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/shop/getPreviousBorrowedTransactions?previousBorrowedId=${loandataId}&page=${page}&pagesize=30`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((response) => {
        if (response.data.data.transactions.length === 0) {
          setHasMore(false);
        }
        setPartyName(response.data.data.name)
        setTransactions((data) => [...data, ...response.data.data.transactions]);
        setPage((page) => page + 1);

      })
      .catch((err) => {
        console.log(err)

       
          setHasMore(false);
        
      });

  
  };

  useEffect(() => {
    
    fetchData();
  }, [transactions.length]);

  const handelSubmit = (e) => {
    e.preventDefault();


    fetch(`${BasedURL}/shop/addPreviousBorrowedTransaction`, {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({
        previousBorrowedId: loandataId,
        deposit: 0,
        debit: e.target.deposit.value,
        date: e.target.dateData.value,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          Swal.fire("Success!", "Your file has been added.", "success");
          window.location.reload()
        } else {
          Swal.fire("Failed!", "Your file has not been added.", "error");
        }
      });
  };



  if (data.isLoading) {
    return <Loader></Loader>;
  }

  function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  function existsInFilteredArray(entry) {
    return transactions.some(item => isEqual(item, entry));
  }

  data.refundRecoveryDetails.entries.map((entry)=>{
    if(entry.type==="RECOVERY" && entry.partyId===loandataId){
      const newObj= {previousBorrowed: loandataId,
      deposit: entry.price,
      debit: 0,
      paymentFlow: "DEPOSIT",
      date: entry.date,}

      if (!existsInFilteredArray(newObj)){
      transactions.push(newObj)
    }
    }
  })

  return (
    <section>
       <button className="commonBtn " onClick={handlePrint}>
        प्रिंट

        </button>
      <div className="title flex justify-center items-center gap-4">
        <h2 className="font-bold text-[1.5rem]">नाम:- {partyName}</h2>

       
      </div>
      <div className="divider my-2"></div>

      <div ref={front}>
        <div
          className="flex justify-center items-center
        "
        >

<InfiniteScroll
            dataLength={transactions.length}
            next={fetchData}
            hasMore={hasMore}
            scrollableTarget="scrollableDiv"
            loader={<h4>Loading...</h4>}
          >
          <table className="table removeCommonWSpace">
            <thead>
              <tr>
                <th> क्र. सं.</th>
                <th colSpan={2}>दिनांक</th>
                <th colSpan={2}>नामे</th>
                <th colSpan={2}>जमा</th>
              </tr>
            </thead>
            <tbody>
              
              {(transactions &&
                transactions.length &&
                transactions?.map((prevLone, index) => {
                  return (
                  
                    <tr key={prevLone?._id}>
                      <td>{index + 1}</td>
                      <td colSpan={3}>
                        <p className="font-bold text-[1rem]">
                          {moment(prevLone?.date,).format("DD/MM/YYYY")}
                        </p>
                      </td>
                      

                      <td>
                        <p className="font-bold text-[1rem]">
                          {prevLone?.debit}
                        </p>
                      </td>
                      <td>
                        <p className="font-bold text-[1rem]">
                          {prevLone?.deposit}
                        </p>
                      </td>
                    </tr>

                    
                  
                  );
                })) }
                <tr className="font-bold text-[1rem] "  > 
                <td colSpan={5}> चालू शेष नामे </td>
                <td>
              {transactions.reduce((total,curr)=>total = (total + Number(curr.debit)),0)-transactions.reduce((total,curr)=>(total = total + Number(curr.deposit)),0)}
              </td>
              </tr>
            </tbody>
          </table>
          </InfiniteScroll>

        </div>
        <tr className="py-4 flex justify-center">
          <label htmlFor="addNewTranstion" className="commonBtn">
            Add New
          </label>
        </tr>
      </div>

      <AddTranstion handelSubmit={handelSubmit} />
    </section>
  );
};

export default PreviousLoansDetails;
