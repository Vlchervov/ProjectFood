import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  
  .catalog__swiper {
    height: 205px;
    width: 80%;
    margin-top: 25px;
    border-radius: 25px;
    box-shadow: 4px 5px 10px 0px rgba(0, 0, 0, 0.4);
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    ${down("sm")} {
      width: 95%;
      height: 12.5rem;
    }
  }
`;

export const CategoryName = styled.h1`
  color: ${(props) => props.theme.color};
  font-size: 24px;
  font-weight: 400;
  user-select: none;
  display: flex;
  justify-content: center;

  ${down("sm")} {
    margin-left: 0;
    font-size: 20px;
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


  ${down("sm")} {
    justify-content: center;
  }
`;

export const CategoriesItem = styled.div`
  user-select: none;
  background-color: ${(props) => props.theme.background.color};
  border-radius: 25px;
  flex-direction: ${({ change }: any) => (!change ? "column" : "row")}; //Изменить пропом на rowReverse
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
  box-shadow: 0px 10px 11px 2px rgba(0, 0, 0, 0.10);

  ${down("sm")} {
    margin-left: 0px;
    padding-left: 0px;
    margin-right: 0px;
    width: 95%;
    flex-direction: column;
    justify-content: center;
  }

  .swiperCard {
    height: 200px;
    width: 350px;
    &:last-child {
      border-bottom: none;
    }

    img {
      width: 100%;
      @media (max-width: 812px) {
        width: 100%;
      }
    }

    ${down("sm")} {
      width: 100%;
    }
  }

  .categories__description {
    font-family: sans-serif;
    font-size: 12px;
    width: 300px;
    height: 30px;
    overflow: hidden;
    margin: 0px;
    line-height: 17px;
    color: ${(props) => props.theme.color};
    display: flex;
  }

  .categories__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 24px 0px 24px;
    // box-shadow: 10px 10px 15px rgb(0 0 0 / 20%);

    button {
      background-color: white;
      border: none;
      user-select: none;
      border-radius: 8px;
      background-color: ${(props) => props.theme.background.color};
      width: 110px;
      height: 25px;
      color: ${(props) => props.theme.color};
      text-decoration: underline;
      font-weight: 500;
      transition: all 0.366s;
      cursor: pointer;

      :hover {
        transition: all 0.3s;
        color: white;
        text-decoration: none;
        background-color: #4e9edf;
        /* background-color: #cf2900; */
      }
    }
  }

  .categories__title {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-top: 0px;
    cursor: pointer;
    color: ${(props) => props.theme.color};

    &:hover {

      text-decoration: underline;
    }
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
    border-radius: 20px 20px 0px 0px;
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