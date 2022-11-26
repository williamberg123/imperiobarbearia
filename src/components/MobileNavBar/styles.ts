import styled from 'styled-components';

export const Container = styled.nav`
	width: 100%;
	height: 80px;
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	background-color: ${({ theme }) => theme.colors.darkgray};
	padding: 0 20px;
`;

export const UlNavigation = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& li {
		margin: 20px;
	}

	& a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		padding: 10px;
		border-radius: 10px;
		color: ${({ theme }) => theme.colors.mediumGray};
	}

	& a.page {
		background-color: ${({ theme }) => theme.colors.orange};
		color: ${({ theme }) => theme.colors.darkgray};;
	}

	& a.less {

	}

	& svg {
		width: 30px;
		height: 30px;
	}

	& svg.page {

	}

	& svg.less {
		width: 27px;
		height: 27px;
	}
`;
