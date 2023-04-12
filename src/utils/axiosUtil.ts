import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    if (err.code === 401) {
      return Promise.reject(err);
    }
  }
);

export default axiosInstance;
