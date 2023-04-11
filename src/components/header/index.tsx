import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import data from "../../data/categories.json";
import Select from "react-select";
import { SelectOptions, style } from "./react-select/react-select.options";
import { HiMoon } from "react-icons/hi2";
import {
  AppHeader,
  AppHeaderSecondSection,
  AppHeaderSection,
  Header,
  ItemCount,
  StyledLink,
  UnderHeader,
} from "./Header.styled";

interface IProps {
  toggleTheme(): void;
  theme: any;
}

export const HeaderComponent = (props: IProps) => {
  const { cartItems, setCurrenCity, currentCity } = useContext(CartContext);
  const [state] = useState(data.data);

  useEffect(() => {
    localStorage.setItem("theme", props.theme.title);
  }, [props.theme]);

  const getValue = () => {
    return currentCity
      ? SelectOptions.find((c) => c.value === currentCity)
      : "";
  };

  const onChange = (newValue: any) => {
    setCurrenCity(newValue?.value);
  };

  return (
    <Header>
      <AppHeader>
        <AppHeaderSection>
          <ul>
            <li>
              <StyledLink
                className={`BiMenu ${
                  useLocation().pathname === "/catalog" && "active"
                }`}
                to="catalog"
              >
                <BiMenu />
              </StyledLink>
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
            <li>
              <HiMoon onClick={props.toggleTheme} className="switchTheme" />
              <h6 onClick={props.toggleTheme}>{props.theme.title}</h6>
            </li>
          </ul>
        </AppHeaderSection>
        <AppHeaderSecondSection>
          <ul>
            <li>
              <StyledLink
                className={`${
                  useLocation().pathname === "/orders" && "active"
                }`}
                to="orders"
              >
                Заказы
              </StyledLink>
            </li>
            <li>
              <StyledLink
                className={`${
                  useLocation().pathname === "/about-us" && "active"
                }`}
                to="about-us"
              >
                О компании
              </StyledLink>
            </li>
            <li>
              <StyledLink
                className={`shopCartButton ${
                  useLocation().pathname === "/basket" && "active"
                }`}
                to="basket"
              >
                {cartItems.length > 0 && (
                  <ItemCount>
                    <span>{cartItems.length}</span>
                  </ItemCount>
                )}
                <FaShoppingCart />
              </StyledLink>
            </li>
          </ul>
        </AppHeaderSecondSection>
      </AppHeader>
      {useLocation().pathname === "/catalog" ? (
        <UnderHeader>
          <ul>
            {state.map((item) => {
              if (item.city === currentCity) {
                return (
                  <li
                    className={`${
                      window.location.hash === item.anchorID && "enabled"
                    }`}
                    key={item.name}
                  >
                    <a href={item.anchorID}>{item.name}</a>
                  </li>
                );
              }
              return;
            })}
          </ul>
        </UnderHeader>
      ) : null}
    </Header>
  );
};
