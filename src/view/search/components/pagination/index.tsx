import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActivePage, searchResult } from '../../../../store/slices'

const SearchPagination = () => {
	const result = useSelector(searchResult)
	const pages = Math.ceil(result.total / 10) || 0
	const dispatch = useDispatch()

	function handlePageClick(page: number) {
		dispatch(changeActivePage(page))
	}

	return (
		<div>
			{[...Array(pages)].map((e, i: number) => (
				<button
					onClick={() => handlePageClick(i + 1)}
					className="busterCards"
					key={i}
				>
					<a>{i + 1}</a>
				</button>
			))}
		</div>
	)
}

export { SearchPagination }
