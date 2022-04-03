import styled from 'styled-components'

const SearchBar = styled.input`
	border-color: ${({ theme }) => theme.primary};
	width: 50%;
	background: 0;
	font-size: 26px;
	border-width: 0 0 1px 0;
	color: white;

	&:focus {
		outline: none;
	}
`

export { SearchBar }
