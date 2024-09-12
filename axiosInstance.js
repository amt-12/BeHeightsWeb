// axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.2:5000",
  timeout: 10000,
});

// Request interceptor
instance.interceptors.request.use(
  async (config) => {
    try {
      
      config.headers.Authorization = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJfaWQiOiI2NmQ1YjMwYjFiMTU5MThiZDU3MzQwYzIiLCJwaG9uZSI6IjEyMzQ1Njc4OSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI2MTA5MTkzLCJleHAiOjE3MjYxMTI3OTN9.0oFunFo8QBoWowc7QWAAn4B08IEq5GLxPMn_4JuL-gQ"}`;
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