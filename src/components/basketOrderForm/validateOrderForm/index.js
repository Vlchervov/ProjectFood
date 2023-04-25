import { useState } from "react";
import validator from "validator";
import { OrderForm } from "..";
import { newAxiosInstance } from "../../API/Api";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/cart/cart.slice";

export const ValidateOrderForm = (props) => {
  const dispatch = useDispatch();
  const [errorState, setErrorState] = useState("");
  const [disabledState, setDisabledSatte] = useState({
    disabled: false,
  });

  const totalCount = props.cart.reduce((count, item) => item.count + count, 0);
  const totalPrice = props.cart.reduce(
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
            city: props.currentCity,
            infoAboutOrder: {
              ...props.cart,
            },
          })
          .then(() => {
            setDisabledSatte({ disabled: true });
            setTimeout(() => {
              dispatch(actions.cleanArray(null));
              alert("Заказ создан успешно. Order create succefully!");
            }, 1200);
          });
      } else {
        setErrorState("Неправильный номер");
      }
    } catch (err) {
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
