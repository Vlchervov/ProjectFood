import { useState } from "react";

export const AuthInput = ({ register, errors }) => {
  const [type, setType] = useState("password");
  const toggleType = () => setType(type === "password" ? "text" : "password");

  return (
    <div className="emailInput">
      <input
        style={{
          border: errors.password?.message
            ? "1px solid #F06060"
            : "1px solid #c9d6f0",
        }}
        {...register("email", {
          required: "Обязательное поле",
          pattern: { value: /@/, message: "Неверный формат E-mail" },
        })}
        type="email"
        placeholder="E-mail"
      ></input>
      {errors.email?.message && <i>{errors.email?.message}</i>}
      <div className="PasswordCheckEye">
        <input
          style={{
            border: errors.password?.message
              ? "1px solid #F06060"
              : "1px solid #c9d6f0",
          }}
          placeholder="Пароль"
          type={type}
          {...register("password", { required: "Обязательное поле" })}
        ></input>
        {errors.password?.message && <i>{errors.password?.message}</i>}
        <div onClick={toggleType}></div>
      </div>
    </div>
  );
};
