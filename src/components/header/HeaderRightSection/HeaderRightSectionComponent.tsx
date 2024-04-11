import { HeaderRightSection, StyledLink, ItemCount } from "../Header.styled";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMoon } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { DefaultTheme } from "styled-components";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { useAppSelector } from "../../../hooks/useActions";

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
      {storageValue ? (
        <ul className="dropDownMenu">
          <li
            onPointerEnter={() => setHidden(false)}
            onPointerLeave={() => setHidden(true)}
          >
            <StyledLink to="#" className={`userIcon ${!hidden && "active"}`}>
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
        </ul>
      ) : (
        <StyledLink to="authorization">
          <button className="AppHeaderSection__ButtonAuthorized">
            Войти
          </button>
        </StyledLink>
      )}
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
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 1.5L2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V4.5L13.5 1.5H4.5Z" stroke={props.theme.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.25 4.5H15.75" stroke={props.theme.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7.5C12 8.29565 11.6839 9.05871 11.1213 9.62132C10.5587 10.1839 9.79565 10.5 9 10.5C8.20435 10.5 7.44129 10.1839 6.87868 9.62132C6.31607 9.05871 6 8.29565 6 7.5" stroke={props.theme.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </StyledLink>
    </HeaderRightSection>
  );
};