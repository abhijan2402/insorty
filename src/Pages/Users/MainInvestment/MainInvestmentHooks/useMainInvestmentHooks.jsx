import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

const useMainInvestmentHooks = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [newBelonging, setNewBelonging] = useState({ price: "", date: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://insorty-api.onrender.com/shop/getMainInvestmentPage", {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((response) => response.json())
      .then((invest) => {
        setData(invest.data);
        console.log(invest);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // const calculateReserveAmount = () => {
  //   const total =
  //     parseInt(data.mainInvest.total) -
  //     (parseInt(data.mainInvest.previousLoan.price) || 0) -
  //     (parseInt(data.mainInvest.cashInHand.price) || 0) -
  //     data.mainInvest.belonging.reduce((sum, item) => sum + parseInt(item.price), 0) -
  //     data.mainInvest.fees.reduce((sum, item) => sum + parseInt(item.price), 0);
  //     console.log(total)
  //   return total >= 0 ? total : 0;
  // };

  const calculateReserveAmount = useCallback(() => {
    const total =
      data.mainInvest.total -
      (parseInt(data.mainInvest.previousLoan.price) || 0) -
      (parseInt(data.mainInvest.cashInHand.price) || 0) -
      data.mainInvest.belonging.reduce(
        (sum, item) => sum + parseInt(item.price),
        0
      ) -
      data.mainInvest.fees.reduce((sum, item) => sum + parseInt(item.price), 0);
    return total >= 0 ? total : 0;
  }, [data]);

  const handleInvestmentChange = useCallback(
    (field, newValue) => {
      if (field === "previousLoan") {
        let main = data;

        main = {
          ...main,
          mainInvest: {
            ...main.mainInvest,
            total: newValue,
            reserveAmount: {
              price:
                data.mainInvest.total -
                (parseInt(newValue) || 0) -
                (parseInt(data.mainInvest.cashInHand.price) || 0) -
                data.mainInvest.belonging.reduce(
                  (sum, item) => sum + parseInt(item.price),
                  0
                ) -
                data.mainInvest.fees.reduce(
                  (sum, item) => sum + parseInt(item.price),
                  0
                ),
            },
          },
        };
        setData(main);
      }

      if ((field = "cashInHand")) {
        let main = data;

        main = {
          ...main,
          mainInvest: {
            ...main.mainInvest,
            total: newValue,
            reserveAmount: {
              price:
                data.mainInvest.total -
                (parseInt(data.mainInvest.previousLoan.price) || 0) -
                (parseInt(newValue) || 0) -
                data.mainInvest.belonging.reduce(
                  (sum, item) => sum + parseInt(item.price),
                  0
                ) -
                data.mainInvest.fees.reduce(
                  (sum, item) => sum + parseInt(item.price),
                  0
                ),
            },
          },
        };
        setData(main);
      } else {
        let main = data;

        main = {
          ...main,
          mainInvest: {
            ...main.mainInvest,
            total: newValue,
            reserveAmount: {
              price:
                data.mainInvest.total -
                (parseInt(data.mainInvest.previousLoan.price) || 0) -
                (parseInt(data.mainInvest.cashInHand.price) || 0) -
                data.mainInvest.belonging.reduce(
                  (sum, item) => sum + parseInt(item.price),
                  0
                ) -
                data.mainInvest.fees.reduce(
                  (sum, item) => sum + parseInt(item.price),
                  0
                ),
            },
          },
        };
        setData(main);
      }
    },
    [calculateReserveAmount]
  );

  const handleTotalChange = useCallback(
    (newValue) => {
      let main = data;

      main = {
        ...main,
        mainInvest: {
          ...main.mainInvest,
          total: newValue,
          reserveAmount: {
            price:
              newValue -
              (parseInt(data.mainInvest.previousLoan.price) || 0) -
              (parseInt(data.mainInvest.cashInHand.price) || 0) -
              data.mainInvest.belonging.reduce(
                (sum, item) => sum + parseInt(item.price),
                0
              ) -
              data.mainInvest.fees.reduce(
                (sum, item) => sum + parseInt(item.price),
                0
              ),
          },
        },
      };

      setData(main);
    },
    [calculateReserveAmount]
  );

  const handleBelongingChange = useCallback(
    (index, field, newValue) => {
      setData((prevData) => ({
        ...prevData,
        mainInvest: {
          ...prevData.mainInvest,
          belonging: prevData.mainInvest.belonging.map((item, i) =>
            i === index ? { ...item, [field]: newValue } : item
          ),
          reserveAmount: {
            price: calculateReserveAmount(),
          },
        },
      }));
    },
    [calculateReserveAmount]
  );

  const handleBelongingAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      mainInvest: {
        ...prevData.mainInvest,
        belonging: [...prevData.mainInvest.belonging, newBelonging],
        reserveAmount: {
          price: calculateReserveAmount(),
        },
      },
    }));
    setNewBelonging({ price: "", date: "" });
  }, [calculateReserveAmount, newBelonging]);

  const handleFeesAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      mainInvest: {
        ...prevData.mainInvest,
        fees: [...prevData.mainInvest.fees, newBelonging],
        reserveAmount: {
          price: calculateReserveAmount(),
        },
      },
    }));
    setNewBelonging({ price: "", date: "" });
  }, [calculateReserveAmount, newBelonging]);

  const handleFeesChange = useCallback(
    (index, field, newValue) => {
      setData((prevData) => ({
        ...prevData,
        mainInvest: {
          ...prevData.mainInvest,
          fees: prevData.mainInvest.fees.map((item, i) =>
            i === index ? { ...item, [field]: newValue } : item
          ),
          reserveAmount: {
            price: calculateReserveAmount(),
          },
        },
      }));
    },
    [calculateReserveAmount]
  );

  const handleSave = useCallback(() => {
    // fetch('https://myapi.com/data', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    //   .then(response => response.json())
    //   .then(updatedData => console.log(updatedData))
    //   .catch(error => console.error(error));

    console.log(data);
  }, [data]);

  //   const toDate = new Date();
  //   const token = localStorage.getItem('token')
  //   const [previousLoan, setpreviousLoan ]= useState({
  //     price:0,
  //   })
  //   const [reserveAmount, setreserveAmount] =useState(1)
  //   const [cashInHand, setcashInHand] = useState({
  //     price: 0,
  //   })
  // const [total,setTotal] = useState(0)
  //   // const mainInvestmentForm = {
  //   const mainInvevstmentData = {
  //     brandName: "",
  //     theDate: toDate,
  //     price: 0,
  //   };
  //   let changed = false
  //   const [fees,setFees] = useState([{price:0,date:""}])
  //   const [belonging, setbelonging] = useState([{ price: 0, date: "" }])
  //   const [refundRecoveryDetails, setrefundRecoveryDetails] = useState([{type:"REFUND",price:0,date:""}])
  //   const [reserveAmountArr, setreserveAmountArr] = useState([{detail:"",month:"",price:0}])

  //   const [mainInvestmentState, setMainInvestmentState] = useState([
  //   //   mainInvestmentForm,
  //   // ]);
  //     mainInvevstmentData,
  //   ]);
  //   const [refundDetailsState, setRefundDetailsState] = useState([]);
  //   const [resurvedDataState, setResurvedDataState] = useState([]);

  //   const addOneMainInvestment = () => {
  //     setMainInvestmentState([
  //       ...mainInvestmentState,
  //       {
  //         type: "",
  //         theDate: toDate,
  //         price: 0,
  //       },
  //     ]);
  //   };

  //   const { data: mainInvest, isLoading: mainLoading } = useQuery({
  //     queryKey: ["liquors"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         "https://insorty-api.onrender.com/shop/getMainInvestmentPage",
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json", cookie_token: token },
  //         }
  //       );
  //       const data = await res.json();
  //       // console.log(data.data)
  //       setbelonging([...data.data.mainInvest.belonging, ...belonging])
  //       setFees([...data.data.mainInvest.fees,...fees])
  //       // cashInHand = data.data.mainInvest.cashInHand
  //       setpreviousLoan(data.data.mainInvest.previousLoan)
  //       setcashInHand(data.data.mainInvest.cashInHand)
  //       setTotal(data.data.mainInvest.total)
  //       // const reserve = data.data.mainInvest.total - (data.mainInvest.belonging.reduce(
  //       //   (total, currentItem) => (total = total + currentItem.price),
  //       //   0
  //       // ) || 0 + data.mainInvest.fees.reduce(
  //       //   (total, currentItem) => (total = total + currentItem.price),
  //       //   0
  //       // ) || 0 + data.data.mainInvest.previousLoan.price + data.data.mainInvest.cashInHand)

  //       // console.log(reserve)
  //       // setreserveAmount(reserve)

  //       return data.data;

  //     },
  //   });

  //   const changeReserve = () => {

  //     let belongTotal = 0, feesTotal = 0
  //     if (!mainInvest.mainInvest.belonging.length === 0) {
  //       belongTotal = mainInvest.mainInvest.belonging.reduce(
  //         (total, currentItem) => (total = total + currentItem.price),
  //         0
  //       )
  //     }
  //     if (!mainInvest.mainInvest.fees.length === 0) {
  //       feesTotal = mainInvest.mainInvest.fees.reduce(
  //         (total, currentItem) => (total = total + currentItem.price),
  //         0)
  //     }
  //     setreserveAmount(total - (belongTotal + feesTotal + mainInvest.mainInvest.previousLoan.price + mainInvest.mainInvest.cashInHand.price))
  //   }

  //   useEffect(() => {
  //     if(!mainLoading){

  //     changeReserve()
  //     }

  //   }, [mainLoading,total,previousLoan,cashInHand]);

  // // console.log(reserveAmount)

  //   const addFees=()=>{
  //     mainInvest.mainInvest.fees = [...mainInvest.mainInvest.fees, { type: "REFUND", price: 0, date: "" }]
  //   }
  //   const addRefund=()=>{
  //     setrefundRecoveryDetails([...refundRecoveryDetails, {price: 0, date: ""}])
  //   }
  //   const addbelonging=()=>{
  //     setbelonging([...belonging, {price: 0, date: ""}])

  //   }
  //   const addReserve=()=>{
  //     setreserveAmountArr([...reserveAmountArr, { detail: "", month: "", price: 0 }])
  //   }

  //   const handleFeesChange = (event,index) => {
  //     let data = [...mainInvest.mainInvest.fees];
  //     data[index][event.target.name] = event.target.value;
  //     mainInvest.mainInvest.fees = data
  //     console.log(mainInvest.mainInvest.fees)
  //   }
  //   const handleRefundChange = (event,index) => {
  //     let data = [...refundRecoveryDetails];
  //     data[index][event.target.name] = event.target.value;
  //   }
  //   const handleBelongingChange = (event,index) => {
  //     let data = [...belonging];
  //     data[index][event.target.name] = event.target.value;
  //   }
  //   const handleReserveChange = (event,index) => {
  //     let data = [...reserveAmountArr];
  //     data[index][event.target.name] = event.target.value;
  //   }

  //   const handleChangePreviousLoan=(e)=>{
  //     setpreviousLoan({price: e.target.value})

  //   }

  //   const handleChangeCashInHand=(e)=>{
  //     setcashInHand({price: e.target.value})
  //     changed = !changed

  //   }

  //   const handleChangeTotal=(e)=>{
  //     setTotal(e.target.value)
  //     changed = !changed
  //    }

  //   const handelOnChangeMainInvestment = (e, index) => {
  //     const handelOnChange = mainInvestmentState.map((mainInvastment, i) => {
  //       if (index === i) {
  //         return Object.assign(mainInvastment, {
  //           [e.target.name]: e.target.value,
  //         });
  //       } else {
  //         return mainInvastment;
  //       }
  //     });
  //     setMainInvestmentState(handelOnChange);
  //   };

  //   const handelOnSubmitMainInvestment = (e) => {
  //     const handelMainInvestment = mainInvestmentState;
  //     console.log(handelMainInvestment);
  //   };

  //   const handelOnChangeRefundDetails = (e, index) => {
  //     setRefundDetailsState({
  //       ...refundDetailsState,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handelSubmitRefundDetails = (e) => {
  //     const handelRefundDetails = refundDetailsState;
  //     console.log(handelRefundDetails);
  //   };

  //   const handelOnChangeResurved = (e, index) => {
  //     setResurvedDataState({
  //       ...resurvedDataState,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handelSubmitResurved = (e) => {
  //     const handelResurved = resurvedDataState;
  //     console.log(handelResurved);
  //   };

  //   const handleChange=(data,input)=>{
  //     data = input
  //   }

  return {
    data,
    loading,
    handleInvestmentChange,
    handleBelongingAdd,
    handleFeesChange,
    handleBelongingChange,
    handleSave,
    handleFeesAdd,
    handleTotalChange,
    // handleTotalChange
    // addOneMainInvestment,
    // mainInvestmentState,
    // handelOnChangeMainInvestment,
    // handelOnSubmitMainInvestment,
    // setMainInvestmentState,
    // refundDetailsState,
    // handelOnChangeRefundDetails,
    // handelSubmitRefundDetails,
    // handelSubmitResurved,
    // handelOnChangeResurved,
    // resurvedDataState,
    // addFees,
    // addRefund,
    // addbelonging,
    // addReserve,
    // handleBelongingChange,
    // handleFeesChange,
    // handleRefundChange,
    // handleReserveChange,
    // fees,
    // belonging,
    // reserveAmountArr,
    // refundRecoveryDetails,
    // reserveAmount,
    // cashInHand,
    // total,
    // previousLoan,
    // handleChange,
    // mainLoading,
    // handleChangeCashInHand,
    // handleChangePreviousLoan,
    // handleChangeTotal,
    // mainInvest
  };
};

export default useMainInvestmentHooks;
