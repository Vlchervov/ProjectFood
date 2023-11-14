import { useState } from "react";
import validator from "validator";
import { newAxiosInstance } from "../../API/Api";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router";
import { OrderForm } from "../OrderFormComponent";

export const ValidateOrderForm = (props) => {
  const { cleanArray } = useActions();
  const [errorState, setErrorState] = useState("");
  const storageValue = localStorage.getItem("user");
  const [disabledState, setDisabledState] = useState({
    disabled: false,
  });
  const totalCount = props.cart.reduce((count, item) => item.count + count, 0);
  const totalPrice = props.cart.reduce(
    (amount, item) => item.priceTotal + amount,
    0
  );
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      if (validator.isMobilePhone(data.phone, ["ru-RU"])) {
        if (storageValue) {
          await newAxiosInstance
            .post("/orders", {
              orderType: data.orderType,
              phone: data.phone,
              commentForOrder: data.commentForOrder,
              totalCount: totalCount,
              totalPrice: totalPrice,
              infoAboutOrder: {
                ...props.cart
              },
            })
            .then(() => {
              console.log(props.cart);
              setDisabledState({ disabled: true });
              setTimeout(() => {
                cleanArray(null);
                alert("Заказ создан успешно. Order create succefully!");
              }, 1200);
            });
        } else {
          navigate("/authorization");
        }
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
    />
  );
};