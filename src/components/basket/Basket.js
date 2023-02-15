import { useContext, useState } from "react";
import CartContext from "../../context/cart/cartContext";
import formatCurrency from "format-currency";
import { CartItem } from "../CartItem";

export const Basket = () => {
  const [state, setState] = useState(false);
  let opts = { format: "%s%v", symbol: "₽" };
  const { showCart, cartItems } = useContext(CartContext);
  return (
    <section className="basketSection">
      <div className="basket">
        {showCart && (
          <div>
            <div>
              {cartItems.length === 0 ? (
                <h4>Корзина пуста</h4>
              ) : (
                <div className="cardWrapper">
                  {cartItems.map((item) => (
                    <CartItem key={item._id} item={item} />
                  ))}
                </div>
              )}
            </div>
            <div>
              <div>Cart Total</div>
              <div style={{ marginLeft: 5 }}>
                {formatCurrency(
                  cartItems.reduce((amount, item) => item.price + amount, 0),
                  opts
                )}
              </div>
            </div>
          </div>
        )}

        <button
          className="basket__button"
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
