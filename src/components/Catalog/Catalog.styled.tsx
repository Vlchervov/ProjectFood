import styled from "styled-components";
import { between, down } from "styled-breakpoints";

export const Catalog = styled.div`
  /* padding-top: 160px; */
  padding-top: 60px;
  scroll-behavior: smooth;

  .mainCatalog {
    display: flex;
    flex-direction: column;
  }

  .catalogSwiper {
    display: flex;
  }

  .swiper {
    margin-left: 0px;
    margin-right: 0px;
  }
  
  .catalog__swiper {
    display: flex;
    width: 89%;
    margin-left: auto;
    margin-right: auto;
    height: 380px;
    border-radius: 12px;
    overflow: hidden;
    margin-top: 12px;
    user-select: none;
    /* box-shadow: 4px 5px 10px 0px rgba(0, 0, 0, 0.4); */
    img {
     width: 100%;
     height: 100%;
     object-fit: cover;
    }

    ${down("sm")} {
      width: 95%;
      height: 12.5rem;
    }

    ${between("sm", "md")} {
    height: 180px;
    width: 100%;
    border-radius: 0px;
  }
  }
`;

export const CategoryName = styled.h1`
  color: ${(props) => props.theme.color};
  font-size: 24px;
  font-weight: 600;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  margin-left: 110px;
  margin-right: 0px;

  ${between("sm", "md")} {
    justify-content: center;
    margin-left: 0px;
  }

  ${between("md", "xl")} {

  }

  ${down("sm")} {
    margin-left: 20px;
    font-size: 20px;
  }
`;

export const Categories = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.background.color};
  padding-top: 0px;
  flex-wrap: wrap;
  /* margin-left: 120px; */
  /* margin-right: 80px; */
  margin-left: 80px;
  margin-right: 40px;
  &:not(:nth-of-type(3)) {
    /* border-bottom: ${(props) => props.theme.border.bottom}; */
  }

  ${between("sm", "xl")} {
    margin-left: 0px;
    margin-right: 0px;
   justify-content: center;
  }

  ${down("sm")} {
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const CategoriesItem = styled.div`
  user-select: none;
  background-color: ${(props) => props.theme.card.background};
  border-radius: 25px;
  flex-direction: column;
  display: flex;
  margin-left: 20px;
  width: 305px;
  transition: all 0.2s;
  margin-right: 20px;
  margin-bottom: 20px;
  /* box-shadow: 0px 10px 11px 2px rgba(0, 0, 0, 0.10);  */

  ${down("sm")} {
    margin-left: 0px;
    padding-left: 0px;
    margin-right: 0px;
    width: 95%;
    flex-direction: column;
    justify-content: center;
  }

  .swiperCard {
    height: 100%;
    width: 100%;
    &:last-child {
      border-bottom: none;
    }

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }

    ${down("sm")} {
      width: 100%;
    }
  }

  .categories__description {
    font-family: sans-serif;
    font-size: 12px;
    overflow-y: hidden;
    height: 60px;
    margin: 0px;
    line-height: 17px;
    color: ${(props) => props.theme.color};
    display: flex;
    ${down("sm")} {
      width: 100%;
    }
  }

  .categories__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 12px 0px 12px;

    button {
      border: none;
      user-select: none;
      border-radius: 25px;
      width: 100px;
      height: 30px;
      /* color: ${(props) => props.theme.color}; */
      color: white;
      background-color: #FF0044;
      font-weight: 500;
      transition: all 0.366s;
      cursor: pointer;

      /* :hover {
        transition: all 0.3s;
        color: white;
        text-decoration: none;
        background-color: #f10071;
        
      } */
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
    max-height: 240px;
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