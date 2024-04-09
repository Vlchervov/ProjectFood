import { useState } from "react";
import { CartItem } from "./item/CartItem";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { ICartItem } from "../../interfaces";
import { BasketSection } from "./Basket.styled";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Modal } from "../modal/ModalComponent";
import { BasketPaymentForm } from "./PaymentForm";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const Basket = () => {
  const [ShowOrderPayment, setShowOrderPayment] = useState<boolean>(false);
  const { setIsModalForCleanBasketVisible, isModalForCleanBasketVisible } =
    useGlobalContext();
  const { cart }: any = useSelector((state) => state);

  return (
    <BasketSection
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.6 }}
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
                {!ShowOrderPayment ? (
                  <div style={{ display: "flex" }}>
                    <div className="basket__cartItemContainer">
                      {cart.map((item: ICartItem): JSX.Element => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>
                    <div style={{ position: "sticky", top: "80px", borderRadius: "12px", marginLeft: "16px", display: "flex", padding: "12px", height: "450px", background: "#ffd1d1", alignItems: "flex-end" }}>
                      <button
                        className="basket__goToOrder"
                        onClick={() => setShowOrderPayment(!ShowOrderPayment)}
                      >
                        Перейти к оформлению заказа
                      </button>
                    </div>
                  </div>
                ) : (
                  <BasketPaymentForm
                    cart={cart}
                    ShowOrderPayment={ShowOrderPayment}
                  />
                )}
              </div>
            )}
          </>
        </div>
      </div>
    </BasketSection>
  );
};