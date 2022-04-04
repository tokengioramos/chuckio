import React from 'react'
import { useSelector } from 'react-redux'
import { Label } from '../../../../commons/label'
import { Loader } from '../../../../commons/loader'
import { Row } from '../../../../commons/row'
import { Joke } from '../../../../data/types'
import {
	activePage,
	searchLoading,
	searchResult,
} from '../../../../store/slices'
import { pageSize } from '../../styled/pagination/container'
import {
	JokeCard,
	CardContent,
	CardDate,
	CardTitle,
} from '../../../../commons/joke/card'
import { format, parseISO } from 'date-fns'

const SearchResult = () => {
	const page = useSelector(activePage)
	const search = useSelector(searchResult)
	const loading = useSelector(searchLoading)

	return loading ? (
		<Loader></Loader>
	) : (
		<>
			<Label>{search.result && `${search.total} jokes found`}</Label>
			<Row>
				{search.result
					?.map((joke: Joke) => (
						<JokeCard key={joke.id}>
							<CardTitle>{joke.categories[0] || 'No category'}</CardTitle>
							<CardContent>{joke.value}</CardContent>
							<CardDate>
								{format(parseISO(joke.created_at.toString()), 'PPP')}
							</CardDate>
						</JokeCard>
					))
					.slice((page - 1) * pageSize, page * pageSize)}
			</Row>
		</>
	)
}

export { SearchResult }
