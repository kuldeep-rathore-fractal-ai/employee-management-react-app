import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 5000,
});

// request interceptor to add auth token if needed

// response interceptor to handle global responses

export default apiClient;

