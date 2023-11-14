import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ru from "react-phone-input-2/lang/ru.json";

export const OrderInput = ({
  register,
  errors,
  control,
  Controller,
  disabledState,
  errorState,
}: any) => {
  return (
    <>
      Выберите способ оформления заказа:
      <ul>
        <li>
          <label>
            <input
              {...register("orderType", {
                value: true,
                required: {
                  value: true,
                },
              })}
              type="radio"
              value="Доставка"
              name="orderType"
              disabled
            />
            Доставка
          </label>
        </li>
        <li>
          {" "}
          <label>
            <input
              {...register("orderType", {
                value: true,
                required: {
                  value: true,
                },
              })}
              type="radio"
              name="orderType"
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
              {...register("orderType", {
                value: true,
                required: {
                  value: true,
                },
              })}
              type="radio"
              value="В заведении"
              name="orderType"
            />
            В заведении
          </label>
        </li>
      </ul>
      <label>
        Город: <input type="text" disabled value='none' />
      </label>
      <label>
        Ваш номер телефона:
        <Controller
          control={control}
          name="phone"
          rules={{
            required: {
              value: true,
              message: "Обязательное поле",
            },
          }}
          render={({ field: { ref, ...field } }: any) => (
            <ReactPhoneInput
              {...field}
              inputProps={{
                ref,
                required: true,
                autoFocus: true,
              }}
              country={"ru"}
              onlyCountries={["ru"]}
              preferredCountries={["ru"]}
              localization={ru}
              name="phone"
              countryCodeEditable={false}
            />
          )}
        />
        {<i style={{ color: "#CD3737" }}>{errorState}</i>}
        {errors.phone?.message && (
          <i style={{ color: "#CD3737" }}>{errors.phone?.message}</i>
        )}
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
          disabled={disabledState.disabled}
          className="basket__totalAmountButton"
          type="submit"
          value="Оформить"
        />
      </div>
    </>
  );
};