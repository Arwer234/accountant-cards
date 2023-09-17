import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppWrapper } from './App.styles';
import { AccountantList } from './components/AccountantList/AccountantList';

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<AppWrapper>
			<AccountantList />
		</AppWrapper>
	</QueryClientProvider>
);

export { App, queryClient };
