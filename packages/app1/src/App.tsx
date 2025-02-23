import {Suspense} from "react";
import "./App.css";
//@ts-expect-error
import Button from "app3/Button";

import Button2 from "./Button2";  

function App() {  
  return (
    <div className="App"> 
      This is app1
      <Suspense fallback="loading">
        <Button />
      </Suspense>
   <Button2/>
    </div>
  );
}

export default App;
