import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "./App.css";

import {RemoteApp} from './RemoteApp'

const  App = () => (
    <div className="App"> 
      <h1>Root Application</h1>
      <RemoteApp name='app3' url='http://localhost:3003/remoteEntry.js' module="App"/>
      <BrowserRouter>
      <Routes>
        <Route path="/app2" element={<RemoteApp name='app2'  url="http://localhost:3002/remoteEntry.js"  module="App" />}/>
      </Routes>
      <Outlet/>
      </BrowserRouter>
    </div>)

export default App;
