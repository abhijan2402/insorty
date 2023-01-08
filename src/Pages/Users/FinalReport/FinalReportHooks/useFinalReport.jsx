import { useState } from "react";

const useFinalReport = () => {
  const finalReportData = {
    partyName: "",
    brand: "",
    theNumber: "",
  };

  const [finalReportSockExcessState, setFinalReportSockExcessState] = useState([
    useFinalReport,
  ]);

  const [finalReportState, setFinalReportState] = useState([finalReportData]);

  const addFiveFinalReeport = () => {
    let data = finalReportState;

    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          partyName: "",
          brand: "",
          theNumber: 0,
        },
      ];
    }
    setFinalReportState(data);
  };

  const addOneFinalReport = () => {
    setFinalReportState([
      ...finalReportState,
      {
        partyName: "",
        brand: "",
        theNumber: 0,
      },
    ]);
  };

  // ================== Stock Excess ==================

  const addFiveStockExcess = () => {
    let data = finalReportSockExcessState;

    for (let i = 0; i < 5; i++) {
      data = [
        ...data,
        {
          partyName: "",
          brand: "",
          theNumber: 0,
        },
      ];
    }
    setFinalReportSockExcessState(data);
  };

  const addOneStockExcess = () => {
    setFinalReportSockExcessState([
      ...finalReportSockExcessState,
      {
        partyName: "",
        brand: "",
        theNumber: 0,
      },
    ]);
  };

  const handelOnChangeFinalReport = (e, index) => {
    const finalReportHandel = finalReportState.map((Partner, i) => {
      if (index === i) {
        return Object.assign(Partner, { [e.target.name]: e.target.value });
      } else {
        return Partner;
      }
    });
    setFinalReportState(finalReportHandel);
  };

  const handelOnChangeStockExcess = (e, index) => {
    const finalReportHandel = finalReportSockExcessState.map((Partner, i) => {
      if (index === i) {
        return Object.assign(Partner, { [e.target.name]: e.target.value });
      } else {
        return Partner;
      }
    });
    setFinalReportSockExcessState(finalReportHandel);
  };

  const finalSumit = finalReportData + finalReportSockExcessState;

  const handelOnSubmitFinalReport = (e) => {
    const handelFinalReport = Object.assign({}, finalSumit);
    console.log(handelFinalReport);
  };

  return {
    finalReportState,
    finalReportSockExcessState,
    addFiveFinalReeport,
    addOneFinalReport,
    handelOnChangeFinalReport,
    handelOnSubmitFinalReport,
    handelOnChangeStockExcess,
    addOneStockExcess,
    addFiveStockExcess,
  };
};

export default useFinalReport;
