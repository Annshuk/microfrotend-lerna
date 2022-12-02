import {useQuery} from 'react-query';
import axios from 'axios';

async function fetchPosts(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts') ;   
    return data
}

function RestClientService() {
	
   const { isLoading, error, data } = useQuery('repoData', fetchPosts  );
 
   if (isLoading) return 'Loading...';
 
   if (error) return 'An error has occurred: ' + error.message;
	
	
  return (<div />);
}

export default RestClientService;
