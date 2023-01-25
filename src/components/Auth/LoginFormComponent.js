import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../API/Api";
import { AuthInput } from "./AuthInput";

export const LoginFormComponent = (props) => {
  const [requestError, setRequestError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onLogin(data) {
    try {
      await axiosInstance
        .get("/users", {
          username: data.email,
          password: data.password,
        })
        .then((res) => {});
    } catch {}
  }

  return (
    <>
      <div className="MainFormLogin" onSubmit={handleSubmit(onLogin)}>
        <AuthInput register={register} errors={errors} />
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe">Запомнить меня</label>
        <input value="Войти" type="submit" />
      </div>
      <h5>
        Ещё не зарегистрированы?{" "}
        <span
          onClick={() => {
            props.setState(!props.state);
          }}
        >
          Получить аккаунт
        </span>
      </h5>
      {/* <p>{requestError}</p> */}
    </>
  );
};
