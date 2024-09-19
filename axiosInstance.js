// axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.beheights.com",
  timeout: 10000,
});

// Request interceptor
instance.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = localStorage.getItem("accessToken")
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    } catch (error) {
      console.error("Error setting Authorization header:", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log("Response data:", response.data);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    if (error.response.status === 401) {
      // Redirect to login or handle unauthorized error
      console.log("Unauthorized error. Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default instance;