import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store'
import { JokePage, SearchPage, HomePage } from './view'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalStyles'
import { darkTheme } from './Themes'
import { HeaderApp, SidebarApp } from './view/main/'

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Provider store={store}>
				<HeaderApp></HeaderApp>
				<SidebarApp></SidebarApp>
				<BrowserRouter>
					<Routes>
						<Route path="*" element={<HomePage />}></Route>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="results" element={<SearchPage />}></Route>
						<Route path="category/*" element={<JokePage />}></Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	)
}

export default App
