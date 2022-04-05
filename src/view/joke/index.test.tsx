import React from 'react'
import { render } from '@testing-library/react'
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
import { JokePage } from '.'

const randomJoke = faker.datatype.string()

const server = setupServer(
	rest.get(`${CHUCK_API}/random`, (req, res, ctx) => {
		return res(
			ctx.json({
				value: randomJoke,
			})
		)
	})
)

function makeSut() {
	const sut = render(
		<Provider store={store}>
			<HashRouter>
				<ThemeProvider theme={mainTheme}>
					<JokePage />
				</ThemeProvider>
			</HashRouter>
		</Provider>
	)

	return { sut }
}

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('JokePage', () => {
	it('Loads a random joke', async () => {
		const { sut } = makeSut()

		const content = await sut.findByTitle('cardValue')
		expect(content.textContent).toBe(randomJoke)
	})
})
