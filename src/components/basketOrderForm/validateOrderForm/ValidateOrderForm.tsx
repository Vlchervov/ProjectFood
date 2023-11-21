import { useState } from "react";
import validator from "validator";
import { newAxiosInstance } from "../../API/Api";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router";
import { OrderForm } from "../OrderFormComponent";
import { ICartItem } from "../../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

type CleanArrayType = {
  cleanArray: (state: void) => PayloadAction;
}

export const ValidateOrderForm = (props: any) => {
  const { cleanArray }: CleanArrayType = useActions();
  const [errorState, setErrorState] = useState<string>("");
  const storageValue: string | null = localStorage.getItem("user");
  const [disabledState, setDisabledState] = useState({
    disabled: false,
  });
  const totalCount = props.cart.reduce((count: number, item: ICartItem): number => item.count + count, 0);
  const totalPrice = props.cart.reduce(
    (amount: number, item: ICartItem): number => item.priceTotal + amount,
    0
  );
  const navigate = useNavigate();

  async function onSubmit(data: any) {
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
              setDisabledState({ disabled: true });
              setTimeout(() => {
                cleanArray();
                alert("Заказ создан успешно. Order create succefully!");
              }, 1200);
            });
        } else {
          navigate("/authorization");
        }
      } else {
        setErrorState("Неправильный номер");
      }
    } catch (e) {
      console.log(e);
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