import React, { createContext, useContext, useState } from "react";
import { Signup, Login } from "../pages/api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const userData = await Login(credentials);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  const handleSignup = async (userData) => {
    try {
      await Signup(userData);
    } catch (error) {
      console.error("Signup failed:", error.message);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
