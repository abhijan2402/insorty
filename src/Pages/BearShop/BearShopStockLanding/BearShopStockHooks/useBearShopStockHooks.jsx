import { useState } from "react";

const useStockHooks = () => {
  const stockLandingStockFormData = {
    brandName: "",
    sizeMl: 0,
    inflowNumber: 0,
    inflowComment: "",
    sendNumber: 0,
    sendDeposit: 0,
    debit: 0,
  };
  const [stockLandingStocks, setStockLandingStocks] = useState([
    stockLandingStockFormData,
  ]);

  const addOneStockLandingStock = () => {
    setStockLandingStocks([
      ...stockLandingStocks,
      {
        brandName: "",
        sizeMl: 0,
        inflowNumber: 0,
        inflowComment: "",
        sendNumber: 0,
        sendDeposit: 0,
        debit: 0,
      },
    ]);
  };

  const handelOnChangeStockLanding = (e, index) => {
    const stockLandingHandel = stockLandingStocks.map((stockLanding, i) => {
      if (index === i) {
        return Object.assign(stockLanding, { [e.target.name]: e.target.value });
      } else {
        return stockLanding;
      }
    });
    setStockLandingStocks(stockLandingHandel);
  };

  const handelOnSubmitStockLanding = (event) => {
    const handelStockLanding = stockLandingStocks;
    console.log(handelStockLanding);
  };

  return {
    handelOnSubmitStockLanding,
    handelOnChangeStockLanding,
    addOneStockLandingStock,
    stockLandingStocks,
  };
};

export default useStockHooks;
