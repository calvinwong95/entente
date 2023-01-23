import React, { useState, createContext } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  //loading state
  const [loading, setLoading] = useState(false);
  //registration data
  const [userData, setUserData] = useState({
    username: "wongcheehoe123",
    password: "wongcheehoe123",
    category: "Engineering",
    email: "wongcheehoe@gmail.com",
    phone_number: "019-5302012",
    company_image: null,
  });
  //company display data
  const [displayData, setDisplayData] = useState({
    company_name: "",
    broadcast_message: "",
  });
  //login Error
  const [loginError, setLoginError] = useState(false);

  //reset password email condition
  const [passwordResetSent, setPasswordResetSent] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        userData,
        setUserData,
        loginError,
        setLoginError,
        passwordResetSent,
        setPasswordResetSent,
        displayData,
        setDisplayData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
