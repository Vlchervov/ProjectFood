import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import {
  AppHeader,
  HeaderLeftSection,
  Header,
  StyledLink,
} from "./Header.styled";
import { DefaultTheme } from "styled-components";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { HeaderRight } from "./HeaderRightSection/HeaderRightSectionComponent";
import { ModalSelectCity } from "./ModalSelectCity/ModalSelectCity";
interface IProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export const HeaderComponent = (props: IProps) => {
  const { hidden } = useGlobalContext();
  const [cityModalHidden, setCityModalHidden] = useState<boolean>(false);
  const location = useLocation();
  const cityAvailable = () => {
    if (location.pathname !== "/catalog") {
      return setCityModalHidden(false);
    } setCityModalHidden(true)
  }

  return (
    <Header>
      <AppHeader className={`${location.pathname === "/about-us" && hidden}`}>
        <HeaderLeftSection>
          <ul className="menu">
            <li>
              <StyledLink
                className={`BiMenu ${location.pathname === "/catalog" && "active"
                  }`}
                to="catalog"
              >
                <BiMenu />
              </StyledLink>
            </li>
            <li onClick={cityAvailable}
            >
              Выберите город
            </li>
            <ModalSelectCity cityModalHidden={cityModalHidden} setCityModalHidden={setCityModalHidden} />
          </ul>
        </HeaderLeftSection>
        <HeaderRight theme={props.theme} toggleTheme={props.toggleTheme} />
      </AppHeader>
    </Header>
  );
};