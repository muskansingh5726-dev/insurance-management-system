import axios from "axios";

const API = axios.create({
  baseURL: "https://insurance-management-system-jhrj.onrender.com/api",
});

console.log("API Base URL:", API.defaults.baseURL);

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("Request URL:", config.baseURL + config.url);

  return config;
});

export default API;