import React from 'react'
import { Col } from '../../../../commons/col'
import { Category } from '../../../../data/types/category'
import { useDispatch, useSelector } from 'react-redux'
import {
	categoryList,
	categoryLoading,
	changeActiveCategory,
} from '../../../../store/slices'
import {
	CardContainer,
	CategoryCard,
	CategoryCaption,
	getCategoryIcon,
} from '../../styled/category'

const CategoriesHome = () => {
	const dispatch = useDispatch()
	const list = useSelector(categoryList)
	const isLoading = useSelector(categoryLoading)

	function handleCategoryClick(category: string) {
		dispatch(changeActiveCategory(category))
	}

	return isLoading ? (
		<h4>loading...</h4>
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
						<CategoryCaption>{category.name}</CategoryCaption>
					</CategoryCard>
				</Col>
			))}
			<Col xs={8} md={9.6}>
				<CategoryCard>
					{getCategoryIcon(-1)}
					<CategoryCaption>{'Random'}</CategoryCaption>
				</CategoryCard>
			</Col>
		</CardContainer>
	)
}

export { CategoriesHome }
