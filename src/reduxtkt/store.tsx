import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./view/viewSlice";
import quantityReducer from "./quantity/quantitySlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    quantity: quantityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
