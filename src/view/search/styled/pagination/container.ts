import styled from 'styled-components'

const pageSize = 10

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px;
	width: 92%;

	#last,
	#first {
		background: ${({ theme }) => theme.colors.mainGradient};
	}

	#selected {
		background: ${({ theme }) => theme.colors.gray};
	}
	#unselected {
		background: ${({ theme }) => theme.colors.grayLight};
	}
`

export { PaginationContainer, pageSize }
