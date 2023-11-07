import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://654a3b8ae182221f8d52c75a.mockapi.io/",
    headers: token
      ? {
          authorization: `Bearer ${token}`,
        }
      : {},
  });
};
