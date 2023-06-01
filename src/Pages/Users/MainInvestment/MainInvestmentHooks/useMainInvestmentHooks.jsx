import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Swal from "sweetalert2";


const useMainInvestmentHooks = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({ isLoading: true });
  const newBelonging = {
    price: 0,
    date: new Date(),
    type: ""
  }
  const refund = { type: "REFUND", price: 0, date: new Date(), partyName:"", partyId:'' };
  const reserveAmount = { detail: "", price: 0, month: new Date() };

  useEffect(() => {
    const prevData = localStorage.getItem('mainInvest')
    if (prevData){
      setData(JSON.parse(prevData))
    }

    else{

    fetch(`${process.env.REACT_APP_API_URL}/shop/getMainInvestmentPage`, {
      method: "GET",
      headers: { "Content-Type": "application/json", cookie_token: token },
    })
      .then((response) => response.json())
      .then((invest) => {
        let _data = { ...data };
        _data = {
          ..._data,
          ...invest.data,
          isLoading: false,
        };
        setData(_data);
        console.log({ _data });
      })
      .catch((error) => {
        let _data = { ...data };
        _data = {
          ..._data,
          isLoading: false,
        };
        setData(_data);
        console.error(error);
      });}
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
      (parseInt(data.mainInvest.cashInHand.price) || 0)  -
      data.mainInvest.fees.reduce((sum, item) => sum + parseInt(item.price), 0);
    // console.log(total)
    return total;
  };

  const calRefundTotal=(data)=>{
    let refundTotal = data.refundRecoveryDetails.entries.length>0 ? data.refundRecoveryDetails.entries.reduce(
      (total, currentItem) => (total = total + Number(currentItem.price)),
      0
    ) : 0
    const total = refundTotal

    return total
  }

  const calAllTotal=(data)=>{
    let refundTotal = data.refundRecoveryDetails.entries.length>0 ? data.refundRecoveryDetails.entries.reduce(
      (total, currentItem) => (total = total + Number(currentItem.price)),
      0
    ) : 0

    let reserveTotal = data.reserveAmount.entries.length > 0 ? data.reserveAmount.entries.reduce(
      (total, currentItem) => (total = total + Number(currentItem.price)),
      0
    ) : 0
    const total = data.mainInvest.total  - refundTotal - reserveTotal

    return total
  }

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
        _data.mainInvest.fees[index][subfield] = (newValue);
      else if (field === "total") _data.mainInvest.total = Number(newValue);
      // else if(field === 'refundRecovery')
      _data.mainInvest.reserveAmount.price = calculateReserveAmount(_data);
      _data.refundRecoveryDetails.total = calRefundTotal(_data)
      _data.reserveAmount.total = calAllTotal(_data)

      // calculateReserveAmount()

      setData(_data);
      localStorage.setItem('mainInvest',JSON.stringify(_data))
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
    _data.refundRecoveryDetails.total = calRefundTotal(_data)
    _data.reserveAmount.total = calAllTotal(_data)

   
    setData(_data);
    localStorage.setItem('mainInvest', JSON.stringify(_data))
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
    _data.refundRecoveryDetails.total = calRefundTotal(_data)
    _data.reserveAmount.total = calAllTotal(_data)
    setData(_data);
    localStorage.setItem('mainInvest', JSON.stringify(_data))
  };

  const handleRemoveFields = (field,index) => {
    console.log('fired')
    const values = { ...data }
    console.log(values)
    if(field==='fees'){
    values.mainInvest.fees.splice(index, 1);
      values.mainInvest.reserveAmount.price = calculateReserveAmount(values);
      values.refundRecoveryDetails.total = calRefundTotal(values)
      values.reserveAmount.total = calAllTotal(values)
      setData(values);
      localStorage.setItem('mainInvest', JSON.stringify(values))
   }

   else if(field==='refund'){
      values.refundRecoveryDetails.entries.splice(index, 1)
      values.mainInvest.reserveAmount.price = calculateReserveAmount(values);
      values.refundRecoveryDetails.total = calRefundTotal(values)
      values.reserveAmount.total = calAllTotal(values)
      setData(values);
      localStorage.setItem('mainInvest', JSON.stringify(values))
   }
   else if(field==='reserve'){
      values.reserveAmount.entries.splice(index, 1)
      values.mainInvest.reserveAmount.price = calculateReserveAmount(values);
      values.refundRecoveryDetails.total = calRefundTotal(values)
      values.reserveAmount.total = calAllTotal(values)
      setData(values);
      localStorage.setItem('mainInvest', JSON.stringify(values))
   }

  };

 

  const handleSave = useCallback(() => {
    fetch("https://insorty-backend-clone.vercel.app/shop/updateMainInvestmentPage", {
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
