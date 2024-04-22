import { CartItem } from "./item/CartItem";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { ICartItem } from "../../interfaces";
import { BasketSection } from "./Basket.styled";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Modal } from "../modal/ModalComponent";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { GoToUpComponent } from "../../utils/GoToUpComponent";

export const Basket = () => {
  const { setIsModalForCleanBasketVisible, isModalForCleanBasketVisible } =
    useGlobalContext();
  const { cart }: any = useSelector((state) => state);
  const totalCount: number = cart.reduce((count: number, item: ICartItem): number => item.count + count, 0);
  const totalPrice: number = cart.reduce(
    (amount: number, item: ICartItem): number => item.priceTotal + amount,
    0
  );

  return (
    <BasketSection
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.6 }}
      ref={GoToUpComponent()}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="basket">
        <div className="cardWrapper">
          <>
            {cart.length === 0 ? (
              <div className="wrapperEmptyBasket">
                <FaShoppingBasket className="emptyBasket" />
                <h4>Корзина пуста</h4>
                Добавьте товар из меню, чтобы сделать заказ
                <Link to="/catalog">
                  <button className="basket__returnToCatalogButton">
                    Перейти в каталог
                  </button>
                </Link>
              </div>
            ) : (
              <div className="listItem">
                <h1>Корзина</h1>
                <h6
                  onClick={() => {
                    setIsModalForCleanBasketVisible(true);
                  }}
                >
                  Очистить корзину
                </h6>
                <Modal
                  setIsModalForCleanBasketVisible={setIsModalForCleanBasketVisible}
                  isModalForCleanBasketVisible={isModalForCleanBasketVisible}
                />
                <div className="basket__cartItemContainerWrapper">
                  <div className="basket__cartItemContainer">
                    {cart.map((item: ICartItem): JSX.Element => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                  <div className="basket__goToOrderWrapper">
                    <div className="basket__orderInfo">
                      <p>Итого</p>
                      <p>Количество: {totalCount}</p>
                      <p>
                        К оплате: {totalPrice}
                        {"\u00A0"}₽
                      </p>
                    </div>
                    <button
                      onClick={() => alert("Упс... Оформление заказа не доступно.")}
                      className="basket__goToOrder">
                      Перейти к оформлению
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </BasketSection>
  );
};