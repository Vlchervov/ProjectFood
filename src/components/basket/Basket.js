import { useContext, useState } from "react";
import CartContext from "../../context/cart/cartContext";
import { CartItem } from "../CartItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "../Swiper/SwiperOptions";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

export const Basket = () => {
  const [state, setState] = useState(false);

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
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
            <div className="totalAmount">
              <div style={{ fontWeight: "600" }}>Итого:{"\u00A0"}</div>
              <div style={{ marginLeft: 5 }}>
                {cartItems.reduce((amount, item) => item.price + amount, 0)}
                {"\u00A0"}₽
              </div>
            </div>
          </div>
        )}

        {cartItems.length === 0 ? (
          <Link to="/catalog">
            <button className="basket__button">Перейти в каталог</button>
          </Link>
        ) : (
          <button
            className="basket__button"
            disabled={state}
            onClick={() => {
              setState(true);
            }}
          >
            Перейти к оформлению заказа
          </button>
        )}
      </div>
    </section>
  );
};
