import { useCallback } from "react";

import { useSnackbar } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axios";

import { useNavigate } from "react-router";

const useHosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  const getSingleHost = async (id) => {
    try {
      const res = await axiosInstance.get(`/getHost/${id}`);
      console.log(res.data.currentHost);
      return res.data.currentHost;
    } catch (e) {
      console.log(e);
    }
  };
  const sendRequest = async (formData) => {
    try {
      const body = JSON.stringify(formData);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axiosInstance.post("/sendRequest", body, config);
      console.log(res.data);
      enqueueSnackbar("Request send successfully!", { variant: "success" });
    } catch (e) {
      console.log(e);
      enqueueSnackbar("Some Error Occured", { variant: "error" });
    }
  };
  return {
    getSingleHost,
    sendRequest,
  };
};
export default useHosts;
