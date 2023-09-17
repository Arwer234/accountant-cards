import { useInfiniteQuery } from '@tanstack/react-query';
import { StyledButton } from '../../App.styles';
import AccountantCard from '../AccountantCard/AccountantCard';
import { API_LINK, API_QUERY_KEYS, API_SEED, RESULT_COUNT } from './AccountantList.constants';
import { AccountantListWrapper } from './AccountantList.styles';
import { AccountantResponseType } from './AccountantList.types';

function generateApiLink(page: number) {
	return `${API_LINK}?seed=${API_SEED}&page=${page}&results=${RESULT_COUNT}`;
}

function AccountantList() {
	async function fetchPage(pageParam = 1) {
		const response = await fetch(generateApiLink(pageParam));
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	}

	const { isLoading, isError, data, error, fetchNextPage } =
		useInfiniteQuery<AccountantResponseType>({
			queryKey: API_QUERY_KEYS,
			queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
			getNextPageParam: (lastPage) => {
				// assumed that we have 10 pages available - couldn't find the info in the docs
				return lastPage.info.page < 10 ? lastPage.info.page + 1 : 10;
			},
		});

	if (isLoading) {
		return (
			<AccountantListWrapper>
				<img
					style={{ width: '64px', height: '64px' }}
					src="loading.svg"
					alt="loading data"
				/>
			</AccountantListWrapper>
		);
	}

	if (isError) {
		return (
			<AccountantListWrapper>
				<p>{`There was an error: ${error}`}</p>
			</AccountantListWrapper>
		);
	}

	return (
		<>
			<AccountantListWrapper>
				{data.pages.map((page) => {
					return page.results.map((accountant) => {
						return <AccountantCard key={accountant.login.uuid} {...accountant} />;
					});
				})}
			</AccountantListWrapper>
			<StyledButton onClick={() => fetchNextPage()}>Pobierz</StyledButton>
		</>
	);
}

export { AccountantList };
