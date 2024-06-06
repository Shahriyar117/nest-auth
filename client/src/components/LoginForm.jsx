import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          console.log("Login form submitted with data:", values);
          navigate("/");
        } catch (error) {
          console.error("Login failed:", error.message);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2
            className="text-2xl font-bold mb-4 text-center"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Log In
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 mb-1"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Email Address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="mt-1 text-red-600 text-xs"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-1"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleTogglePasswordVisibility}
                className="absolute right-3 top-3"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="mt-1 text-red-600 text-xs"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              Log In
            </button>
          </div>
          <div className="flex justify-between">
            <Link
              to="/signup"
              className="text-sm hover:text-blue-400 underline"
            >
              Don't have an account? Sign Up
            </Link>
            <Link
              to="/forgot-password"
              className="text-sm hover:text-blue-400 underline"
            >
              Forgot Password?
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
