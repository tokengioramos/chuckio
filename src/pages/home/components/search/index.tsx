import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	changeActiveCategory,
	getSearchResult,
	searchResult,
} from '../../../../store/slices'

const SearchBar = () => {
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
		<form onSubmit={(e) => onSubmitHandle(e)}>
			<input type="search" name="search" />
			<button type="submit">Search</button>
		</form>
	)
}

export { SearchBar }
