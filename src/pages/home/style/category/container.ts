import styled from 'styled-components'
import { Col } from '../../../../commons/components/col'

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: 'stretch';
	align-content: 'stretch';
	justify-content: 'flex-start';

	${Col}:nth-child(even) {
		background: ${({ theme }) => theme.primary};
	}
	${Col}:nth-child(odd) {
		background: ${({ theme }) => theme.secondary};
	}
	${Col}:last-child {
		background: ${({ theme }) => theme.mainGradient};
	}
`

export { CardContainer }
