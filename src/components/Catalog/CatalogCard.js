import { useState, useContext } from "react";
import CartContext from "../../context/cart/cartContext";

export const CatalogCard = (props) => {
  const { addTo, cartItems } = useContext(CartContext);
  const [hidden, setHidden] = useState(true);
  const [button, setButton] = useState('default');

  const checkCart = (id) => {
    let result = false;
    cartItems.forEach(element => {
      if (element.id === id) {
        result = true;
      }
    });
    return result;
  }

  return (
    <div className="categories__item" key={props.id}>
      <img
        src="https://top-fon.com/uploads/posts/2022-09/thumbs/1663730724_3-top-fon-com-p-serii-fon-jpeg-foto-5.jpg"
        hidden={hidden}
      />
      <div className="categories__body">
        <p className="categories__title">
          <b>{props.title}</b>
        </p>
        <p className="categories__weight">{props.weight}</p>
        <p className="categories__description">{props.descr}</p>
        <div className="categories__footer">
          <p className="categories__price">{props.price} ₽</p>
        {cartItems.length !== 0 && checkCart(props.id) || button !== 'default' ? 
        <div className="categories__button">
            <button
              style={{backgroundColor: "gray"}}
              onClick={() => {
                addTo(props);
                setButton('inBasket');
              }}
            >
              В корзине
            </button>
          </div> 
          :
          <div className="categories__button">
            <button
              onClick={() => {
                addTo(props);
              }}
            >
              Купить
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
};
