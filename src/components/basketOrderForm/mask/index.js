import { useState } from "react";
import validator from "validator";
import { OrderForm } from "..";

export const ValidateOrderForm = () => {
  const [telState, setTelState] = useState({
    phone: "+7",
    isValidPhone: false,
  });
  const [errorState, setErrorState] = useState("");

  const HandlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputsData = form.querySelectorAll("input");
    const arrDataFromForm = {};
    Array.from(inputsData).map((e) => {
      const name = e.name;
      const value =
        name !== "phone"
          ? e.value
          : e.value.replace(/\D/g, "").replace(/^7/, "+7").replace(/^8/, "+7");
      arrDataFromForm[name] = value;

      return value;
    });
    if (validator.isMobilePhone(arrDataFromForm["phone"], ["ru-RU"])) {
      setTelState({
        isValidPhone: true,
        phone: arrDataFromForm["phone"],
      });
    } else {
      setErrorState("Проверьте правильность введённого номера");
    }
  };

  return (
    <OrderForm
      telState={telState}
      setTelState={setTelState}
      errorState={errorState}
      setErrorState={setErrorState}
      HandlerSubmit={HandlerSubmit}
    />
  );
};
