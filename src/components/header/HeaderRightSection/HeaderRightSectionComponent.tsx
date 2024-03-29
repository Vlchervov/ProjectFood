import { HeaderRightSection, StyledLink, ItemCount } from "../Header.styled";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMoon } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { DefaultTheme } from "styled-components";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { useAppSelector } from "../../../hooks/useActions";
import { FaShoppingBag } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";

interface IProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export const HeaderRight = (props: IProps) => {
  const { cart } = useAppSelector((state) => state);
  const [hidden, setHidden] = useState<boolean>(true);
  const { signout } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  const storageValue = localStorage.getItem("user");

  return (
    <HeaderRightSection>
      <ul className="dropDownMenu">
        {storageValue ? (
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
                  <StyledLink className={`${location.pathname === "/profile" && "active"
                    }`} to="profile">Профиль</StyledLink>
                </li>
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
                  <h6 onClick={props.toggleTheme}>{props.theme.title}<HiMoon onClick={props.toggleTheme} className="switchTheme" /></h6>
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
          <StyledLink aria-label="basket"
            className={`shopCartButton ${location.pathname === "/basket" && "active"
              }`}
            to="basket"
          >
            {cart.length > 0 && (
              <ItemCount>
                <span>{cart.length}</span>
              </ItemCount>
            )}
            {/* <FaShoppingCart /> */}
            <BiShoppingBag />
            {/* <FaShoppingBag /> */}
            {/* <AiFillShopping /> */}
          </StyledLink>
        </li>
      </ul>
    </HeaderRightSection>
  );
};