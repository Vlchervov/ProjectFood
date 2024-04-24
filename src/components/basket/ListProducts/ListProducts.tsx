import { Modal } from "../../modal/ModalComponent";
import { CartItem } from "../item/CartItem";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { ICartItem } from "../../../interfaces";
import { LoyaltySystem } from "../LoyaltySystem/LoyaltySystem";

export const ListProducts = (props: any) => {
    const { setIsModalForCleanBasketVisible, isModalForCleanBasketVisible } =
        useGlobalContext();
    const totalCount: number = props.cart.reduce((count: number, item: ICartItem): number => item.count + count, 0);
    const totalPrice: number = props.cart.reduce(
        (amount: number, item: ICartItem): number => item.priceTotal + amount,
        0
    );

    return (
        <div className="listItem">
            <h1>Корзина</h1>
            <h6
                onClick={() => {
                    setIsModalForCleanBasketVisible(true);
                }}
            >
                Очистить корзину
            </h6>
            {isModalForCleanBasketVisible && <Modal
                setIsModalForCleanBasketVisible={setIsModalForCleanBasketVisible}
                isModalForCleanBasketVisible={isModalForCleanBasketVisible}
            />}
            <div className="basket__cartItemContainerWrapper">
                <div className="basket__cartItemContainer">
                    {props.cart.map((item: ICartItem): JSX.Element => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="basket__goToOrderAndLoyaltySystemWrapper">
                    <div style={{ position: "sticky", top: "80px" }}>
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
                        <LoyaltySystem />
                        {/* <PromoCodes /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}