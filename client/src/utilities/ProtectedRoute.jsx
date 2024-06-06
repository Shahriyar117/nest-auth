import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const userData = localStorage.getItem("user");
  let location = useLocation();

  if (!user && !userData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export const ProtectedAuthRoute = ({ children }) => {
  const { user } = useAuth();
  const userData = localStorage.getItem("user");
  let location = useLocation();

  if (user || userData) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
