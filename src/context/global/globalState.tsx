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

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      scroll && setVisible(position > scroll);
      setPosition(scroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const hidden: string = visible ? "visible" : "hidden";

  const handleButton = () => {
    document.body.scrollIntoView({
      block: "start",
      behavior: "smooth",
    })
  };

  useEffect(() => {
    const body = document.querySelector<HTMLBodyElement>("body");
    const changeOverflowWhenModalIsOpen = () => {
      return isModalForCleanBasketVisible
        ? (body!.style.overflow = "hidden")
        : (body!.style.overflow = "");
    };

    changeOverflowWhenModalIsOpen();
  }, [isModalForCleanBasketVisible]);

  const signin = (newUser: string, cb: () => {}) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    cb();
  };

  const signout = (cb: () => {}) => {
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