import { useState, useContext } from "react";
import validator from "validator";
import { OrderForm } from "..";
import { newAxiosInstance } from "../../API/Api";
import CartContext from "../../../context/global/globalContext";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router";

export const ValidateOrderForm = (props) => {
  const { cleanArray } = useActions();
  const [errorState, setErrorState] = useState("");
  const [disabledState, setDisabledSatte] = useState({
    disabled: false,
  });
  const { currentCity, isAuthorized } = useContext(CartContext);
  const totalCount = props.cart.reduce((count, item) => item.count + count, 0);
  const totalPrice = props.cart.reduce(
    (amount, item) => item.priceTotal + amount,
    0
  );

  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      if (validator.isMobilePhone(data.phone, ["ru-RU"])) {
        if (isAuthorized) {
          await newAxiosInstance
            .post("/orders", {
              orderType: data.orderType,
              phone: data.phone,
              commentForOrder: data.commentForOrder,
              totalCount: totalCount,
              totalPrice: totalPrice,
              city: currentCity,
              infoAboutOrder: {
                ...props.cart,
              },
            })
            .then(() => {
              setDisabledSatte({ disabled: true });
              setTimeout(() => {
                cleanArray(null);
                alert("Заказ создан успешно. Order create succefully!");
              }, 1200);
            });
        }
        navigate("/authorization");
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
      currentCity={currentCity}
    />
  );
};
