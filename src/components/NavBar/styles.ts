import styled from 'styled-components';

export const Container = styled.nav`
	width: 120px;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.darkgray};
	padding: 20px 0;
`;

export const UlNavigation = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;

	& li {
		margin: 20px;
	}

	& a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		padding: 10px 20px;
		border-radius: 10px;
		color: ${({ theme }) => theme.colors.mediumGray};
	}

	& a.page {
		background-color: ${({ theme }) => theme.colors.orange};
	}

	& a.less {

	}

	& svg {
		width: 30px;
		height: 30px;
	}

	& svg.page {
		color: ${({ theme }) => theme.colors.darkgray};
	}

	& svg.less {
		width: 27px;
		height: 27px;
	}
`;
