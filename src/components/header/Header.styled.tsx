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
  display: flex;
  .active {
    color: ${(props) => props.theme.active.color};
  }

  .enabled {
    background: #dc3d3d;
    a {
      color: white;
    }
  }
`;

export const AppHeader = styled.div`
  user-select: none;
  position: fixed;
  width: 100%;
  height: 55px;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  justify-content: space-between;
  /* margin-top: 25px; */
  border-radius: 0px;
  background-color: ${(props) => props.theme.background.color};
  border-top: ${(props) => props.theme.border.top};
  /* border-bottom: ${(props) => props.theme.border.bottom}; */
  z-index: 25;

  ${down("sm")} {
    margin-left: 0px;
    z-index: 25;
    width: 100%;
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
  margin-left: 70px;
  display: flex;
  ${down('xl')} {
    margin-left: 0px;
  }
  svg {
    width: 45px;
    height: 45px;
  }

  nav {
    display: flex;
    align-items: center;
  
    ${down('sm')} {
      margin-left: 8px;
  }
  }

  .menu {
    display: flex;
    padding-left: 0px;
  }

  li {
    display: flex;
    align-items: center;

    &:nth-child(1) { 
      color: ${(props) => props.theme.color};
      margin-right: 25px;
    }

    button {
      cursor: pointer;
      outline: none;
      border: 0.1px solid #FF0044;
      color: ${(props) => props.theme.color};
      background: none;
      border-radius: 4px;
      height: 25px;
      width: 140px;
      font-size: 12px;
      transition: ease-in 0.4s;
      :hover {
      color: white;
      background-color: #FF0044;
      transition: background-color 0.4s ease-out;
    }
    }
   
  }
`;

export const HeaderRightSection = styled.div`
  margin-right: 70px;
  padding-right: 0px;
  z-index: 10;
  display: flex;
  ${down("xl")} {
    margin-right: 15px;
    } 

    li {
      width: 24px;
      height: 24px;
    }

    svg {
    width: 20px;
    height: 20px;
  }

    .userIcon {

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
      padding-bottom: 111px;
      padding: 10px 12px;
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
    color: ${(props) => props.theme.color};
    background: none;
    border: 0.1px solid #FF0044;
    cursor: pointer;
    margin-right: 12px;
    transition: ease-in 0.4s;
    font-weight: 700;

    ${down("sm")} {
      font-size: 10px;
      height: 25px;
      width: 70px;
    }

    :hover {
      color: white;
      background-color: #FF0044;
      transition: background-color 0.4s ease-out;
    }
  }

  .dropDown {
    right: 105px;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 110px;
    position: absolute;
    border-radius: 12px;
    border: ${(props) => props.theme.border.border};
    animation: show-dropDown 1s forwards;
    background-color: ${(props) => props.theme.background.color};

    ${down("md")} { 
      right: 0px;
    }

    li {
      cursor: pointer;
      color: ${(props) => props.theme.color};
      flex-wrap: nowrap;
  
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
  justify-content: center;
  z-index: 10;
  position: sticky;
  margin-top: 25px;
  top: 55px;
  background-color: ${(props) => props.theme.background.color};
  border-radius: 0px;


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
    width: 90%;
    padding-left: 0px;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    align-items: center;
    user-select: none;
  
    
    ${down("sm")} {
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
    padding: 0px 35px 0px 0px;
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
  z-index: 24;
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
  background-color: #a10000;
  width: 25px;
  height: 15px;
  border-radius: 25px;
  align-items: center;
  display: flex;
  top: 5px;
  position: absolute;
  margin-left: 22px;
  justify-content: center;

  span {
    color: white;
    font-weight: 700;
    font-size: 10px;
  }
`;