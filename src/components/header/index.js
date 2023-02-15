import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";

export const HeaderComponent = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header__section">
        <ul>
          <li>
            <Link to="catalog">Меню</Link>
          </li>
        </ul>
      </div>
      <div className="header__section">
        <Link to="basket">
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
          <img src="../img/icons8-basket-96.png" onClick={showHideCart}></img>
        </Link>
      </div>
    </header>
  );
};
