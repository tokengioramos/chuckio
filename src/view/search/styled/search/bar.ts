import styled from 'styled-components'

const SearchBar = styled.input`
	color: white;
	background: 0;
	font-size: ${({ theme }) => theme.sizes.medium};
	border-width: 0 0 1px 0;
	border-color: ${({ theme }) => theme.colors.primary};

	&:focus {
		outline: none;
	}
`

export { SearchBar }
