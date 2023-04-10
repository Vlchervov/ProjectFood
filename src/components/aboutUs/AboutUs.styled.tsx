import styled from "styled-components";

export const AboutUsSection = styled.section`
  flex: 1 1 auto;
  display: flex;
  padding-top: 60px;
  justify-content: center;
  background-color: white;    

  div {
    h2 {
      user-select: none;
      display: flex;
      justify-content: flex-start;
      padding-left: 12px;
      font-weight: 500;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      color: #585858;
    }

    p {
      color: black;
      padding: 0px 12px 4px 12px;
    }
  }
`