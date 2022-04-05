import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { HeaderApp } from '../header'
import { SidebarApp } from '.'
import { store } from '../../../store'
import { mainTheme } from '../../../Themes'

function makeSut() {
	const sut = render(
		<Provider store={store}>
			<HashRouter>
				<ThemeProvider theme={mainTheme}>
					<HeaderApp />
					<SidebarApp />
				</ThemeProvider>
			</HashRouter>
		</Provider>
	)

	return { sut }
}

describe('SidebarApp', () => {
	it('Sidebar opens when clicking hamburguer icon', async () => {
		const { sut } = makeSut()

		const hamburguerIcon = sut.getByTestId('hamburger')
		fireEvent.click(hamburguerIcon)

		const backdrop = sut.getByTestId('backdrop')
		expect(backdrop).toBeInTheDocument()
	})

	it('Sidebar closes when clicking backdrop', async () => {
		const { sut } = makeSut()

		const hamburguerIcon = sut.getByTestId('hamburger')
		fireEvent.click(hamburguerIcon)

		waitFor(() => {
			fireEvent.click(sut.getByTestId('backdrop'))
		})

		expect(sut.queryByTestId('backdrop')).not.toBeInTheDocument()
	})

	it('Sidebar closes when clicking a menu item', async () => {
		const { sut } = makeSut()

		const hamburguerIcon = sut.getByTestId('hamburger')
		fireEvent.click(hamburguerIcon)

		waitFor(() => {
			fireEvent.click(sut.getByTestId('menuItemSearch'))
		})

		expect(sut.queryByTestId('menuItemSearch')).not.toBeInTheDocument()
	})
})
