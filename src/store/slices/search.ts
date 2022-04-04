import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { SearchAPI } from '../../data/requests/search'
import { Search } from '../../data/types'

export const getSearchResult = createAsyncThunk(
	'search/get',
	async (query: string) => SearchAPI.get(query)
)

const slice = createSlice({
	name: 'search',
	initialState: { searchResult: {} as Search, loading: false, page: 1 },
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
			return { ...state, loading: true, page: 1 }
		})
		builder.addCase(
			getSearchResult.fulfilled,
			(state, action: PayloadAction<Search>) => {
				return { ...state, loading: false, searchResult: action.payload }
			}
		)
	},
})

export const { clearSearchResults, changeActivePage } = slice.actions

export const searchResult = (state: RootState) => state.search.searchResult
export const searchLoading = (state: RootState) => state.search.loading
export const activePage = (state: RootState) => state.search.page

export const searchReducer = slice.reducer
