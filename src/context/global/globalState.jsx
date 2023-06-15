import { useState, useEffect } from "react";
import GlobalContext from "./globalContext";
import { useActions } from "../../hooks/useActions";

const GlobalState = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Новокузнецк");
  const [isModalForAuthorizationVisible, setIsModalForAuthorizationVisible] =
    useState(false);
  const [user, setUser] = useState(null);
  const [isHeaderIsHidden, setIsHeaderIsHidden] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [otpState, setOtpState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);
  const { isAuthProfile } = useActions();

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsAuthorized(true);
      setUser(localStorage.getItem("user"));
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  const signin = (newUser, cb) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    setIsAuthorized(true);
    isAuthProfile(newUser);
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;