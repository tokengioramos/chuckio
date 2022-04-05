import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { store } from '../../store'
import 'whatwg-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { CHUCK_API } from '../../data/consts'
import faker from 'faker'
import { mainTheme } from '../../Themes'
import { SearchPage } from '.'
import { pageSize } from './styled/pagination/container'

const createJoke = () => {
	return {
		id: faker.datatype.string(),
		categories: [faker.datatype.string()],
		value: faker.datatype.string(),
		created_at: faker.datatype.datetime(),
	}
}

function createJokes(numUsers: number) {
	return new Array(numUsers).fill(undefined).map(createJoke)
}

const totalResults = faker.datatype.number({ min: 40, max: 100 })
const generatedJokes = createJokes(totalResults)

const server = setupServer(
	rest.get(`${CHUCK_API}/search`, (req, res, ctx) => {
		return res(
			ctx.json({
				total: totalResults,
				result: generatedJokes,
			})
		)
	})
)

function makeSut() {
	const sut = render(
		<Provider store={store}>
			<HashRouter>
				<ThemeProvider theme={mainTheme}>
					<SearchPage />
				</ThemeProvider>
			</HashRouter>
		</Provider>
	)

	return { sut }
}

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('SearchPage', () => {
	it('Loads a list of jokes', async () => {
		const { sut } = makeSut()
		const randomSearch = faker.datatype.string()

		const input = sut.getByTestId('searchBar')
		fireEvent.change(input, { target: { value: randomSearch } })

		const sender = sut.getByTestId('sender')
		fireEvent.click(sender)

		const totalLabel = await sut.queryByText(
			`${generatedJokes.length} jokes found`
		)

		waitFor(() => {
			expect(totalLabel).toBeInTheDocument()
		})
	})

	it('Confirms result from first page', async () => {
		const { sut } = makeSut()
		const randomSearch = faker.datatype.string()

		const input = sut.getByTestId('searchBar')
		fireEvent.change(input, { target: { value: randomSearch } })

		const sender = sut.getByTestId('sender')
		fireEvent.click(sender)

		const firstPageResult = await sut.findByText(
			faker.random.arrayElement(generatedJokes.slice(0, pageSize)).value
		)

		expect(firstPageResult).toBeInTheDocument()
	})

	it('Confirms result from nth page', async () => {
		const { sut } = makeSut()
		const randomSearch = faker.datatype.string()
		const randomPage = faker.datatype.number({ min: 1, max: 4 })

		const input = sut.getByTestId('searchBar')
		fireEvent.change(input, { target: { value: randomSearch } })

		const sender = sut.getByTestId('sender')
		fireEvent.click(sender)

		const unselectedPageButton = await sut.findByText(randomPage)
		fireEvent.click(unselectedPageButton)

		const nthPageResult = await sut.queryByText(
			faker.random.arrayElement(
				generatedJokes.slice(pageSize * (randomPage - 1), pageSize * randomPage)
			).value
		)

		expect(nthPageResult).toBeInTheDocument()
	})
})
