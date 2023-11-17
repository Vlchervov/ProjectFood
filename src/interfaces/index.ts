import { MouseEventHandler } from "react";

export interface IDataContent {
  name: string;
  city: string;
  anchor: string;
  key: string | number;
  anchorID: string;
  cards: {
    id: number;
    title: string;
    src: {
      image_1: string;
      image_2: string;
      image_3: string;
    };
    descr: string;
    weight: string;
    count: number;
    price: number;
    priceTotal: number;

  }[];
}

export interface IGlobalStateContext {
  isModalForCleanBasketVisible: boolean,
  setIsModalForCleanBasketVisible: Function,
  isModalForAuthorizationVisible: boolean,
  setIsModalForAuthorizationVisible: Function,
  handleButton: MouseEventHandler,
  scroll: number,
  otpState: string,
  setOtpState: Function,
  phoneNumber: string,
  setPhoneNumber: Function,
  ShowOTP: boolean,
  setShowOTP: Function,
  user: null | string,
  signin: Function,
  signout: Function,
  isHeaderIsHidden: boolean,
  setIsHeaderIsHidden: Function,
  hidden: any,
}

export interface IModal {
  isModalForCleanBasketVisible: boolean;
  setIsModalForCleanBasketVisible: Function;
}

export interface ICartItem {
  id: number;
  src: {
    image_1?: string;
    image_2?: string;
    image_3?: string;
  };
  title: string;
  weight: string;
  descr: string;
  priceTotal: number;
  count: number;
}
