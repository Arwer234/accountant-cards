import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Subheader = styled.h5`
	color: #54585c;

	font-size: 1rem;
	font-weight: 400;
`;

const EmailContent = styled.p`
	text-decoration: underline;
`;

const HeaderContent = styled.h3`
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
`;

const Currency = styled.span`
	font-size: 0.75rem;
	line-height: 1rem;
`;

export { Wrapper, Subheader, EmailContent, HeaderContent, Currency };
