import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import data from "../../data/categories.json";
import {
  AppHeader,
  HeaderLeftSection,
  Header,
  StyledLink,
  UnderHeader,
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
  const { hidden }: any = useGlobalContext();
  const [cityModalHidden, setCityModalHidden] = useState(false);
  const [state] = useState(data.data);
  const location = useLocation();

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
            <li>
              LOGOTYPE
            </li>
            <li onClick={() => setCityModalHidden(true)}>
              Выберите город
            </li>
            <ModalSelectCity cityModalHidden={cityModalHidden} setCityModalHidden={setCityModalHidden} />
          </ul>
        </HeaderLeftSection>
        <HeaderRight theme={props.theme} toggleTheme={props.toggleTheme} />
      </AppHeader>
      {location.pathname === "/catalog" ? (
        <UnderHeader>
          <ul>
            {state.map((item) => {
              return (
                <li
                  // className={`${location.hash === item.anchorID && "enabled"
                  //   }`}
                  key={item.name}
                >
                  <a href={item.anchorID}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </UnderHeader>
      ) : null}
    </Header>
  );
};
