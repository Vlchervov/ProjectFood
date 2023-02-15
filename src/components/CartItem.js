import { useContext } from "react";
import CartContext from "../context/cart/cartContext";
import formatCurrency from "format-currency";

export const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "₽" };

  return (
    <li>
      <img src={item.src} />
      <div>
        {item.title} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button
        onClick={() => {
          removeItem(item.id);
        }}
      ></button>
    </li>
  );
};
