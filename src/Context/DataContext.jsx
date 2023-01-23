import { createContext, useState } from "react";
import useFormulasFristFormFront from "../Hooks/useFormulas/useFormulasFristFormFront";
export const DataContextApi = createContext();

const DataContext = ({ children }) => {
  const { totalState } = useFormulasFristFormFront();
  const [intoAccountState, setintoAccountState] = useState(0);

  const dataInfo = {
    totalState,
    intoAccountState,
    setintoAccountState,
  };
  return (
    <DataContextApi.Provider value={dataInfo}>
      {children}
    </DataContextApi.Provider>
  );
};

export default DataContext;
