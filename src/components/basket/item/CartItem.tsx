import { GoTrashcan } from "react-icons/go";
import { ICartItem } from "../../../interfaces";
import { useActions } from "../../../hooks/useActions";
import { BasketItem } from "./cartItem.styled";
interface PropsCart {
  item: ICartItem;
}

export const CartItem = (props: PropsCart) => {
  const { decrease, removeItem, increase } = useActions();

  return (
    <BasketItem>
      <div className="product">
        <div className="product__item">
          <div style={{ width: "100%", display: "flex" }}>
            <img src={props.item.src.image_1} alt="фото товара" />
            <div className="product__body">
              <div className="product__content">
                <p className="product__title">{props.item.title}</p>
                <p className="product__weight">{props.item.weight}</p>
                <p className="product__description">{props.item.descr}</p>
              </div>
            </div>
          </div>
          <div className="product__footerWrapper">
            <div className="product__footer">
              <p className="product__price">
                {"\u00A0"}
                {props.item.priceTotal + "₽"}
              </p>
              <div
                className="product__counterDecreaseButton"
                onClick={() => {
                  decrease(props.item.id);
                  if (props.item.count === 1) removeItem(props.item.id);
                }}
              >
                <span></span>
              </div>
              <p className="product__count">{props.item.count}</p>
              <div
                className="product__counterIncreaseButton"
                onClick={() => {
                  increase(props.item.id);
                }}
              >
                <span></span>
                <span></span>
              </div>
            </div>
            <button
              className="product__deleteButton"
              onClick={() => {
                removeItem(props.item.id);
              }}
            >
              {/* <GoTrashcan /> */}
              Удалить товар
            </button>
          </div>
        </div>
      </div>
    </BasketItem>
  );
};
