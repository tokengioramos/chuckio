import React from 'react'
import { Spinner, SpinnerCaption, SpinnerContainer } from './styled/loader'

const Loader = () => (
	<SpinnerContainer>
		<Spinner />
		<SpinnerCaption>{'Loading...'}</SpinnerCaption>
	</SpinnerContainer>
)

export { Loader }
