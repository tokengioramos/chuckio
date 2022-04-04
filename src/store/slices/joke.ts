import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { RootState } from '..'
import { JokesAPI } from '../../data/requests/random'
import { Joke } from '../../data/types'
import { PayloadError } from '../../data/types/error'

export const getJoke = createAsyncThunk(
	'jokes/get',
	async () => await JokesAPI.get()
)

export const getJokeByCategory = createAsyncThunk(
	'jokes/getByCategory',
	async (categoryName: string) => await JokesAPI.getByCategory(categoryName)
)

const slice = createSlice({
	name: 'joke',
	initialState: { activeJoke: {} as Joke, loading: false },
	reducers: {
		clearActiveJoke(state) {
			return {
				...state,
				activeJoke: {} as Joke,
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getJoke.pending, (state) => {
			return { ...state, loading: true, activeJoke: {} as Joke }
		})
		builder.addCase(getJoke.fulfilled, (state, action: PayloadAction<Joke>) => {
			return { ...state, activeJoke: action.payload, loading: false }
		})
		builder.addCase(getJoke.rejected, (state, action) => {
			toast.error(String(action.error.message))
			return { ...state, loading: false }
		})
		builder.addCase(getJokeByCategory.pending, (state) => {
			return { ...state, loading: true, activeJoke: {} as Joke }
		})
		builder.addCase(
			getJokeByCategory.fulfilled,
			(state, action: PayloadAction<Joke>) => {
				return { ...state, activeJoke: action.payload, loading: false }
			}
		)
		builder.addCase(getJokeByCategory.rejected, (state, action) => {
			toast.error(String(action.error.message))
			return { ...state, loading: false }
		})
	},
})

export const { clearActiveJoke } = slice.actions

export const activeJoke = (state: RootState) => state.joke.activeJoke
export const jokeLoading = (state: RootState) => state.joke.loading

export const JokeReducer = slice.reducer
