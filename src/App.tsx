import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { store } from './store'
import { JokePage, SearchPage, HomePage } from './view'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalStyles'
import { mainTheme } from './Themes'
import { HeaderApp, SidebarApp } from './view/main/'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={mainTheme}>
				<GlobalStyles />
				<HeaderApp></HeaderApp>
				<Toaster position="bottom-center" />
				<SidebarApp></SidebarApp>
				<Routes>
					<Route path="*" element={<HomePage />}></Route>
					<Route path={'/'} element={<HomePage />}></Route>
					<Route path={'search'} element={<SearchPage />}></Route>
					<Route path={'category/*'} element={<JokePage />}></Route>
					<Route element={<HomePage />}></Route>
				</Routes>
			</ThemeProvider>
		</Provider>
	)
}

export default App
