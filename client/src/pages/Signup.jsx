import React from "react";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2018/06/30/09/31/background-image-3507320_1280.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
