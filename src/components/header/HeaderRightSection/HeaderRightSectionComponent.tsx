import { useSelector } from "react-redux";
import { HeaderRightSection, StyledLink, ItemCount } from "../Header.styled";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMoon } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { DefaultTheme } from "styled-components";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

interface IProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export const HeaderRight = (props: IProps) => {
  const { cart }: any = useSelector((state) => state);
  const [hidden, setHidden] = useState<boolean>(true);
  const { signout, isAuthorized } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderRightSection>
      <ul className="menu">
        {isAuthorized ? (
          <>
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
                    className={`${location.pathname === "/about-us" && "active"
                      }`}
                    to="about-us"
                  >
                    О компании
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="profile">Профиль</StyledLink>
                </li>
                <li>
                  <HiMoon onClick={props.toggleTheme} className="switchTheme" />
                  <h6 onClick={props.toggleTheme}>{props.theme.title}</h6>
                </li>
                <li onClick={() => {
                  signout(() => navigate("/", { replace: true }))
                  localStorage.removeItem("user");
                }}>Выйти</li>
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
            className={`shopCartButton ${location.pathname === "/basket" && "active"
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
