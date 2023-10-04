import axios from "axios";
import { baseURL } from "../config";

const api = axios.create();

// request interceptor method:
api.interceptors.request.use(
  function (config) {
    config.baseURL = baseURL;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptor method:
api.interceptors.response.use(
  function (res) {
    return res.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };
