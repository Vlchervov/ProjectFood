import styled from "styled-components";

export const Section = styled.section`
  display: flex;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBody = styled.div`
  padding: 2rem;
  width: 375px;
  background-color: #fff;
  height: 162px;
  z-index: 4;
  border-radius: 0px;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

export const AceptButton = styled.button`
  color: white;
  border-radius: 10px;
  width: 137px;
  height: 40px;
  margin-top: 5px;
  margin-left: 7px;
  background-color: #f2f2f2;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-left: 17px;
  color: black;
  font-size: 16px;
  cursor: pointer;

  :hover {
    transition: 0.3s ease;
    color: white;
    background-color: rgb(47, 179, 47);
  }
`;
export const DeclineButton = styled.button`
  margin-left: 4px;
  border-radius: 10px;
  width: 137px;
  cursor: pointer;
  height: 40px;
  margin-top: 25px;
  background-color: #f2f2f2;
  color: #4d4d4d;
  border: 1px solid rgba(255, 255, 255, 0);
  font-size: 16px;

  :hover {
    background-color: rgb(218, 31, 31);
    color: white;
    transition: 0.5s ease;
  }
`;