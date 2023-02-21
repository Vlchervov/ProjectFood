import { useState } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }) => {
  let [cartOpen, setCartOpen] = useState(false);
  const [initialState, setInitialState] = useState([]);

  const addTo = (item) => {
    let isInArray = false;
    initialState.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      setInitialState([...initialState, item]);
    }
  };

  const removeItem = (id) => {
    setInitialState((item) => item.filter((el) => id !== el.id));
  };

  const increase = (id) => {
    initialState.forEach((el) => {
      if (el.id === id) {
        return {
          ...el,
          count: ++el.count,
        };
      }
    });
    // initialState.map((el) => {
    //   if (el.id === id) {
    //     return {
    //       ...el,
    //       "count": ++el.count
    //     };
    //   }
    //   return el;
    // });
  };

  return (
    <CartContext.Provider
      value={{
        setCartOpen,
        cartOpen,
        increase,
        cartItems: initialState,
        removeItem,
        addTo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
