import Axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:5000/api/";

const axios = Axios.create({
  withCredentials: true,
});

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data) {
    return ajax < T > (endpoint, "PUT", data);
  },
  delete(endpoint, data) {
    return ajax < T > (endpoint, "DELETE", data);
  },
};

async function ajax(endpoint, method = "GET", data = null) {
  try {
    const config = {
      url: `${BASE_URL}${endpoint}`,
      method,
      withCredentials: true,
      ...(method === "GET" ? { params: data } : { data }),
    };

    const res = await axios(config);
    return res.data;
  } catch (err) {
    console.log(
      `Had issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`,
      data
    );
    console.dir(err);
    if (err.response?.status === 401) {
      sessionStorage.clear();
      window.location.assign("/");
    }
    throw err;
  }
}
