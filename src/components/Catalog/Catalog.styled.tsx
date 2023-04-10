import styled from "styled-components";

export const CategoryName = styled.h1`
  color: ${(props) => props.theme.color};
  font-size: 24px;
  font-weight: 400;
  user-select: none;
  margin-left: 110px;
  @media (max-width: 812px) {
    justify-content: center;
    margin-left: 0;
  }
`;

export const Categories = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.background.color};
  padding-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
  border-top: ${(props) => props.theme.border.top};

  &:not(:nth-of-type(3)) {
    border-bottom: ${(props) => props.theme.border.bottom};
  }
  @media (max-width: 812px) {
    padding-top: 0px;
    justify-content: center;
  }
`;

export const CategoriesItem = styled.div`
  user-select: none;
  width: 400px;
  background-color: ${(props) => props.theme.background.color};
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  flex-direction: column;
  margin-left: 40px;
  display: flex;
  margin-bottom: 30px;

  box-shadow: 0px 11px 13px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 812px) {
    margin-left: 0px;
    padding-left: 0px;
    margin-right: 0px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  .categories__description {
    font-family: sans-serif;
    font-size: 12px;
    line-height: 17px;
    color: ${(props) => props.theme.color};
    display: flex;
  }

  .categories__body {
    border-bottom-left-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 24px 0px 24px;
    // box-shadow: 10px 10px 15px rgb(0 0 0 / 20%);

    button {
      background-color: white;
      border: none;
      user-select: none;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: #478dff;
      width: 100px;
      color: white;
      cursor: pointer;
    }
  }

  .categories__title {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
    color: ${(props) => props.theme.color};
  }

  .categories__footer {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  img {
    max-height: 205px;
    object-fit: cover;
    border-top-right-radius: 25px;
  }

  .categories__price {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.theme.color};
  }

  .categories__weight {
    color: ${(props) => props.theme.color};
  }
`;
