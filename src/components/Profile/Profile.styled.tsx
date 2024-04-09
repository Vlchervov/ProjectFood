import { down } from "styled-breakpoints";
import styled from "styled-components";

export const ProfileSection = styled.section`
    display: flex;
    margin-top: 80px;
    flex-direction: column;

    h1 {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        display: flex;
        text-transform: uppercase;
        font-style: italic;
        font-size: 16px;
        color: ${(props) => props.theme.color};

        ${down("sm")} {
           justify-content: center;
        }
    }
`

export const WrapperAboutUser = styled.div`
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
    height: 400px;
    justify-content: space-between;
    box-shadow: 1px 0px 4px 0px #bdbdbd; 
    /* border: ${(props) => props.theme.border.border}; */

    ${down("sm")} {
        width: 100%;
        border-left: none;
        border-right: none;
        border-radius: 0;
    }
`

export const InfoAboutUser = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    p {
    padding-left: 16px;
    color: ${(props) => props.theme.color};
    margin: 0px 0px 0px 0px;
}

input {
    border: 0px 0px 1px solid #000000;
    margin-left: 10px;
    margin-top: 0;
    width: 120px;
}
`

export const FooterInfoAboutUser = styled.div`
display: flex;
justify-content: center;
    button {
    cursor: pointer;
    border: none;
    width: 270px;
    height: 38px;
    margin-bottom: 25px;
    border-radius: 25px;
    background-color: rgb(71, 141, 255);
    color: white;

    :hover {
        background-color: #2d75e0;
    }
    
    :disabled {
        opacity: 0.8;
    }
    }
`