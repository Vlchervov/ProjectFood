import { useState } from "react";
import { SwiperComponent } from "../Swiper/SwiperComponent";
import { CategoriesItem } from "./Catalog.styled";
import { ICartItem } from "../../interfaces";
import { useActions, useAppSelector } from "../../hooks/useActions";
import { motion } from "framer-motion";
import { CheckCart } from "./CheckCart";
import { useMediaQuery } from "react-responsive";
import { CatalogCartFooterComponent } from "./CatalogCartItem/CatalogCartFooterComponent";


export const CatalogCard = (props: ICartItem) => {
  const { cart } = useAppSelector(state => state)
  const { addTo } = useActions();
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

        {(cart.length !== 0 && CheckCart(cart, props.id)) ||
          button !== "default" ? (
          cart.map((item) => {
            if (item.id === props.id) {
              return (
                <CatalogCartFooterComponent key={item.id} item={item} setButton={setButton} />
              );
            }
            return null;
          })
        ) : (
          <div className="categories__footer">
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
          </div>
        )}
      </div>
    </CategoriesItem>
  );
};