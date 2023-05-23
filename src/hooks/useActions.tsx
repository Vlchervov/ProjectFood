import { useMemo } from "react";
import { actions as cartActions } from "../store/cart/cart.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions as usersActions } from "../store/profile/user.slice";

const rootActions = {
  ...cartActions,
  ...usersActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
