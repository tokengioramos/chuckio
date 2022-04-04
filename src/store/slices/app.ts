import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const slice = createSlice({
	name: 'app',
	initialState: { sidebar: false },
	reducers: {
		toggleSidebar(state) {
			return { ...state, sidebar: !state.sidebar }
		},
	},
})

export const { toggleSidebar } = slice.actions

export const sidebarOpen = (state: RootState) => state.app.sidebar

export const appReducer = slice.reducer
