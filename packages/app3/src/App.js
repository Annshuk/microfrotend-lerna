

import { Container } from 'reactstrap';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import './Payment.css';

import { EditPayment } from './pages/EditPayment';

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
			<Container>
				<EditPayment />
			</Container>
		</QueryClientProvider>
	);
}

export default App;
