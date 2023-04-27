import { GoTrashcan } from "react-icons/go";
import "./_cartItem.scss";
import { ICartItem } from "../../../interfaces";
import { useActions } from "../../../hooks/useActions";
interface PropsCart {
  item: ICartItem;
}

export const CartItem = (props: PropsCart) => {
  const { decrease, removeItem, increase } = useActions()
  
  return (
    <div className="product">
      <div className="product__item">
        <img src={props.item.src.image_1} alt="фото товара" />
        <div className="product__body">
          <div className="product__content">
            <p className="product__title">{props.item.title}</p>
            <p className="product__weight">{props.item.weight}</p>
            <p className="product__description">{props.item.descr}</p>
          </div>
          <div className="product__footer">
            <p className="product__price">
              {"\u00A0"}
              {props.item.priceTotal + "₽"}
            </p>
            <div
              className="product__counterDecreaseButton"
              onClick={() => {
                decrease(props.item.id);
              }}
            >
              <span></span>
            </div>
            <p className="product__count">{props.item.count}</p>
            <div
              className="product__counterIncreaseButton"
              onClick={() => {
                increase(props.item.id)
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
            removeItem(props.item.id)
          }}
        >
          <GoTrashcan />
        </button>
      </div>
    </div>
  );
};
