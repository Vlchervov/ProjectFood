import { useContext, useLayoutEffect, useRef, useState } from "react";
import CartContext from "../../context/cart/cartContext";
import { CartItem } from "./item/CartItem";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { ValidateOrderForm } from "../basketOrderForm/validateOrderForm";
import { Modal } from "../modal";
import { ICartItem } from "../../interfaces";
import { BasketSection } from "./Basket.styled";
import { down } from "styled-breakpoints";
import { useSelector } from "react-redux"

export const Basket = () => {
  const h2ref = useRef<HTMLInputElement>(null);
  const [formIsVisible, setFormIsVisivle] = useState<boolean>(false);
  const { currentCity } = useContext(CartContext);

  useLayoutEffect(() => {
    h2ref.current!.scrollIntoView();
  }, []);

  const { cart }: any = useSelector(state => state);

  return (
    <BasketSection ref={h2ref}>
      <div className="basket">
        <div className="cardWrapper">
          <>
            {cart.length === 0 ? (
              <>
                <div>
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
                <h1>Корзина товаров</h1>
                <h6
                  onClick={() => {
                    setFormIsVisivle(true);
                  }}
                >
                  Очистить корзину
                </h6>
                <Modal
                  formIsVisible={formIsVisible}
                  setFormIsVisivle={setFormIsVisivle}
                />
                {cart.map((item: ICartItem) => (
                  <CartItem item={item} />
                ))}
              </>
            )}
          </>
        </div>

        {cart.length > 0 ? (
          <>
            {down("sm") ? <div className="totalAmount">
              <ValidateOrderForm
                currentCity={currentCity}
                cart={cart}
              />
            </div> : null}

          </>
        ) : null}
      </div>
    </BasketSection>
  );
};
