import { useState } from "react";
import validator from "validator";
import { OrderForm } from "..";

export const ValidateOrderForm = (props) => {
  const [errorState, setErrorState] = useState("");

  const onSubmit = (e) => {
    if (validator.isMobilePhone(e.phone, ["ru-RU"])) {
      alert("Заказ создан успешно. Order create succefully!");
      console.log({ ...e, ...props.cartItems });
      setTimeout(() => {
        props.cleanArray();
      }, 1000);
    }
  };

  return (
    <OrderForm
      errorState={errorState}
      setErrorState={setErrorState}
      onSubmit={onSubmit}
    />
  );
};
