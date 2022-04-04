import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { RootState } from '..'
import { SearchAPI } from '../../data/requests/search'
import { Search } from '../../data/types'

interface SearchState {
	searchResult: Search
	loading: boolean
	page: number
}

const initialState = {
	searchResult: {},
	loading: false,
	page: 1,
} as SearchState

export const getSearchResult = createAsyncThunk(
	'search/get',
	async (query: string) => SearchAPI.get(query)
)

const slice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		clearSearchResults(state) {
			return { ...state, searchResult: {} as Search, page: 1 }
		},
		changeActivePage(state, action: PayloadAction<number>) {
			return { ...state, page: action.payload }
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getSearchResult.pending, (state) => {
			return { ...state, loading: true, searchResult: {} as Search, page: 1 }
		})
		builder.addCase(
			getSearchResult.fulfilled,
			(state, action: PayloadAction<Search>) => {
				return { ...state, loading: false, searchResult: action.payload }
			}
		)
		builder.addCase(getSearchResult.rejected, (state, action) => {
			toast.error(String(action.error.message))
			return { ...state, loading: false }
		})
	},
})

export const { clearSearchResults, changeActivePage } = slice.actions

export const searchResult = (state: RootState) => state.search.searchResult
export const searchLoading = (state: RootState) => state.search.loading
export const activePage = (state: RootState) => state.search.page

export const searchReducer = slice.reducer
