import { useState } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Новокузнецк");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isModalForAuthorizationVisible, setIsModalForAuthorizationVisible] =
    useState(false);

  return (
    <CartContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        isAuthorized,
        setIsAuthorized,
        isModalForAuthorizationVisible,
        setIsModalForAuthorizationVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
