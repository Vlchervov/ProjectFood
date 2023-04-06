import axios from "axios";

 export const newAxiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});
