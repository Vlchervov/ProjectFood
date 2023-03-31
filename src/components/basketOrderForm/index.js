import { useForm, Controller } from "react-hook-form";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ru from "react-phone-input-2/lang/ru.json";

export const OrderForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "all",
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
      <label>
        Ваш номер телефона:
        <Controller
          control={control}
          name={"phone"}
          rules={{
            required: {
              value: true,
              message: "Обязательное поле",
            },
            minLength: {
              value: 11,
              message: "Необходимо ввести 11 символов",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <ReactPhoneInput
              {...field}
              inputProps={{
                ref,
                required: true,
                autoFocus: true,
              }}
              country={"ru"}
              onlyCountries={["ru"]}
              localization={ru}
              name="phone"
              countryCodeEditable={false}
            />
          )}
        />
        {errors.phone?.message && (
          <i style={{ color: "#CD3737" }}>{errors.phone?.message}</i>
        )}
      </label>
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
