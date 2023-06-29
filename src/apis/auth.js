import axios from "axios";

export const requestSignUp = async (email, password) => {
  return await axios.post(`${API_URL}/auth/signup`, { email, password });
};

export const requestSignIn = async (email, password) => {
  return await axios.post(`${API_URL}/auth/signin`, { email, password });
};
