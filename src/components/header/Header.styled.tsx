import styled from "styled-components";
import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.hover.background.color};
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
  display: flex;
  justify-content: space-between;
  margin: 0;
  background-color: ${(props) => props.theme.background.color};
  border-bottom: ${(props) => props.theme.border.bottom};
  z-index: 25;

  .react-select {
    &__control {
      background-color: ${(props) => props.theme.background.color};
      color: white;
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
    height: 30px;
    color: ${(props) => props.theme.switchTheme.color};

    ${down("sm")} {
      width: 18px;
    }
  }

  .shopCartButton {
    cursor: pointer;
    transform: color 500ms ease;
  }

  .menu {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    li {
      list-style: none;
      align-items: center;
      padding: 10px 12px;
      font-size: 14px;

      :not(:nth-child(1)) {
        ${down("sm")} {
          font-size: 12px;
          padding: 10px 0px;
        }
      }

      h6 {
        color: ${(props) => props.theme.switchTheme.color};
        cursor: pointer;
        font-weight: 400;
        margin: 0;
      }
    }
  }
`;

export const AppHeaderSection = styled.div`
  display: flex;
  svg {
    width: 55px;
    height: 55px;

    ${down("sm")} {
      width: 40px;
    }
  }
`;

export const AppHeaderSecondSection = styled.div`
  padding-right: 15px;
  display: flex;
  margin: 0;
  svg {
    width: 24px;
    height: 30px;

    ${down("sm")} {
      width: 18px;
    }
  }

  .AppHeaderSection__ButtonAuthorized {
    border: none;
    height: 30px;
    width: 80px;
    color: #413e3e;
    cursor: pointer;
    margin-right: 12px;
    font-weight: 700;

    ${down("sm")} {
      font-size: 10px;
      height: 25px;
      width: 70px;
    }

    :hover {
      color: #000;
    }
  }

  .dropDown {
    right: 25px;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 120px;
    position: absolute;
    border-radius: 12px;
    border: ${(props) => props.theme.border.border};
    background-color: ${(props) => props.theme.background.color};

    li {
      cursor: pointer;
      color: ${(props) => props.theme.color};

      :hover {
        color: ${(props) => props.theme.hover.background.color};
      }
    }
  }
`;

export const UnderHeader = styled.div`
  user-select: none;
  width: 100%;
  margin-top: 65px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background.color};
  border-bottom: ${(props) => props.theme.border.bottom};
  z-index: 24;
  border-bottom-left-radius: 15px;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    :hover {
      background-color: ${(props) => props.theme.hover.background.color};
      transition: background-color 1s;
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
  background-color: red;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  align-items: center;
  display: flex;
  position: absolute;
  margin-left: 16px;
  justify-content: center;

  span {
    color: white;
    font-weight: 700;
    font-size: 10px;

    ${down("sm")} {
      font-size: 8px;
    }
  }

  ${down("sm")} {
    width: 11px;
    height: 11px;
    margin-left: 12px;
  }
`;
