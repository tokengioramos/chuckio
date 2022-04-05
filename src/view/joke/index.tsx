import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from '../../commons/loader'
import {
	activeCategory,
	activeJoke,
	jokeLoading,
	getJokeByCategory,
	clearActiveJoke,
	getJoke,
} from '../../store/slices'
import {
	CardContent,
	CardDate,
	CardTitle,
	JokeCard,
} from '../../commons/joke/card'
import { Row } from '../../commons/row'
import { Label } from '../../commons/label'
import { format, parseISO } from 'date-fns'

const JokePage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const activeCategoryDisplay = useSelector(activeCategory)
	const joke = useSelector(activeJoke)
	const loading = useSelector(jokeLoading)

	useEffect(() => {
		if (!activeCategoryDisplay) {
			navigate('/')
			return
		}

		if (!joke.value)
			dispatch(
				activeCategoryDisplay === 'random'
					? getJoke()
					: getJokeByCategory(activeCategoryDisplay)
			)
	}, [joke.value])

	function reloadClickHandler() {
		dispatch(clearActiveJoke())
	}

	return loading ? (
		<Loader />
	) : (
		<>
			<Label animation={true} onClick={() => reloadClickHandler()}>
				{'Click to get a new one.'}
			</Label>
			<Row>
				<JokeCard key={joke.id}>
					<CardTitle>{activeCategoryDisplay}</CardTitle>
					<CardContent>{joke.value}</CardContent>
					<CardDate>
						{joke.created_at &&
							format(parseISO(joke.created_at.toString()), 'PPP')}
					</CardDate>
				</JokeCard>
			</Row>
		</>
	)
}

export { JokePage }
