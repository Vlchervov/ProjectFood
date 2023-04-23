import styled from "styled-components";

export const ModalForAuthorizationSection = styled.section`
    display: flex;
`

export const ModalForAuthorizationWrapper = styled.div`
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    `

export const ModalForAuthorizationBody = styled.div`
    padding: 2rem;
    width: 575px;
    background-color: #fff;
    height: 462px;
    z-index: 4;
    border-radius: 15px;
`