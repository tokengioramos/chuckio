import styled from 'styled-components'

const MenuItem = styled.button`
	border: 0;
	width: 100%;
	height: 50px;
	color: white;
	display: flex;
	cursor: pointer;
	text-align: left;
	font-weight: bold;
	text-indent: 18px;
	padding-left: 15px;
	margin-bottom: 2px;
	align-items: center;
	background: ${({ theme }) => theme.colors.darkGradient};

	svg {
		font-size: 25px;
		padding-bottom: 3px;
	}
`

const SidebarMenu = styled.aside`
	@keyframes slide {
		from {
			left: -300px;
		}
		to {
			left: 0;
		}
	}

	z-index: 1;
	height: 100%;
	width: 300px;
	position: absolute;
	animation: slide 0.3s forwards;
	background: ${({ theme }) => theme.colors.dark};
`

export { MenuItem, SidebarMenu }
