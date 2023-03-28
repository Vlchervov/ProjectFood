import { useState } from "react";
import validator from "validator";

export const MobileForm = () => {
  const [telState, setTelState] = useState({
    phone: "",
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
    <form onSubmit={HandlerSubmit}>
      Выберите способ оформления заказа:
      <ul>
        <li>
          <label>
            <input type="radio" name="order" required />
            Доставка
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input type="radio" name="order" required />
            Самовывоз
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input type="radio" name="order" required />В заведении
          </label>
        </li>
      </ul>
      <label>
        Ваш номер телефона:{" "}
        <input
          type="tel"
          id="name"
          placeholder="например: +79999999999"
          name="phone"
          value={telState.phone}
          onChange={(event) => {
            setTelState({ phone: event.target.value });
            setErrorState("");
          }}
        />
        {<i style={{ color: "#CD3737" }}>{errorState}</i>}
      </label>
      <label>
        Комментарий к заказу:
        <textarea
          name="comment"
          placeholder="Напишите нам что-нибудь..."
        ></textarea>
      </label>
      <div>
        <input
          className="basket__totalAmountButton"
          type="submit"
          disabled={!telState.phone}
          value="Перейти к оформлению заказа"
        />
      </div>
    </form>
  );
};
