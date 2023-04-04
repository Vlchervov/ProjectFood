import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import data from "../../data/categories.json";
import "./_header.scss";
import Select from "react-select";
import { SelectOptions, style } from "./react-select/react-select.options";

export const HeaderComponent = () => {
  const { cartItems, setCurrenCity, currentCity } = useContext(CartContext);

  const getValue = () => {
    return currentCity
      ? SelectOptions.find((c) => c.value === currentCity)
      : "";
  };

  const onChange = (newValue) => {
    setCurrenCity(newValue?.value);
  };

  return (
    <header className="header">
      <div className="appHeader">
        <div className="appHeader__section">
          <ul>
            <li>
              <Link style={{ color: "black" }} to="catalog">
                <BiMenu
                  className={`appHeader__BiMenu ${
                    useLocation().pathname === "/catalog" && "active"
                  }`}
                />
              </Link>
            </li>
            <li>
              <Select
                classNamePrefix="react-select"
                defaultValue={SelectOptions[0]}
                options={SelectOptions}
                isSearchable={false}
                styles={style}
                placeholder="Выберете город..."
                value={getValue()}
                onChange={onChange}
              />
            </li>
          </ul>
        </div>
        <div className="appHeader__section">
          <ul>
            {/* <li
              className={`appHeader__orders ${
                useLocation().pathname === "/orders" && "active"
              }`}
            >
              <Link to="orders">Заказы</Link>
            </li> */}
            <li
              className={`appHeader__aboutUs ${
                useLocation().pathname === "/about-us" && "active"
              }`}
            >
              <Link to="about-us">О компании</Link>
            </li>
            <li>
              <Link style={{ color: "black" }} to="basket">
                {cartItems.length > 0 && (
                  <div className="item__count">
                    <span>{cartItems.length}</span>
                  </div>
                )}
                <FaShoppingCart
                  className={`appHeader__shopCartButton ${
                    useLocation().pathname === "/basket" && "active"
                  }`}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {useLocation().pathname === "/catalog" ? (
        <div className="underHeader">
          <ul>
            {data.data.map((item) => (
              <li
                key={item.name}
                className={`underHeaderButton ${
                  window.location.hash === item.anchorID && "enabled"
                }`}
              >
                <a href={item.anchorID}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};
