import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Category } from '../../data/types/category'
import { clearActiveJoke } from '../../store/slices'
import {
	getCategories,
	categoryList,
	categoryLoading,
	changeActiveCategory,
	clearActiveCategory,
} from '../../store/slices/category'
import { SearchBar } from './components/search'

const HomePage = () => {
	const dispatch = useDispatch()
	const list = useSelector(categoryList)
	const isLoading = useSelector(categoryLoading)

	function startUp() {
		dispatch(getCategories())
		dispatch(clearActiveJoke())
		dispatch(clearActiveCategory())
	}

	useEffect(() => {
		startUp()
	}, [])

	function handleCategoryClick(category: string) {
		dispatch(changeActiveCategory(category))
	}

	return (
		<ul>
			{isLoading ? (
				<h4>loading...</h4>
			) : (
				<>
					<SearchBar />
					{list.map((category: Category) => (
						<li
							key={category.id}
							onClick={() => handleCategoryClick(category.name)}
						>
							<Link to={`category/${category.name}`}>{category.name}</Link>
						</li>
					))}
				</>
			)}
			<li>
				<Link to={'category/random'}>I cant decide</Link>
			</li>
		</ul>
	)
}

export { HomePage }
