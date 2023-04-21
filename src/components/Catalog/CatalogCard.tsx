import { useState, useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import { SwiperComponent } from "../Swiper/SwiperComponent";
import { CategoriesItem } from "./Catalog.styled";
import { ICartItem } from "../../interfaces";

interface IPropsCard extends ICartItem {
  price: number;
}

export const CatalogCard = (props: IPropsCard) => {
  const { addTo, cartItems, decrease, increase, removeItem } =
    useContext(CartContext);
  const [button, setButton] = useState("default");
  const checkCart = (id: number) => {
    let result = false;
    cartItems.forEach((element: IPropsCard) => {
      if (element.id === id) result = true;
    });
    return result;
  };

  return (
    <CategoriesItem key={props.id}>
      <SwiperComponent img={props.src} />
      <div className="categories__body">
        <p className="categories__title">
          <b>{props.title}</b>
        </p>
        <p className="categories__weight">{props.weight}</p>
        <p className="categories__description">{props.descr}</p>
        <div className="categories__footer">
          {(cartItems.length !== 0 && checkCart(props.id)) ||
          button !== "default" ? (
            cartItems.map((item: IPropsCard) => {
              if (item.id === props.id) {
                return (
                  <div key={item.id} className="product__footer">
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
