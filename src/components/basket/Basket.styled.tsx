import styled from "styled-components";
import { down } from "styled-breakpoints";

export const BasketSection = styled.section`
  flex: 1 1 auto;
  padding-bottom: 100px;
  padding-top: 125px;
  display: flex;
  align-items: center;

  .basketSwiper {
    width: 490px;
    height: 485px;
    border-radius: 8px;
    padding-left: 16px;
    background-color: white;
    box-shadow: none;

    ${down("sm")} {
      padding: 0;
    }
  }

  .listWrapper {
    background-color: #fdfcfc;
    width: 650px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding-bottom: 25px;
    flex-direction: column;
  }

  .listItem {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  label {
    user-select: none;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0px;
    li {
      list-style: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
  }

  textarea {
    margin-top: 5px;
    min-width: 300px;
    max-width: 300px;
    min-height: 150px;
    max-height: 150px;
    outline: none;
    padding-left: 10px;
    border: 2px solid #e6e6e6;
    border-radius: 10px;

    :placeholder {
      width: 255px;
      height: 22px;
      left: 50px;
      font-style: normal;
      font-size: 22px;
      letter-spacing: 0.01em;
      color: #999999;
    }
  }

  input[type="text"] {
    position: relative;
    font-size: 14px;
    letter-spacing: 0.01rem;
    padding-left: 8px;
    user-select: none;
    background: #ffffff;
    border: 1px solid #cacaca;
    border-radius: 5px;
    line-height: 25px;
    height: 30px;
    width: 288px;
    outline: none;
    &:disabled {
      color: #999999;
    }
  }
  .basket {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &__checkbox {
      label {
        cursor: pointer;
      }
    }

    &__returnToCatalogButton,
    &__goToOrder {
      cursor: pointer;
      border: none;
      width: 270px;
      height: 38px;
      margin-bottom: 25px;
      border-radius: 25px;
      background-color: #478dff;
      color: white;
      margin-top: 25px;

      &:hover {
        background-color: #2d75e0;
      }

      &:disabled {
        background-color: #b1b1b1;
      }
    }

    &__totalAmountButton {
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border: none;
      position: absolute;
      bottom: 15px;
      width: 270px;
      height: 38px;
      display: flex;
      border-radius: 25px;
      left: 40px;
      background-color: #478dff;
      color: white;

      &:hover {
        background-color: #2d75e0;
      }

      :disabled {
        background-color: #d3d3d3;
        color: black;
        cursor: default;
      }
    }
  }

  .emptyBasket {
    width: 150px;
    height: 150px;
    color: #bebebe;
  }

  .cardWrapper {
    display: flex;
    border-radius: 25px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;

    @media (max-width: 812px) {
      width: 100%;
    }

    .wrapperEmptyBasket {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 150px;
      margin-bottom: 25px;
      align-self: center;
      color: ${(props) => props.theme.color};
    }

    h6 {
      cursor: pointer;
      color: ${(props) => props.theme.color};
      &:hover {
        color: rgb(202, 42, 42);
      }

      @media (max-width: 812px) {
        padding-right: 10px;
      }
    }

    h1 {
      width: 100%;
      font-size: 18px;
      user-select: none;
      background-color: #f5f4f4;
      text-align: center;
      display: flex;
      align-items: center;
      height: 30px;
      justify-content: center;
    }
  }

  .totalAmount {
    box-shadow: 0px 10px 10px 15px rgba(0, 0, 0, 0.2);
    position: sticky;
    display: flex;
    margin-bottom: 0px;
    top: 120px;
    margin-left: 0;
    flex-direction: column;
    background-color: white;
    border-radius: 0px 25px 25px 25px;

    width: 363px;
    height: 540px;
    margin-left: 0px;
  }
`;