import { useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useLiquors from "./useLiquors";
import Swal from "sweetalert2";
import { DataContextApi } from "../Context/DataContext";
import axios from "axios";

const useFristFormAdd = () => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMoreBeer,setHasMoreBeer]  = useState(true)
  const [hasMoreBeerSmall,setHasMoreBeerSmall]  = useState(true)
  
  let brands;
  const { GetLiqId } = useLiquors();
  const {
    salesMan,

    drDate,
  } = useContext(DataContextApi);
  const { liquors, brandsLoaded } = useLiquors();

 

  // ======================== add five in frist form ========================

  const fristFormObj = {
    liquorID: "",
    brandName: "",
    size:{sizes: [
      {
          _id: null,
          currentStock: 0,
          quantityInML: 650
      },
      {
          _id: null,
          currentStock: 0,
          quantityInML: 500
      },
      {
          _id: null,
          currentStock: 0,
          quantityInML: 330
      },
     
  ],},

    averageRate650: 0,
    averageRate550: 0,
    averageRate330: 0,

    startingStock650: 0,
    startingStock550: 0,
    startingStock330: 0,

    incomingPurchase650: 0,
    incomingPurchase550: 0,
    incomingPurchase330: 0,

    initial650: 0,
    initial550: 0,
    initial330: 0,

    buyRate650: 0,
    buyRate550: 0,
    buyRate330: 0,

    incomePurchase650: 0,
    incomePurchase550: 0,
    incomePurchase330: 0,

    purchaseRate650: 0,
    purchaseRate550: 0,
    purchaseRate330: 0,

    inflowCredit650: 0,
    inflowCredit550: 0,
    inflowCredit330: 0,

    sending650: 0,
    sending550: 0,
    sending330: 0,

    sumRemainder650: 0,
    sumRemainder550: 0,
    sumRemainder330: 0,

    closingStock650: 0,
    closingStock550: 0,
    closingStock330: 0,

    sales650: 0,
    sales550: 0,
    sales330: 0,

    mainRate650: 0,
    mainRate550: 0,
    mainRate330: 0,

    total650: 0,
    total550: 0,
    total330: 0,

    grandTotal: "",
  };

  const [fristFormState, setFristFormState] = useState([fristFormObj]);

  const prevdata = JSON.parse(localStorage.getItem("firstBack"));

  useEffect(() => {
    if (prevdata) {
      setFristFormState(prevdata);
      setHasMoreBeer(false)
    } else {
      const fetchOptions = async (query) => {
        await axios({
          url: `${process.env.REACT_APP_API_URL}/shop/getAllParentLiquors?page=${page}&pagesize=30`,
          method: "get",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        })
          .then((response) => {
            let firstFormData = fristFormState;

            if (!prevdata && response.data.data.length > 0) {
              const liq = response.data.data.filter((item) => item.type === "BEER");
              for (let index = 0; index < liq.length; index++) {
                const quan750 = liq[index].sizes.find(
                  (elem) => elem.quantityInML === 650
                );
                const quan330 = liq[index].sizes.find(
                  (elem) => elem.quantityInML === 500
                );
                const quan180 = liq[index].sizes.find(
                  (elem) => elem.quantityInML === 330
                );
      
                if (
                  quan750 &&
                  quan330 &&
                  quan180 &&
                  quan180.currentStock > 0 &&
                  quan750.currentStock > 0 &&
                  quan330.currentStock > 0
                ) {
                  const newFormData = { ...fristFormObj };
                  newFormData.brandName = liq[index].brandName;
                  newFormData.liquorID = liq[index]._id;
                  newFormData.size = liq[index];
                  newFormData.startingStock650 = quan750.currentStock;
                  newFormData.startingStock550 = quan330.currentStock;
                  newFormData.startingStock330 = quan180.currentStock;
                  newFormData.sumRemainder650 = quan750.currentStock;
                  newFormData.sumRemainder550 = quan330.currentStock;
                  newFormData.sumRemainder330 = quan180.currentStock;
                  newFormData.sales650 = quan750.currentStock;
                  newFormData.sales550 = quan330.currentStock;
                  newFormData.sales330 = quan180.currentStock;
                  newFormData.averageRate650 = quan750.averageRate.$numberDecimal;
                  newFormData.initial650 = quan750.averageRate.$numberDecimal;
                  newFormData.initial550 = quan330.averageRate.$numberDecimal;
                  newFormData.initial330 = quan180.averageRate.$numberDecimal;
                  newFormData.averageRate550 = quan330.averageRate.$numberDecimal;
                  newFormData.averageRate330 = quan180.averageRate.$numberDecimal;
                  newFormData.buyRate650 = quan750.rate;
                  newFormData.buyRate550 = quan330.rate;
                  newFormData.buyRate330 = quan180.rate;
                  firstFormData = [newFormData, ...firstFormData];
                  console.log(firstFormData);
                  setFristFormState(firstFormData);
                  localStorage.setItem("firstBack", JSON.stringify(firstFormData));
                  localStorage.setItem(
                    "totalFirstBack",
                    JSON.stringify(totalState.allGrandTotal)
                  );
                }
              }
            }
            setPage(page => page + 1);

          })
          .catch((err) => {
            console.log(err)
            if(err.response.status===404){
              setHasMoreBeer(false)
            }
          });
      };

      fetchOptions()
    }
  }, [page]);

  const addFiveInFristFormHandler = () => {
    let data = fristFormState;
    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          liquorID: "",
          brandName: "",
          size:{sizes: [
            {
                _id: null,
                currentStock: 0,
                quantityInML: 650
            },
            {
                _id: null,
                currentStock: 0,
                quantityInML: 500
            },
            {
                _id: null,
                currentStock: 0,
                quantityInML: 330
            },
           
        ],},


          averageRate650: 0,
          averageRate550: 0,
          averageRate330: 0,

          startingStock650: 0,
          startingStock550: 0,
          startingStock330: 0,

          incomingPurchase650: 0,
          incomingPurchase550: 0,
          incomingPurchase330: 0,

          initial650: 0,
          initial550: 0,
          initial330: 0,

          buyRate650: 0,
          buyRate550: 0,
          buyRate330: 0,

          incomePurchase650: 0,
          incomePurchase550: 0,
          incomePurchase330: 0,

          purchaseRate650: 0,
          purchaseRate550: 0,
          purchaseRate330: 0,

          inflowCredit650: 0,
          inflowCredit550: 0,
          inflowCredit330: 0,

          sending650: 0,
          sending550: 0,
          sending330: 0,

          sumRemainder650: 0,
          sumRemainder550: 0,
          sumRemainder330: 0,

          closingStock650: 0,
          closingStock550: 0,
          closingStock330: 0,

          sales650: 0,
          sales550: 0,
          sales330: 0,

          mainRate650: 0,
          mainRate550: 0,
          mainRate330: 0,

          total650: 0,
          total550: 0,
          total330: 0,

          grandTotal: "",
        },
      ];
    }
    setFristFormState(data);
  };

  const addOneInFristFormHandler = () => {
    setFristFormState([
      ...fristFormState,
      {
        liquorID: "",
        brandName: "",
        size:{sizes: [
          {
              _id: null,
              currentStock: 0,
              quantityInML: 650
          },
          {
              _id: null,
              currentStock: 0,
              quantityInML: 500
          },
          {
              _id: null,
              currentStock: 0,
              quantityInML: 330
          },
         
      ],},


        averageRate650: 0,
        averageRate550: 0,
        averageRate330: 0,

        startingStock650: 0,
        startingStock550: 0,
        startingStock330: 0,

        incomingPurchase650: 0,
        incomingPurchase550: 0,
        incomingPurchase330: 0,

        initial650: 0,
        initial550: 0,
        initial330: 0,

        buyRate650: 0,
        buyRate550: 0,
        buyRate330: 0,

        incomePurchase650: 0,
        incomePurchase550: 0,
        incomePurchase330: 0,

        purchaseRate650: 0,
        purchaseRate550: 0,
        purchaseRate330: 0,

        inflowCredit650: 0,
        inflowCredit550: 0,
        inflowCredit330: 0,

        sending650: 0,
        sending550: 0,
        sending330: 0,

        sumRemainder650: 0,
        sumRemainder550: 0,
        sumRemainder330: 0,

        closingStock650: 0,
        closingStock550: 0,
        closingStock330: 0,

        sales650: 0,
        sales550: 0,
        sales330: 0,

        mainRate650: 0,
        mainRate550: 0,
        mainRate330: 0,

        total650: 0,
        total550: 0,
        total330: 0,

        grandTotal: "",
      },
    ]);
  };

  const [totalState, setTotalState] = useState({
    startingStock650Total: "",
    startingStock550Total: 0,
    startingStock330Total: 0,
    incomingPurchase650Total: 0,
    incomingPurchase550Total: 0,
    incomingPurchase330Total: 0,
    incomePurchase650Total: 0,
    incomePurchase550Total: 0,
    incomePurchase330Total: 0,
    inflowCredit650Total: 0,
    inflowCredit550Total: 0,
    inflowCredit330Total: 0,

    sending650Total: 0,
    sending550Total: 0,
    sending330Total: 0,

    sumRemainder650Total: 0,
    sumRemainder550Total: 0,
    sumRemainder330Total: 0,

    closingStock650Total: 0,
    closingStock550Total: 0,
    closingStock330Total: 0,

    sales650Total: 0,
    sales550Total: 0,
    sales330Total: 0,

    total650Total: 0,
    total550Total: 0,
    total330Total: 0,

    allGrandTotal: 0,
  });

  const onChangeFristBackFormHandler = (e, index) => {
    const firstFormHandel = fristFormState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setFristFormState(firstFormHandel);



    const handelavg650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate650" ||
          e.target.name === "buyRate650" ||
          e.target.name === "incomingPurchase650" ||
          e.target.name === "incomePurchase650"
        ) {
          const buyShop =
            Number(obj.incomingPurchase650) * Number(obj.buyRate650);
          const buyOut =
            Number(obj.incomePurchase650) * Number(obj.purchaseRate650);
          const totalStock =
            Number(obj.incomePurchase650) +
            Number(obj.incomingPurchase650) +
            Number(obj.startingStock650);

          const stock = Number(obj.initial650) * Number(obj.startingStock650);
          obj.averageRate650 = (buyShop + buyOut + stock) / totalStock;
        }
        return obj;
      } else return returned;
    });
    setFristFormState(handelavg650);

    const handelavg550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate550" ||
          e.target.name === "buyRate550" ||
          e.target.name === "incomingPurchase550" ||
          e.target.name === "incomePurchase550"
        ) {
          const buyShop =
            Number(obj.incomingPurchase550) * Number(obj.buyRate550);
          const buyOut =
            Number(obj.incomePurchase550) * Number(obj.purchaseRate550);
          const totalStock =
            Number(obj.incomePurchase550) +
            Number(obj.incomingPurchase550) +
            Number(obj.startingStock550);

          const stock = Number(obj.initial550) * Number(obj.startingStock550);
          obj.averageRate550 = (buyShop + buyOut + stock) / totalStock;
        }
        return obj;
      } else return returned;
    });
    setFristFormState(handelavg550);

    const handelavg330 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "purchaseRate330" ||
          e.target.name === "buyRate330" ||
          e.target.name === "incomingPurchase330" ||
          e.target.name === "incomePurchase330"
        ) {
          const buyShop =
            Number(obj.incomingPurchase330) * Number(obj.buyRate330);
          const buyOut =
            Number(obj.incomePurchase330) * Number(obj.purchaseRate330);
          const totalStock =
            Number(obj.incomePurchase330) +
            Number(obj.incomingPurchase330) +
            Number(obj.startingStock330);

          const stock = Number(obj.initial330) * Number(obj.startingStock330);
          obj.averageRate330 = (buyShop + buyOut + stock) / totalStock;
        }
        return obj;
      } else return returned;
    });
    setFristFormState(handelavg330);

    const yog650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock650" ||
          e.target.name === "incomingPurchase650" ||
          e.target.name === "inflowCredit650" ||
          e.target.name === "incomePurchase650" ||
          e.target.name === "sending650"
        ) {
          obj.sumRemainder650 =
            Number(obj.startingStock650) +
            Number(obj.incomingPurchase650) +
            Number(obj.inflowCredit650) +
            Number(obj.incomePurchase650) -
            Number(obj.sending650);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(yog650);

    const yog550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock550" ||
          e.target.name === "incomingPurchase550" ||
          e.target.name === "inflowCredit550" ||
          e.target.name === "incomePurchase550" ||
          e.target.name === "sending550"
        ) {
          obj.sumRemainder550 =
            Number(obj.startingStock550) +
            Number(obj.incomingPurchase550) +
            Number(obj.inflowCredit550) +
            Number(obj.incomePurchase550) -
            Number(obj.sending550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(yog550);

    const yog330 = fristFormState.map((returned, i) => {
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

    setFristFormState(yog330);

    const sale650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder650" ||
          e.target.name === "closingStock650" ||
          e.target.name === "startingStock650" ||
          e.target.name === "incomingPurchase650" ||
          e.target.name === "inflowCredit650" ||
          e.target.name === "incomePurchase650" ||
          e.target.name === "sending650"
        ) {
          obj.sales650 =
            Number(obj.sumRemainder650) - Number(obj.closingStock650);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(sale650);

    const sale550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder550" ||
          e.target.name === "closingStock550" ||
          e.target.name === "startingStock550" ||
          e.target.name === "incomingPurchase550" ||
          e.target.name === "inflowCredit550" ||
          e.target.name === "incomePurchase550" ||
          e.target.name === "sending550"
        ) {
          obj.sales550 =
            Number(obj.sumRemainder550) - Number(obj.closingStock550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(sale550);

    const sale330 = fristFormState.map((returned, i) => {
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

    setFristFormState(sale330);

    const saleTotal650 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sales650" ||
          e.target.name === "mainRate650" ||
          e.target.name === "sumRemainder650" ||
          e.target.name === "closingStock650" ||
          e.target.name === "startingStock650" ||
          e.target.name === "incomingPurchase650" ||
          e.target.name === "inflowCredit650" ||
          e.target.name === "incomePurchase650" ||
          e.target.name === "sending650"
        ) {
          obj.total650 = Number(obj.sales650) * Number(obj.mainRate650);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal650);

    const saleTotal550 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sales550" ||
          e.target.name === "mainRate550" ||
          e.target.name === "sumRemainder550" ||
          e.target.name === "closingStock550" ||
          e.target.name === "startingStock550" ||
          e.target.name === "incomingPurchase550" ||
          e.target.name === "inflowCredit550" ||
          e.target.name === "incomePurchase550" ||
          e.target.name === "sending550"
        ) {
          obj.total550 = Number(obj.sales550) * Number(obj.mainRate550);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal550);

    const saleTotal330 = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sales330" ||
          e.target.name === "mainRate330" ||
          e.target.name === "sumRemainder330" ||
          e.target.name === "closingStock330" ||
          e.target.name === "startingStock330" ||
          e.target.name === "incomingPurchase330" ||
          e.target.name === "inflowCredit330" ||
          e.target.name === "incomePurchase330" ||
          e.target.name === "sending330"
        ) {
          obj.total330 = Number(obj.sales330) * Number(obj.mainRate330);
        }
        console.log(obj.total330);
        return obj;
      } else return returned;
    });

    setFristFormState(saleTotal330);

    const grandT = fristFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sales650" ||
          e.target.name === "mainRate650" ||
          e.target.name === "sales550" ||
          e.target.name === "mainRate550" ||
          e.target.name === "sales330" ||
          e.target.name === "mainRate330" ||
          e.target.name === "sumRemainder650" ||
          e.target.name === "closingStock650" ||
          e.target.name === "startingStock650" ||
          e.target.name === "incomingPurchase650" ||
          e.target.name === "inflowCredit650" ||
          e.target.name === "incomePurchase650" ||
          e.target.name === "sending650" ||
          e.target.name === "sumRemainder550" ||
          e.target.name === "closingStock550" ||
          e.target.name === "startingStock550" ||
          e.target.name === "incomingPurchase550" ||
          e.target.name === "inflowCredit550" ||
          e.target.name === "incomePurchase550" ||
          e.target.name === "sending550" ||
          e.target.name === "sumRemainder330" ||
          e.target.name === "closingStock330" ||
          e.target.name === "startingStock330" ||
          e.target.name === "incomingPurchase330" ||
          e.target.name === "inflowCredit330" ||
          e.target.name === "incomePurchase330" ||
          e.target.name === "sending330"
        ) {
          obj.grandTotal =
            Number(obj.sales650) * Number(obj.mainRate650) +
            Number(obj.sales550) * Number(obj.mainRate550) +
            Number(obj.sales330) * Number(obj.mainRate330);
        }
        return obj;
      } else return returned;
    });

    setFristFormState(grandT);

    let obj1 = totalState;
    obj1.startingStock650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock650)),
      0
    );
    setTotalState(obj1);

    let obj2 = totalState;
    obj2.startingStock550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock550)),
      0
    );
    setTotalState(obj2);

    let obj3 = totalState;
    obj3.startingStock330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.startingStock330)),
      0
    );
    setTotalState(obj3);

    let obj4 = totalState;
    obj4.incomingPurchase650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase650)),
      0
    );
    setTotalState(obj4);

    let obj5 = totalState;
    obj5.incomingPurchase550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase550)),
      0
    );
    setTotalState(obj5);

    let obj6 = totalState;
    obj6.incomingPurchase330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomingPurchase330)),
      0
    );
    setTotalState(obj6);

    let obj7 = totalState;
    obj7.incomePurchase650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase650)),
      0
    );
    setTotalState(obj7);

    let obj8 = totalState;
    obj8.incomePurchase550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase550)),
      0
    );
    setTotalState(obj8);

    let obj9 = totalState;
    obj9.incomePurchase330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.incomePurchase330)),
      0
    );
    setTotalState(obj9);

    let obj10 = totalState;
    obj10.inflowCredit650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit650)),
      0
    );
    setTotalState(obj10);

    let obj11 = totalState;
    obj11.inflowCredit550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit550)),
      0
    );
    setTotalState(obj11);

    let obj12 = totalState;
    obj12.inflowCredit330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.inflowCredit330)),
      0
    );
    setTotalState(obj12);

    let obj13 = totalState;
    obj13.sending650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending650)),
      0
    );
    setTotalState(obj13);

    let obj14 = totalState;
    obj14.sending550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending550)),
      0
    );
    setTotalState(obj14);

    let obj15 = totalState;
    obj15.sending330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sending330)),
      0
    );
    setTotalState(obj15);

    let obj16 = totalState;
    obj16.sumRemainder650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder650)),
      0
    );
    setTotalState(obj16);

    let obj17 = totalState;
    obj17.sumRemainder550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder550)),
      0
    );
    setTotalState(obj17);

    let obj18 = totalState;
    obj18.sumRemainder330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.sumRemainder330)),
      0
    );
    setTotalState(obj18);

    let obj19 = totalState;
    obj19.closingStock650Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock650)),
      0
    );
    setTotalState(obj19);

    let obj20 = totalState;
    obj20.closingStock550Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock550)),
      0
    );
    setTotalState(obj20);

    let obj21 = totalState;
    obj21.closingStock330Total = fristFormState.reduce(
      (total, currentItem) =>
        (total = total + Number(currentItem.closingStock330)),
      0
    );
    setTotalState(obj21);

    let obj22 = totalState;
    obj22.sales650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales650)),
      0
    );
    setTotalState(obj22);

    let obj23 = totalState;
    obj23.sales550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales550)),
      0
    );
    setTotalState(obj23);

    let obj24 = totalState;
    obj24.sales330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.sales330)),
      0
    );
    setTotalState(obj24);

    let obj25 = totalState;
    obj25.total650Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total650)),
      0
    );
    setTotalState(obj25);

    let obj26 = totalState;
    obj26.total550Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total550)),
      0
    );
    setTotalState(obj26);

    let obj27 = totalState;
    obj27.total330Total = fristFormState.reduce(
      (total, currentItem) => (total = total + Number(currentItem.total330)),
      0
    );
    setTotalState(obj27);

    let obj28 = totalState;
    obj28.allGrandTotal = fristFormState.reduce(
      (total, currentItem) => (total = total + currentItem.grandTotal),
      0
    );
    setTotalState(obj28);

    localStorage.setItem("firstBack", JSON.stringify(fristFormState));
    localStorage.setItem(
      "totalFirstBack",
      JSON.stringify(totalState.allGrandTotal)
    );
  };

  const handelSubmitFristFormBack = async (e) => {
    const dataDetails650 = [];

    for (let index = 0; index < fristFormState.length; index++) {
      const element = fristFormState[index];
      dataDetails650.push({
        liquor: GetLiqId(element.liquorID, 650, "BEER"),
        brandName: element.brandName,
        quantityInML: 650,
        openingStock: element.startingStock650,
        purchaseShop: element.incomingPurchase650,
        purchaseShopRate: element.buyRate650,
        purchaseOutSide: element.incomePurchase650,
        purchaseOutSideRate: element.purchaseRate650,
        credits: element.inflowCredit650,
        send: element.sending650,
        remaining: element.sumRemainder650,
        closingStock: element.closingStock650,
        sales: element.sales650,
        amount: element.total650,
      });
    }

    const dataDetails550 = [];
    for (let index = 0; index < fristFormState.length; index++) {
      const element = fristFormState[index];
      dataDetails550.push({
        liquor: GetLiqId(element.liquorID, 550, "BEER"),
        brandName: element.brandName,
        quantityInML: 550,
        openingStock: element.startingStock550,
        purchaseShop: element.incomingPurchase550,
        purchaseShopRate: element.buyRate550,
        purchaseOutSide: element.incomePurchase550,
        purchaseOutSideRate: element.purchaseRate550,
        credits: element.inflowCredit550,
        send: element.sending550,
        remaining: element.sumRemainder550,
        closingStock: element.closingStock550,
        sales: element.sales550,
        amount: element.total550,
      });
    }

    const dataDetails330 = [];
    for (let index = 0; index < fristFormState.length; index++) {
      const element = fristFormState[index];
      dataDetails330.push({
        liquor: GetLiqId(element.liquorID, 330, "BEER"),
        brandName: element.brandName,
        quantityInML: 330,
        openingStock: element.startingStock330,
        purchaseShop: element.incomingPurchase330,
        purchaseShopRate: element.buyRate330,
        purchaseOutSide: element.incomePurchase330,
        purchaseOutSideRate: element.purchaseRate330,
        credits: element.inflowCredit330,
        send: element.sending330,
        remaining: element.sumRemainder330,
        closingStock: element.closingStock330,
        sales: element.sales330,
        amount: element.total330,
      });
    }

    const beerForm = [];
    for (let index = 0; index < fristFormState.length; index++) {
      const element = fristFormState[index];
      beerForm.push({
        liquor: GetLiqId(element.liquorID, 330, "BEER"),
        brandName: element.brandName,
        quantityInML: element.selectStockVarient,
        openingStock: element.startingStock,
        purchaseShop: element.incomingPurchase,
        purchaseShopRate: element.buyRate,
        purchaseOutSide: element.incomePurchase,
        purchaseOutSideRate: element.purchaseRate,
        credits: element.inflowCredit,
        send: element.sending,
        remaining: element.sumRemainder,
        closingStock: element.closingStock,
        sales: element.sales,
        amount: element.total,
      });
    }

    try {
      const api1 = await fetch(
        "https://insorty-api.onrender.com/shop/addBackPageReportData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: dataDetails650,
          }),
        }
      );

      const api2 = await fetch(
        "https://insorty-api.onrender.com/shop/addBackPageReportData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: dataDetails550,
          }),
        }
      );
      const api3 = await fetch(
        "https://insorty-api.onrender.com/shop/addBackPageReportData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: dataDetails330,
          }),
        }
      );
      const api4 = await fetch(
        "https://insorty-api.onrender.com/shop/addBackPageReportData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({
            date: drDate,
            salesmen: salesMan,
            entries: beerForm,
          }),
        }
      );

      Promise.all([api1, api2, api3, api4])
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Added successfully",
            });
          }
        });
    } catch (error) {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addOneSecondForm = {
    liquor: "",
    brandName: "",
    size:{sizes: [
      {
          _id: null,
          currentStock: 0,
          quantityInML: 650
      },
      {
          _id: null,
          currentStock: 0,
          quantityInML: 500
      },
      {
          _id: null,
          currentStock: 0,
          quantityInML: 375
      },
     
  ],},
    averageRate: 0,
    startingStock: 0,
    initial: 0,
    incomingPurchase: 0,
    buyRate: 0,
    incomePurchase: 0,
    purchaseRate: 0,
    inflowCredit: 0,
    sending: 0,
    sumRemainder: 0,
    closingStock: 0,
    sales: 0,
    mainRate: 0,
    total: 0,
    grandTotal: 0,
    selectStockVarient: 90,
  };

  const [addOneSecondFormState, setAddOneSecondFormState] = useState([
    addOneSecondForm,
  ]);

  const prevdata2 = JSON.parse(localStorage.getItem("BeerForm"));

  useEffect(() => {
    if (prevdata2) {
      setAddOneSecondFormState(prevdata2);
      setHasMoreBeerSmall(false)
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
     
            let firstFormData = addOneSecondFormState;
            if (!prevdata && response.data.data.length > 0) {
              const liq = response.data.data.filter((item) => {
                if (item.type === "BEER") {
                  return item;
                }
              });
        
              liq.map((parent) => {
                
                parent.sizes.map((item) => {
                  if (
                    item.quantityInML !== 650 &&
              item.quantityInML !== 550 &&
              item.quantityInML !== 330 &&
              item.currentStock > 0
                  ) {
                    const newFormData = { ...addOneSecondForm };
        
                    newFormData.brandName = parent.brandName;
                    newFormData.size= parent
                              newFormData.liquorID = parent?._id;
                              newFormData.selectStockVarient = item?.quantityInML;
                              newFormData.startingStock = item?.currentStock;
                              newFormData.averageRate = item?.averageRate.$numberDecimal;
                              newFormData.initial = item?.averageRate.$numberDecimal;
                              newFormData.buyRate = item?.rate;
                              firstFormData = [newFormData, ...firstFormData];

                              setAddOneSecondFormState(firstFormData);
                              localStorage.setItem(
                                "beerFormTotal",
                                JSON.stringify(
                                  firstFormData.reduce(
                                    (totals, currentItem) =>
                                      (totals = totals + Number(currentItem.total)),
                                    0
                                  )
                                )
                              );
                    
                  }
                });
              });
            }
            setPage(page => page + 1);

          })
          .catch((err) => {
            console.log(err)
            if(err.response.status===404){
              setHasMoreBeerSmall(false)
            }
          });
      };
      fetchOptions()
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandsLoaded]);

  const addOneSecondFormHandler = () => {
    setAddOneSecondFormState([
      ...addOneSecondFormState,
      {
        averageRate: 0,
        startingStock: 0, // openingStock
        size:{sizes: [
          {
              _id: null,
              currentStock: 0,
              quantityInML: 650
          },
          {
              _id: null,
              currentStock: 0,
              quantityInML: 500
          },
          {
              _id: null,
              currentStock: 0,
              quantityInML: 375
          },
         
      ],},

        incomingPurchase: 0,
        buyRate: 0,
        incomePurchase: 0,
        initial: 0,
        purchaseRate: 0,
        inflowCredit: 0,
        sending: 0,
        sumRemainder: 0,
        closingStock: 0,
        sales: 0,
        mainRate: 0,
        total: 0,
        grandTotal: 0,
        selectStockVarient: 90,
      },
    ]);
  };

  const handelSeconFormOnChange = (e, index) => {
    const secondFormHandel = addOneSecondFormState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setAddOneSecondFormState(secondFormHandel);

    const handelPrice = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (
          e.target.name === "brandName" ||
          e.target.name === "selectStockVarient" 
        ) {
          obj.buyRate = obj.size.sizes.find((brand)=>brand.quantityInML===Number(obj.selectStockVarient)).rate

        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(handelPrice);

    const handelavg = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (
          e.target.name === "purchaseRate" ||
          e.target.name === "buyRate" ||
          e.target.name === "incomingPurchase" ||
          e.target.name === "incomePurchase"
        ) {
          const buyShop = Number(obj.incomingPurchase) * Number(obj.buyRate);
          const buyOut = Number(obj.incomePurchase) * Number(obj.purchaseRate);
          const totalStock =
            Number(obj.incomePurchase) +
            Number(obj.incomingPurchase) +
            Number(obj.startingStock);

          const stock = Number(obj.initial) * Number(obj.startingStock);
          obj.averageRate = (buyShop + buyOut + stock) / totalStock;
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(handelavg);

    const yog = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "startingStock" ||
          e.target.name === "incomingPurchase" ||
          e.target.name === "inflowCredit" ||
          e.target.name === "incomePurchase" ||
          e.target.name === "sending"
        ) {
          obj.sumRemainder =
            Number(obj.startingStock) +
            Number(obj.incomingPurchase) +
            Number(obj.inflowCredit) +
            Number(obj.incomePurchase) -
            Number(obj.sending);
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(yog);

    const sales = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemainder" ||
          e.target.name === "closingStock" ||
          e.target.name === "startingStock" ||
          e.target.name === "incomingPurchase" ||
          e.target.name === "inflowCredit" ||
          e.target.name === "incomePurchase" ||
          e.target.name === "sending"
        ) {
          obj.sales = Number(obj.sumRemainder) - Number(obj.closingStock);
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(sales);

    const totals = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sales" ||
          e.target.name === "mainRate" ||
          e.target.name === "sumRemainder" ||
          e.target.name === "closingStock" ||
          e.target.name === "startingStock" ||
          e.target.name === "incomingPurchase" ||
          e.target.name === "inflowCredit" ||
          e.target.name === "incomePurchase" ||
          e.target.name === "sending"
        ) {
          obj.total = Number(obj.sales) * Number(obj.mainRate);
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(totals);

    localStorage.setItem("BeerForm", JSON.stringify(addOneSecondFormState));
    localStorage.setItem(
      "beerFormTotal",
      JSON.stringify(
        addOneSecondFormState.reduce(
          (totals, currentItem) =>
            (totals = totals + Number(currentItem.total)),
          0
        )
      )
    );
  };

  const handleRemoveFieldsBack = (index) => {
    const values = [...fristFormState];
    values.splice(index, 1);
    setFristFormState(values);
    localStorage.setItem("firstBack", JSON.stringify(values));
    localStorage.setItem(
      "totalFirstBack",
      JSON.stringify(values.reduce(
        (total, currentItem) =>
        (total =
          total +
          Number(currentItem.sales650) * Number(currentItem.mainRate650) +
          Number(currentItem.sales550) * Number(currentItem.mainRate550) +
          Number(currentItem.sales330) * Number(currentItem.mainRate330)),
        0
      ) || 0
    )
    );
  };

  const handleRemoveFieldsBeer = (index) => {
    const values = [...addOneSecondFormState];
    values.splice(index, 1);
    console.log(index);
    setAddOneSecondFormState(values);
    localStorage.setItem("BeerForm", JSON.stringify(values));
    localStorage.setItem('beerFormTotal', JSON.stringify(
      values.reduce(
        (totals, currentItem) => (totals = totals + Number(currentItem.total)),
        0
      )
    )
    )
    
  };

  return {
    addFiveInFristFormHandler,
    addOneInFristFormHandler,
    fristFormState,
    handelSubmitFristFormBack,
    onChangeFristBackFormHandler,
    totalState,
    isLoading,
    brands,
    addOneSecondFormState,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
    handleRemoveFieldsBack,
    handleRemoveFieldsBeer,
    hasMoreBeer,
    hasMoreBeerSmall
  };
};

export default useFristFormAdd;
