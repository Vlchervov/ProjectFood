import { useState, useEffect } from "react";
import GlobalContext from "./globalContext";

const GlobalState = ({ children }: any) => {
  const [isModalForAuthorizationVisible, setIsModalForAuthorizationVisible] =
    useState<boolean>(false);
  const [isModalForCleanBasketVisible, setIsModalForCleanBasketVisible] =
    useState<boolean>(false);
  const [user, setUser] = useState<null | string>(null);
  const [isHeaderIsHidden, setIsHeaderIsHidden] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);
  const [otpState, setOtpState] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [ShowOTP, setShowOTP] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [position, setPosition] = useState<number>(window.scrollY);
  const body = document.querySelector<HTMLBodyElement>("body");

  const changeOverflowWhenModalIsOpen = () => {
    return isModalForCleanBasketVisible
      ? (body!.style.overflow = "hidden")
      : (body!.style.overflow = "");
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    changeOverflowWhenModalIsOpen();
  }, [isModalForCleanBasketVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(position > scroll);
      setPosition(scroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const hidden: string = visible ? "visible" : "hidden";

  const signin = (newUser: string, cb: Function) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    cb();
  };

  const signout = (cb: Function) => {
    setUser(null);
    cb();
  };

  return (
    <GlobalContext.Provider
      value={{
        isModalForCleanBasketVisible,
        setIsModalForCleanBasketVisible,
        isModalForAuthorizationVisible,
        setIsModalForAuthorizationVisible,
        handleButton,
        scroll,
        otpState,
        setOtpState,
        phoneNumber,
        setPhoneNumber,
        ShowOTP,
        setShowOTP,
        user,
        signin,
        signout,
        isHeaderIsHidden,
        setIsHeaderIsHidden,
        hidden,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
