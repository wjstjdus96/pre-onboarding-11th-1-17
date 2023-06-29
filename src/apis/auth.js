import axios from "axios";

export const requestSignUp = async (info) => {
  return await axios.post(`${API_URL}/auth/signup`, info);
};

export const requestSignIn = async (info) => {
  return await axios.post(`${API_URL}/auth/signin`, info);
};
