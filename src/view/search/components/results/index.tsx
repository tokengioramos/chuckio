import React from 'react'
import { useSelector } from 'react-redux'
import { Col } from '../../../../commons/col'
import { Label } from '../../../../commons/label'
import { Loader } from '../../../../commons/loader'
import { Row } from '../../../../commons/row'
import { Joke } from '../../../../data/types'
import {
	activePage,
	searchLoading,
	searchResult,
} from '../../../../store/slices'
import {
	ResultCard,
	CardContent,
	CardDate,
	CardTitle,
} from '../../styled/result/card'

const SearchResult = () => {
	const pageSize = 10
	const page = useSelector(activePage)
	const search = useSelector(searchResult)
	const loading = useSelector(searchLoading)

	return loading ? (
		<Loader></Loader>
	) : (
		<>
			<Label>{search.total && `${search.total} jokes found`}</Label>
			<Row>
				{search.result
					?.map((joke: Joke) => (
						<Col key={joke.id}>
							<ResultCard>
								<CardTitle>{joke.categories[0] || 'No category'}</CardTitle>
								<CardContent>{joke.value}</CardContent>
								<CardDate>{joke.created_at}</CardDate>
							</ResultCard>
						</Col>
					))
					.slice((page - 1) * pageSize, page * pageSize)}
			</Row>
		</>
	)
}

export { SearchResult }
