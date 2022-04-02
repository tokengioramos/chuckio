import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CategoriesAPI } from "../../data/requests/categories";
import { Category } from "../../data/types";

export const getCategories = createAsyncThunk(
  "categories/get",
  async () => await CategoriesAPI.get()
);

const slice = createSlice({
  name: "category",
  initialState: {
    activeCategory: "",
    list: [] as Category[],
    loading: false,
  },
  reducers: {
    changeActiveCategory(state, action: PayloadAction<string>) {
      return { ...state, activeCategory: action.payload };
    },
    clearActiveCategory(state) {
      return { ...state, activeCategory: "" };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        return {
          ...state,
          list: action.payload,
          isLoading: false,
        };
      }
    );
    builder.addCase(getCategories.rejected, (state, action) => {
      console.error(action);
      return { ...state, loading: false };
    });
  },
});

export const { changeActiveCategory, clearActiveCategory } = slice.actions;

export const activeCategory = (state: RootState) =>
  state.category.activeCategory;
export const categoryList = (state: RootState) => state.category.list;
export const categoryLoading = (state: RootState) => state.category.loading;

export const categoryReducer = slice.reducer;
