import { down } from "styled-breakpoints";
import styled from "styled-components";

export const NotFoundPageSection = styled.section`
  display: flex;
  margin-top: 150px;
  padding-top: 125px;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.color};
    
    ${down("sm")} {
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  button {
    border: none;
    height: 48px;
    width: 400px;
    border-radius: 12px;
    cursor: pointer;
    padding: 12px 15px 15px;
    /* background-color: #307df0; */
    background-color: #FF0044;
    color: white;
    font-size: 16px;

    ${down("sm")} {
      width: 85vw;
    }
   
    :hover {
      /* background-color: #2d75e0; */
      background-color: #ce0037;
    }
  }
`;