import { useState } from "react";
import CartContext from "./cartContext";
import data from "../../data/categories.json";

const CartState = ({ children }) => {
  let [cartOpen, setCartOpen] = useState(false);
  const [state, setState] = useState(data.data);
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
      cartItems: initialState.cartItems.filter((el) => id !== el.id),
    });
  };

  const increase = (id) => {
    initialState.cartItems.map((el) => {
      if (el.id === id) {
        // setInitialState({
        //   cartItems: initialState.cartItems.map((el) => {}),
        // });
        console.log(el.count);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        setCartOpen,
        increase,
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
