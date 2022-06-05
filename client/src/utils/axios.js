import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://petscape-api.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
});

export default axiosInstance;
