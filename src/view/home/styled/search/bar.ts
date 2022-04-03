import styled from 'styled-components'

const SearchBar = styled.input`
	width: 50%;
	color: white;
	background: 0;
	font-size: 26px;
	border-width: 0 0 1px 0;
	border-color: ${({ theme }) => theme.primary};

	&:focus {
		outline: none;
	}
`

export { SearchBar }
