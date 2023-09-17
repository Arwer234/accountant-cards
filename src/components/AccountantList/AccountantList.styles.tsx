import styled from 'styled-components';

const AccountantListWrapper = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;

	gap: 24px;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		padding-top: 128px;
	}
	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

export { AccountantListWrapper };
