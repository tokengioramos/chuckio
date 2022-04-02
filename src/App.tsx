import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store'
import { JokePage, SearchPage, HomePage } from './pages'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<HomePage />}></Route>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="results" element={<SearchPage />}></Route>
					<Route path="category/*" element={<JokePage />}></Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
