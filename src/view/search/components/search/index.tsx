import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getSearchResult } from '../../../../store/slices'
import { SearchBar, SearchContainer, Sender } from '../../styled/search'

const Search = () => {
	const dispatch = useDispatch()

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
		<SearchContainer onSubmit={(e) => onSubmitHandle(e)}>
			<SearchBar maxLength={120} name="search" placeholder="search..." />
			<Sender type="submit"></Sender>
		</SearchContainer>
	)
}

export { Search }
