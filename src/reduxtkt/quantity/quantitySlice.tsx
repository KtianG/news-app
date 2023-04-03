import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface quantityState {
  value: number;
}

const initialState: quantityState = {
  value: 0,
};

export const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
