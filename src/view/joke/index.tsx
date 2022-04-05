import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
	const activeCategoryDisplay = useSelector(activeCategory)
	const joke = useSelector(activeJoke)
	const loading = useSelector(jokeLoading)

	useEffect(() => {
		if (!joke.value)
			dispatch(
				!activeCategoryDisplay
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
				<JokeCard title="cardId">
					<CardTitle title="cardTitle">
						{activeCategoryDisplay || 'Random'}
					</CardTitle>
					<CardContent title="cardValue">{joke.value}</CardContent>
					<CardDate title="cardDate">
						{joke.created_at &&
							format(parseISO(joke.created_at.toString()), 'PPP')}
					</CardDate>
				</JokeCard>
			</Row>
		</>
	)
}

export { JokePage }
