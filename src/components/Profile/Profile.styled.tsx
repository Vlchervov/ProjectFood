import styled from "styled-components";

export const ProfileSection = styled.section`
    display: flex;
    margin-top: 80px;
    flex-direction: column;
    align-items: center;
    
    h1 {
        align-items: center;
        display: flex;
    }
`

export const WrapperAboutUser = styled.div`
    display: flex;
    position: sticky;
    width: 480px;
    height: 400px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 13px 2px;   
`

export const InfoAboutUser = styled.div`
    display: flex;
    flex-direction: column;
    p {
    padding-left: 16px;
    color: black;
    margin: 0px 0px 0px 0px;
}

label { 
    margin: 0px 0px 0px 0px;
    padding-top: 0;
    padding-left: 16px;
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
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    border-radius: 25px;
    background-color: rgb(71, 141, 255);
    color: white;

    :hover {
        background-color: #2d75e0;
    }
    }
`