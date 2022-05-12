import React from "react";
import "./App.css";
//@ts-expect-error
import Button from "app3/Button";
import styled from "styled-components";

import Button2 from "./Button2";

function App() {
  return (
    <div className="App"> 
      This is app1
      <React.Suspense fallback="loading">
        <Button />
      </React.Suspense>
   <Button2/>
    </div>
  );
}

const StyledButton = styled(Button)`
  color: blue;
`;

export default App;
