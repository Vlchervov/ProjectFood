import { useSelector } from "react-redux";
import { HeaderRightSection, StyledLink, ItemCount } from "../Header.styled";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMoon } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { DefaultTheme } from "styled-components";
import GlobalContext from "../../../context/global/globalContext";

interface IProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export const HeaderRight = (props: IProps) => {
  const { cart }: any = useSelector((state) => state);
  const [hidden, setHidden] = useState<boolean>(true);
  const { isAuthorized, setIsAuthorized } = useContext(GlobalContext);

  return (
    <HeaderRightSection>
      <ul className="menu">
        {isAuthorized ? (
          <>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                setIsAuthorized(false);
              }}
            >
              Выйти
            </button>
            <li
              onPointerEnter={() => setHidden(false)}
              onPointerLeave={() => setHidden(true)}
            >
              <StyledLink to="#" className={`${!hidden && "active"}`}>
                <BiUser />
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
                  <HiMoon onClick={props.toggleTheme} className="switchTheme" />
                  <h6 onClick={props.toggleTheme}>{props.theme.title}</h6>
                </li>
              </ul>
            </li>
          </>
        ) : (
          <>
            <StyledLink to="authorization">
              <button className="AppHeaderSection__ButtonAuthorized">
                Войти
              </button>
            </StyledLink>
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
    </HeaderRightSection>
  );
};
