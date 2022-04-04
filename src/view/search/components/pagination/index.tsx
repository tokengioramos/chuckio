import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	activePage,
	changeActivePage,
	searchResult,
} from '../../../../store/slices'
import { PaginationButton } from '../../styled/pagination/button'
import {
	pageSize,
	PaginationContainer,
} from '../../styled/pagination/container'

const SearchPagination = () => {
	const buttonsLimit = 4
	const buttonsInAdvance = buttonsLimit / 2

	const dispatch = useDispatch()
	const active = useSelector(activePage)
	const result = useSelector(searchResult)

	const pageQuantity = Math.ceil(result.total / pageSize) || 0

	const canRenderFirstButton = active >= buttonsLimit
	const canRenderLastButton = active < pageQuantity - buttonsInAdvance + 1

	function handlePageClick(page: number) {
		window.scrollTo(0, 0)
		dispatch(changeActivePage(page))
	}

	function renderPageButtons() {
		return [...Array(pageQuantity)]
			.map((e, i: number) => (
				<PaginationButton
					id={i + 1 === active ? 'selected' : 'unselected'}
					onClick={() => handlePageClick(i + 1)}
					key={i}
				>
					<a>{i + 1}</a>
				</PaginationButton>
			))
			.slice(
				canRenderFirstButton ? active - buttonsInAdvance : 0,
				canRenderFirstButton ? active + buttonsInAdvance - 1 : buttonsLimit
			)
	}

	return (
		<PaginationContainer>
			{canRenderFirstButton && (
				<PaginationButton id="first" onClick={() => handlePageClick(1)}>
					<a>{'1...'}</a>
				</PaginationButton>
			)}
			{renderPageButtons()}
			{canRenderLastButton && (
				<PaginationButton
					id="last"
					onClick={() => handlePageClick(pageQuantity)}
				>
					<a>{`...${pageQuantity}`}</a>
				</PaginationButton>
			)}
		</PaginationContainer>
	)
}

export { SearchPagination }
