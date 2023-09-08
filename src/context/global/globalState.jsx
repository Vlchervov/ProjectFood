import { useState, useEffect } from "react";
import GlobalContext from "./globalContext";

const GlobalState = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Новокузнецк");
  const [isModalForAuthorizationVisible, setIsModalForAuthorizationVisible] =
    useState(false);
  const [isModalForCleanBasketVisible, setIsModalForCleanBasketVisible] =
    useState(false);
  const [user, setUser] = useState(null);
  const [isHeaderIsHidden, setIsHeaderIsHidden] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [otpState, setOtpState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState(window.scrollY);
  const body = document.querySelector("body");

  const changeOverflowForCleanBasketModal = () => {
    return isModalForCleanBasketVisible
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "");
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    changeOverflowForCleanBasketModal();
  }, [isModalForCleanBasketVisible]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsAuthorized(true);
      setUser(localStorage.getItem("user"));
    }
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

  const hidden = visible ? "visible" : "hidden";

  const signin = (newUser, cb) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    setIsAuthorized(true);
    cb();
  };

  const signout = (cb) => {
    setUser(null);
    setIsAuthorized(false);
    cb();
  };

  return (
    <GlobalContext.Provider
      value={{
        isModalForCleanBasketVisible,
        setIsModalForCleanBasketVisible,
        currentCity,
        setCurrentCity,
        isModalForAuthorizationVisible,
        setIsModalForAuthorizationVisible,
        handleButton,
        scroll,
        isAuthorized,
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
