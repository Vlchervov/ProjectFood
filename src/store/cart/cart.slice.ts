import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  id: number;
  count: number;
  price: number;
  priceTotal: number;
}

export type CartState = ICart[];

const initialState: CartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTo: (state, { payload: item }) => {
      let isInArray;
      state.some((el) => {
        if (el.id === item.id) isInArray = true;
      });
      if (!isInArray) {
        state.push(item);
      }
    },
    removeItem: (state, { payload: id }) => {
      return state.filter((item) => id !== item.id);
    },
    increase: (state, { payload: id }) => {
      return state.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    },
    decrease: (state, { payload: id }) => {
      return state.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 0 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    },
    cleanArray: (state) => {
      state.length = 0;
    },
  },
});

export const { actions, reducer } = cartSlice;
