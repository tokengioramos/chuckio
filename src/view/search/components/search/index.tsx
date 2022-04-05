import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getSearchResult } from '../../../../store/slices'
import { SearchBar, SearchContainer, Sender } from '../../styled/search'

const Search = () => {
	const dispatch = useDispatch()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onSubmitHandle(e: any) {
		const query = e.target.children.search.value
		e.preventDefault()

		if (query.length <= 3) {
			toast.error('Search query must be greater than 3 characters long.')
			return
		}

		dispatch(getSearchResult(query))
	}

	return (
		<SearchContainer
			data-testid="searchForm"
			onSubmit={(e) => onSubmitHandle(e)}
		>
			<SearchBar
				data-testid="searchBar"
				maxLength={120}
				name="search"
				placeholder="search..."
			/>
			<Sender data-testid="sender" type="submit"></Sender>
		</SearchContainer>
	)
}

export { Search }
