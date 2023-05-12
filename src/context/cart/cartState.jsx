import { useState, useEffect } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Новокузнецк");
  const [isAuthorized, setIsAuthorized] = useState(null);
  const [isModalForAuthorizationVisible, setIsModalForAuthorizationVisible] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);

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

  return (
    <CartContext.Provider
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
    </CartContext.Provider>
  );
};

export default CartState;
