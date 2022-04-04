import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { RootState } from '..'
import { CategoriesAPI } from '../../data/requests/categories'
import { Category } from '../../data/types'

interface CategoryState {
	activeCategory: string
	list: Category[]
	loading: boolean
}

const initialState = {
	activeCategory: '',
	list: [],
	loading: false,
} as CategoryState

export const getCategories = createAsyncThunk(
	'categories/get',
	async () => await CategoriesAPI.get()
)

const slice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		changeActiveCategory(state, action: PayloadAction<string>) {
			return { ...state, activeCategory: action.payload }
		},
		clearActiveCategory(state) {
			return { ...state, activeCategory: '' }
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCategories.pending, (state) => {
			return { ...state, isLoading: true }
		})
		builder.addCase(
			getCategories.fulfilled,
			(state, action: PayloadAction<Category[]>) => {
				return {
					...state,
					list: action.payload,
					isLoading: false,
				}
			}
		)
		builder.addCase(getCategories.rejected, (state, action) => {
			toast.error(String(action.error.message))
			return { ...state, loading: false }
		})
	},
})

export const { changeActiveCategory, clearActiveCategory } = slice.actions

export const activeCategory = (state: RootState) =>
	state.category.activeCategory
export const categoryList = (state: RootState) => state.category.list
export const categoryLoading = (state: RootState) => state.category.loading

export const categoryReducer = slice.reducer
