import { useState, useEffect } from "react";
import useLiquors from "./useLiquors";
import axios from "axios";


const useRmlAdd = () => {
  const token = localStorage.getItem("token");
  const [page,setPage] = useState(0)
  const [hasMoreSmall,sethasMoreSmall] = useState(true)

  const addRmlForm = {
    liquorID: "",
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
    ml: 750,
    initial:0,

    averageRate: 0,
    openingStock: 0, 
    incomingPurchase: 0, 
    buyRate: 0, 
    incomePurchase: 0, 
    purchaseRate: 0, 
    inflowCredit: 0, 
    sending: 0, 
    sumRemainder: 0,
    closingStock: 0, 
    sales: 0,
    rate: 0, 
    cost: 0,
  };

  //
  const [addRmlState, setAddRmlState] = useState([addRmlForm]);

  const prevdata = JSON.parse(localStorage.getItem("rml"));

  useEffect(() => {
    if (prevdata) {
      setAddRmlState(prevdata);
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
            console.log(response.data.data)
            let firstFormData = addRmlState;

            if (!prevdata && response.data.data.length > 0) {
              const liq = response.data.data.filter((item) => {
                if (item.type === "RML" || item.type === "DESHIRML") {
                  return item;
                }
              });
              liq.map((parent) => {
                parent.sizes.map((item) => {
                  if (item.currentStock > 0){
                  const newFormData = { ...addRmlForm };
                  newFormData.brandName = parent.brandName;
                  newFormData.liquorID = parent._id;
                  newFormData.size = parent;

                  newFormData.ml = item.quantityInML;
                    newFormData.openingStock = item.currentStock;
                    newFormData.sumRemainder = item.currentStock;
                    newFormData.sales = item.currentStock;
                  newFormData.averageRate = item.averageRate.$numberDecimal
                  newFormData.buyRate = item.rate
                  newFormData.initial = item.averageRate.$numberDecimal

                  firstFormData = [newFormData, ...firstFormData];
                  setAddRmlState(firstFormData);
                  localStorage.setItem("rml", JSON.stringify(firstFormData));
                }});
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

  const handelAddFiveInRml = () => {
    let data = addRmlState;
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
          ml: 750,
          initial: 0,

          openingStock: 0,
          incomingPurchase: 0,
          buyRate: 0,
          incomePurchase: 0,
          purchaseRate: 0,
          inflowCredit: 0,
          sending: 0,
          sumRemainder: 0,
          closingStock: 0,
          sales: 0,
          rate: 0,
          cost: 0,
        },
      ];
    }
    setAddRmlState(data);
  };

  const handelAddOneInRml = () => {
    setAddRmlState([
      ...addRmlState,
      {
        liquorID: "",
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
        ml: 750,
        initial: 0,

        openingStock: 0,
        incomingPurchase: 0,
        buyRate: 0,
        incomePurchase: 0,
        purchaseRate: 0,
        inflowCredit: 0,
        sending: 0,
        sumRemainder: 0,
        closingStock: 0,
        sales: 0,
        rate: 0,
        cost: 0,
      },
    ]);
  };

  // eslint-disable-next-line no-unused-vars
  const [total, setTotal] = useState({
    totalOpening: 0,
    totalIncomingStock: 0,
    totalIncomeStock: 0,
    totalInflow: 0,
    totalSending: 0,
    totalRemainder: 0,
    totalClosing: 0,
    totalSales: 0,
    totalCost: 0,
  });

  const onChangeRmlHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...addRmlState];
    list[index][name] = value;
    setAddRmlState(list);

    const handelPrice = addRmlState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (
          e.target.name === "brandName" ||
          e.target.name === "ml" 
        ) {
          obj.buyRate = obj.size.sizes.find((brand)=>brand.quantityInML===Number(obj.ml)).rate

        }
        return obj;
      } else return returned;
    });
    setAddRmlState(handelPrice);

    const handelavg = addRmlState.map((returned, i) => {
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
          const totalStock = Number(obj.incomePurchase) + Number(obj.incomingPurchase) + Number(obj.openingStock)

          const stock = Number(obj.initial) * Number(obj.openingStock)
          obj.averageRate = (buyShop + buyOut + stock) / totalStock

        }
        return obj;
      } else return returned;
    });
    setAddRmlState(handelavg);

    const yog = addRmlState.map((returned, i) => {
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
            Number(obj.openingStock) +
            Number(obj.incomingPurchase) +
            Number(obj.inflowCredit) +
            Number(obj.incomePurchase) -
            Number(obj.sending);
        }
        return obj;
      } else return returned;
    });

    setAddRmlState(yog);

    const sale = addRmlState.map((returned, i) => {
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

    setAddRmlState(sale);

    const saleTotal = addRmlState.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales" || e.target.name === "rate" || e.target.name === "sumRemainder" ||
          e.target.name === "closingStock" ||
          e.target.name === "startingStock" ||
          e.target.name === "incomingPurchase" ||
          e.target.name === "inflowCredit" ||
          e.target.name === "incomePurchase" ||
          e.target.name === "sending") {
          obj.cost = Number(obj.sales) * Number(obj.rate);
        }
        return obj;
      } else return returned;
    });

    setAddRmlState(saleTotal);

    localStorage.setItem("rml", JSON.stringify(addRmlState));
    localStorage.setItem(
      "rmlTotal",
      JSON.stringify(
        addRmlState.reduce(
          (total, currentItem) => (total = total + Number(currentItem.cost)),
          0
        )
      )
    );
  };


  const handleRemoveFieldsBackRml = index => {
    const values = [...addRmlState];
    values.splice(index, 1);
    console.log(index)
    setAddRmlState(values);
    localStorage.setItem("rml", JSON.stringify(values));
    localStorage.setItem(
      "rmlTotal",
      JSON.stringify(
        values.reduce(
          (total, currentItem) => (total = total + Number(currentItem.cost)),
          0
        ) || 0
      )
    );

  };

  return {
    addRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
    onChangeRmlHandler,
    total,
    setAddRmlState,
    handleRemoveFieldsBackRml
  };
};

export default useRmlAdd;
