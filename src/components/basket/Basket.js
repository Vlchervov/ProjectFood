import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart/cartContext";

export const Basket = () => {
  const [state, setState] = useState(false);
  const { CartItems } = useContext;

  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setState(false);
  //   }, 4000);
  // }, [state]);

  return (
    <section className="basketSection">
      <div className="basket">
        <div className="basket__item">
          <div className="basket__body">
            <div className="basket__content">
              <p className="basket__title">
                <b></b>
              </p>
              <p className="basket__weight"></p>
              <p className="basket__description"></p>
            </div>
            <div className="basket__footer">
              <p className="basket__price"></p>
            </div>
          </div>
        </div>
        <button
          disabled={state}
          onClick={() => {
            setState(true);
          }}
        >
          Перейти к оформлению заказа
        </button>
      </div>
    </section>
  );
};
