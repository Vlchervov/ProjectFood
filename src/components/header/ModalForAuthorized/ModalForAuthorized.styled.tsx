import styled from "styled-components";

export const ModalForAuthorizationSection = styled.section`
  display: flex;
`;

export const ModalForAuthorizationWindow = styled.div`
  position: fixed;
  display: grid;
  justify-content: center;
  align-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  z-index: 2;
`;

export const ModalForAuthorizationHeader = styled.div`
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

export const ModalForAuthorizationBody = styled.div`
  padding: 2rem;
  width: 375px;
  background-color: #fff;
  height: 262px;
  z-index: 4;
  border-radius: 15px;

  h1 {
    padding: 0;
    margin: 0;
    text-align: center;
    color: ${(props) => props.theme.color};
    font-size: 18px;
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

  .AuthContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;

    input {
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
