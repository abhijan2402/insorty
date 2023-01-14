import useCashReciveAdd from "../useCashReciveAdd";
import useFristFormAdd from "../useFristFormAdd";
import useRmlAdd from "../useRmlAdd";

const useHandelSubmitBackAPI = () => {
  const token = localStorage.getItem("token");

  const { cashReciveState } = useCashReciveAdd();
  const { fristFormState } = useFristFormAdd();
  const { addRmlState } = useRmlAdd();

  // use cashReciveState to send data to API
  const borrowCashReturnData = {};
  for (let index = 0; index < cashReciveState.length; index++) {
    borrowCashReturnData[`comment${index}`] = cashReciveState[index].reson;
    borrowCashReturnData[`cash${index}`] = cashReciveState[index].amount;
  }
  // use cashReciveState to send data to API

  // fristFormState  State api

  // fristFormState  State api

  // add Rml

  
  // add Rml

  const handelSubmitBackAPI = async () => {
    const handelSubmitCashRecive = fetch(
      "https://insorty-api.onrender.com/shop/borrowCashReturnData",
      {
        method: "POST",
        body: JSON.stringify(borrowCashReturnData),
        headers: { "Content-Type": "application/json", cookie_token: token },
      }
    ).then((response) => response.json());

    const api2Promise = fetch("API2_URL", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    Promise.all([api1Promise, api2Promise])
      .then(([result1, result2]) => {
        console.log(result1);
        console.log(result2);
      })
      .catch((error) => console.error("Error:", error));
  };

  return {};
};

export default useHandelSubmitBackAPI;
