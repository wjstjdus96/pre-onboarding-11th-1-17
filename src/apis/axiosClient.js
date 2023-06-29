import axios from 'axios';
import {getToken} from '../utils/checkToken';
import {API_URL} from '../constants/const';

const accessToken = getToken();

export const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
});
