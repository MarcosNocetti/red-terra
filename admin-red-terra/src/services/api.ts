import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: `https://api.redterrastudios.com`,
  // baseURL: `http://localhost:8080`,
});

export const contentTypeHeader = {
  "Content-Type": "application/json",
};

export default api;
