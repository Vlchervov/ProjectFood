import { ICartItem } from "../../interfaces";

export const CheckCart = (cart: any, id: number) => {
    let result: boolean = false;
    cart.forEach((element: ICartItem) => {
        if (element.id === id) result = true;
    });
    return result;
}