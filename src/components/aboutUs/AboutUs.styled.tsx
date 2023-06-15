import styled from "styled-components";
import { down } from "styled-breakpoints";

export const NewSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 102vh;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  padding: 100px 0px 0px 50px;
  background: #ff0055;
  font-weight: 700;
  font-family: "Inter-Bold", "Inter", sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 42px;
  letter-spacing: -1px;
  ${down("xl")} {
    font-size: 28px;
  }

  ${down("sm")} {
    font-size: 25px;
  }

  p {
    padding: 0px 14px 4px 14px;
    user-select: none;
  }

  b {
    background-color: #0c8f00;
  }

  b:nth-child(2) {
    background-color: #ff0055;
  }

  b:nth-child(1) {
    background-color: #0051ff;
  }
  b:nth-child(4) {
    background-color: #00ddc0;

    strong {
      background-color: #bd19c8;
    }
  }
  b:nth-child(7) {
    background-color: #000000;
  }
  b:nth-child(9) {
    background-color: #fffb00;
    color: #000000;
  }

  span {
    display: block;
    transform: translateX(-100px);
    opacity: 0;
  }

  :nth-child(3) {
    margin: 0;
    background: #ffffff;

    h2 {
      user-select: none;
      background-color: black;
      color: #ffffff;
      justify-content: flex-start;
      padding-left: 14px;
      margin: 0;
      font-weight: 500;
      font-size: 44px;
      font-family: "Inter-Bold", "Inter", sans-serif;

      ${down("sm")} {
        font-size: 32px;
        padding-left: 14px;
      }
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      display: none;
      scroll-behavior: inherit;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: none;
      background: #eeeeee;
    }
  }

  :nth-child(4) {
    background: #bd19c8;
    text-decoration: underline;
  }

  :nth-child(5) {
    background: #0077ff;
  }
`;