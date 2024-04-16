import styled from "styled-components";
import { down } from "styled-breakpoints";

export const NewSection = styled.section`
  box-sizing: border-box;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 102vh;
  display: flex;
  justify-content: flex-start;
  border-radius: 12px;
  margin-bottom: 12px;
  padding: 24px 0px 0px 12px;
  background: #bd19c8;
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


  span {
    display: block;
    transform: translateX(-100px);
    opacity: 0;
  }

  :nth-child(2) {
    color: black;
    background: #ffffff;

    h2 {
      user-select: none;
      background-color: ${(props) => props.theme.card.background};
      color: ${(props) => props.theme.color};
      justify-content: flex-start;
      border-top-left-radius: 12px;
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
  }

  :nth-child(3) {
    background: #0077ff;
    text-decoration: underline;
  }

  :nth-child(4) {
    background: #ff0015;
  }
`;