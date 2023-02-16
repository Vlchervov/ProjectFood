import { useContext } from "react";
import CartContext from "../context/cart/cartContext";

export const CartItem = ({ item }) => {
  const { removeItem, addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <div className="product__item">
        <img src={item.src} />
        <div className="product__body">
          <div className="product__content">
            <p className="product__title">{item.title}</p>
            <p className="product__weight">{item.weight}</p>
            <p className="product__description">{item.descr}</p>
          </div>
          <div className="product__footer">
            <p className="product__price">
              Цена: {"\u00A0"}
              {item.price + "₽"}
            </p>
          </div>
        </div>
        <button
          className="product__button"
          onClick={() => {
            removeItem(item.id);
          }}
        >
          Удалить
        </button>
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          добавить
        </button>
      </div>
    </div>
  );
};
