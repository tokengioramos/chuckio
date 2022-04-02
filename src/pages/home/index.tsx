import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from '../../commons/components/col'
import { Row } from '../../commons/components/row'
import { Category as Cat } from '../../data/types/category'
import { clearActiveJoke } from '../../store/slices'
import {
	getCategories,
	categoryList,
	categoryLoading,
	changeActiveCategory,
	clearActiveCategory,
} from '../../store/slices/category'
import { SearchBar } from './components/search'
import { Category } from './style/category'

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
		<div>
			<Row>
				{list.map((category: Cat) => (
					<Col
						onClick={() => handleCategoryClick(category.name)}
						key={category.id}
						xs={12}
						sm={6}
						md={4}
						lg={4}
						xl={3}
						xxl={3}
					>
						<Category>{category.name.toUpperCase()}</Category>
					</Col>
				))}
			</Row>
		</div>
	)
}

export { HomePage }
