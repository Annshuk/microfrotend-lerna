import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "./App.css";

import {RootRouter} from './RootRouter'
import {RemoteApp} from './RemoteApp'

const  App = () => {
  return (
    <div className="App"> 
      <h1>Root Application</h1>
      <RootRouter>
      <RemoteApp name='app3' url='http://localhost:3003/remoteEntry.js' module="App"/>
      <Routes>
        <Route path="/app2" element={<RemoteApp name='app2'  url="http://localhost:3002/remoteEntry.js"  module="App" />}/>
      </Routes>
      </RootRouter>
    </div>)
  }

export default App;
