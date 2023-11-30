import styled from "styled-components";
import { down } from "styled-breakpoints";

export const AuthSection = styled.section`
  flex: 1 1 auto;
  width: 100%;
  padding-bottom: 100px;
  padding-top: 125px;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes show-modal {
    0% {
      opacity: 0;
      transform: translateY(-200px);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const AuthorizationWindow = styled.div`
  /* box-shadow: 4px 5px 10px 0px rgba(0, 0, 0, 0.4); */
  border: 0.8px solid #d4d4d4c2;
  margin-top: 150px;
  border-radius: 12px;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 2;
  animation: show-modal 0.5s forwards;
`;

export const AuthorizationHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    margin: 12px;
    display: flex;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    :hover {
      transition: background-color 1s;
      border-radius: 25px;
      background-color: #e2dddd;
    }

    span:nth-of-type(1) {
      width: 20px;
      position: absolute;
      height: 2px;
      background-color: ${(props) => props.theme.color};
      rotate: calc(135deg);
    }

    span:nth-of-type(2) {
      width: 20px;
      height: 2px;
      position: absolute;
      background-color: ${(props) => props.theme.color};
      rotate: calc(230deg);
    }
  }
`;

export const AuthorizationBody = styled.div`
  padding: 2rem;
  width: 375px;
  background-color: #fff;
  height: 222px;
  z-index: 4;
  border-radius: 15px;
  animation: show-modal 0.5s forwards;
  h1 {
    padding: 0;
    margin: 0;
    text-align: center;
    color: #000000;
    font-size: 18px;
  }

  ${down("sm")} {
    width: 300px;
    }

  .CAPTCHA {
    .grecaptcha-badge {
      position: fixed;
      bottom: 0px;
    }
  }

  .grecaptcha-badge {
    position: fixed;
    bottom: 0px;
  }

  h6 {
    padding: 0;
    margin: 0;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    font-style: normal;

    strong {
      cursor: pointer;
      color: #8994f5;

      :hover {
        color: #4468df;
      }
    }
  }

  .AuthPhoneContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 42px;
    user-select: none;
    input {
      outline: none;
      border-radius: 2px;
      border: none;
      background-color: #ecebeb;
      user-select: none;

    }

    .phoneNumberInput {
      width: 225px;
      border-radius: 8px;
    }

    .phoneNumberDropdown {
      width: 225px;
    }

    button {
      background-color: #307df0;
      color: white;
      border: none;
      width: 225px;
      height: 37px;
      margin: 25px 0px 0px 0px;
      border-radius: 12px;
      cursor: pointer;

      :hover {
        background-color: #2d75e0;
      }

      :disabled {
        color: #000;
        background-color: #a7a7a7;
      }
    }
  }

  .AuthContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
    user-select: none;

    .otpAuth {
      user-select: none;
      margin: 0;
      display: flex;
      justify-content: space-between;
    }

    .otpInputAuth {
      user-select: none;
      :not(:nth-child(1)) {
        margin-left: 10px;
      }
    }

    input {
      user-select: none;
      padding: 12px 15px 15px 15px;
      margin: 15px 0px 15px 0px;
      outline: none;
      border-radius: 10px;
      border: none;
      width: 65%;
      background-color: #ecebeb;
    }

    button {
      background-color: #307df0;
      color: white;
      border: none;
      padding: 12px 15px 15px 15px;
      width: 65%;
      height: 48px;
      margin: 15px 0px 15px 0px;
      border-radius: 12px;
      cursor: pointer;

      :hover {
        background-color: #2d75e0;
      }

      :disabled {
        color: #000;
        background-color: #a7a7a7;
      }
    }
  }
`;