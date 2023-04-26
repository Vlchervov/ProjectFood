import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import data from "../../data/categories.json";
import Select from "react-select";
import { SelectOptions, style } from "./react-select/react-select.options";
import { HiMoon } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import {
  AppHeader,
  AppHeaderSecondSection,
  AppHeaderSection,
  Header,
  ItemCount,
  StyledLink,
  UnderHeader,
} from "./Header.styled";
import { ModalForAuthorization } from "./ModalForAuthorized";
import { useSelector } from "react-redux";

interface IProps {
  toggleTheme(): void;
  theme: any;
}

export const HeaderComponent = (props: IProps) => {
  const {
    setCurrentCity,
    currentCity,
    isAuthorized,
    isModalForAuthorizationVisible,
    setIsModalForAuthorizationVisible,
    setIsAuthorized,
  } = useContext(CartContext);
  const [state] = useState(data.data);
  const [hidden, setHidden] = useState<boolean>(true);
  const { cart }: any = useSelector((state) => state);

  const getValue = () => {
    return currentCity
      ? SelectOptions.find((c) => c.value === currentCity)
      : "";
  };

  const onChange = (newValue: any) => {
    setCurrentCity(newValue?.value);
  };

  return (
    <Header>
      <AppHeader>
        <AppHeaderSection>
          <ul className="menu">
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
                className="react-select-container"
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
          <ul className="menu">
            <li>
              <button
                onClick={() => setIsAuthorized(!isAuthorized)}
                className="AppHeaderSection__ButtonIsAuthorized"
              >
                {isAuthorized ? "Выйти" : "FakeAuth"}
              </button>
            </li>
            {isAuthorized ? (
              <li>
                <StyledLink to="#" className={`${!hidden && "active"}`}>
                  <BiUser onClick={() => setHidden(!hidden)} />
                </StyledLink>
                <ul className="dropDown" hidden={hidden}>
                  <li>
                    <StyledLink
                      className={`${
                        window.location.pathname === "/about-us" && "active"
                      }`}
                      to="about-us"
                    >
                      О компании
                    </StyledLink>
                  </li>
                  <li>
                    <HiMoon
                      onClick={props.toggleTheme}
                      className="switchTheme"
                    />
                    <h6 onClick={props.toggleTheme}>{props.theme.title}</h6>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <button
                  className="AppHeaderSection__ButtonAuthorized"
                  onClick={() => setIsModalForAuthorizationVisible(true)}
                >
                  Войти
                </button>
                <ModalForAuthorization
                  isModalForAuthorizationVisible={
                    isModalForAuthorizationVisible
                  }
                  setIsModalForAuthorizationVisible={
                    setIsModalForAuthorizationVisible
                  }
                />
              </>
            )}

            <li>
              <StyledLink
                className={`shopCartButton ${
                  useLocation().pathname === "/basket" && "active"
                }`}
                to="basket"
              >
                {cart.length > 0 && (
                  <ItemCount>
                    <span>{cart.length}</span>
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
              return null;
            })}
          </ul>
        </UnderHeader>
      ) : null}
    </Header>
  );
};
