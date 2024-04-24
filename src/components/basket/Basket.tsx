import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { BasketSection } from "./Basket.styled";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { GoToUpComponent } from "../../utils/GoToUpComponent";
import { RecommendedProducts } from "./RecommendedProducts/RecommendedProducts";
import { ListProducts } from "./ListProducts/ListProducts";

export const Basket = () => {
  const { cart }: any = useSelector((state) => state);

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
          ) :
            <>
              <ListProducts cart={cart} />
              {/* <RecommendedProducts /> */}
            </>
          }
        </div>
      </div>
    </BasketSection >
  );
};