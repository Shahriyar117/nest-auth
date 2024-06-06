import axios from "axios";

export const Signup = async (userData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const Login = async (credentials) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signin`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
