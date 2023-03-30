import { useState } from "react";
import validator from "validator";
import { OrderForm } from "..";

export const ValidateOrderForm = (props) => {
  const [errorState, setErrorState] = useState("");

  const changeHandler = (e) => {
    const value = e.target.value;
    e.target.value = value
      .replace(/\D/g, "")
      .replace(/^7/, "+7")
      .replace(/^8/, "+7")
      .replace(/^9/, "+79");
  };

  const onSubmit = (e) => {
    if (validator.isMobilePhone(e.phone, ["ru-RU"])) {
      alert("Заказ создан успешно. Order create succefully!");
      console.log({ ...e, ...props.cartItems });
      setTimeout(() => {
        props.cleanArray();
      }, 1000);
    } else {
      setErrorState("Формат номера должен быть: +79");
    }
  };

  return (
    <OrderForm
      errorState={errorState}
      setErrorState={setErrorState}
      changeHandler={changeHandler}
      onSubmit={onSubmit}
    />
  );
};
