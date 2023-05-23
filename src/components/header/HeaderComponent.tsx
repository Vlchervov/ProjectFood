import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import data from "../../data/categories.json";
import Select from "react-select";
import { SelectOptions } from "./react-select/react-select.options";
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

interface IProps {
  toggleTheme(): void;
  theme: DefaultTheme;
}

export const HeaderComponent = (props: IProps) => {
  const { setCurrentCity, currentCity } = useGlobalContext();
  const [state] = useState(data.data);
  const location = useLocation();

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
              <StyledLink to="catalog" className={`${location.pathname === "/catalog" && "active"}`}>
                // LOGOTYPE //
              </StyledLink>
            </li>
            <li>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                defaultValue={SelectOptions[0]}
                options={SelectOptions}
                isSearchable={false}
                placeholder="Выберете город..."
                value={getValue()}
                onChange={onChange}
              />
            </li>
          </ul>
        </HeaderLeftSection>
        <HeaderRight theme={props.theme} toggleTheme={props.toggleTheme} />
      </AppHeader>
      {location.pathname === "/catalog" ? (
        <UnderHeader>
          <ul>
            {state.map((item) => {
              if (item.city === currentCity) {
                return (
                  <li
                    className={`${location.hash === item.anchorID && "enabled"
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
