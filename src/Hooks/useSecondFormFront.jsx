import { useState, useEffect } from "react";
import useLiquors from "./useLiquors";
import axios from "axios";


const useSecondFormFront = () => {
  const token = localStorage.getItem("token");
  const [page,setPage] = useState(0)
  const [hasMoreSmall,sethasMoreSmall] = useState(true)
  const addOneSecondForm = {
    liquor: "",
    brandName: "",
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
    averageRate: 0,
    startingStock: 0,
    incomingPurchase: 0,
    buyRate: 0,
    incomePurchase: 0,
    purchaseRate: 0,
    initial: 0,
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

  const prevdata = JSON.parse(localStorage.getItem("mlForm"));

  useEffect(() => {
    if (prevdata) {
      setAddOneSecondFormState(prevdata);
      sethasMoreSmall(false)
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
                if (item.type === "WINE") {
                  return item;
                }
              });
        
              liq.map((parent) => {
                
                parent.sizes.map((item) => {
                  if (
                    item.quantityInML !== 750 &&
                    item.quantityInML !== 375 &&
                    item.quantityInML !== 180 &&
                    item.currentStock > 0
                  ) {
                    console.log(parent)
                    const newFormData = { ...addOneSecondForm };
        
                    newFormData.brandName = parent.brandName;
                    newFormData.liquor = parent._id;
                    newFormData.size = parent
                    newFormData.selectStockVarient = item.quantityInML;
                    newFormData.startingStock = item.currentStock;
                    newFormData.sumRemainder = item.currentStock;
                    newFormData.sales = item.currentStock;
                    newFormData.averageRate = item.averageRate.$numberDecimal;
                    newFormData.initial = item.averageRate.$numberDecimal;
                    firstFormData = [newFormData, ...firstFormData];
                    setAddOneSecondFormState(firstFormData);
                    
                  }
                });
              });
            }
            setPage(page => page + 1);

          })
          .catch((err) => {
            console.log(err)
            if(err.response.status===404){
              sethasMoreSmall(false)
            }
          });
      };
      fetchOptions()
    }



    
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const addOneSecondFormHandler = () => {
    setAddOneSecondFormState([
      ...addOneSecondFormState,
      { liquor: "",
      brandName: "",
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
        averageRate: 0,
        startingStock: 0,
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
    // **********************formula******************

    const handelavg = addOneSecondFormState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (
          e.target.name === "purchaseRate" ||
          e.target.name === "buyRate" ||
          e.target.name === 'incomingPurchase' ||
          e.target.name === 'incomePurchase'
        ) {
          const buyShop = Number(obj.incomingPurchase) * Number(obj.buyRate)
          const buyOut = Number(obj.incomePurchase) * Number(obj.purchaseRate)
          const totalStock = Number(obj.incomePurchase) + Number(obj.incomingPurchase) + Number(obj.startingStock)

          const stock = Number(obj.initial) * Number(obj.startingStock)
          obj.averageRate = (buyShop + buyOut + stock) / totalStock

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
        if (e.target.name === "sales" || e.target.name === "mainRate" || e.target.name === "sumRemainder" ||
          e.target.name === "closingStock" ||
          e.target.name === "startingStock" ||
          e.target.name === "incomingPurchase" ||
          e.target.name === "inflowCredit" ||
          e.target.name === "incomePurchase" ||
          e.target.name === "sending") {
          obj.total = Number(obj.sales) * Number(obj.mainRate);
        }
        return obj;
      } else return returned;
    });
    setAddOneSecondFormState(totals);

    localStorage.setItem("mlForm", JSON.stringify(addOneSecondFormState));
    localStorage.setItem(
      "mlFormTotal",
      JSON.stringify(
        addOneSecondFormState.reduce(
          (totals, currentItem) =>
            (totals = totals + Number(currentItem.total)),
          0
        )
      )
    );
  };

  const handleRemoveFieldsSecond = (index) => {
    const values = [...addOneSecondFormState];
    values.splice(index, 1);
    // console.log(index)
    setAddOneSecondFormState(values);
    localStorage.setItem("mlForm", JSON.stringify(values));
    localStorage.setItem(
      "mlFormTotal",
      JSON.stringify(
        values.reduce(
          (totals, currentItem) =>
            (totals = totals + Number(currentItem.total)),
          0
        ) || 0
      )
    );

  };

  return {
    addOneSecondFormState,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
    handleRemoveFieldsSecond,
    hasMoreSmall
  };
};

export default useSecondFormFront;
