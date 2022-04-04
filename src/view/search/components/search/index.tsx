import React from 'react'
import { useDispatch } from 'react-redux'
import { getSearchResult } from '../../../../store/slices'
import { SearchBar, SearchContainer, Sender } from '../../styled/search'

const Search = () => {
	const dispatch = useDispatch()

	function onSubmitHandle(e: any) {
		e.preventDefault()
		dispatch(getSearchResult(String(e.target.children.search.value)))
	}

	return (
		<SearchContainer onSubmit={(e) => onSubmitHandle(e)}>
			<SearchBar name="search" placeholder="search..." />
			<Sender type="submit"></Sender>
		</SearchContainer>
	)
}

export { Search }
