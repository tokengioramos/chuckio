import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

const slice = createSlice({
	name: 'app',
	initialState: { lastError: '', sidebar: false },
	reducers: {
		changeLastError(state, action: PayloadAction<string>) {
			return { ...state, lastError: action.payload }
		},
		toggleSidebar(state) {
			return { ...state, sidebar: !state.sidebar }
		},
	},
})

export const { changeLastError, toggleSidebar } = slice.actions

export const lastError = (state: RootState) => state.app.lastError
export const sidebarOpen = (state: RootState) => state.app.sidebar

export const appReducer = slice.reducer
