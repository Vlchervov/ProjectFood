import { useState } from "react";
import { CartItem } from "./item/CartItem";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { Modal } from "../modal";
import { ICartItem } from "../../interfaces";
import { BasketSection } from "./Basket.styled";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptionsForBasket } from "../Swiper/SwiperOptions";
import SwiperCore, { Mousewheel } from "swiper";
import { BasketPaymentForm } from "./PaymentForm";

SwiperCore.use([Mousewheel]);

export const Basket = () => {
  const [formIsVisible, setFormIsVisivle] = useState<boolean>(false);
  const [ShowOrderPayment, setShowOrderPayment] = useState<boolean>(false);

  const { cart }: any = useSelector((state) => state);

  return (
    <BasketSection
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.6 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
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
                <h1>Корзина товаров</h1>
                <h6
                  onClick={() => {
                    setFormIsVisivle(true);
                  }}
                >
                  Очистить корзину
                </h6>
                <Modal
                  formIsVisible={formIsVisible}
                  setFormIsVisivle={setFormIsVisivle}
                />
                {!ShowOrderPayment ? (
                  <>
                    <Swiper
                      direction="vertical"
                      mousewheel={true}
                      {...SwiperOptionsForBasket}
                      className="basketSwiper"
                    >
                      {cart.map((item: ICartItem) => (
                        <SwiperSlide>
                          <CartItem key={item.id} item={item} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <button
                      className="basket__goToOrder"
                      onClick={() => setShowOrderPayment(!ShowOrderPayment)}
                    >
                      Перейти к оформлению заказа
                    </button>
                  </>
                ) : (
                  <>
                    <BasketPaymentForm
                      cart={cart}
                      ShowOrderPayment={ShowOrderPayment}
                    />
                  </>
                )}
              </div>
            )}
          </>
        </div>
      </div>
    </BasketSection>
  );
};
