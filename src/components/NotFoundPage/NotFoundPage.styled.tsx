import styled from "styled-components";

export const NotFoundPageSection = styled.section`
  display: flex;
  margin-top: 150px;
  padding-top: 125px;
  flex-direction: column;
  align-items: center;

  button {
    border: none;
    height: 48px;
    border-radius: 12px;
    cursor: pointer;
    padding: 12px 15px 15px;
    background-color: #307df0;
    color: white;
    font-size: 16px;
   

    :hover {
      background-color: #2d75e0;
    }
  }
`;