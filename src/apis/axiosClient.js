import axios from "axios";
import { getToken } from "../utils/checkToken";

const accessToken = getToken();

export const axiosClient = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
});
