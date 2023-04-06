import { useState } from "react";
import validator from "validator";
import { OrderForm } from "..";
import { newAxiosInstance } from "../../API/Api";

export const ValidateOrderForm = (props: any) => {
  const [errorState, setErrorState] = useState("");
  const [disabledState, setDisabledSatte] = useState({
    disabled: false,
  });

  const totalCount = props.cartItems.reduce(
    (count: number, item: any) => item.count + count,
    0
  );
  const totalPrice = props.cartItems.reduce(
    (amount:number, item: any) => item.priceTotal + amount,
    0
  );

  interface Data {
    orderType: string,
    phone: string,
    commentForOrder: string,
    totalCount: number,
    totalPrice: number,
    city: string,
  }

  async function onSubmit(data: Data) {
    try {
      if (validator.isMobilePhone(data.phone, ["ru-RU"])) {
        await newAxiosInstance
          .post("/orders", {
            orderType: data.orderType,
            phone: data.phone,
            commentForOrder: data.commentForOrder,
            totalCount: totalCount,
            totalPrice: totalPrice,
            city: props.currentCity,
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
    } catch (err: any) {
      console.log(err.data);
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
      currentCity={props.currentCity}
    />
  );
};
