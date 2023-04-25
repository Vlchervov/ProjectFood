import { useState } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }) => {
  const [currentCity, setCurrenCity] = useState("");

  return (
    <CartContext.Provider
      value={{
        currentCity,
        setCurrenCity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
