import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearActiveJoke } from '../../store/slices'
import { getCategories, clearActiveCategory } from '../../store/slices/category'
import { HeaderHome } from './components/header'
import { CategoriesHome } from './components/categories'

const HomePage = () => {
	const dispatch = useDispatch()

	function startUp() {
		dispatch(getCategories())
		dispatch(clearActiveJoke())
		dispatch(clearActiveCategory())
	}

	useEffect(() => {
		startUp()
	}, [])

	return (
		<>
			<HeaderHome />
			<CategoriesHome />
		</>
	)
}

export { HomePage }
