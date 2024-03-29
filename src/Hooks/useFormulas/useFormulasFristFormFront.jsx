import { useState, useEffect } from "react";
import useLiquors from "../useLiquors";
import axios from "axios";

const useFormulasFristFormFront = () => {
  const token = localStorage.getItem("token");
  const [page,setPage] = useState(0)
  const [hasMore,setHasMore] = useState(true)

  let addOneFristForm = {
    brandName: "",
    liquorID: "",
    size:{sizes: [
      {
          _id: null,
          currentStock: 0,
          quantityInML: 750
      },
      {
          _id: null,
          currentStock: 0,
          quantityInML: 375
      },
      {
          _id: null,
          currentStock: 0,
          quantityInML: 180
      },
     
  ],},
    startingStock750: 0,
    startingStock330: 0,
    startingStock180: 0,

    incomingPurchase750: 0,
    incomingPurchase330: 0,
    incomingPurchase180: 0,

    buyRate750: 0,
    buyRate330: 0,
    buyRate180: 0,

    incomePurchase750: 0,
    incomePurchase330: 0,
    incomePurchase180: 0,

    initial750: 0,
    initial330: 0,
    initial180: 0,

    purchaseRate750: 0,
    purchaseRate330: 0,
    purchaseRate180: 0,

    inflowCredit750: 0,
    inflowCredit330: 0,
    inflowCredit180: 0,

    sending750: 0,
    sending330: 0,
    sending180: 0,

    sumRemainder750: 0,
    sumRemainder330: 0,
    sumRemainder180: 0,

    closingStock750: 0,
    closingStock330: 0,
    closingStock180: 0,

    sales750: 0,
    sales330: 0,
    sales180: 0,

    mainRate750: 0,
    mainRate330: 0,
    mainRate180: 0,

    total750: 0,
    total330: 0,
    total180: 0,

    grandTotal: 0,

    averageRate750: 0,
    averageRate330: 0,
    averageRate180: 0,
  };


  const [addOneFristFormState, setAddOneFristFormState] = useState([
    addOneFristForm,
  ]);

  const prevdata = JSON.parse(localStorage.getItem("firstFront"));

  useEffect(() => {
    if (prevdata) {
      setAddOneFristFormState(prevdata);
      setHasMore(false)
    }

    else{
      const fetchOptions = async () => {
        await axios({
          url: `${process.env.REACT_APP_API_URL}/shop/getAllParentLiquors?page=${page}&pagesize=30`,
          method: "get",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        })
          .then((response) => {
          //  console.log(response.data.data) 
            let firstFormData = addOneFristFormState;
            if (!prevdata && response.data.data.length > 0) {
              const liq = response.data.data.filter((item) => item.type === "WINE");
              for (let index = 0; index < liq.length; index++) {
                const quan750 = liq[index].sizes.find(
                  (elem) => elem.quantityInML === 750
                );
                const quan330 = liq[index].sizes.find(
                  (elem) => elem.quantityInML === 375
                );
                const quan180 = liq[index].sizes.find(
                  (elem) => elem.quantityInML === 180
                );
        
        
                if (quan750 && quan330 && quan180 && quan180.currentStock > 0 && quan750.currentStock > 0 && quan330.currentStock > 0) {
                  const newFormData = { ...addOneFristForm };
                  newFormData.brandName = liq[index].brandName;
                  newFormData.liquorID =  liq[index]._id;
                  newFormData.size =  liq[index];
                  newFormData.startingStock750 = quan750.currentStock;
                  newFormData.startingStock330 = quan330.currentStock;
                  newFormData.startingStock180 = quan180.currentStock;
                  newFormData.sumRemainder750 = quan750.currentStock;
                  newFormData.sumRemainder330 = quan330.currentStock;
                  newFormData.sumRemainder180 = quan180.currentStock;
                  newFormData.sales750 = quan750.currentStock;
                  newFormData.sales330 = quan330.currentStock;
                  newFormData.sales180 = quan180.currentStock;
                  newFormData.averageRate750 = quan750.averageRate.$numberDecimal;
                  newFormData.initial750 = quan750.averageRate.$numberDecimal;
                  newFormData.initial330 = quan330.averageRate.$numberDecimal;
                  newFormData.initial180 = quan180.averageRate.$numberDecimal;
                  newFormData.averageRate330 = quan330.averageRate.$numberDecimal;
                  newFormData.averageRate180 = quan180.averageRate.$numberDecimal;
                  newFormData.buyRate750 = quan750.rate;
                  newFormData.buyRate330 = quan330.rate;
                  newFormData.buyRate180 = quan180.rate;
                  firstFormData = [newFormData, ...firstFormData];
                  setAddOneFristFormState(firstFormData);
                }
              }
            }
            setPage(page => page + 1);

          })
          .catch((err) => {
            console.log(err)
            if(err.response.status===404){
              setHasMore(false)
            }
          });
      };
      fetchOptions()
    }
    

    
  }, [page]);

  const addOneFristFormHandler = (e) => {
    e.preventDefault()
    setAddOneFristFormState([

      ...addOneFristFormState,
      {
        brandName: "",
        liquorID: "",

        size:{sizes: [
          {
              _id: null,
              currentStock: 0,
              quantityInML: 750
          },
          {
              _id: null,
              currentStock: 0,
              quantityInML: 375
          },
          {
              _id: null,
              currentStock: 0,
              quantityInML: 180
          },
         
      ],},
        startingStock750: 0,
        startingStock330: 0,
        startingStock180: 0,

        incomingPurchase750: 0,
        incomingPurchase330: 0,
        incomingPurchase180: 0,

        buyRate750: 0,
        buyRate330: 0,
        buyRate180: 0,

        initial750: 0,
        initial330: 0,
        initial180: 0,

        incomePurchase750: 0,
        incomePurchase330: 0,
        incomePurchase180: 0,

        purchaseRate750: 0,
        purchaseRate330: 0,
        purchaseRate180: 0,

        inflowCredit750: 0,
        inflowCredit330: 0,
        inflowCredit180: 0,

        sending750: 0,
        sending330: 0,
        sending180: 0,

        sumRemainder750: 0,
        sumRemainder330: 0,
        sumRemainder180: 0,

        closingStock750: 0,
        closingStock330: 0,
        closingStock180: 0,

        sales750: 0,
        sales330: 0,
        sales180: 0,

        mainRate750: 0,
        mainRate330: 0,
        mainRate180: 0,

        total750: 0,
        total330: 0,
        total180: 0,

        grandTotal: 0,

        averageRate750: 0,
        averageRate330: 0,
        averageRate180: 0,
      },
    ]);
  };

  const addFive = () => {
    let data = addOneFristFormState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          brandName: "",
          liquorID: "",
          size:{sizes: [
            {
                _id: null,
                currentStock: 0,
                quantityInML: 750
            },
            {
                _id: null,
                currentStock: 0,
                quantityInML: 375
            },
            {
                _id: null,
                currentStock: 0,
                quantityInML: 180
            },
           
        ],},

          startingStock750: 0,
          startingStock330: 0,
          startingStock180: 0,

          incomingPurchase750: 0,
          incomingPurchase330: 0,
          incomingPurchase180: 0,

          buyRate750: 0,
          buyRate330: 0,
          buyRate180: 0,

          incomePurchase750: 0,
          incomePurchase330: 0,
          incomePurchase180: 0,

          purchaseRate750: 0,
          purchaseRate330: 0,
          purchaseRate180: 0,

          initial750: 0,
          initial330: 0,
          initial180: 0,

          inflowCredit750: 0,
          inflowCredit330: 0,
          inflowCredit180: 0,

          sending750: 0,
          sending330: 0,
          sending180: 0,

          sumRemainder750: 0,
          sumRemainder330: 0,
          sumRemainder180: 0,

          closingStock750: 0,
          closingStock330: 0,
          closingStock180: 0,

          sales750: 0,
          sales330: 0,
          sales180: 0,

          mainRate750: 0,
          mainRate330: 0,
          mainRate180: 0,

          total750: 0,
          total330: 0,
          total180: 0,

          grandTotal: 0,

          averageRate750: 0,
          averageRate330: 0,
          averageRate180: 0,
        },
      ];
    }
    setAddOneFristFormState(data);
  };

  const [totalState, setTotalState] = useState({
    startingStock750Total: 0,
    startingStock330Total: 0,
    startingStock180Total: 0,
    incomingPurchase750Total: 0,
    incomingPurchase330Total: 0,
    incomingPurchase180Total: 0,
    incomePurchase750Total: 0,
    incomePurchase330Total: 0,
    incomePurchase180Total: 0,
    inflowCredit750Total: 0,
    inflowCredit330Total: 0,
    inflowCredit180Total: 0,

    sending750Total: 0,
    sending330Total: 0,
    sending180Total: 0,

    sumRemainder750Total: 0,
    sumRemainder330Total: 0,
    sumRemainder180Total: 0,

    closingStock750Total: 0,
    closingStock330Total: 0,
    closingStock180Total: 0,

    sales750Total: 0,
    sales330Total: 0,
    sales180Total: 0,

    total750Total: 0,
    total330Total: 0,
    total180Total: 0,

    allGrandTotal: 0,
  });

  const handelFristFormOnChange = (e, index) => {
   

    const firstFormHandel = addOneFristFormState.map((firstFormFront, i) =>
      index === i
        ? Object.assign(firstFormFront, { [e.target.name]: e.target.value })
        : firstFormFront
    );
    setAddOneFristFormState(firstFormHandel);
    


    const handelavg750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate750" ||
          e.target.name === "buyRate750" ||
          e.target.name === 'incomingPurchase750' ||
          e.target.name === 'incomePurchase750'
        ) {
          const buyShop = Number(obj.incomingPurchase750) * Number(obj.buyRate750)
          const buyOut = Number(obj.incomePurchase750) * Number(obj.purchaseRate750)
          const totalStock = Number(obj.incomingPurchase750) + Number(obj.incomePurchase750) + Number(obj.startingStock750)
          const stock = Number(obj.initial750) * Number(obj.startingStock750)
          obj.averageRate750 = (buyShop + buyOut + stock) / totalStock

        }
        return obj;
      } else return returned;
    });
    setAddOneFristFormState(handelavg750);

    const handelavg330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate330" ||
          e.target.name === "buyRate330" ||
          e.target.name === 'incomingPurchase330' ||
          e.target.name === 'incomePurchase330'
        ) {
          const buyShop = Number(obj.incomingPurchase330) * Number(obj.buyRate330)
          const buyOut = Number(obj.incomePurchase330) * Number(obj.purchaseRate330)
          const totalStock = Number(obj.incomingPurchase330) + Number(obj.incomePurchase330) + Number(obj.startingStock330)

          const stock = Number(obj.initial330) * Number(obj.startingStock330)
          obj.averageRate330 = (buyShop + buyOut + stock) / totalStock

        }

        return obj;
      } else return returned;
    });
    setAddOneFristFormState(handelavg330);

    const handelavg180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate180" ||
          e.target.name === "buyRate180" ||
          e.target.name === 'incomingPurchase180' ||
          e.target.name === 'incomePurchase180'
        ) {
          const buyShop = Number(obj.incomingPurchase180) * Number(obj.buyRate180)
          const buyOut = Number(obj.incomePurchase180) * Number(obj.purchaseRate180)
          const totalStock = Number(obj.incomePurchase180) + Number(obj.incomingPurchase180) + Number(obj.startingStock180)

          const stock = Number(obj.initial180) * Number(obj.startingStock180)
          obj.averageRate180 = (buyShop + buyOut + stock) / totalStock
        }
        return obj;
      } else return returned;
    });
    setAddOneFristFormState(handelavg180);

    const yog750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock750" ||
          e.target.name === "incomingPurchase750" ||
          e.target.name === "inflowCredit750" ||
          e.target.name === "incomePurchase750" ||
          e.target.name === "sending750"
        ) {
          obj.sumRemainder750 =
            Number(obj.startingStock750) +
            Number(obj.incomingPurchase750) +
            Number(obj.inflowCredit750) +
            Number(obj.incomePurchase750) -
            Number(obj.sending750);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(yog750);

    const yog330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock330" ||
          e.target.name === "incomingPurchase330" ||
          e.target.name === "inflowCredit330" ||
          e.target.name === "incomePurchase330" ||
          e.target.name === "sending330"
        ) {
          obj.sumRemainder330 =
            Number(obj.startingStock330) +
            Number(obj.incomingPurchase330) +
            Number(obj.inflowCredit330) +
            Number(obj.incomePurchase330) -
            Number(obj.sending330);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(yog330);

    const yog180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock180" ||
          e.target.name === "incomingPurchase180" ||
          e.target.name === "inflowCredit180" ||
          e.target.name === "incomePurchase180" ||
          e.target.name === "sending180"
        ) {
          obj.sumRemainder180 =
            Number(obj.startingStock180) +
            Number(obj.incomingPurchase180) +
            Number(obj.inflowCredit180) +
            Number(obj.incomePurchase180) -
            Number(obj.sending180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(yog180);

    const sale750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder750" ||
          e.target.name === "closingStock750" || 
          e.target.name === "startingStock750" ||
          e.target.name === "incomingPurchase750" ||
          e.target.name === "inflowCredit750" ||
          e.target.name === "incomePurchase750" ||
          e.target.name === "sending750"
        ) {
          obj.sales750 =
            Number(obj.sumRemainder750) - Number(obj.closingStock750);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(sale750);

    const sale330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder330" ||
          e.target.name === "closingStock330" ||
          e.target.name === "startingStock330" ||
          e.target.name === "incomingPurchase330" ||
          e.target.name === "inflowCredit330" ||
          e.target.name === "incomePurchase330" ||
          e.target.name === "sending330"
        ) {
          obj.sales330 =
            Number(obj.sumRemainder330) - Number(obj.closingStock330);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(sale330);

    const sale180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder180" ||
          e.target.name === "closingStock180" ||
          e.target.name === "startingStock180" ||
          e.target.name === "incomingPurchase180" ||
          e.target.name === "inflowCredit180" ||
          e.target.name === "incomePurchase180" ||
          e.target.name === "sending180"
        ) {
          obj.sales180 =
            Number(obj.sumRemainder180) - Number(obj.closingStock180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(sale180);

    const saleTotal750 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales750" || e.target.name === "mainRate750") {
          obj.total750 = Number(obj.sales750) * Number(obj.mainRate750);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(saleTotal750);

    const saleTotal330 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales330" || e.target.name === "mainRate330") {
          obj.total330 = Number(obj.sales330) * Number(obj.mainRate330);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(saleTotal330);

    const saleTotal180 = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales180" || e.target.name === "mainRate180") {
          obj.total180 = Number(obj.mainRate180) * Number(obj.sales180);
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(saleTotal180);

    const grandT = addOneFristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sales750" ||
          e.target.name === "mainRate750" ||
          e.target.name === "sales330" ||
          e.target.name === "mainRate330" ||
          e.target.name === "sales180" ||
          e.target.name === "mainRate180"
        ) {
          obj.grandTotal =
            Number(obj.sales180) * Number(obj.mainRate180) +
            Number(obj.sales330) * Number(obj.mainRate330) +
            (obj.total180 = Number(obj.sales750) * Number(obj.mainRate750));
        }
        return obj;
      } else return returned;
    });

    setAddOneFristFormState(grandT);

    let obj1 = totalState;
    obj1.startingStock750Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock750)),
      0
    );
    setTotalState(obj1);

    let obj2 = totalState;
    obj2.startingStock330Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock330)),
      0
    );
    setTotalState(obj2);

    let obj3 = totalState;
    obj3.startingStock180Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock180)),
      0
    );
    setTotalState(obj3);

    let obj4 = totalState;
    obj4.incomingPurchase750Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase750)),
      0
    );
    setTotalState(obj4);

    let obj5 = totalState;
    obj5.incomingPurchase330Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase330)),
      0
    );
    setTotalState(obj5);

    let obj6 = totalState;
    obj6.incomingPurchase180Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase180)),
      0
    );
    setTotalState(obj6);

    let obj7 = totalState;
    obj7.incomePurchase750Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase750)),
      0
    );
    setTotalState(obj7);

    let obj8 = totalState;
    obj8.incomePurchase330Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase330)),
      0
    );
    setTotalState(obj8);

    let obj9 = totalState;
    obj9.incomePurchase180Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase180)),
      0
    );
    setTotalState(obj9);

    let obj10 = totalState;
    obj10.inflowCredit750Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit750)),
      0
    );
    setTotalState(obj10);

    let obj11 = totalState;
    obj11.inflowCredit330Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit330)),
      0
    );
    setTotalState(obj11);

    let obj12 = totalState;
    obj12.inflowCredit180Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit180)),
      0
    );
    setTotalState(obj12);

    let obj13 = totalState;
    obj13.sending750Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending750)),
      0
    );
    setTotalState(obj13);

    let obj14 = totalState;
    obj14.sending330Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending330)),
      0
    );
    setTotalState(obj14);

    let obj15 = totalState;
    obj15.sending180Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending180)),
      0
    );
    setTotalState(obj15);

    let obj16 = totalState;
    obj16.sumRemainder750Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder750)),
      0
    );
    setTotalState(obj16);

    let obj17 = totalState;
    obj17.sumRemainder330Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder330)),
      0
    );
    setTotalState(obj17);

    let obj18 = totalState;
    obj18.sumRemainder180Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder180)),
      0
    );
    setTotalState(obj18);

    let obj19 = totalState;
    obj19.closingStock750Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock750)),
      0
    );
    setTotalState(obj19);

    let obj20 = totalState;
    obj20.closingStock330Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock330)),
      0
    );
    setTotalState(obj20);

    let obj21 = totalState;
    obj21.closingStock180Total = addOneFristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock180)),
      0
    );
    setTotalState(obj21);

    let obj22 = totalState;
    obj22.sales750Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales750)),
      0
    );
    setTotalState(obj22);

    let obj23 = totalState;
    obj23.sales330Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales330)),
      0
    );
    setTotalState(obj23);

    let obj24 = totalState;
    obj24.sales180Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales180)),
      0
    );
    setTotalState(obj24);

    let obj25 = totalState;
    obj25.total750Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total750)),
      0
    );
    setTotalState(obj25);

    let obj26 = totalState;
    obj26.total330Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total330)),
      0
    );
    setTotalState(obj26);

    let obj27 = totalState;
    obj27.total180Total = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total180)),
      0
    );
    setTotalState(obj27);

    let obj28 = totalState;
    obj28.allGrandTotal = addOneFristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.grandTotal)),
      0
    );
    setTotalState(obj28);

    localStorage.setItem("firstFront", JSON.stringify(addOneFristFormState));
    localStorage.setItem(
      "firstFrontTotal",
      JSON.stringify(
        addOneFristFormState.reduce(
          (total, currentItem) =>
            (total =
              total +
              Number(currentItem.sales750) * Number(currentItem.mainRate750) +
              Number(currentItem.sales330) * Number(currentItem.mainRate330) +
              Number(currentItem.sales180) * Number(currentItem.mainRate180)),
          0
        )
      )
    );
  };

  const handleRemoveFields = (index) => {
    const values = [...addOneFristFormState];
    values.splice(index, 1);
    setAddOneFristFormState(values);
    localStorage.setItem("firstFront", JSON.stringify(values));
    localStorage.setItem(
      "firstFrontTotal",
      JSON.stringify(
        values.reduce(
          (total, currentItem) =>
          (total =
            total +
            Number(currentItem.sales750) * Number(currentItem.mainRate750) +
            Number(currentItem.sales330) * Number(currentItem.mainRate330) +
            Number(currentItem.sales180) * Number(currentItem.mainRate180)),
          0
        ) || 0
      )
    );

  };

  return {
    totalState,
    addOneFristFormState,
    setAddOneFristFormState,
    handelFristFormOnChange,
    addOneFristFormHandler,
    addFive,
    handleRemoveFields,
    hasMore,
  };
};

export default useFormulasFristFormFront;


