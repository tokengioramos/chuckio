import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearSearchResults } from '../../store/slices'
import { Search, SearchResult } from './components/'
import { SearchPagination } from './components/pagination'

const SearchPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(clearSearchResults())
	})

	return (
		<>
			<Search />
			<SearchResult />
			<SearchPagination />
		</>
	)
}

export { SearchPage }
