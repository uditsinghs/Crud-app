/* eslint-disable react-refresh/only-export-components */

/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const authozizationToken = `Bearer ${token}`
  
  
  const [user, setUser] = useState();


  const storeDataInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  const logoutUser = () => {
    setToken("")
    return localStorage.removeItem("token")
  }

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/userdetail", {
        method: "GET",
        headers: {
          Authorization: authozizationToken
        }
      })
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData)
      }

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    userAuthentication()
},[])
  return (
    <AuthContext.Provider value={{ storeDataInLS, logoutUser, isLoggedIn, user,authozizationToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


