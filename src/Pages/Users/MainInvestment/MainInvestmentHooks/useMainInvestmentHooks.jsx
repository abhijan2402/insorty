import { useState, useEffect, useCallback, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Swal from "sweetalert2";

const useMainInvestmentHooks = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({ isLoading: true });
  const newBelonging = {
    price: 0,
    date: new Date(),
    type: "",
  };
  const constData = useRef();
  const refund = {
    type: "REFUND",
    price: 0,
    date: new Date(),
    partyName: "",
    partyId: "",
  };
  const reserveAmount = { detail: "", price: 0, month: new Date() };

  useEffect(() => {
    const prevData = localStorage.getItem("mainInvest");

    fetch(`${process.env.REACT_APP_API_URL}/shop/getMainInvestmentPage`, {
      method: "GET",
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((response) => response.json())
      .then((invest) => {
        if (prevData) {
          setData(JSON.parse(prevData));
          constData.current = invest.data;
        } else {
          constData.current = invest.data;
          let _data = { ...data };
          _data = {
            ..._data,
            ...invest.data,
            isLoading: false,
          };
          setData(_data);
          
        }
      })
      .catch((error) => {
        let _data = { ...data };
        _data = {
          ..._data,
          isLoading: false,
        };
        setData(_data);
        console.error(error);
      });
  }, []);

  const {
    data: prevLoansData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["prevLoansData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/shop/getAllPreviousBorroweds`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const calculateReserveAmount = (data) => {
    const total =
      data.mainInvest.total -
      (parseInt(data.mainInvest.previousLoan.price) || 0) -
      (parseInt(data.mainInvest.cashInHand.price) || 0) -
      data.mainInvest.fees.reduce((sum, item) => sum + parseInt(item.price), 0);
    return total;
  };

  const calRefundTotal = (data) => {
    let refundTotal =
      data.refundRecoveryDetails.entries.length > 0
        ? data.refundRecoveryDetails.entries.reduce(
            (total, currentItem) => (total = total + Number(currentItem.price)),
            0
          )
        : 0;
    const total = refundTotal;

    return total;
  };

  const calReserveTotal = (data) => {
    let reserveTotal =
      data.reserveAmount.entries.length > 0
        ? data.reserveAmount.entries.reduce(
            (total, currentItem) => (total = total + Number(currentItem.price)),
            0
          )
        : 0;
    return reserveTotal;
  };

  const calAllTotal = (data) => {
    let refundTotal =
      data.refundRecoveryDetails.entries.length > 0
        ? data.refundRecoveryDetails.entries.reduce(
            (total, currentItem) => (total = total + Number(currentItem.price)),
            0
          )
        : 0;

    let reserveTotal =
      data.reserveAmount.entries.length > 0
        ? data.reserveAmount.entries.reduce(
            (total, currentItem) => (total = total + Number(currentItem.price)),
            0
          )
        : 0;
    const total = data.mainInvest.total - refundTotal + reserveTotal;

    return total;
  };

  const handleInvestmentChange = useCallback(
    (field, newValue, index = -1, subfield = "") => {
      let _data = { ...data };
      if (field === "previousLoan")
        _data.mainInvest.previousLoan.price = Number(newValue);
      else if (field === "cashInHand")
        _data.mainInvest.cashInHand.price = Number(newValue);
      else if (field === "belonging")
        _data.mainInvest.belonging[index][subfield] = Number(newValue);
      else if (field === "fees")
        _data.mainInvest.fees[index][subfield] = newValue;
      else if (field === "total") _data.mainInvest.total = Number(newValue);
      // else if(field === 'refundRecovery')
      _data.mainInvest.reserveAmount.price = calculateReserveAmount(_data);
      _data.refundRecoveryDetails.total = calRefundTotal(_data);
      _data.reserveAmount.total = calReserveTotal(_data);
      _data.restInvest = calAllTotal(_data);

      // calculateReserveAmount()

      setData(_data);
      localStorage.setItem("mainInvest", JSON.stringify(_data));
    },
    [data]
  );

  const handleBelongingAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      mainInvest: {
        ...prevData.mainInvest,
        belonging: [...prevData.mainInvest.belonging, newBelonging],
      },
    }));
  }, [calculateReserveAmount]);

  const handleFeesAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      mainInvest: {
        ...prevData.mainInvest,
        fees: [...prevData.mainInvest.fees, newBelonging],
      },
    }));
  }, [calculateReserveAmount, newBelonging]);

  // < -------for refundRecoveryDetails------>

  const handleRefundRecoveryAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      refundRecoveryDetails: {
        ...prevData,
        entries: [...prevData.refundRecoveryDetails.entries, refund],
      },
    }));
  }, [calculateReserveAmount, newBelonging]);

  // < -------for reserveAmount------>

  const handleReserveAmountAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      reserveAmount: {
        ...prevData.reserveAmount,
        entries: [...prevData.reserveAmount.entries, reserveAmount],
      },
    }));
  }, [calculateReserveAmount, newBelonging]);

  // handleRefundRecoveryAdd on cahange  ----->

  const refundRecoveryOnChange = (
    field,
    newValue,
    index = -1,
    subfield = ""
  ) => {
    let _data = { ...data };
    _data.refundRecoveryDetails.entries[index][subfield] = newValue;
    _data.refundRecoveryDetails.total = calRefundTotal(_data);
    _data.reserveAmount.total = calReserveTotal(_data);
    _data.restInvest = calAllTotal(_data);

    setData(_data);
    localStorage.setItem("mainInvest", JSON.stringify(_data));
  };

  // handleReserveAmountAdd on cahange  ----->

  const reserveAmountOnChange = (
    field,
    newValue,
    index = -1,
    subfield = ""
  ) => {
    let _data = { ...data };
    _data.reserveAmount.entries[index][subfield] = newValue;
    _data.refundRecoveryDetails.total = calRefundTotal(_data);
    _data.reserveAmount.total = calReserveTotal(_data);
    _data.restInvest = calAllTotal(_data);
    setData(_data);
    localStorage.setItem("mainInvest", JSON.stringify(_data));
  };

  const handleRemoveFields = (field, index) => {
    const values = { ...data };
    if (field === "fees") {
      values.mainInvest.fees.splice(index, 1);
      values.mainInvest.reserveAmount.price = calculateReserveAmount(values);
      values.refundRecoveryDetails.total = calRefundTotal(values);
      values.reserveAmount.total = calReserveTotal(values);
      values.restInvest = calAllTotal(values);
      setData(values);
      localStorage.setItem("mainInvest", JSON.stringify(values));
    } else if (field === "refund") {
      values.refundRecoveryDetails.entries.splice(index, 1);
      values.mainInvest.reserveAmount.price = calculateReserveAmount(values);
      values.refundRecoveryDetails.total = calRefundTotal(values);
      values.reserveAmount.total = calReserveTotal(values);
      values.restInvest = calAllTotal(values);
      setData(values);
      localStorage.setItem("mainInvest", JSON.stringify(values));
    } else if (field === "reserve") {
      values.reserveAmount.entries.splice(index, 1);
      values.mainInvest.reserveAmount.price = calculateReserveAmount(values);
      values.refundRecoveryDetails.total = calRefundTotal(values);
      values.reserveAmount.total = calReserveTotal(values);
      values.restInvest = calAllTotal(values);
      setData(values);
      localStorage.setItem("mainInvest", JSON.stringify(values));
    }
  };

  const handleSave = useCallback(() => {
    let previousBorrowedDeposit = []
     data?.refundRecoveryDetails?.entries?.filter((itemA) => !constData?.current?.refundRecoveryDetails?.entries?.some((itemB) =>
      JSON.stringify(itemA) === JSON.stringify(itemB)
    ))?.filter((entry)=>entry.type==="RECOVERY")?.map((entry)=>{
      const recovery = {
        
          previousBorrowedId: entry.partyId, 
          deposit: Number(entry.price),
          debit: 0,
          date: moment(entry.date).set({ hour: 0, minute: 0 }).format('DD MMMM YYYY HH:mm Z')
      
      }
      previousBorrowedDeposit.push(recovery)
    })

    console.log(previousBorrowedDeposit)
    console.log(data);
    console.log(constData)

    const api2 =  fetch("https://insorty-api.onrender.com/shop/updateMainInvestmentPage", {
        method: "POST",
        headers: { "Content-Type": "application/json", cookie_token: token },
        body: JSON.stringify(data),
      })

     const api1 =  previousBorrowedDeposit.map((entry)=>{
      if(previousBorrowedDeposit.length>0){
        fetch(`https://insorty-api.onrender.com/shop/addPreviousBorrowedTransaction`, {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
          body: JSON.stringify(entry)
        }).then((data)=>data.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
      }
      })

      Promise.all([api1, api2])
  .then((results) => {
    
    if (results[1].status===200) {
            Swal.fire({
              icon: "success",
              title: "Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            localStorage.removeItem('mainInvest')
          }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    fetch("https://insorty-api.onrender.com/shop/updateMainInvestmentPage", {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify(data),
    })
      .then((response) => {response.json();
        console.log(response)
        if (response.status===200) {
          Swal.fire({
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.removeItem('mainInvest')
        } else {
          Swal.fire({
            icon: "error",
            title: "some error occured",
            text: data.message,
          });
        }
      })
      .then((updatedData) => console.log(updatedData))
      .catch((error) => console.error(error));
  }, [data]);

  return {
    data,
    handleInvestmentChange,
    handleBelongingAdd,
    handleSave,
    handleFeesAdd,
    handleReserveAmountAdd,
    handleRefundRecoveryAdd,
    reserveAmountOnChange,
    refundRecoveryOnChange,
    handleRemoveFields,
    prevLoansData,
    isLoading,
    refetch,
  };
};

export default useMainInvestmentHooks;
