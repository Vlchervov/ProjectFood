import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from "../../context/cart/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import "./_header.scss";
export const HeaderComponent = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <div className="appHeader">
        <div className="appHeader__section">
          <ul>
            <li>
              <Link to="catalog">
                <BiMenu
                  className={`appHeader__BiMenu ${
                    useLocation().pathname === "/catalog" && "active"
                  }`}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="appHeader__section">
          <ul>
            <li>
              <Link style={{ color: "black" }} to="basket">
                {cartItems.length > 0 && (
                  <div className="item__count">
                    <span>{cartItems.length}</span>
                  </div>
                )}
                <FaShoppingCart
                  className={`appHeader__shopCartButton ${
                    useLocation().pathname === "/basket" && "active"
                  }`}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {useLocation().pathname === "/catalog" ? (
        <div className="underHeader">
          <ul>
            <li>
              <a href="#category1">Категория 1</a>
            </li>
            <li>
              <a href="#category2">Категория 2</a>
            </li>
            <li>
              <a href="#category3">Категория 3</a>
            </li>
            {/* <li>
              <a>Категория 4</a>
            </li> */}
          </ul>
        </div>
      ) : null}
    </header>
  );
};
