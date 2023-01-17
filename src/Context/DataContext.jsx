import { createContext } from "react";
import useFormulasFristFormFront from "../Hooks/useFormulas/useFormulasFristFormFront";
export const DataContextApi = createContext();

const DataContext = ({ children }) => {
  const { totalState } = useFormulasFristFormFront();

  const dataInfo = {
    totalState,
  };
  return (
    <DataContextApi.Provider value={dataInfo}>
      {children}
    </DataContextApi.Provider>
  );
};

export default DataContext;
