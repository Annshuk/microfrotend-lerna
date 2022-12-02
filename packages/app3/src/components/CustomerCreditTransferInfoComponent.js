import React, { useState, useRef } from 'react';



import { POST_URL } from '../Constants.js';
import { API_HEADERS } from '../Constants.js';
import { REQUEST_BODY } from '../Constants.js';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import axios from 'axios';


import PaymentInitiatorComponent from './PaymentInitiatorComponent';
import PaymentInformationComponent from './PaymentInformationComponent';


async function postPaymentData() {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return data
}

const queryClient = new QueryClient();

const CustomerCreditTransferInfoComponent = () => {

	const childStateRef = useRef();
	const getChildState = () => {
		const childState = childStateRef.current.getData();
		console.log("The Child State is ", childState);

		postPaymentDataUsingFetchApi();

	};

	const postPaymentDataUsingFetchApi = (headers, requestPayload) => {

		console.log(REQUEST_BODY);

		fetch(POST_URL, {
			method: 'post',
			headers: API_HEADERS,
			body: REQUEST_BODY
		});



		//fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
		//  .then(response => response.json())
		//  .then(data => console.log(data));

		/* axios.post(POST_URL, REQUEST_BODY, API_HEADERS)
			.then((res) => {
			  console.log("RESPONSE RECEIVED: ", res);
			})
			.catch((err) => {
			  console.log("AXIOS ERROR: ", err);
			});*/

	};

	/*
	const testUseQuery = () => {
		
		 const { isLoading, error, data } = useQuery('repoData', postPaymentData  ); 
		 if (isLoading) return 'Loading...'; 
		 if (error) return 'An error has occurred: ' + error.message;
		 
		 console.log("Server Data", data);
		
	}; */


	return (

		<QueryClientProvider client={ queryClient }>

			<div className="p-2 bg-light border">
				<div className="container">
					<div className="p-2"><b>Customer Credit Transfer Details</b></div>
					<div className="p-3">
						<form>
							<PaymentInitiatorComponent ref={ childStateRef } />
							<PaymentInformationComponent />
							<button type="button" className="btn btn-primary" onClick={ getChildState }>Submit</button>
						</form>
					</div>

				</div>
			</div>
		</QueryClientProvider>

	);
};

export default CustomerCreditTransferInfoComponent;