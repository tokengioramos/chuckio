import React from 'react'
import { render } from '@testing-library/react'
import { HomePage } from '.'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { mainTheme } from '../../Themes'
import { store } from '../../store'
import 'whatwg-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { CHUCK_API } from '../../data/consts'

const server = setupServer(
	rest.get(`${CHUCK_API}/categories`, (req, res, ctx) => {
		return res(ctx.json(['a', 'b']))
	})
)

function makeSut() {
	const sut = render(
		<Provider store={store}>
			<HashRouter>
				<ThemeProvider theme={mainTheme}>
					<HomePage></HomePage>
				</ThemeProvider>
			</HashRouter>
		</Provider>
	)

	return { sut }
}

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('HomePage', () => {
	it('Loads all categories', async () => {
		const { sut } = makeSut()

		const categoryA = await sut.findByText('a')
		const categoryB = await sut.findByText('b')

		expect(categoryA).toBeInTheDocument()
		expect(categoryB).toBeInTheDocument()
	})

	it('Loads random button', async () => {
		const { sut } = makeSut()

		const categoryRandom = await sut.findByText('Random')

		expect(categoryRandom).toBeInTheDocument()
	})
})
