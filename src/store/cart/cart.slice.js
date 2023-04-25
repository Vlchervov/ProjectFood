import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
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
          const objCopy = { ...product };
          return {
            ...objCopy,
            count: objCopy.count + 1,
            priceTotal: (objCopy.count + 1) * objCopy.price,
          };
        }
        return product;
      });
    },
    decrease: (state, { payload: id }) => {
      return state.map((product) => {
        if (product.id === id) {
          const objCopy = { ...product };
          const newCount = objCopy.count - 1 > 0 ? objCopy.count - 1 : 1;
          return {
            ...objCopy,
            count: newCount,
            priceTotal: newCount * objCopy.price,
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
