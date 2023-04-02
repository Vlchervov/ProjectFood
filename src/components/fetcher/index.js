import { newAxiosInstance } from "../API/Api";

export const fetcher = async () => {
  const responce = await newAxiosInstance.get("/orders");

  if (responce.statusText !== "OK") {
    const error = new Error();

    error.message = "An error occured while fetching the data...";
    throw error;
  }
  return responce.data;
};
