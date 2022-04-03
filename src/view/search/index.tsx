import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Joke } from '../../data/types'
import { searchResult, searchLoading } from '../../store/slices/search'

const SearchPage = () => {
	const search = useSelector(searchResult)
	const loading = useSelector(searchLoading)

	return (
		<div>
			<Link to="/">back</Link>
			{loading ? (
				<h2>loading...</h2>
			) : (
				search.result.map((joke: Joke) => <div key={joke.id}>{joke.value}</div>)
			)}
		</div>
	)
}

export { SearchPage }
