import styled from "styled-components";
import { between, down } from "styled-breakpoints";

export const Catalog = styled.div`
  /* padding-top: 160px; */
  padding-top: 60px;
  max-width: 1420px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

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
    background-color: white;
    display: flex;
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
  padding: 24px 0px 0px 24px;
  margin: unset;
  margin-left: 20px;

  ${between("sm", "md")} {
    margin-left: 0px;
    font-size: 20px;
  }

  ${down("sm")} {
    margin-left: 0px;
  }
`;

export const WrapperCatalogCategories = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border-radius: 24px;

  ${down("sm")} {
    border-radius: 0px;
  }
`

export const Categories = styled.section`
  display: flex;
  /* background-color: ${(props) => props.theme.background.color}; */
  flex-wrap: wrap;
  padding: 24px;
  margin-bottom: 18px;

  ${down("sm")} {
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
  width: 300px;
  transition: all 0.5ms ease-out;
  margin-right: 20px;
  margin-bottom: 20px;
  /* box-shadow: 0px 10px 11px 2px rgba(0, 0, 0, 0.10);  */

  ${between("sm", "md")} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  ${down("sm")} {
    margin-left: 0px;
    padding-left: 0px;
    margin-right: 0px;
    width: 100%;
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
      border-radius: 8px;
      width: 120px;
      height: 30px;
      color: white;
      /* background-color: #FF0044; */
      background-color: #2c88ff;
      transition: all 0.366s;
      cursor: pointer;

      :hover {
        transition: all 0.3s;
        color: white;
        text-decoration: none;
        /* background-color: #da003a; */
        background-color: #1c77ff;
        
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
    max-height: 240px;
    object-fit: cover;
    border-radius: 16px;
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