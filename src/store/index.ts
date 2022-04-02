import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer, appReducer, JokeReducer } from './slices'
import { searchReducer } from './slices/search'

export const store = configureStore({
	reducer: {
		app: appReducer,
		joke: JokeReducer,
		search: searchReducer,
		category: categoryReducer,
	},
})
export type RootState = ReturnType<typeof store.getState>
