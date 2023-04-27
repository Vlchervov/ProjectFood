import { useState } from "react";
import { SwiperComponent } from "../Swiper/SwiperComponent";
import { CategoriesItem } from "./Catalog.styled";
import { ICartItem } from "../../interfaces";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { motion } from "framer-motion";

interface IPropsCard extends ICartItem {
  price: number;
}

export const CatalogCard = (props: IPropsCard) => {
  const { cart }: any = useSelector((state) => state);
  const { decrease, removeItem, increase, addTo } = useActions();
  const [button, setButton] = useState<string>("default");
  const checkCart = (id: number) => {
    let result: boolean = false;
    cart.forEach((element: IPropsCard) => {
      if (element.id === id) result = true;
    });
    return result;
  };

  return (
    <CategoriesItem
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
    >
      <SwiperComponent img={props.src} />
      <div className="categories__body">
        <p className="categories__title">
          <b>{props.title}</b>
        </p>
        <p className="categories__weight">{props.weight}</p>
        <p className="categories__description">{props.descr}</p>
        <div className="categories__footer">
          {(cart.length !== 0 && checkCart(props.id)) ||
          button !== "default" ? (
            cart.map((item: IPropsCard) => {
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
