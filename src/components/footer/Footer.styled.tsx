import { between, down } from "styled-breakpoints";
import styled from "styled-components";

export const Footer = styled.footer`
    a {
      color: white;
      text-decoration: none;
    }
    
    height: 250px;
    background-color: #1f1f1f;
    /* box-shadow: 0px 10px 15px rgba(0, 0, 0, 1); */
    display: flex;
    justify-content: flex-start;
    padding-top: 0;

    ${between('sm', "md")} {
    align-items: center;
    
    flex-direction: column;
    white-space: nowrap;
    }

    ${down("md")} {
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .footer__section {
    margin-left: 110px;
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

     ${between("md", "xl")} {
      font-size: 12px;
      flex-direction: column;
      display: flex;
      margin: 0;
    }

    ${between("sm", "md")} {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    ${down("md")} {
      width: 60%;
      margin-left: 0px;
      padding-top: 10px;
      padding-bottom: 0px;
      :nth-child(2) {
       order: -1;
      }
    }
  }

  .footerDelivery {
    ${down('sm')} {
    text-align: center;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 400;
      margin: 0;
      user-select: none;
      font-size: 16px;
      line-height: 20px;
      // color: rgba(21, 21, 21, 0.3);
      color: #ffffff;
    }
  }

  .footerNav {
    ul {
      padding: 0;
      list-style: none;

      ${down("md")} {
        margin-bottom: 0px;
      }
      li {
        cursor: pointer;
        margin-bottom: 13px;
        font-size: 14px;
        font-family: sans-serif;
        line-height: 20px;
        /* color: #bdbdbd; */
        color: white;
        &:hover {
          text-decoration: underline;
        }

        ${down("md")} {
          :last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }

  .footerAppTitle {
    ${down("sm")} {
    text-align: center;
    }
    font-size: 12px;
    line-height: 17px;
    // color: rgba(21, 21, 21, 0.3);
  }
  .footerLogo {
    display: flex;
    margin-top: 18px;
    flex-direction: row;

    ${down("sm")} {
    margin-top: 0px;
    }
  }

  .footerPaymentMethods {
    display: flex;
    ${down('md')} {
      justify-content: center;
      padding-top: 0px;
    }
    h4 {
      margin: 0;
      user-select: none;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      /* color: #757575; */
      color: white;
    }
  }

  .footerContacts {
    ${down("sm")} {
      text-align: center;
    }
  }

  .footerDeveloperCompanyName {
    display: flex;
    justify-content: flex-end;
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
    ${down("md")} {
      justify-content: center;
    }
  }

  .footerSocial {
    background-color: ${(props) => props.theme.card.background};
    border-radius: 4px;
    padding: 8px;
    display: flex;
    align-items: center;
    margin-top: 12px;
    transition: all 0.5s;
    background-color: white;

    ${down("sm")} {
      justify-content: center;
    }

    &:hover {
      a {
        color: #55b2ff;
      }
        background-color: #1f1f1f;
        
        scale: 1.01;
      }
    
    a {
      color: black;
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

  .footerPaymentCard {
    text-align: center;
    user-select: none;
    display: flex;
    ${down("md")} {
      align-items: center;
      justify-content: center;
    }

    label {
      display: flex;
    }

    img {
      width: 50px;
      padding-top: 15px;
      ${between("md", "xxl")} {
        width: 30px;
    }

      :not(:nth-child(1)) {
        padding-left: 12px;
      }
    }
  }

  .footer__itemLogo {
    ${down("sm")} {
      justify-content: center;
    }
    padding: 0px;
    margin-left: 15px;
    cursor: pointer;
    picture {
      margin-left: 5px;
      display: flex;
      img {
      width: 15px;
      }
    }
  }
  .GoogleLogo {
    display: flex;
    padding: 0px;
    margin: 0px;
    color: #bdbdbd;
    &:hover {
      color: ${(props) => props.theme.active.color}
    }
  }
  .AppleLogo {
    display: flex; 
    color: #bdbdbd;
    &:hover {
      color: ${(props) => props.theme.active.color}
    }
  }
`