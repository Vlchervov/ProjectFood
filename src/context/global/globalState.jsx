import { useState, useEffect } from "react";
import GlobalContext from "./globalContext";

const GlobalState = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Новокузнецк");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isModalForAuthorizationVisible, setIsModalForAuthorizationVisible] =
    useState(false);

  const [scroll, setScroll] = useState(0);

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
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        isAuthorized,
        setIsAuthorized,
        isModalForAuthorizationVisible,
        setIsModalForAuthorizationVisible,
        handleButton,
        scroll,
        refHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
