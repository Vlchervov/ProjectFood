import { useState } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }) => {
  let [cartOpen, setCartOpen] = useState(false);
  const [initialState, setInitialState] = useState([]);

  const addTo = (item) => {
    let isInArray;
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
    setInitialState((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const objCopy = { ...product };
          return {
            ...objCopy,
            count: ++objCopy.count,
            priceTotal: objCopy.count * objCopy.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setInitialState((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const objCopy = { ...product };
          return {
            ...objCopy,
            count: objCopy.count - 1 > 0 ? --objCopy.count : 1,
            priceTotal: objCopy.count * objCopy.price,
          };
        }
        return product;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        setCartOpen,
        cartOpen,
        increase,
        decrease,
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
