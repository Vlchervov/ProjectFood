import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
export const HeaderComponent = () => {
  const { cartItems, cartOpen, setCartOpen } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header__section">
        <ul>
          <li>
            <Link to="catalog">
              <BiMenu
                className={`header__BiMenu ${!cartOpen && "active"}`}
                onClick={() =>
                  setCartOpen(cartOpen === cartOpen ? false : true)
                }
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__section">
        <ul>
          <li>
            <Link style={{ color: "black" }} to="basket">
              {cartItems.length > 0 && (
                <div className="item__count">
                  <span>{cartItems.length}</span>
                </div>
              )}
              <FaShoppingCart
                onClick={() =>
                  setCartOpen(cartOpen === cartOpen ? true : false)
                }
                className={`header__shopCartButton ${cartOpen && "active"}`}
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
