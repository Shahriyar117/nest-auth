import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <header className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nest Auth</h1>
        <button
          onClick={handleLogout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </header>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the application.</h1>
      </div>
    </>
  );
};

export default Home;
