import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col } from '../../commons/col'
import { BASE_URL } from '../../data/consts'
import { Category } from '../../data/types'
import { clearActiveJoke } from '../../store/slices'
import {
	getCategories,
	clearActiveCategory,
	categoryList,
	changeActiveCategory,
} from '../../store/slices/category'
import {
	CardContainer,
	CardCaption,
	CategoryCard,
	getCategoryIcon,
} from './styled/category'

const HomePage = () => {
	const dispatch = useDispatch()
	const list = useSelector(categoryList)

	function handleCategoryClick(category: string) {
		dispatch(changeActiveCategory(category))
	}

	function startUp() {
		dispatch(getCategories())
		dispatch(clearActiveJoke())
		dispatch(clearActiveCategory())
	}

	useEffect(() => startUp(), [])

	return (
		<CardContainer>
			{list.map((category: Category) => (
				<Col
					onClick={() => handleCategoryClick(category.name)}
					key={category.id}
					xs={4}
					md={2.4}
				>
					<Link to={`${BASE_URL}/category/${category.name}`}>
						<CategoryCard>
							{getCategoryIcon(category.id)}
							<CardCaption>{category.name}</CardCaption>
						</CategoryCard>
					</Link>
				</Col>
			))}
			<Col onClick={() => handleCategoryClick('random')} xs={8} md={9.6}>
				<Link to={`${BASE_URL}/category/random`}>
					<CategoryCard>
						{getCategoryIcon(-1)}
						<CardCaption>{'Random'}</CardCaption>
					</CategoryCard>
				</Link>
			</Col>
		</CardContainer>
	)
}

export { HomePage }
