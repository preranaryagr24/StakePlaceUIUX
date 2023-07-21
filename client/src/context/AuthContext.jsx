import React, { useContext, useState, useEffect } from "react";

import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const user = localStorage.getItem("DDHN");

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && setCurrentUser(JSON.parse(user));
    setLoading(false);
  }, [user]);

  const addUserToLocalStorage = (user) => {
    localStorage.setItem("DDHN", JSON.stringify(user));
  };

  const removeUserToLocalStorage = () => {
    localStorage.removeItem("DDHN");
  };

  const signin = async (name, phone, email, password) => {
    try {
      const user = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/signup`,
        {
          name,
          phone,
          email,
          password,
        }
      );
      if (user.status) {
        setCurrentUser(user.email);
        addUserToLocalStorage({ user: user.email });
      }
      // console.log(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      const user = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        {
          email,
          password,
        }
      );
      // console.log(user);
      if (user.status) {
        setCurrentUser(user.email);
        addUserToLocalStorage({ user: user.email });
      }
      // console.log(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      removeUserToLocalStorage();
      setCurrentUser(null);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    currentUser,
    signin,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
