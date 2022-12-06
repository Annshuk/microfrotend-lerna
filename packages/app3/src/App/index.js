import { Container } from 'reactstrap';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';

import { EditPayment } from '../pages/EditPayment';
import { ViewAndConfirmPayment } from '../pages/ViewAndConfirmPayment';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EditPayment/>,
  }, 
  {
    path: "view-and-confirm",
    element: <ViewAndConfirmPayment/>,
  },
]);


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
					<RouterProvider router={router} />
				</Container>
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default App;
