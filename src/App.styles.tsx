import styled from 'styled-components';

const AppWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 16px;

	margin: 16px 0;
`;

const StyledButton = styled.button`
	padding: 8px 16px;

	border-radius: 8px;
	border: 0;
	border-color: #e3f2fd;

	outline: inherit;

	color: #1e88e5;
	background-color: #e3f2fd;

	font-size: 14px;
	font-weight: 600;

	line-height: 20px;
	letter-spacing: 0.8px;

	width: fit-content;

	cursor: pointer;
`;

const Box = styled.div`
	width: 100%;
`;

export { AppWrapper, StyledButton, Box };
