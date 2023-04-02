import { useState } from "react";
import validator from "validator";
import { OrderForm } from "..";
import { newAxiosInstance } from "../../API/Api";

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

  async function onSubmit(data) {
    try {
      if (validator.isMobilePhone(data.phone, ["ru-RU"])) {
        await newAxiosInstance
          .post("/orders", {
            orderType: data.orderType,
            phone: data.phone,
            commentForOrder: data.commentForOrder,
            totalCount: totalCount,
            totalPrice: totalPrice,
            infoAboutOrder: {
              ...props.cartItems,
            },
          })
          .then(() => {
            setDisabledSatte({ disabled: true });
            setTimeout(() => {
              props.cleanArray();
              alert("Заказ создан успешно. Order create succefully!");
            }, 1200);
          });
      } else {
        setErrorState("Неправильный номер");
      }
    } catch (err) {
      console.log(err.data.response);
    }
  }

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
