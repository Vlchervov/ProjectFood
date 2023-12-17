import { CartState } from "../../store/cart/cart.slice";

export const CheckCart = (cart: CartState, id: number) => {
    let result: boolean = false;
    cart.forEach((element) => {
        if (element.id === id) result = true;
    });
    return result;
}