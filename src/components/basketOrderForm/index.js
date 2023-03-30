import { useForm, Controller } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import ru from "react-phone-number-input/locale/ru.json";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import "react-phone-number-input/style.css";

export const OrderForm = (props) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    control,
  } = useForm({
    mode: "all",
    defaultValues: {
      phone: "+7",
    },
  });

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
      <label htmlFor="phoneInput"> Ваш номер телефона:</label>
      <Controller
        name="phoneInput"
        control={control}
        rules={{
          validate: (value) => {
            isValidPhoneNumber(value);
          },
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            value={value}
            onChange={onChange}
            defaultCountry="RU"
            id="phoneInput"
            {...register("phoneInput")}
            control={control}
          />
        )}
      />
      {/* <label>
        Ваш номер телефона:{" "}
        <input
          type="text"
          id="name"
          placeholder="например: +79999999999"
          name="phone"
          {...register("phone", {
            minLength: {
              value: 12,
              message: "Минимум 12 символов",
            },
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          onInput={props.changeHandler}
          onChange={() => {
            props.setErrorState("");
            clearErrors(["phone"]);
          }}
        />
        {errors.phone?.message && (
          <i style={{ color: "#CD3737" }}>{errors.phone?.message}</i>
        )}
        {<i style={{ color: "#CD3737" }}>{props.errorState}</i>}
      </label> */}
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
