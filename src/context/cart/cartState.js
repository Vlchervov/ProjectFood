import { useState } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }) => {
  const [initialState, setInitialState] = useState({
    cartItems: [],
  });

  const addTo = (item) => {
    let isInArray = false;
    initialState.cartItems.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      setInitialState({ cartItems: [...initialState.cartItems, item] });
    }
  };

  const removeItem = (id) => {
    setInitialState({
      cartItems: initialState.cartItems.filter((el) => el.id !== id),
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: initialState.cartItems,
        removeItem,
        addTo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
