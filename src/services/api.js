import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 7000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
});

axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) =>
    axiosRetry.isNetworkError(error) || axiosRetry.isRetryableError(error),
});

export default api;