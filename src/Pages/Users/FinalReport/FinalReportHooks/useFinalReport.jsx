import { useState } from "react";

const useFinalReport = () => {
  const finalReportData = {
    partyName: "",
    brand: "",
    theNumber: "",
  };
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

  const handelOnSubmitFinalReport = (e) => {
    const handelFinalReport = Object.assign({}, finalReportState);
    console.log(handelFinalReport);
  };

  return {
    finalReportState,
    addFiveFinalReeport,
    addOneFinalReport,
    handelOnChangeFinalReport,
    handelOnSubmitFinalReport,
  };
};

export default useFinalReport;
