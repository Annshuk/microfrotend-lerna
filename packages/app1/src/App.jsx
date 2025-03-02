import { Route, Routes } from "react-router-dom";
import { Flex } from 'rebass'

import "./App.css";

import {RootRouter} from './RootRouter'
import {RemoteApp} from './RemoteApp'

import { Layout } from "./components/Layout/Layout";
import { Aside } from "./components/Aside/Aside";
import { Main } from './components/Main/Main'

const  App = () => {
  return (
    <Layout className="App"> 
      <h1>Root Application</h1>

      <Flex justifyDirection="space-between">
      <RootRouter>
        <Aside/>
        <Main as="main">
        <Routes>
          <Route path="/app2" element={<RemoteApp name='app2'  url="http://localhost:3002/remoteEntry.js"  module="App" />}/>
        </Routes>
        </Main>
        </RootRouter>
      </Flex>
    </Layout>)
  }

export default App;
