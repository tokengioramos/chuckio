import styled from 'styled-components'

const HeaderContainer = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	align-items: center;
	background: ${({ theme }) => theme.dark};
	padding: 10px;

	svg {
		cursor: pointer;
	}
`

export { HeaderContainer }
