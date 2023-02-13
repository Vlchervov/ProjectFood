import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__section">
        <div className="header__item haederLogo">Logo</div>
        <ul>
          <li>
            <Link to="catalog">Меню</Link>
          </li>
          <li>
            <Link to="basket">Корзина</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
