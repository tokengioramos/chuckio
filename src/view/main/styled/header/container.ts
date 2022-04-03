import styled from 'styled-components'

const HeaderContainer = styled.div`
	top: 0;
	z-index: 0;
	display: flex;
	padding: 10px;
	position: sticky;
	align-items: center;
	background: ${({ theme }) => theme.dark};

	svg {
		cursor: pointer;
	}
`

export { HeaderContainer }
