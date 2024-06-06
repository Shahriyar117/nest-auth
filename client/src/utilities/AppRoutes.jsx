import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Route, Routes } from "react-router-dom";
import { ProtectedAuthRoute, ProtectedRoute } from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedAuthRoute>
              <Login />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedAuthRoute>
              <Signup />
            </ProtectedAuthRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
