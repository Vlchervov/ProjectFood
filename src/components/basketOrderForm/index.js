import { useForm } from "react-hook-form";

export const OrderForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      Выберите способ оформления заказа:
      <ul>
        <li>
          <label>
            <input
              {...register("order", {
                value: true,
                required: {
                  value: true,
                },
              })}
              type="radio"
              value="Доставка"
              name="order"
            />
            Доставка
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input
              {...register("order", {
                value: true,
                required: {
                  value: true,
                },
              })}
              type="radio"
              name="order"
              value="Самовывоз"
              required
            />
            Самовывоз
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input
              {...register("order", {
                value: true,
                required: {
                  value: true,
                },
              })}
              type="radio"
              value="В заведении"
              name="order"
            />
            В заведении
          </label>
        </li>
      </ul>
      <label>
        Ваш номер телефона:{" "}
        <input
          type="text"
          id="name"
          placeholder="например: +79999999999"
          name="phone"
          {...register("phone", {
            minLength: {
              value: 11,
              message: "Минимум 11 символов",
            },
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          onInput={props.changeHandler}
          onChange={() => {
            props.setErrorState("");
          }}
        />
        {errors.phone?.message && (
          <i style={{ color: "#CD3737" }}>{errors.phone?.message}</i>
        )}
        {<i style={{ color: "#CD3737" }}>{props.errorState}</i>}
      </label>
      <label>
        Комментарий к заказу:
        <textarea
          maxLength="540"
          name="commentForOrder"
          {...register("commentForOrder")}
          placeholder="Напишите нам что-нибудь..."
        ></textarea>
      </label>
      <div>
        <input
          className="basket__totalAmountButton"
          type="submit"
          value="Перейти к оформлению заказа"
        />
      </div>
    </form>
  );
};
