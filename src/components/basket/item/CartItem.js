import { useContext } from "react";
import CartContext from "../../../context/cart/cartContext";
import { GoTrashcan } from "react-icons/go";
import "./_cartItem.scss";

export const CartItem = ({ item }) => {
  const { removeItem, increase, decrease } = useContext(CartContext);

  return (
    <div className="product">
      <div className="product__item">
        <img src={item.src.image_1} alt="фото товара" />
        <div className="product__body">
          <div className="product__content">
            <p className="product__title">{item.title}</p>
            <p className="product__weight">{item.weight}</p>
            <p className="product__description">{item.descr}</p>
          </div>
          <div className="product__footer">
            <p className="product__price">
              {"\u00A0"}
              {item.priceTotal + "₽"}
            </p>

            <div
              className="product__counterDecreaseButton"
              onClick={() => {
                decrease(item.id);
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
        </div>
        <button
          className="product__deleteButton"
          onClick={() => {
            removeItem(item.id);
          }}
        >
          <GoTrashcan />
        </button>
      </div>
    </div>
  );
};
