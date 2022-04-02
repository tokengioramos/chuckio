import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const slice = createSlice({
  name: "app",
  initialState: { lastError: "" },
  reducers: {
    changeLastError(state, action: PayloadAction<string>) {
      return { ...state, lastError: action.payload };
    },
  },
});

export const { changeLastError } = slice.actions;

export const lastError = (state: RootState) => state.app.lastError;

export const appReducer = slice.reducer;
