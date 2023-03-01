import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const useMainInvestmentHooks = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({ isLoading: true });
  const [newBelonging, setNewBelonging] = useState({
    price: 0,
    date: new Date(),
  });
  const refund = { type: "REFUND", price: 0, date: new Date() };
  const reserveAmount = { detail: "", price: 0, month: new Date() };

  useEffect(() => {
    fetch("https://insorty-api.onrender.com/shop/getMainInvestmentPage", {
      method: "POST",
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
      });
  }, []);

  const calculateReserveAmount = (data) => {
    const total =
      data.mainInvest.total -
      (parseInt(data.mainInvest.previousLoan.price) || 0) -
      (parseInt(data.mainInvest.cashInHand.price) || 0) -
      data.mainInvest.belonging.reduce(
        (sum, item) => sum + parseInt(item.price),
        0
      ) -
      data.mainInvest.fees.reduce((sum, item) => sum + parseInt(item.price), 0);
    // console.log(total)
    return total;
  };

  const handleInvestmentChange = useCallback(
    (field, newValue, index = -1, subfield = "") => {
      // console.log(field, newValue, index, subfield)
      // console.log(newValue, moment(newValue, 'dd-mm-yyyy'), moment(newValue, 'dd-mm-yyyy').toDate())
      let _data = { ...data };
      if (field === "previousLoan")
        _data.mainInvest.previousLoan.price = Number(newValue);
      else if (field === "cashInHand")
        _data.mainInvest.cashInHand.price = Number(newValue);
      else if (field === "belonging")
        _data.mainInvest.belonging[index][subfield] = Number(newValue);
      else if (field === "fees")
        _data.mainInvest.fees[index][subfield] = Number(newValue);
      else if (field === "total") _data.mainInvest.total = Number(newValue);
      // else if(field === 'refundRecovery')
      _data.mainInvest.reserveAmount.price = calculateReserveAmount(_data);
      // calculateReserveAmount()

      setData(_data);
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
    // setNewBelonging({ price: 0, date: "" });
  }, [calculateReserveAmount]);

  const handleFeesAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      mainInvest: {
        ...prevData.mainInvest,
        fees: [...prevData.mainInvest.fees, newBelonging],
      },
    }));
    // setNewBelonging({ price: 0, date: "" });
  }, [calculateReserveAmount, newBelonging]);

  // < -------for refundRecoveryDetails------>

  const handleRefundRecoveryAdd = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      refundRecoveryDetails: {
        ...prevData.refundRecoveryDetails,
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
    if (field === "refundRecovery")
      _data.refundRecoveryDetails.entries[index][subfield] = newValue;
    // else if (field === "cashInHand")
    //   _data.mainInvest.cashInHand.price = Number(newValue);
    // else if (field === "belonging")
    //   _data.mainInvest.belonging[index][subfield] = Number(newValue);
    // else if (field === "fees")
    //   _data.mainInvest.fees[index][subfield] = Number(newValue);
    // else if (field === "total") _data.mainInvest.total = Number(newValue);
    // else if (field === "refundRecovery")
    //   _data.mainInvest.reserveAmount.price = calculateReserveAmount(_data);
    // calculateReserveAmount();
    setData(_data);
  };

  // handleReserveAmountAdd on cahange  ----->

  const reserveAmountOnChange = (
    field,
    newValue,
    index = -1,
    subfield = ""
  ) => {
    let _data = { ...data };
    if (field === "reserve")
      _data.reserveAmount.entries[index][subfield] = newValue;
    
    setData(_data);
  };

  // setData((prevData) => ({
  //   ...prevData,
  //   reserveAmount: {
  //     ...prevData.reserveAmount,
  //     entries: [...prevData.reserveAmount.entries, newBelonging],
  //   },
  // }));

  const handleSave = useCallback(() => {
    fetch("https://insorty-api.onrender.com/shop/updateMainInvestmentPage", {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((updatedData) => console.log(updatedData))
      .catch((error) => console.error(error));

    console.log(data);
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
    refundRecoveryOnChange
  };
};

export default useMainInvestmentHooks;
