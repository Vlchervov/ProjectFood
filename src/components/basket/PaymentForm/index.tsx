import { Transition } from "react-transition-group";
import { ValidateOrderForm } from "../../basketOrderForm/validateOrderForm/ValidateOrderForm";

interface IProps {
  cart: any;
  ShowOrderPayment: boolean;
}

export const BasketPaymentForm = (props: IProps) => {
  return (
    <Transition
      timeout={2}
      unmountOnExit
      mountOnEnter
      in={props.ShowOrderPayment}
    >
      <div className="totalAmount">
        <ValidateOrderForm cart={props.cart} />
      </div>
    </Transition>
  );
};