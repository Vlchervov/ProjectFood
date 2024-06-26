import styled from "styled-components";
import { Link } from "react-router-dom";
import { between, down } from "styled-breakpoints";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.hover.background.color};
    transition: color 0.3s;
  }
`;

export const Header = styled.header`
 position: fixed;
 background-color: ${(props) => props.theme.background.color};
 width: 100%;
 display: flex;
 justify-content: center;
 z-index: 10;
  .active {
    color: ${(props) => props.theme.active.color};
  }

  .enabled {
    background: #dc3d3d;
    a {
      color: white;
    }
  }

  .headerWrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const AppHeader = styled.div`
  user-select: none;
  height: 55px;
  max-width: 1336px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* margin-top: 25px; */
  border-radius: 0px;
  margin-left: 0px;
  /* border-bottom: ${(props) => props.theme.border.bottom}; */

  ${down("sm")} {
    z-index: 25;
    width: 100%;
  }

  ${down("xxl")} {
    max-width: 1070px;
  }

  .react-select {
    &__control {
      background-color: ${(props) => props.theme.background.color};
      color: white;
    }

    &-container {
      svg {
        width: 30px;
        height: 20px;
        cursor: pointer;
      }
    }

    &__single-value {
      color: ${(props) => props.theme.color};
    }

    &__value-containe {
      color: white;
    }

    &__option {
      cursor: pointer;
    }
  }

  .BiMenu {
    cursor: pointer;
    transition: color 500ms ease;
    display: flex;
  }

  .switchTheme {
    cursor: pointer;
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.switchTheme.color};

    ${down("sm")} {
      width: 18px;
    }
  }

  .shopCartButton {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    /* width: 36px;
    height: 36px; */
    cursor: pointer;
    transform: color 500ms ease;
    
    svg {
      /* width: 18px;
      height: 18px; */
    }
  }
`;

export const HeaderLeftSection = styled.div`
  margin-left: 0px;
  display: flex;
  ${down('xl')} {
    margin-left: 0px;
  }
  svg {
    width: 45px;
    height: 45px;
  }

  button {
      cursor: pointer;
      outline: none;
      background: none;
      border: none;
      color: white;
      height: 30px;
      width: 120px;
      background: #006cf8;;
      border-radius: 8px;
      font-size: 12px;
      transition: ease-in 0.4s;
      :hover {
      transition: background-color 0.4s ease-out;
      background-color: #005eda;
    }
    }

  nav {
    display: flex;
    align-items: center;

    a { 
      color: ${(props) => props.theme.color};
      margin-right: 12px;
    }
  
    ${down('sm')} {
      margin-left: 8px;
  }
  }
`;

export const HeaderRightSection = styled.div`
  margin-right: 0px;
  padding-right: 0px;
  z-index: 10;
  display: flex;
  align-items: center;
  ${down("xl")} {
    margin-right: 15px;
    } 

    ${down("sm")} {
      margin-right: 20px;
    }

    li {
      width: 24px;
      height: 24px;
    }

    svg {
    width: 24px;
    height: 24px;
  }

    .userIcon {
      margin-right: 36px;
  }

  .dropDownMenu {
    z-index: 99;
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    li {
      width: 100%;
      list-style: none;
      align-items: center;
      font-size: 14px;
    }
  }

  .AppHeaderSection__buttonLogOut {
    border-radius: 6px;
    color: #413e3e;
    background-color: #f0f0f0;
    border: none;
    width: 80px;
    height: 30px;
    cursor: pointer;
    font-weight: 700;

    :hover {
      color: white;
      background-color: #d84242;
    }
    ${down("sm")} {
      font-size: 10px;
      height: 25px;
      width: 70px;
    }
  }

  @keyframes show-dropDown {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(0px);
    }
  }

  .AppHeaderSection__ButtonAuthorized {
    border: none;
    height: 25px;
    width: 80px;
    border-radius: 6px;
    color: #ffffff;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 12px;
    transition: ease-in 0.4s;
    font-weight: 700;
    background: #006cf8;

    ${down("sm")} {
      font-size: 10px;
      height: 25px;
      width: 70px;
    }

    :hover {
      background-color: #005eda;
      transition: background-color 0.4s ease-out;
    }
  }

  .dropDownList {
    align-items: center;
    margin: 0;
    padding: 10px 12px 4px;
    position: absolute;
    border-radius: 8px;
    border: ${(props) => props.theme.border.border};
    animation: show-dropDown 0.8s forwards;
    background-color: ${(props) => props.theme.background.color};

    ${down("md")} { 
      right: 0px;
    }

    li {
      align-items: center;
      width: 100%;
      cursor: pointer;
      color: ${(props) => props.theme.color};
      flex-wrap: nowrap;
      font-size: 14px;
  
      svg {
        width: 12px;
        height: 12px;
      }
      h6 {
        color: ${(props) => props.theme.switchTheme.color};
        cursor: pointer;
        font-weight: 500;
        margin: 0px;
        padding: 0px;
      }
      :hover {
        color: ${(props) => props.theme.hover.background.color};
      }
    }
  }
`;

export const UnderHeaderCategory = styled.nav`
  display: flex;
  position: -webkit-fixed;
  z-index: 9;
  position: sticky;
  margin: 12px 0 12px 0;
  height: 60px;
  top: 45px;
  background-color: ${(props) => props.theme.background.color};
  border-radius: 0px;
 -webkit-overflow-scrolling: auto;

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #dc3d3d;

    ${down("xl")} {
      background-color: ${(props) => props.theme.background.color};
    }
  }

  ::-webkit-scrollbar {
    height: 5px;
    cursor: pointer;

    ${between("xl", "xxl")} {
      height: 0px;
    }
  }

  ul {
    padding-left: 0px;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    align-items: center;
    user-select: none;
  
    ${down("xl")} {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #dc3d3d;

    ${down("xl")} {
      background-color: ${(props) => props.theme.background.color};
    }
  }

  ::-webkit-scrollbar {
    height: 5px;
    cursor: pointer;

    ${between("xl", "xxl")} {
      height: 0px;
    }
  }

    ${down("xl")} {
      margin-left: 0px;
      padding-left: 10px;
    }

    a {
    white-space: nowrap;
    color: ${(props) => props.theme.color};
    text-decoration: none;
    display: flex;
    padding: 0px 18px 0px 0px;
    margin: 0px;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
    font-weight: 500;
    
    &:hover {
      color: ${(props) => props.theme.hover.background.color};
    }
    }
  }
`

export const UnderHeader = styled.div`
  user-select: none;
  width: 100%;
  margin-top: 65px;
  position: fixed;
  border-radius: 0px 0 0px 0px;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  justify-content: space-between;
  background-color: ${(props) => props.theme.background.color};
  border-bottom: ${(props) => props.theme.border.bottom};
  border-bottom-left-radius: 15px;

  ${down("sm")} {
    width: 100%;
    margin-left: 0px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    :hover {
      background-color: ${(props) => props.theme.hover.background.color};
      transition: background-color 0.3s;
    }
    :nth-child(1) {
      border-bottom-left-radius: 15px;
    }
    :not(:nth-child(3)) {
      border-right: ${(props) => props.theme.border.right};
    }
  }

  a {
    color: ${(props) => props.theme.color};
    text-decoration: none;
    display: flex;
    padding: 12px 15px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 400;

    ${down("sm")} {
      font-size: 16px;
    }

    &:hover {
      color: ${(props) => props.theme.hover.color.color};
    }
  }
`;

export const ItemCount = styled.div`
  background-color: #f91155;
  width: 32px;
  height: 16px;
  border-radius: 25px;
  align-items: center;
  display: flex;
  top: 4px;
  position: absolute;
  margin-left: 52px;
  justify-content: center;

  ${down("sm")} {
  
    margin-left: 32px;
    width: 24px;
  }

  span {
    color: white;
    font-weight: 700;
    font-size: 12px;
  }
`;