import axios from "axios";
import { makeToast } from "shared/toaster";
import { appBase } from "../../constants/app";

const api = axios.create({
  baseURL: `${appBase.apiUrl}/api`,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers?.common?.set("Content-Type", "application/json");
    config.headers?.common?.set("X-Requested-With", "XMLHttpRequest");
    const token = localStorage.getItem("token");
    if (token) {
      (config.headers as any).Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (!response?.data?.success) {
      throw new Error("No response from server");
    }
    return response.data;
  },
  (error) => {
    if (!axios.isCancel(error)) {
      makeToast({
        type: "error",
        message:
          error?.response?.data?.error ||
          "Hmmm... something is not right, please try again",
      });
    }
    return Promise.reject(error);
  }
);

export { api };
