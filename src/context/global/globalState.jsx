import { useState, useEffect } from "react";
import GlobalContext from "./globalContext";

const GlobalState = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Новокузнецк");
  const [isModalForAuthorizationVisible, setIsModalForAuthorizationVisible] =
    useState(false);
  const [user, setUser] = useState(null);
  const [scroll, setScroll] = useState(0);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [otpState, setOtpState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleButton = () => {
    window.scrollTo(0, 0);
  };

  const refHandler = (ref) => {
    ref.current.scrollIntoView();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsAuthorized(true);
      setUser(localStorage.getItem("user"))
    }
  }, [])

  const signin = (newUser, cb) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    setUser(newUser);
    setIsAuthorized(true);
    cb();
  }

  const signout = (cb) => {
    setUser(null);
    setIsAuthorized(false);
    cb();
  }

  return (
    <GlobalContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        isModalForAuthorizationVisible,
        setIsModalForAuthorizationVisible,
        handleButton,
        scroll,
        refHandler,
        isAuthorized,
        otpState,
        setOtpState,
        phoneNumber,
        setPhoneNumber,
        ShowOTP,
        setShowOTP,
        user,
        signin,
        signout
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
