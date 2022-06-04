import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://petscape-api.herokuapp.com/",
});

export default axiosInstance;
