import { newAxiosInstance } from "../API/Api";

export const fetcher = async () => {
  const responce = await newAxiosInstance.get("/orders");

  if (responce.statusText !== "OK") {
    const error = new Error();

    error.message = "Произошла ошибка во время загрузки данных...";
    throw error;
  }
  return responce.data;
};