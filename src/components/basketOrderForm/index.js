export const OrderForm = (props) => {
  return (
    <form onSubmit={props.HandlerSubmit}>
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
          minLength="11"
          value={props.telState.phone}
          onChange={(event) => {
            props.setTelState({ phone: event.target.value });
            props.setErrorState("");
          }}
        />
        {<i style={{ color: "#CD3737" }}>{props.errorState}</i>}
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
          disabled={!props.telState.phone}
          value="Перейти к оформлению заказа"
        />
      </div>
    </form>
  );
};
