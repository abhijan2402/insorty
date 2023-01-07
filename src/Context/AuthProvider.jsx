import { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState("");
  const [loading, setLoading] = useState(true);
  const userInfo = {
    userData,
    setuserData,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
