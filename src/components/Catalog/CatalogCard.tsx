import { useState } from "react";
import { SwiperComponent } from "../Swiper/SwiperComponent";
import { CategoriesItem } from "./Catalog.styled";
import { ICartItem } from "../../interfaces";
import { useActions, useAppSelector } from "../../hooks/useActions";
import { motion } from "framer-motion";
import { CheckCart } from "./CheckCart";
import { useMediaQuery } from "react-responsive";

interface IPropsCard extends ICartItem {
  price: number;
}

export const CatalogCard = (props: IPropsCard) => {
  const { cart } = useAppSelector(state => state)
  const { decrease, removeItem, increase, addTo } = useActions();
  const [button, setButton] = useState<string>("default");
  const isMobile = useMediaQuery({ query: '(max-width: 812px)' });

  return (
    <CategoriesItem
      as={motion.div}
      whileHover={isMobile ? { scale: 1 } : { scale: 1.02 }}
    >
      <SwiperComponent img={props.src} />
      <div className="categories__body">
        <p className="categories__title">
          <b>{props.title}</b>
        </p>
        <p className="categories__weight">{props.weight}</p>
        <p className="categories__description">{props.descr}</p>
        <div className="categories__footer">
          {(cart.length !== 0 && CheckCart(cart, props.id)) ||
            button !== "default" ? (
            cart.map((item) => {
              if (item.id === props.id) {
                return (
                  <div className="product__footer" key={item.id}>
                    <p className="categories__price">{item.priceTotal} ₽</p>
                    <div
                      className="product__counterDecreaseButton"
                      onClick={() => {
                        decrease(item.id);
                        setButton("default");
                        if (item.count === 1) removeItem(item.id);
                      }}
                    >
                      <span></span>
                    </div>
                    <p className="product__count">{item.count}</p>
                    <div
                      className="product__counterIncreaseButton"
                      onClick={() => {
                        increase(item.id);
                      }}
                    >
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <>
              <p className="categories__price">{props.price} ₽</p>
              <div className="categories__button">
                <button
                  onClick={() => {
                    setButton("inBasket");
                    addTo(props);
                  }}
                >
                  Купить
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </CategoriesItem>
  );
};