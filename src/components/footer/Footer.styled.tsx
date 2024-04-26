import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Footer = styled.footer`
    a {
      color: white;
      text-decoration: none;
    }
    height: 250px;
    background-color: ${(props) => props.theme.background};
    /* box-shadow: 0px 10px 15px rgba(0, 0, 0, 1); */
    display: flex;
    justify-content: center;
    padding-top: 0;
    width: 100%;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;

    .footer__section {
    /* margin-left: 110px; */
    padding-top: 18px;
    padding-bottom: 18px;
    // color: #bdbdbd;
    color: white;

    :last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      ${down("md")} {
        align-items: center;
        margin-bottom: 14px;
      }
    }
  }

  .footer__wrapperSocialSection {
    display: flex;
    max-width: 1420px;
    width: 100%;
    justify-content: flex-end;
  }

  .footerSocial {
    padding: 8px;
    display: flex;
    align-items: center;
    margin-top: 12px;
    transition: all 0.5s;

    &:hover {
      a {
        color: #55b2ff;
      }     
        scale: 1.01;
      }
    
    a {
      color: ${(props) => props.theme.color};
      font-size: 18px;
    }
    picture {
      padding-left: 10px;
      text-align: center;
      
    }
    img {
      width: 18px;
      height: 18px;
      padding-right: 10px;
      cursor: pointer;
      transition: all 0.5s;
      :last-child {
        padding-right: 0px;
      }
    }
  }
`