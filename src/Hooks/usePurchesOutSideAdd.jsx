import { useState, useEffect } from "react";

const usePurchesOutSideAdd = () => {
  const purchesOutSideAdd = {
    partyId:"",
    liquorID:"",
    partyName: "",
    brandName: "",
    theNumber: 0,
    quantity: 0,
    rate: 0,
    total: 0,
    reason: "",
  };

  // purchesOutSideState ======================
  

  const [purchesOutSideState, setPurchesOutSideState] = useState([
    purchesOutSideAdd,
  ]);

  const prevdata = JSON.parse(localStorage.getItem("purchases"));

  useEffect(() => {
    if (prevdata) {
      setPurchesOutSideState(prevdata);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelAddOnePurchesOutSide = () => {
    setPurchesOutSideState([
      ...purchesOutSideState,
      {
        partyId: "",
        liquorID: "",
        partyName: "",
        brandName: "",
        theNumber: 0,
        quantity: 0,
        rate: 0,
        total: 0,
        reason: "",
      },
    ]);
  };

  const handelAddFivePurchesOutSide = () => {
    let data = purchesOutSideState;

    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          partyId: "",
          liquorID: "",
          partyName: "",
          brandName: "",
          theNumber: 0,
          quantity: 0,
          rate: 0,
          total: 0,
          reason: "",
        },
      ];
    }
    setPurchesOutSideState(data);
  };

  const onChangePurchesOutSide = (e, index) => {
    const { name, value } = e.target;
    const list = [...purchesOutSideState];
    list[index][name] = value;
    setPurchesOutSideState(list);

    const yog = purchesOutSideState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "theNumber" || e.target.name === "rate") {
          obj.total = Number(obj.theNumber) * Number(obj.rate);
        }
        return obj;
      } else return returned;
    });
    setPurchesOutSideState(yog);

    localStorage.setItem("purchases", JSON.stringify(purchesOutSideState));
    localStorage.setItem(
      "purchasesTotal",
      JSON.stringify(
        purchesOutSideState.reduce(
          (total, currentItem) => (total = total + Number(currentItem.total)),
          0
        )
      )
    );
  };

  const handelSubmitPurchesOutSide = (e) => {
    const addPurcheshOut = Object.assign({}, purchesOutSideState);
    console.log(addPurcheshOut);
  };

  return {
    purchesOutSideState,
    handelAddFivePurchesOutSide,
    handelAddOnePurchesOutSide,
    onChangePurchesOutSide,
    handelSubmitPurchesOutSide,
  };
};

export default usePurchesOutSideAdd;
