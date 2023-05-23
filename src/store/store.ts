import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/cart.slice";
import { reducer as userReducer } from "./profile/user.slice";

const reducers = combineReducers({
  cart: cartReducer,
  users: userReducer,
});

export const store = configureStore({
  reducer: reducers,
});
