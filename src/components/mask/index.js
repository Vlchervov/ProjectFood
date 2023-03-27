import { useState } from "react";
import validator from "validator";

export const MobileForm = () => {
  const [telState, setTelState] = useState({
    phone: "+7",
    isValidPhone: false,
  });

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
          : e.value.replace(/\D/g, "").replace(/^7/, "8");
      arrDataFromForm[name] = value;
    });

    if (validator.isMobilePhone(arrDataFromForm["phone"], ["ru-RU"])) {
      setTelState({
        isValidPhone: true,
        phone: arrDataFromForm["phone"],
      });
    } else {
      alert("неверный номер");
    }
  };

  return (
    <form onSubmit={HandlerSubmit}>
      Выберите способ оформления:
      <ul>
        <li>
          <label>
            <input type="radio" name="browser" required />
            Доставка
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input type="radio" name="browser" required />
            Самовывоз
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input type="radio" name="browser" required />В заведении
          </label>
        </li>
      </ul>
      <label>
        Ваш номер телефона:{" "}
        <input
          type="tel"
          id="name"
          name="phone"
          value={telState.phone}
          onChange={(event) => {
            setTelState(event.target.value);
          }}
        />
      </label>
      <label>
        Комментарий к заказу:
        <textarea
          name="comment"
          placeholder="Напишите нам что-нибудь..."
        ></textarea>
      </label>
      {/* <div>
          <input type="reset" value="Очистить" />
        </div> */}
    </form>
  );
};
