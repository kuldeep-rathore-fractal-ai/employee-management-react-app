import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000/api/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

// request interceptor to add auth token if needed

// response interceptor to handle global responses

export default apiClient;

