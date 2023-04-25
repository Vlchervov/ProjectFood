export const AuthorizationForm = () => {
  return (
    <form>
      <div className="AuthContent">
        <h1>Вход в аккаунт</h1>
        <input placeholder="Почта" type="email" />
        <input placeholder="Пароль" type="password" />
        <button>Войти</button>
      </div>
    </form>
  );
};
