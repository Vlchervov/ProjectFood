import { useState } from "react";
import CartContext from "./cartContext";

const CartState = ({ children }) => {
  const [initialState, setInitialState] = useState([]);
  const [currentCity, setCurrenCity] = useState("Новокузнецк");

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

  const cleanArray = () => {
    setInitialState([]);
  };

  const increase = (id) => {
    setInitialState((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const objCopy = { ...product };
          return {
            ...objCopy,
            count: objCopy.count + 1,
            priceTotal: (objCopy.count + 1) * objCopy.price,
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
          const newCount = objCopy.count - 1 > 0 ? objCopy.count - 1 : 1;
          return {
            ...objCopy,
            count: newCount,
            priceTotal: newCount * objCopy.price,
          };
        }
        return product;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        currentCity,
        setCurrenCity,
        increase,
        decrease,
        cleanArray,
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
