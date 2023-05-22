import { useMemo } from "react";
import { actions } from "../store/cart/cart.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const rootActions = {
  ...actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
