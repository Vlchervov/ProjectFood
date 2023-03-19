import { useContext, useState } from "react";
import CartContext from "../../context/cart/cartContext";
import { CartItem } from "./item/CartItem";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "./_basket.scss";

export const Basket = () => {
  const [state, setState] = useState(false);
  const { cartItems } = useContext(CartContext);
  return (
    <section className="basketSection">
      <div className="basket">
        <div className="cardWrapper">
          <>
            {cartItems.length === 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <FaShoppingBasket className="emptyBasket" />
                  <h4>Корзина пуста</h4>
                  Добавьте товар из меню, чтобы сделать заказ
                </div>
                <Link to="/catalog">
                  <button className="basket__button">Перейти в каталог</button>
                </Link>
              </>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </>
            )}
          </>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="totalAmount">
              <div style={{ fontWeight: "600" }}>Итого:{"\u00A0"}</div>
              <div>
                Количество:{" "}
                {cartItems.reduce((count, item) => item.count + count, 0)}
              </div>
              <div>
                К оплате:{" "}
                {cartItems.reduce(
                  (amount, item) => item.priceTotal + amount,
                  0
                )}
                {"\u00A0"}₽
              </div>
              <div className="">
                <button type="radio"></button>
                <button type="radio"></button>
                <button type="radio"></button>
              </div>
              <button
                className="basket__totalAmountButton"
                disabled={state}
                onClick={() => {
                  setState(true);
                }}
              >
                Перейти к оформлению заказа
              </button>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};
