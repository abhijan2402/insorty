import React from "react";
import { useState, useEffect } from "react";
import useLiquors from "../../../../../Hooks/useLiquors";
import axios from "axios";
import Swal from "sweetalert2";

const UseBeerShopFront = () => {
  const token = localStorage.getItem("token");
  const [page, setPage] = useState(0);
  const [hasMoreSmall, sethasMoreSmall] = useState(true);
  const [hasMoreBig, sethasMoreBig] = useState(true);
  const firstFormDataTemplate = {
    brandName: "",
    liquorID: "",
    size: {
      sizes: [
        {
          _id: null,
          currentStock: 0,
          quantityInML: 750,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 375,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 180,
        },
      ],
    },
    openingStock750: 0,
    openingStock375: 0,
    openingStock180: 0,
    openingStock30: 0,

    initial750: 0,
    initial375: 0,
    initial180: 0,
    initial30: 0,

    averageRate750: 0,
    averageRate375: 0,
    averageRate180: 0,
    averageRate30: 0,

    inflowShop750: 0,
    inflowShop375: 0,
    inflowShop180: 0,
    inflowShop30: 0,

    buyRateShop750: 0,
    buyRateShop375: 0,
    buyRateShop180: 0,
    buyRateShop30: 0,

    inflowOut750: 0,
    inflowOut375: 0,
    inflowOut180: 0,
    inflowOut30: 0,

    buyRateOut750: 0,
    buyRateOut375: 0,
    buyRateOut180: 0,
    buyRateOut30: 0,

    inflowCredit750: 0,
    inflowCredit375: 0,
    inflowCredit180: 0,
    inflowCredit30: 0,

    send750: 0,
    send375: 0,
    send180: 0,
    send30: 0,

    sumRemaining750: 0,
    sumRemaining375: 0,
    sumRemaining180: 0,
    sumRemaining30: 0,

    closingStock750: 0,
    closingStock375: 0,
    closingStock180: 0,
    closingStock30: 0,

    sales750: 0,
    sales375: 0,
    sales180: 0,
    sales30: 0,

    rate750: 0,
    rate375: 0,
    rate180: 0,
    rate30: 0,

    total750: 0,
    total375: 0,
    total180: 0,
    total30: 0,

    grandTotal: 0,
  };

  const [beerShopFrontFrist, setBeerShopFrontFrist] = useState([
    firstFormDataTemplate,
  ]);

  const prevdata = JSON.parse(localStorage.getItem("pegForm"));

  useEffect(() => {
    if (prevdata) {
      setBeerShopFrontFrist(prevdata);
      sethasMoreBig(false)
    } else {
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
            console.log(response)
            let firstFormData = beerShopFrontFrist;

            if (!prevdata && response.data.data.length > 0) {
              const liq = response.data.data.filter(
                (item) => item.type === "WINE"
              );
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
                const quan30 = liq[index].sizes.find(
                  (elem) => elem.quantityInML === 30
                );

                if (
                  quan750 &&
                  quan330 &&
                  quan180 &&
                  quan30 &&
                  quan180.currentStock > 0 &&
                  quan750.currentStock > 0 &&
                  quan330.currentStock > 0
                ) {
                  const newFormData = { ...firstFormDataTemplate };
                  newFormData.brandName = liq[index].brandName;
                  newFormData.liquorID = liq[index]._id;
                  newFormData.size = liq[index];
                  newFormData.openingStock750 = quan750.currentStock;
                  newFormData.openingStock375 = quan330.currentStock;
                  newFormData.openingStock180 = quan180.currentStock;
                  newFormData.sumRemaining750 = quan750.currentStock;
                  newFormData.sumRemaining375 = quan330.currentStock;
                  newFormData.sumRemaining180 = quan180.currentStock;
                  newFormData.sales750 = quan750.currentStock;
                  newFormData.sales375 = quan330.currentStock;
                  newFormData.sales180 = quan180.currentStock;
                  newFormData.sales30 = quan750.currentStock
                  newFormData.sumRemaining30 = quan750.currentStock
                  newFormData.averageRate750 =
                    quan750.averageRate.$numberDecimal;
                  newFormData.initial750 = quan750.averageRate.$numberDecimal;
                  newFormData.initial375 = quan330.averageRate.$numberDecimal;
                  newFormData.initial180 = quan180.averageRate.$numberDecimal;
                  newFormData.initial30 = quan30.averageRate.$numberDecimal;
                  
                  newFormData.buyRateShop750 = quan750.rate;
                  newFormData.buyRateShop375 = quan330.rate;
                  newFormData.buyRateShop180 = quan180.rate;

                  newFormData.averageRate375 =
                    quan330.averageRate.$numberDecimal;
                  newFormData.averageRate180 =
                    quan180.averageRate.$numberDecimal;
                  newFormData.averageRate30 =
                    quan30.averageRate.$numberDecimal;
                  firstFormData = [newFormData, ...firstFormData];
                  setBeerShopFrontFrist(firstFormData);
                }
              }
            }

            setPage((page) => page + 1);
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 404) {
              sethasMoreBig(false);
            }
          });
      };
      fetchOptions();
    }
  }, [page]);

  const fristFormAddOne = () => {
    setBeerShopFrontFrist([...beerShopFrontFrist, firstFormDataTemplate]);
  };

  const removeFristForm = (index) => {
    const values = [...beerShopFrontFrist];
    values.splice(index, 1);
    setBeerShopFrontFrist(values);
    localStorage.setItem("pegForm", JSON.stringify(values));
    localStorage.setItem(
      "pegFormTotal",
      JSON.stringify(
        values.reduce(
          (total, curr) => (total = total + Number(curr.grandTotal)),
          0
        )
      )
    );
  }

  const fristFormAddFive = () => {
    setBeerShopFrontFrist([
      ...beerShopFrontFrist,
      firstFormDataTemplate,
      firstFormDataTemplate,
      firstFormDataTemplate,
      firstFormDataTemplate,
      firstFormDataTemplate,
    ]);
  };

  const calStock30 = (stock750, stock375, stock180) => {
    const stock =
      25 * Number(stock750) + 12.5 * Number(stock375) + 6 * Number(stock180);
    return stock;
  };

  const calPrice30 = (stock1, stock2, stock3, price1, price2, price3) => {
    const total =
     ( Number(Number(stock1 ? stock1 : 0) * Number(price1 ? price1 : 0)) || 0 )+
      (Number(Number(stock2 ? stock2 : 0) * Number(price2 ? price2 : 0)) || 0) +
      (Number(Number(stock3 ? stock3 : 0) * Number(price3 ? price3 : 0)) || 0);
    const totalStock = calStock30(stock1, stock2, stock3);

    return (Number(total / totalStock) || 0).toFixed(2);
  };

  const fristFormOnChange = (e, index) => {
    

    const firstFormHandel = beerShopFrontFrist.map((firstFormFront, i) =>
      index === i
        ? Object.assign(firstFormFront, { [e.target.name]: e.target.value })
        : firstFormFront
    );
    setBeerShopFrontFrist(firstFormHandel);



    const pegInflowShop = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowShop180" ||
          "inflowShop375"
        ) {
          obj.inflowShop30 = calStock30(
            obj.inflowShop750,
            obj.inflowShop375,
            obj.inflowShop180
          );
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(pegInflowShop);
    const opening = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStock750" ||
          e.target.name === "openingStock180" ||
          "openingStock375"
        ) {
          obj.openingStock30 = calStock30(
            obj.openingStock750,
            obj.openingStock375,
            obj.openingStock180
          );
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(opening);

    const pegInflowOut = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "inflowOut750" ||
          e.target.name === "inflowOut180" ||
          "inflowOut375"
        ) {
          obj.inflowOut30 = calStock30(
            obj.inflowOut750,
            obj.inflowOut375,
            obj.inflowOut180
          );
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(pegInflowOut);

    const pegInflowCredit = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "inflowCredit750" ||
          e.target.name === "inflowCredit180" ||
          "inflowCredit375"
        ) {
          obj.inflowCredit30 = calStock30(
            obj.inflowCredit750,
            obj.inflowCredit375,
            obj.inflowCredit180
          );
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(pegInflowCredit);

    const pegSend = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "send750" ||
          e.target.name === "send180" ||
          "send375"
        ) {
          obj.send30 = calStock30(obj.send750, obj.send375, obj.send180);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(pegSend);

    const pegShopPrice = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "buyRateShop750" ||
          e.target.name === "buyRateShop750" ||
          "buyRateShop375" ||
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowShop180" ||
          "inflowShop375"
        ) {
          obj.buyRateShop30 = calPrice30(
            obj.inflowShop750,
            obj.inflowShop375,
            obj.inflowShop180,
            obj.buyRateShop750,
            obj.buyRateShop375,
            obj.buyRateShop750
          );
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(pegShopPrice);

    const pegOutPrice = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "buyRateOut750" ||
          e.target.name === "buyRateOut750" ||
          "buyRateOut375" ||
          e.target.name === "inflowOut750" ||
          e.target.name === "inflowOut180" ||
          "inflowOut375"
        ) {
          obj.buyRateOut30 = calPrice30(
            obj.inflowOut750,
            obj.inflowOut375,
            obj.inflowOut180,
            obj.buyRateOut750,
            obj.buyRateOut375,
            obj.buyRateOut750
          );
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(pegOutPrice);

    const handelavg750 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "buyRateShop750" ||
          e.target.name === "buyRateOut750" ||
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowOut750"
        ) {
          const buyShop = Number(obj.inflowShop750  ? obj.inflowShop750 : 0) * Number(obj.buyRateOut750 ? obj.buyRateOut750 : 0);
          const buyOut = Number(obj.inflowOut750 ? obj.inflowOut750 : 0) * Number(obj.buyRateShop750 ? obj.buyRateShop750 : 0);
          const totalStock =
            Number(obj.inflowShop750 ? obj.inflowShop750 : 0) +
            Number(obj.inflowOut750 ? obj.inflowOut750 : 0) +
            Number(obj.openingStock750 ? obj.openingStock750 : 0);
          const stock = Number(obj.initial750 ? obj.initial750 : 0) * Number(obj.openingStock750 ? obj.openingStock750 : 0);
          obj.averageRate750 = Number((buyShop + buyOut + stock) / totalStock) || 0;
        }
        return obj;
      } else return returned;
    });
    setBeerShopFrontFrist(handelavg750);

    const handelavg375 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "buyRateShop375" ||
          e.target.name === "buyRateOut375" ||
          e.target.name === "inflowShop375" ||
          e.target.name === "inflowOut375"
        ) {
          const buyShop = Number(obj.inflowShop375) * Number(obj.buyRateOut375);
          const buyOut = Number(obj.inflowOut375) * Number(obj.buyRateShop375);
          const totalStock =
            Number(obj.inflowShop375) +
            Number(obj.inflowOut375) +
            Number(obj.openingStock375);

          const stock = Number(obj.initial375) * Number(obj.openingStock375);
          obj.averageRate375 = Number((buyShop + buyOut + stock) / totalStock) || 0;
        }

        return obj;
      } else return returned;
    });
    setBeerShopFrontFrist(handelavg375);

    const handelavg180 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "buyRateShop180" ||
          e.target.name === "buyRateOut180" ||
          e.target.name === "inflowShop180" ||
          e.target.name === "inflowOut180"
        ) {
          const buyShop = Number(obj.inflowShop180) * Number(obj.buyRateOut180);
          const buyOut = Number(obj.inflowOut180) * Number(obj.buyRateShop180);
          const totalStock =
            Number(obj.inflowOut180) +
            Number(obj.inflowShop180) +
            Number(obj.openingStock180);

          const stock = Number(obj.initial180) * Number(obj.openingStock180);
          obj.averageRate180 = Number((buyShop + buyOut + stock) / totalStock) || 0;
        }
        return obj;
      } else return returned;
    });
    setBeerShopFrontFrist(handelavg180);
    setBeerShopFrontFrist(handelavg375);

    const handelavg30 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "buyRateShop180" ||
          e.target.name === "buyRateOut180" ||
          e.target.name === "inflowShop180" ||
          e.target.name === "inflowOut180" ||
          e.target.name === "buyRateShop375" ||
          e.target.name === "buyRateOut375" ||
          e.target.name === "inflowShop375" ||
          e.target.name === "buyRateShop750" ||
          e.target.name === "buyRateOut750" ||
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowOut750" ||
          e.target.name === "inflowOut375" ||
          e.target.name === "buyRateShop30" ||
          e.target.name === "buyRateOut30" ||
          e.target.name === "inflowShop30" ||
          e.target.name === "inflowOut30"
        ) {
          const buyShop = Number(Number(obj.inflowShop30 ? obj.inflowShop30 : 0) * Number(obj.buyRateShop30 ? obj.buyRateShop30 : 0)) || 0;
          const buyOut = Number(Number(obj.inflowOut30 ? obj.inflowOut30 : 0) * Number(obj.buyRateOut30? obj.buyRateOut30 : 0)) || 0;
          const totalStock =
            Number(obj.inflowOut30 ? obj.inflowOut30 : 0) +
            Number(obj.inflowShop30 ? obj.inflowShop30 : 0) +
            Number(obj.openingStock30 ? obj.openingStock30 : 0);

          const stock = Number(obj.initial30 ? obj.initial30 : 0) * Number(obj.openingStock30 ? obj.openingStock30 : 0);
          obj.averageRate30 = Number((buyShop + buyOut + stock) / totalStock) || 0;
        }
        return obj;
      } else return returned;
    });
    setBeerShopFrontFrist(handelavg30);

    const yog750 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStock750" ||
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowCredit750" ||
          e.target.name === "inflowOut750" ||
          e.target.name === "send750"
        ) {
          obj.sumRemaining750 =
            Number(obj.openingStock750) +
            Number(obj.inflowShop750) +
            Number(obj.inflowCredit750) +
            Number(obj.inflowOut750) -
            Number(obj.send750);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(yog750);

    const yog375 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStock375" ||
          e.target.name === "inflowShop375" ||
          e.target.name === "inflowCredit375" ||
          e.target.name === "inflowOut375" ||
          e.target.name === "send375"
        ) {
          obj.sumRemaining375 =
            Number(obj.openingStock375) +
            Number(obj.inflowShop375) +
            Number(obj.inflowCredit375) +
            Number(obj.inflowOut375) -
            Number(obj.send375);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(yog375);

    const yog180 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStock180" ||
          e.target.name === "inflowShop180" ||
          e.target.name === "inflowCredit180" ||
          e.target.name === "inflowOut180" ||
          e.target.name === "send180"
        ) {
          obj.sumRemaining180 =
            Number(obj.openingStock180) +
            Number(obj.inflowShop180) +
            Number(obj.inflowCredit180) +
            Number(obj.inflowOut180) -
            Number(obj.send180);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(yog180);

    const yog30 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStock180" ||
          e.target.name === "inflowShop180" ||
          e.target.name === "inflowCredit180" ||
          e.target.name === "inflowOut180" ||
          e.target.name === "send180" ||
          e.target.name === "openingStock375" ||
          e.target.name === "inflowShop375" ||
          e.target.name === "inflowCredit375" ||
          e.target.name === "inflowOut375" ||
          e.target.name === "send375" ||
          e.target.name === "openingStock750" ||
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowCredit750" ||
          e.target.name === "inflowOut750" ||
          e.target.name === "send750" ||
          e.target.name === "inflowShop30" ||
          e.target.name === "openingStock30" ||
          e.target.name === "inflowCredit30" ||
          e.target.name === "inflowOut30" ||
          e.target.name === "send30"
        ) {
          obj.sumRemaining30 =
            Number(obj.openingStock30) +
            Number(obj.inflowShop30) +
            Number(obj.inflowCredit30) +
            Number(obj.inflowOut30) -
            Number(obj.send30);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(yog30);

    const sale750 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemaining750" ||
          e.target.name === "closingStock750" ||
          e.target.name === "openingStock750" ||
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowCredit750" ||
          e.target.name === "inflowOut750" ||
          e.target.name === "send750"
        ) {
          obj.sales750 =
            Number(obj.sumRemaining750) - Number(obj.closingStock750);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(sale750);

    const sale375 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemaining375" ||
          e.target.name === "closingStock375" ||
          e.target.name === "openingStock375" ||
          e.target.name === "inflowShop375" ||
          e.target.name === "inflowCredit375" ||
          e.target.name === "inflowOut375" ||
          e.target.name === "send375"
        ) {
          obj.sales375 =
            Number(obj.sumRemaining180) - Number(obj.closingStock375);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(sale375);

    const sale180 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemaining180" ||
          e.target.name === "closingStock180" ||
          e.target.name === "openingStock180" ||
          e.target.name === "inflowShop180" ||
          e.target.name === "inflowCredit180" ||
          e.target.name === "inflowOut180" ||
          e.target.name === "send180"
        ) {
          obj.sales180 =
            Number(obj.sumRemaining180) - Number(obj.closingStock180);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(sale180);

    const sale30 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemaining30" ||
          e.target.name === "closingStock30" ||
          e.target.name === "openingStock30" ||
          e.target.name === "inflowShop30" ||
          e.target.name === "inflowCredit30" ||
          e.target.name === "inflowOut30" ||
          e.target.name === "send30" ||
          e.target.name === "openingStock180" ||
          e.target.name === "inflowShop180" ||
          e.target.name === "inflowCredit180" ||
          e.target.name === "inflowOut180" ||
          e.target.name === "send180" ||
          e.target.name === "openingStock375" ||
          e.target.name === "inflowShop375" ||
          e.target.name === "inflowCredit375" ||
          e.target.name === "inflowOut375" ||
          e.target.name === "send375" ||
          e.target.name === "openingStock750" ||
          e.target.name === "inflowShop750" ||
          e.target.name === "inflowCredit750" ||
          e.target.name === "inflowOut750" ||
          e.target.name === "send750" ||
          e.target.name === "inflowShop30" ||
          e.target.name === "openingStock30" ||
          e.target.name === "inflowCredit30" ||
          e.target.name === "inflowOut30" ||
          e.target.name === "send30"
        ) {
          obj.sales30 = Number(obj.sumRemaining30) - Number(obj.closingStock30);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(sale30);

    const saleTotal750 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales750" || e.target.name === "rate750") {
          obj.total750 = Number(obj.sales750) * Number(obj.rate750);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(saleTotal750);

    const saleTotal375 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales375" || e.target.name === "rate375") {
          obj.total375 = Number(obj.sales375) * Number(obj.rate375);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(saleTotal375);

    const saleTotal180 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales180" || e.target.name === "rate180") {
          obj.total180 = Number(obj.rate180) * Number(obj.sales180);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(saleTotal180);

    const saleTotal30 = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales30" || e.target.name === "rate30") {
          obj.total30 = Number(obj.rate30) * Number(obj.sales30);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(saleTotal30);

    const grandT = beerShopFrontFrist.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "sales30" || e.target.name === "rate30") {
          obj.grandTotal = Number(obj.sales30) * Number(obj.rate30);
        }
        return obj;
      } else return returned;
    });

    setBeerShopFrontFrist(grandT);

    localStorage.setItem("pegForm", JSON.stringify(beerShopFrontFrist));
    localStorage.setItem(
      "pegFormTotal",
      JSON.stringify(
        beerShopFrontFrist.reduce(
          (total, curr) => (total = total + Number(curr.grandTotal)),
          0
        )
      )
    );
  };

  const handelFristFormSubmit = () => {
    console.log(beerShopFrontFrist);
  };

  // ==================================================== Second Form ====================================================

  const beerBarSecondFormTamp = {
    size: {
      sizes: [
        {
          _id: null,
          currentStock: 0,
          quantityInML: 750,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 375,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 180,
        },
      ],
    },
    BrandName: "",
    openingStock650: "",
    openingStock375: "",
    openingStock180: "",

    infllowPuchase650: "",
    infllowPuchase375: "",
    infllowPuchase180: "",

    buyShop650: "",
    buyShop375: "",
    buyShop180: "",

    incomePurchesOut650: "",
    incomePurchesOut375: "",
    incomePurchesOut180: "",

    buyRateOut750: "",
    buyRateOut375: "",
    buyRateOut180: "",

    infllowCradit750: "",
    infllowCradit375: "",
    infllowCradit180: "",

    send650: "",
    send375: "",
    send180: "",

    sumRemaining650: "",
    sumRemaining375: "",
    sumRemaining180: "",

    closingStock650: "",
    closingStock375: "",
    closingStock180: "",

    sals650: "",
    sals375: "",
    sals180: "",

    total650: "",
    total375: "",
    total180: "",

    Amount: "",
  };
  const [beerShopFrontSecond, setBeerShopFrontSecond] = useState([
    beerBarSecondFormTamp,
  ]);

  const secondFormOnChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...beerShopFrontSecond];
    list[index][name] = value;
    setBeerShopFrontSecond(list);
  };

  const secondFormAddOne = () => {
    setBeerShopFrontSecond([...beerShopFrontSecond, beerBarSecondFormTamp]);
  };

  const secondFormAddFive = () => {
    setBeerShopFrontSecond([
      ...beerShopFrontSecond,
      beerBarSecondFormTamp,
      beerBarSecondFormTamp,
      beerBarSecondFormTamp,
      beerBarSecondFormTamp,
      beerBarSecondFormTamp,
    ]);
  };

  // ==================================================== Third Form ====================================================
  const beerBarThirdFormTamp = {
    description: "",
    buyingPrice: 0,
    openingStock: 0,
    infllow: 0,
    sum: 0,
    closingStock: 0,
    sales: 0,
    rates: 0,
    sumreminder: 0,
  };
  const [beerShopFrontThird, setBeerShopFrontThird] = useState([
    beerBarThirdFormTamp,
  ]);

  const barSuplementsPrev = JSON.parse(localStorage.getItem("barSuplements"));

  useEffect(() => {
    if (barSuplementsPrev) {
      setBeerShopFrontThird(barSuplementsPrev);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const thirdFormOnChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...beerShopFrontThird];
    list[index][name] = value;
    setBeerShopFrontThird(list);

    const sumStock = beerShopFrontThird.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "openingStock" || e.target.name === "infllow") {
          obj.sum = Number(obj.openingStock) + Number(obj.infllow);
        }
        return obj;
      } else return returned;
    });
    setBeerShopFrontThird(sumStock);

    const totalSales = beerShopFrontThird.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStock" ||
          e.target.name === "infllow" ||
          e.target.name === "sum" ||
          e.target.name === "closingStock"
        ) {
          obj.sales = Number(obj.sum) - Number(obj.closingStock);
        }
        return obj;
      } else return returned;
    });
    setBeerShopFrontThird(totalSales);

    const total = beerShopFrontThird.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (e.target.name === "rates" || e.target.name === "closingStock") {
          obj.sumreminder = Number(obj.rates) * Number(obj.sales);
        }
        return obj;
      } else return returned;
    });
    setBeerShopFrontThird(total);

    localStorage.setItem("barSuplements", JSON.stringify(beerShopFrontThird));
    localStorage.setItem(
      "barSuplementsTotal",
      JSON.stringify(
        beerShopFrontThird.reduce(
          (total, curr) => (total = total + curr.sumreminder),
          0
        )
      )
    );
  };

  const thirdFormAddOne = (e) => {
    e.preventDefault()
    setBeerShopFrontThird([...beerShopFrontThird, beerBarThirdFormTamp]);
  };

  const thirdFormAddFive = () => {
    setBeerShopFrontThird([
      ...beerShopFrontThird,
      beerBarThirdFormTamp,
      beerBarThirdFormTamp,
      beerBarThirdFormTamp,
      beerBarThirdFormTamp,
      beerBarThirdFormTamp,
    ]);
  };

  const removeThirdForm = (index) => {
    const list = [...beerShopFrontThird];
    list.splice(index, 1);
    setBeerShopFrontThird(list);
    localStorage.setItem("barSuplements", JSON.stringify(list));

    
  }

  const addOne = () => {
    thirdFormAddOne();
    secondFormAddOne();
  };

  ///////////////////////////////////////////////
  //                  secorn form              //
  /////////////////////////////////////////////*/

  const beerShopMidTemp = {
    brandName: "",
    liquorID: "",
    ml: 90,
    averageRateOtherMl: 0,
    averageRate30: 0,
    initialOtherMl: 0,
    initial30: 0,
    openingStockOtherMl: 0,
    openingStock30: 0,
    inflowPurchaseOtherMl: 0,
    inflowPurchase30: 0,
    buyRateShopBarOtherMl: 0,
    buyRateShopBar30: 0,
    inflowPurchaseFromOutsideOtherMl: 0,
    inflowPurchaseFromOutside30: 0,
    buyRateShopOutOtherMl: 0,
    buyRateShopOut30: 0,
    inflowCreditOtherMl: 0,
    inflowCredit30: 0,
    sendOtherMl: 0,
    send30: 0,
    sumRemaining30: 0,
    sumRemainingOtherML: 0,
    closingStock30: 0,
    closingStockOtherML: 0,
    sale30: 0,
    saleOtherML: 0,
    rate30: 0,
    rateOtherML: 0,
    total: 0,
    size: {
      sizes: [
        {
          _id: null,
          currentStock: 0,
          quantityInML: 750,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 375,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 180,
        },
      ],
    },
  };

  const [beerShopMid, setBeerShopMid] = useState([beerShopMidTemp]);

  const smallPegFormPrev = JSON.parse(localStorage.getItem("smallPegForm"));

  useEffect(() => {
    if (smallPegFormPrev) {
      setBeerShopMid(smallPegFormPrev);
      sethasMoreSmall(false)
    } else {
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
            let firstFormData = beerShopMid;

            if (!smallPegFormPrev && response.data.data.length > 0) {
              const liq = response.data.data.filter((item) => {
                if (item.type === "WINE") {
                  return item;
                }
              });


              

              liq.map((parent) => {
                const quan30 = parent.sizes.find(
                  (elem) => elem.quantityInML === 30
                );
                parent.sizes.map((item) => {
                  if (
                    item.quantityInML !== 750 &&
                    item.quantityInML !== 375 &&
                    item.quantityInML !== 180 &&
                    item.quantityInML !== 30 &&
                    item.currentStock > 0
                  ) {
                    const newFormData = { ...beerShopMidTemp };
                  
                    newFormData.brandName = parent.brandName;
                    newFormData.liquorID = parent._id;
                    newFormData.size = parent
                    newFormData.ml = item.quantityInML;
                    newFormData.openingStockOtherMl = item.currentStock;
                    newFormData.openingStock30 = Number(item.currentStock)*Number(item.quantityInML/30);
                    newFormData.sumRemaining30 = Number(item.currentStock)*Number(item.quantityInML/30);
                    newFormData.sale30 = Number(item.currentStock)*Number(item.quantityInML/30);
                    newFormData.averageRateOtherMl =
                      item.averageRate.$numberDecimal;
                    newFormData.averageRate30 =
                      quan30.averageRate.$numberDecimal;
                    newFormData.initialOtherMl = item.averageRate.$numberDecimal;
                    newFormData.buyRateShopBarOtherMl = item.rate;
                    newFormData.initial30 = quan30.averageRate.$numberDecimal;
                    firstFormData = [newFormData, ...firstFormData];
                    setBeerShopMid(firstFormData);
                  }
                });
              });
            }

            setPage((page) => page + 1);
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 404) {
              sethasMoreSmall(false);
            }
          });
      };
      fetchOptions();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const midFormOnChange = (e, index) => {
    const pegCount = beerShopMid[index].ml / 30;

    const calPegPrice = (a, b, c) => {
      const d =Number( Number(a) * Number(b)) || 0;
      return Number(Number(d) / Number(c)) || 0;
    };

    const calPegs = (a,b)=>{
      return Number(a)* Number(b)
    }

    const secondFormHandel = beerShopMid.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setBeerShopMid(secondFormHandel);

    const handelInitialPrice = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (
          e.target.name === "brandName" ||
          e.target.name === "ml" 
        ) {
          obj.buyRateShopBarOtherMl = obj.size.sizes.find((brand)=>brand.quantityInML===Number(obj.ml)).rate
          

        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(handelInitialPrice);
    // **********************formula******************

    const pegStock = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "inflowPurchaseFromOutsideOtherMl" ||
          e.target.name === "inflowCreditOtherMl" ||
          e.target.name === "sendOtherMl" ||
          e.target.name === "openingStockOtherMl"
        ) {
          obj.inflowPurchase30 =
            Number(obj.inflowPurchaseOtherMl ? obj.inflowPurchaseOtherMl : 0) * Number(pegCount);
          obj.inflowPurchaseFromOutside30 =
            Number(obj.inflowPurchaseFromOutsideOtherMl) * Number(pegCount);
          obj.inflowCredit30 =
            Number(obj.inflowCreditOtherMl) * Number(pegCount);
          obj.send30 = Number(obj.sendOtherMl) * Number(pegCount);
          obj.openingStock30 = calPegs(obj.openingStockOtherMl,pegCount)
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(pegStock);

    const priceShop = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "buyRateShopBarOtherMl" ||
          e.target.name === "inflowPurchase30"
        ) {
          obj.buyRateShopBar30 = calPegPrice(
            obj.inflowPurchaseOtherMl,
            obj.buyRateShopBarOtherMl,
            obj.inflowPurchase30
          );
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(priceShop);

    const priceOut = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "inflowPurchaseFromOutsideOtherMl" ||
          e.target.name === "buyRateShopOutOtherMl" ||
          e.target.name === "inflowPurchaseFromOutside30"
        ) {
          obj.buyRateShopOut30 = calPegPrice(
            obj.inflowPurchaseFromOutsideOtherMl,
            obj.buyRateShopOutOtherMl,
            obj.inflowPurchaseFromOutside30
          );
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(priceOut);

    const handelavg = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "buyRateShopBarOtherMl" ||
          e.target.name === "inflowPurchaseFromOutsideOtherMl" ||
          e.target.name === "buyRateShopOutOtherMl"
        ) {
          const buyShop =
           Number( Number(obj.inflowPurchaseOtherMl ? obj.inflowPurchaseOtherMl : 0) *
            Number(obj.buyRateShopBarOtherMl ? obj.buyRateShopBarOtherMl : 0)) || 0;
          const buyOut =
            Number(Number(obj.inflowPurchaseFromOutsideOtherMl ? obj.inflowPurchaseFromOutsideOtherMl : 0) *
            Number(obj.buyRateShopOutOtherMl ? obj.buyRateShopOutOtherMl : 0)) || 0;
          const totalStock =
            Number(obj.inflowPurchaseOtherMl ? obj.inflowPurchaseOtherMl : 0) +
            Number(obj.inflowPurchaseFromOutsideOtherMl ? obj.inflowPurchaseFromOutsideOtherMl : 0) +
            Number(obj.openingStockOtherMl ? obj.openingStockOtherMl : 0);

          const stock =
            Number(Number(obj.initialOtherMl ? obj.initialOtherMl : 0) * Number(obj.openingStockOtherMl ? obj.openingStockOtherMl : 0)) || 0;
          obj.averageRateOtherMl = Number((buyShop + buyOut + stock) / totalStock) || 0;
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(handelavg);

    const handleAvg30 = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });

        if (
          e.target.name === "inflowPurchase30" ||
          e.target.name === "buyRateShopBar30" ||
          e.target.name === "inflowPurchaseFromOutside30" ||
          e.target.name === "buyRateShopOut30" ||
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "buyRateShopBarOtherMl" ||
          e.target.name === "inflowPurchaseFromOutsideOtherMl" ||
          e.target.name === "buyRateShopOutOtherMl"
        ) {
          const buyShop =
            Number(Number(obj.inflowPurchase30 ? obj.inflowPurchase30 : 0) * Number(obj.buyRateShopBar30 ? obj.buyRateShopBar30 : 0)) || 0;
          const buyOut =
            Number(Number(obj.inflowPurchaseFromOutside30 ? obj.inflowPurchaseFromOutside30 : 0) *
            Number(obj.buyRateShopOut30 ? obj.buyRateShopOut30 : 0)) || 0;
          const totalStock =
            Number(obj.inflowPurchase30 ? obj.inflowPurchase30 : 0) +
            Number(obj.inflowPurchaseFromOutside30 ? obj.inflowPurchaseFromOutside30 : 0) +
            Number(obj.openingStock30 ? obj.openingStock30 : 0);

          const stock = Number(Number(obj.initial30 ? obj.initial30 : 0) * Number(obj.openingStock30 ? obj.openingStock30 : 0)) || 0;
          obj.averageRate30 = Number((buyShop + buyOut + stock) / totalStock)||0;
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(handleAvg30);

    const yog = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStockOtherMl" ||
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "inflowCreditOtherMl" ||
          e.target.name === "inflowPurchaseFromOutsideOtherMl" ||
          e.target.name === "sendOtherMl"
        ) {
          obj.sumRemainingOtherML =
            Number(obj.openingStockOtherMl) +
            Number(obj.inflowPurchaseOtherMl) +
            Number(obj.inflowCreditOtherMl) +
            Number(obj.inflowPurchaseFromOutsideOtherMl) -
            Number(obj.sendOtherMl);
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(yog);

    const yog30 = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "openingStockOtherMl" ||
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "inflowCreditOtherMl" ||
          e.target.name === "inflowPurchaseFromOutsideOtherMl" ||
          e.target.name === "sendOtherMl" ||
          e.target.name === "openingStock30" ||
          e.target.name === "inflowPurchase30" ||
          e.target.name === "inflowCredit30" ||
          e.target.name === "inflowPurchaseFromOutside30" ||
          e.target.name === "send30"
        ) {
          obj.sumRemaining30 =
            Number(obj.openingStock30) +
            Number(obj.inflowPurchase30) +
            Number(obj.inflowCredit30) +
            Number(obj.inflowPurchaseFromOutside30) -
            Number(obj.send30);
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(yog30);

    const sales = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sumRemaining30" ||
          e.target.name === "closingStock30" ||
          e.target.name === "openingStock30" ||
          e.target.name === "inflowPurchase30" ||
          e.target.name === "inflowCredit30" ||
          e.target.name === "inflowPurchaseFromOutside30" ||
          e.target.name === "send30" ||
          e.target.name === "openingStockOtherMl" ||
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "inflowCreditOtherMl" ||
          e.target.name === "inflowPurchaseFromOutsideOtherMl" ||
          e.target.name === "sendOtherMl" ||
          e.target.name === "openingStock30" ||
          e.target.name === "inflowPurchase30" ||
          e.target.name === "inflowCredit30" ||
          e.target.name === "inflowPurchaseFromOutside30" ||
          e.target.name === "send30"
        ) {
          obj.sale30 = Number(obj.sumRemaining30) - Number(obj.closingStock30);
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(sales);

    const totals = beerShopMid.map((returned, i) => {
      if (index === i) {
        let obj = Object.assign(returned, { [e.target.name]: e.target.value });
        if (
          e.target.name === "sale30" ||
          e.target.name === "rate30" ||
          e.target.name === "sumRemaining30" ||
          e.target.name === "closingStock30" ||
          e.target.name === "openingStock30" ||
          e.target.name === "inflowPurchaseOtherMl" ||
          e.target.name === "inflowCredit30" ||
          e.target.name === "inflowPurchaseFromOutside30" ||
          e.target.name === "send30"
        ) {
          obj.total = Number(obj.sale30) * Number(obj.rate30);
        }
        return obj;
      } else return returned;
    });
    setBeerShopMid(totals);

    localStorage.setItem("smallPegForm", JSON.stringify(beerShopMid));
    localStorage.setItem(
      "smallPegFormTotal",
      JSON.stringify(
        beerShopMid.reduce(
          (total, curr) => (total = total + Number(curr.total)),
          0
        )
      )
    );
  };

  const midFormAddOne = () => {
    setBeerShopMid([...beerShopMid, beerShopMidTemp]);
  };

  const removeMidForm = (index) => {
    const list = [...beerShopMid];
    list.splice(index, 1);
    setBeerShopMid(list);
    localStorage.setItem("smallPegForm", JSON.stringify(list));
    localStorage.setItem(
      "smallPegFormTotal",
      JSON.stringify(
        list.reduce(
          (total, curr) => (total = total + Number(curr.total)),
          0
        )
      )
    );
  }

  ///////   End of secorn form         ////////

  return {
    handelFristFormSubmit,
    fristFormAddOne,
    fristFormAddFive,
    thirdFormAddOne,
    fristFormOnChange,
    beerShopFrontFrist,
    beerShopFrontSecond,
    beerShopFrontThird,
    addOne,
    beerShopMid,
    midFormOnChange,
    midFormAddOne,
    thirdFormOnChange,
    removeFristForm,
    removeMidForm,
    hasMoreBig,
    hasMoreSmall,
    removeThirdForm

  };
};

export default UseBeerShopFront;
