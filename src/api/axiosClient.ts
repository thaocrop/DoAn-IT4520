import axios from "axios";
const queryString = require("query-string");
import { store } from "src/redux";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  // const token = await getFirebaseToken();
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  //
  const token = store.getState().auth.auth?.accessToken;
  config.headers["access-token"] = token;

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },

  (error: any) => {
    // Handle errors
    if (error.response && error.response.status === 401) {
      //logout
    }
    throw error;
  }
);

export default axiosClient;