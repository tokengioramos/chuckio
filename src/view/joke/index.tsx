import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	activeCategory,
	activeJoke,
	jokeLoading,
	getJokeByCategory,
	clearActiveJoke,
	getJoke,
} from '../../store/slices'

const JokePage = () => {
	const dispatch = useDispatch()
	const activeCategoryDisplay = useSelector(activeCategory)
	const joke = useSelector(activeJoke)
	const loading = useSelector(jokeLoading)

	useEffect(() => {
		if (!joke.value)
			dispatch(
				activeCategoryDisplay
					? getJokeByCategory(activeCategoryDisplay)
					: getJoke()
			)
	}, [joke])

	function reloadClickHandler() {
		dispatch(clearActiveJoke())
	}

	return (
		<div>
			<h2>{activeCategoryDisplay || 'random'}</h2>
			<Link to="/">back</Link>
			<button onClick={() => reloadClickHandler()}>reload</button>
			{loading ? <p>{'loading'}</p> : <p>{joke.value}</p>}
		</div>
	)
}

export { JokePage }
