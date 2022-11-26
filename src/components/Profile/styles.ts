import styled from 'styled-components';

export const Container = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.darkgray};
	color: ${({ theme }) => theme.colors.orange};
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.orange};
	font-weight: bold;
`;
