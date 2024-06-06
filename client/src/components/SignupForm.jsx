import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and at least one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          console.log("Signup form submitted with data:", values);
          navigate("/login");
        } catch (error) {
          console.error("Signup failed:", error.message);
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
            Sign Up
          </h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-bold text-gray-700 mb-1"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="mt-1 text-red-600 text-xs"
            />
          </div>
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
          <div className="mb-6 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold text-gray-700 mb-1"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Confirm Password
            </label>
            <div className="relative">
              <Field
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleToggleConfirmPasswordVisibility}
                className="absolute right-3 top-3"
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className="mt-1 text-red-600 text-xs"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </div>
          <div className="text-right">
            <Link to="/login" className="text-sm hover:text-blue-400 underline">
              Already Registered? Log In
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
