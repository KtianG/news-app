import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface viewState {
  value: string;
}

const initialState: viewState = {
  value: "grid",
};

export const viewSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeView } = viewSlice.actions;

export default viewSlice.reducer;
