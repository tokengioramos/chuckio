import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from '../../commons/col'
import { Loader } from '../../commons/loader'
import { Category } from '../../data/types'
import { clearActiveJoke } from '../../store/slices'
import {
	getCategories,
	clearActiveCategory,
	categoryList,
	changeActiveCategory,
	categoryLoading,
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
	const loading = useSelector(categoryLoading)

	function handleCategoryClick(category: string) {
		dispatch(changeActiveCategory(category))
	}

	function startUp() {
		dispatch(getCategories())
		dispatch(clearActiveJoke())
		dispatch(clearActiveCategory())
	}

	useEffect(() => {
		startUp()
	}, [])

	return loading ? (
		<Loader></Loader>
	) : (
		<CardContainer>
			{list.map((category: Category) => (
				<Col
					onClick={() => handleCategoryClick(category.name)}
					key={category.id}
					xs={4}
					md={2.4}
					square={true}
				>
					<CategoryCard>
						{getCategoryIcon(category.id)}
						<CardCaption>{category.name}</CardCaption>
					</CategoryCard>
				</Col>
			))}
			<Col xs={8} md={9.6}>
				<CategoryCard>
					{getCategoryIcon(-1)}
					<CardCaption>{'Random'}</CardCaption>
				</CategoryCard>
			</Col>
		</CardContainer>
	)
}

export { HomePage }
