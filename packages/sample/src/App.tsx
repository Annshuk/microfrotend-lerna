import { useEffect, useState } from "react";



function App() {
  const  [state, setState] = useState({name:''})


  useEffect(()=> {setState({name: 'Set in useEffet'})}, [])

  return <>Hello from Sample, a another sample component {state.name}</>;
}

export default App;
