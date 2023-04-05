import { useState, useContext, useEffect } from "react";
import CartContext from "../../context/cart/cartContext";
import "./_catalog.scss";
import { SwiperComponent } from "../Swiper/SwiperComponent";

export const CatalogCard = (props) => {
  const { addTo, cartItems, decrease, increase } = useContext(CartContext);
  const [button, setButton] = useState("default");
  useEffect(() => {
    checkCart(props.id);
  }, [cartItems]);

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
            cartItems.map((item) => {
              if (item.id === props.id) {
                return (
                  <div key={item.id} className="product__footer">
                    <p className="product__price">
                      {"\u00A0"}
                      {item.priceTotal + "₽"}
                    </p>
                    <div
                      className="product__counterDecreaseButton"
                      onClick={() => {
                        decrease(item.id);
                        setButton("default");
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
    </div>
  );
};
