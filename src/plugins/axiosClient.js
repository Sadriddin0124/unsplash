import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.unsplash.com",
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = `Bearer 59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8`;
    if (token) {
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosClient;
