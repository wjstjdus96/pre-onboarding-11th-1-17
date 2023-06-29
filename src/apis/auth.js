import { axiosClient } from "./axiosClient";

export const requestSignUp = async (email, password) => {
  return await axiosClient.post(`/auth/signup`, { email, password });
};

export const requestSignIn = async (email, password) => {
  return await axiosClient.post(`/auth/signin`, { email, password });
};
