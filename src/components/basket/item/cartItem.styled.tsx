import { down } from "styled-breakpoints";
import styled from "styled-components";


export const BasketItem = styled.div`

.product {
  img {
    object-fit: cover;
    width: 145px;
    max-height: 120px;
    border-radius: 12px;
    margin-left: 12px;
    margin-top: 14px;

    ${down("sm")} {
      margin-left: 0px;
    }
  }

  &__count {
    background-color: #e9e9e9;
    text-align: center;
    font-weight: 600;
    border-radius: 4px;
    width: 35px;
    color: #000000;
  }

  &__counterDecreaseButton,
  &__counterIncreaseButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    cursor: pointer;
    height: 25px;
    margin-left: 12px;
    margin-right: 12px;
    // background-color: #478dff;
    background-color: white;
    border: 1px solid #478dff;
    border-radius: 8px;
    transition: all 0.5s ease-out;
    // box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #478dff;

      span {
        background-color: white;
      }
    }

    span {
      display: block;
      position: absolute;
      background-color: #478dff;
      width: 11px;
      height: 2px;
    }

    span:nth-child(2) {
      transform: rotate(90deg);
    }
  }

  &__deleteButton {
    height: 55px;
    border: none;
    padding: 0px;
    margin-right: 16px;
    text-align: end;
    font-weight: 400;
    background: none;
    border-radius: 25px;
    color: #e74c4c;

    &:hover {
      text-decoration: none;
      color: #b10000;
      cursor: pointer;
    }

    svg {
      width: 22px;
      height: 22px;
    }
  }

  &__item {
    margin-top: 8px;
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
    border-radius: 0px;
    background-color: ${(props) => props.theme.card.background};
    // box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    border-bottom: ${(props) => props.theme.border.bottom};

    ${down("sm")} {
      flex-direction: column;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding-left: 20px;

    ${down("sm")} {
      width: unset;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__icon {
    width: 48px;
    height: 48px;
    padding-left: 10px;
  }

  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
    color: ${(props) => props.theme.color}
  }

  &__weight {
    font-size: 12px;
    line-height: 17px;
    color: ${(props) => props.theme.color};
    margin-bottom: 0px;
  }

  &__description {
    font-family: sans-serif;
    font-size: 14px;
    line-height: 17px;
    color: ${(props) => props.theme.color};
    width: 100%;
    height: 60px;
    overflow: auto;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  &__footerWrapper {
    display: flex;
    flex-direction: column;
    ${down("sm")} {
      flex-direction: row-reverse;
      width: 100%;
      justify-content: space-between;
    }
  }

  &__footer {
    display: flex;
    // align-self: flex-end;
    align-items: center;
    // width: 100%;
    justify-content: space-between;
  }

  &__price {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.theme.color};
  }
}
`