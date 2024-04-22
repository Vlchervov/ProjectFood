import styled from "styled-components";
import { down } from "styled-breakpoints";

export const BasketSection = styled.section`
  flex: 1 1 auto;
  padding-bottom: 100px;
  padding-top: 125px;
  display: flex;
  /* align-items: center; */

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

    &__cartItemContainerWrapper {
      display: flex;

      ${down("sm")} {
        flex-direction: column;
      }
    }

    &__cartItemContainer {
    background-color: ${(props) => props.theme.card.background};
    padding: 12px;
    border-radius: 12px;
    width: 900px;

    ${down("sm")} {
      width: unset;
    }
  }

  &__orderInfo {
    color: ${(props) => props.theme.color};

    p {
      margin: 0;
      &:nth-child(1) {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }

  &__goToOrderWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 80px;
    border-radius: 12px;
    margin-left: 16px;
    padding: 12px;
    height: 450px;
    background-color: ${(props) => props.theme.card.background};

    ${down("sm")} {
      margin-left: 0px;
      width: 100%;
      height: unset;
      top: unset;
      bottom: 0;
      position: fixed;
      border-radius: 0px;
      justify-content: flex-end;
      border-top: ${(props) => props.theme.border.top};
    }
  }

    &__returnToCatalogButton,
    &__goToOrder {
      cursor: pointer;
      border: none;
      width: 270px;
      height: 32px;
      margin-bottom: 25px;
      border-radius: 25px;
      background-color: #478dff;
      /* background-color: #FF0044; */
      color: white;
      margin-top: 25px;

      &:hover {
        background-color: #2d75e0;
        /* background-color: #d10038; */
      }

      &:disabled {
        background-color: #b1b1b1;
      }
    }

    &__goToOrder {
      ${down("sm")} {
        width: unset;
        border-radius: 8px;
        font-weight: 700;
        margin-right: 18px;
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
      font-size: 24px;
      font-weight: 600;
      user-select: none;
      color: ${(props) => props.theme.color};
      display: flex;
      height: 30px;
      justify-content: flex-start;
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