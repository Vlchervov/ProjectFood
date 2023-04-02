import { useContext, useState } from "react";
import CartContext from "../../context/cart/cartContext";
import { CartItem } from "./item/CartItem";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "./_basket.scss";
import { ValidateOrderForm } from "../basketOrderForm/validateOrderForm";
import { fetcher } from "../fetcher";
import useSWR from "swr";

export const Basket = () => {
  const { cartItems, cleanArray } = useContext(CartContext);
  const { data, error } = useSWR("/orders", fetcher);

  console.log();

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
                    marginBottom: 25,
                    alignSelf: "center",
                  }}
                >
                  <FaShoppingBasket className="emptyBasket" />
                  <h4>Корзина пуста</h4>
                  Добавьте товар из меню, чтобы сделать заказ
                  <Link to="/catalog">
                    <button className="basket__button">
                      Перейти в каталог
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1
                  style={{
                    background: "#d7d7d7",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Заказ №{data.title}
                </h1>
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
              <ValidateOrderForm
                cartItems={cartItems}
                cleanArray={cleanArray}
              />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};
