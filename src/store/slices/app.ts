import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

interface AppState {
	sidebar: boolean
}

const initialState = { sidebar: false } as AppState

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleSidebar(state) {
			return { ...state, sidebar: !state.sidebar }
		},
	},
})

export const { toggleSidebar } = slice.actions

export const sidebarOpen = (state: RootState) => state.app.sidebar

export const appReducer = slice.reducer
