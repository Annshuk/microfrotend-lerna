

import { Container } from 'reactstrap';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';

import { EditPayment } from '../pages/EditPayment';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0
		},
	},
})

const App = () => {
	return (
		<QueryClientProvider client={ queryClient }>
			<RecoilRoot>
				<Container>
					<EditPayment />
				</Container>
			</RecoilRoot>

		</QueryClientProvider>
	);
}

export default App;
