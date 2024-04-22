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
import { useMediaQuery } from "react-responsive";
interface IProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export const HeaderComponent = (props: IProps) => {
  const { hidden, scroll } = useGlobalContext();
  const [cityModalHidden, setCityModalHidden] = useState<boolean>(false);
  const location = useLocation();
  const cityAvailable = () => {
    if (location.pathname !== "/catalog") {
      return setCityModalHidden(false);
    } setCityModalHidden(true)
  }

  const isMobile = useMediaQuery({ query: '(max-width: 812px)' });

  return (
    <Header>
      <AppHeader>
        <div className="headerWrapper">
          <HeaderLeftSection>
            <nav>
              {isMobile ?
                <StyledLink aria-label="menu"
                  className={`BiMenu ${location.pathname === "/catalog" && "active"
                    }`}
                  to="catalog"
                >
                  <BiMenu />
                </StyledLink> :
                <StyledLink to="catalog" aria-label="menu">

                  <button >Меню</button>
                </StyledLink>
              }
              {location.pathname === "/catalog" ? <button onClick={cityAvailable}>Выберите адрес</button> : null}
              <ModalSelectCity cityModalHidden={cityModalHidden} setCityModalHidden={setCityModalHidden} />
            </nav>
          </HeaderLeftSection>
          <HeaderRight theme={props.theme} toggleTheme={props.toggleTheme} /></div>
      </AppHeader>
    </Header>
  );
};