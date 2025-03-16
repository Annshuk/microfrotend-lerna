import {  Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Inner } from "./Inner";

const App = () => {
  return <>
  <h3>this is Sample</h3>
  <Routes>
    <Route path="/*" element={<Dashboard/>}/>
    <Route  path="/inner/" element={<Inner/>}/>
    <Route path="/inner/*" element={<Navigate to='/app4'/>} />
    
  </Routes>
  </>
}

export default App;
