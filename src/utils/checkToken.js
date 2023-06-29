import {TOKEN_KEY} from '../constants/const';

export const checkToken = () => {
  if (getToken()) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (key, accessToken) =>
  localStorage.setItem(key, accessToken);
