import { useForm } from "react-hook-form";
import { AuthInput } from "./AuthInput";

export const AuthComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="MainFormLogin">
      <AuthInput register={register} errors={errors} />
      <div className="rememberMe">
      <input type="checkbox" id="rememberMe" />
      <label htmlFor="rememberMe">Запомнить меня</label>
      </div>
      <input value="Войти" type="submit" />
    </div>
  );
};
