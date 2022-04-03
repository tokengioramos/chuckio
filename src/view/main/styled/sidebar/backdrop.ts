import styled from 'styled-components'

const SidebarBackdrop = styled.div`
	@keyframes backdropFadein {
		from {
			background: transparent;
		}
		to {
			background: ${({ theme }) => theme.backdrop};
		}
	}

	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	animation: backdropFadein 1s forwards;
`

export { SidebarBackdrop }
