import { useState, useContext } from "react";
import CartContext from "../../context/cart/cartContext";
import "./_catalog.scss";
import { SwiperComponent } from "../Swiper/SwiperComponent";

export const CatalogCard = (props) => {
  const { addTo, cartItems, decrease, increase } = useContext(CartContext);
  const [button, setButton] = useState("default");

  const checkCart = (id) => {
    let result = false;
    cartItems.forEach((element) => {
      if (element.id === id) result = true;
    });
    return result;
  };

  return (
    <div className="categories__item" key={props.id}>
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
            <div className="product__footer">
              <p className="product__price">
                {"\u00A0"}
                {props.priceTotal + "₽"}
              </p>

              <div
                className="product__counterDecreaseButton"
                onClick={() => {
                  decrease(props.id);
                }}
              >
                <span></span>
              </div>
              <p className="product__count">{props.count}</p>
              <div
                className="product__counterIncreaseButton"
                onClick={() => {
                  increase(props.id);
                }}
              >
                <span></span>
                <span></span>
              </div>
            </div>
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
    </div>
  );
};
