import { useForm, Controller } from "react-hook-form";
import { OrderInput } from "./orderInput";

export const OrderForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      onChange={() => {
        props.setErrorState("");
      }}
    >
      <OrderInput
        register={register}
        errors={errors}
        control={control}
        Controller={Controller}
        disabledState={props.disabledState}
        errorState={props.errorState}
        currentCity={props.currentCity}
      />
      <div style={{ paddingLeft: "15px" }}>
        <div style={{ fontWeight: "600" }}>Итого:{"\u00A0"}</div>
        <div>Количество: {props.totalCount}</div>
        <div>
          К оплате: {props.totalPrice}
          {"\u00A0"}₽
        </div>
      </div>
    </form>
  );
};
