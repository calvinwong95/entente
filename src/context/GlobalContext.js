import React, { useState, createContext } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  //loading state
  const [loading, setLoading] = useState(false);
  //registration data
  const [userData, setUserData] = useState("");

  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, userData, setUserData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
