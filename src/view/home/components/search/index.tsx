import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	changeActiveCategory,
	getSearchResult,
	searchResult,
} from '../../../../store/slices'
import { SearchBar, SearchContainer } from '../../styled/search'

const SearchHome = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const result = useSelector(searchResult)

	function onSubmitHandle(e: any) {
		e.preventDefault()
		dispatch(getSearchResult(String(e.target.children.search.value)))
		dispatch(changeActiveCategory('money'))
		navigate('results')
	}

	return (
		<SearchContainer onSubmit={(e) => onSubmitHandle(e)}>
			<SearchBar placeholder="search..." />
		</SearchContainer>
	)
}

export { SearchHome }
