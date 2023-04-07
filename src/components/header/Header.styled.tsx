import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
        color: #8a9094;
       text-decoration: none;
       
       :hover {
        color: #dc3d3d;
       }
`

export const Header = styled.header`
    display: flex;

    .active {
        color: #dc3d3d;
    }

    .enabled {
        background: #dc3d3d;
        a {
            color: white;
        }
    }
`

export const AppHeader = styled.div`
  user-select: none;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  background-color: white;
  border-bottom: 1px solid #ebeff0;
  z-index: 25;

  .BiMenu {
    cursor: pointer;
    transition: color 500ms ease;
    display: flex;

    :hover {
        color: #dc3d3d;
    }
  }

  .shopCartButton {
    cursor: pointer;
    transform: color 500ms ease;

    :hover {
        color: #dc3d3d;
    }
  }

  ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        font-size: 14px;
        margin-left: 5px;
      }
    }
`

export const AppHeaderSection = styled.div`
    display: flex;
    svg {
      width: 55px;
      height: 55px;
    }
`

export const AppHeaderSecondSection = styled.div`
    padding-right: 60px;
    display: flex;
    margin: 0;
    svg {
      width: 24px;
      height: 30px;
    }
    
`

export const UnderHeader = styled.div`
  user-select: none;
  width: 100%;
  margin-top: 65px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-right: 1px solid #ebeff0;
  border-bottom: 1px solid #e2e8eb;
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
        color: white;
        background-color: #dc3d3d;
        transition: background-color 1s;
    }
    :nth-child(1) {
        border-bottom-left-radius: 15px;
    }
    :not(:nth-child(3)) {
        border-right: 1px solid #ebeff0;
    }
  }

  a {
     color: black;
    text-decoration: none;
    display: flex;
    padding: 12px 15px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 400;

    &:hover {
      color: white;
    }
  }
`

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
      }
`

