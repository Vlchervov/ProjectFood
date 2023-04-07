import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import data from "../../data/categories.json";
import Select from "react-select";
import { SelectOptions, style } from "./react-select/react-select.options";
import { AppHeader, AppHeaderSecondSection, AppHeaderSection, Header, ItemCount, StyledLink, UnderHeader } from "./Header.styled";

export const HeaderComponent = () => {
  const { cartItems, setCurrenCity, currentCity } = useContext(CartContext);

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
              <Link style={{ color: "black" }} to="catalog">
                <BiMenu
                  className={`BiMenu ${useLocation().pathname === "/catalog" && "active"
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
        </AppHeaderSection>
        <AppHeaderSecondSection>
          <ul>
            <li>
              <StyledLink className={`${useLocation().pathname === "/orders" && "active"
                }`} to="orders">Заказы</StyledLink>
            </li>
            <li>
              <StyledLink className={`${useLocation().pathname === "/about-us" && "active"
                }`} to="about-us">О компании</StyledLink>
            </li>
            <li>
              <Link style={{ color: "black" }} to="basket">
                {cartItems.length > 0 && (
                  <ItemCount>
                    <span>{cartItems.length}</span>
                  </ItemCount>
                )}
                <FaShoppingCart
                  className={`shopCartButton ${useLocation().pathname === "/basket" && "active"
                    }`}
                />
              </Link>
            </li>
          </ul>
        </AppHeaderSecondSection>
      </AppHeader>
      {useLocation().pathname === "/catalog" ? (
        <UnderHeader>
          <ul>
            {data.data.map((item) => (
              <li
                className={`${window.location.hash === item.anchorID && "enabled"
                  }`}
                key={item.name}
              >
                <a href={item.anchorID}>{item.name}</a>
              </li>
            ))}
          </ul>
        </UnderHeader>
      ) : null}
    </Header>
  );
};
