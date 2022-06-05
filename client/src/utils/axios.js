import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://petscape-api.hperokuapp.com/",
  // baseURL: "http://localhost:5000/",
});

export default axiosInstance;
