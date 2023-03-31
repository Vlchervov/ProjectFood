import { useState } from "react";
import validator from "validator";
import { OrderForm } from "..";

export const ValidateOrderForm = (props) => {
  const [errorState, setErrorState] = useState("");
  const [disabledState, setDisabledSatte] = useState({
    disabled: "",
  });

  const totalCount = props.cartItems.reduce(
    (count, item) => item.count + count,
    0
  );
  const totalPrice = props.cartItems.reduce(
    (amount, item) => item.priceTotal + amount,
    0
  );

  const onSubmit = (e) => {
    if (validator.isMobilePhone(e.phone, ["ru-RU"])) {
      setDisabledSatte({ disabled: true });
      setTimeout(() => {
        props.cleanArray();
        alert("Заказ создан успешно. Order create succefully!");
        console.log({ ...e, ...props.cartItems, totalCount, totalPrice });
      }, 1000);
    } else {
      setErrorState("Неправильный номер");
    }
  };

  return (
    <OrderForm
      errorState={errorState}
      setErrorState={setErrorState}
      onSubmit={onSubmit}
      disabledState={disabledState}
      totalCount={totalCount}
      totalPrice={totalPrice}
    />
  );
};
